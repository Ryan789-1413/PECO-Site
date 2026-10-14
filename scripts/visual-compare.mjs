// Visual parity check: prototype/index.html vs the built home page.
// Usage: npm run build && npm run visual
// Writes screenshots/phase-1/ (gitignored): side-by-side composites, diff images and report.md.
//
// For a like-for-like comparison, the build is shot with the draft-only CONFIRM markers hidden.
// A separate full-page shot (site-drafts-1280.jpg) shows the markers.
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { spawn, spawnSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = fileURLToPath(new URL('../screenshots/phase-1/', import.meta.url));
const PORT = 4329;
const SITE = `http://localhost:${PORT}/`;
const PROTOTYPE = pathToFileURL(`${root}prototype/index.html`).href;
const WIDTHS = [1280, 390];

const HIDE_MARKERS =
  '.unconfirmed{outline:none!important}.unconfirmed::after{display:none!important}';

// Matching regions: utility bar, header, the 14 sections in <main>, footer.
const SECTION_NAMES = [
  'hero',
  'proof-strip',
  'ecosystem',
  'systems',
  'equipment',
  'ridgewater',
  'service',
  'construction',
  'training',
  'industries',
  'memberships',
  'about',
  'working-with-us',
  'contact',
];
const REGIONS = [
  { name: 'utility-bar', proto: '.utility', site: '.utility' },
  { name: 'header', proto: 'header.site-header', site: 'header.site-header' },
  ...SECTION_NAMES.map((name, i) => ({
    name,
    proto: `main > section >> nth=${i}`,
    site: `main > section >> nth=${i}`,
  })),
  { name: 'footer', proto: 'footer', site: 'footer' },
];

async function waitForServer(url, ms = 60_000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server did not start at ${url}`);
}

async function settle(page) {
  // Load lazy images and fonts so both pages are fully painted.
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = 'eager'));
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? null : new Promise((r) => img.addEventListener('load', r, { once: true })),
      ),
    );
    await document.fonts.ready;
  });
  await page.waitForTimeout(300);
}

function diff(aBuf, bBuf) {
  const a = PNG.sync.read(aBuf);
  const b = PNG.sync.read(bBuf);
  const width = Math.max(a.width, b.width);
  const height = Math.max(a.height, b.height);
  const pad = (img) => {
    const out = new PNG({ width, height });
    out.data.fill(255);
    PNG.bitblt(img, out, 0, 0, img.width, img.height, 0, 0);
    return out;
  };
  const pa = pad(a);
  const pb = pad(b);
  const out = new PNG({ width, height });
  const changed = pixelmatch(pa.data, pb.data, out.data, width, height, { threshold: 0.15 });
  return {
    png: PNG.sync.write(out),
    percent: (100 * changed) / (width * height),
    sizes: [`${a.width}×${a.height}`, `${b.width}×${b.height}`],
  };
}

// Lay out images side by side in the browser and export one JPEG.
async function composite(browser, panels, file, maxWidth) {
  const page = await browser.newPage({ viewport: { width: 400, height: 300 } });
  const cells = panels
    .map(
      (p) =>
        `<figure><figcaption>${p.label}</figcaption><img src="data:image/png;base64,${p.buf.toString('base64')}"></figure>`,
    )
    .join('');
  await page.setContent(
    `<style>body{margin:0;background:#fff;font:600 14px system-ui}main{display:flex;gap:16px;padding:16px;align-items:flex-start;width:max-content}
     figure{margin:0}figcaption{padding:0 0 8px}img{display:block;max-width:${maxWidth}px;outline:1px solid #ccd}</style><main>${cells}</main>`,
  );
  await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode())));
  await page.locator('main').screenshot({ path: file, type: 'jpeg', quality: 82 });
  await page.close();
}

await mkdir(outDir, { recursive: true });
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: root,
  shell: true,
  stdio: 'ignore',
});

const rows = [];
let browser;
try {
  await waitForServer(SITE);
  browser = await chromium.launch();

  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      colorScheme: 'light',
      deviceScaleFactor: 1,
    });
    const proto = await context.newPage();
    const site = await context.newPage();
    await proto.goto(PROTOTYPE, { waitUntil: 'networkidle' });
    await site.goto(SITE, { waitUntil: 'networkidle' });

    if (width === 1280) {
      await settle(site);
      await site.screenshot({
        path: `${outDir}site-drafts-1280.jpg`,
        fullPage: true,
        type: 'jpeg',
        quality: 80,
      });
      // Close-ups of the CONFIRM markers as they appear in drafts (sticky header out of the way).
      const unstick = await site.addStyleTag({
        content: '.site-header{position:static!important}',
      });
      for (const [selector, name] of [
        ['#memberships', 'memberships'],
        ['#equipment', 'equipment'],
        ['#contact .locs', 'contact'],
      ]) {
        await site.locator(selector).screenshot({ path: `${outDir}drafts-${name}-1280.png` });
      }
      await unstick.evaluate((el) => el.remove());
    }
    await site.addStyleTag({ content: HIDE_MARKERS });
    await settle(proto);
    await settle(site);

    const fullProto = await proto.screenshot({ fullPage: true });
    const fullSite = await site.screenshot({ fullPage: true });
    await composite(
      browser,
      [
        { label: `Prototype · ${width}px`, buf: fullProto },
        { label: `Astro build · ${width}px`, buf: fullSite },
      ],
      `${outDir}full-${width}.jpg`,
      width === 1280 ? 640 : 390,
    );

    for (const region of REGIONS) {
      const a = await proto.locator(region.proto).first().screenshot();
      const b = await site.locator(region.site).first().screenshot();
      const d = diff(a, b);
      const file = `${width}-${String(REGIONS.indexOf(region)).padStart(2, '0')}-${region.name}`;
      await composite(
        browser,
        [
          { label: 'Prototype', buf: a },
          { label: 'Astro build', buf: b },
          { label: `Diff (${d.percent.toFixed(2)}% pixels)`, buf: d.png },
        ],
        `${outDir}${file}.jpg`,
        width === 1280 ? 800 : 390,
      );
      rows.push({ width, region: region.name, ...d, file });
    }
    await context.close();
  }
} finally {
  await browser?.close();
  // Stop the preview server before exiting: Astro allows only one preview at a time, so a
  // leftover one blocks `npm run test:e2e`. On Windows, kill the whole npx process tree.
  if (process.platform === 'win32' && server.pid) {
    spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  } else {
    server.kill();
  }
}

const table = [
  '| Width | Region | Prototype size | Build size | Pixels different |',
  '|---|---|---|---|---|',
  ...rows.map(
    (r) =>
      `| ${r.width} | ${r.region} | ${r.sizes[0]} | ${r.sizes[1]} | ${r.percent.toFixed(2)}% |`,
  ),
].join('\n');
await writeFile(`${outDir}report.md`, `# Visual parity: prototype vs build\n\n${table}\n`);
console.log(table);
