// Full-page screenshots of built pages at several widths, for PR review.
// Usage: npm run build && node scripts/page-screenshots.mjs <out-dir-name> <path> [<path> ...]
// Writes screenshots/<out-dir-name>/ (gitignored). Also reports any horizontal overflow and,
// at each width, whether the header nav fits on one line.
import { chromium } from '@playwright/test';
import { spawn, spawnSync } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const [outName, ...paths] = process.argv.slice(2);
if (!outName || paths.length === 0) {
  console.error('Usage: node scripts/page-screenshots.mjs <out-dir-name> <path> [<path> ...]');
  process.exit(1);
}

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = fileURLToPath(new URL(`../screenshots/${outName}/`, import.meta.url));
const PORT = 4331;
const WIDTHS = [1280, 1000, 390];

await mkdir(outDir, { recursive: true });
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: root,
  shell: true,
  stdio: 'ignore',
});

let browser;
try {
  for (let i = 0; i < 200; i++) {
    try {
      if ((await fetch(`http://localhost:${PORT}/`)).ok) break;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  browser = await chromium.launch();
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: 'light' });
    for (const path of paths) {
      await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const info = await page.evaluate(() => {
        const nav = document.querySelector('.site-header .nav');
        const links = nav ? [...nav.querySelectorAll('a')] : [];
        const tops = new Set(links.map((a) => Math.round(a.getBoundingClientRect().top)));
        return {
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          navVisible: nav ? getComputedStyle(nav).display !== 'none' : false,
          navLines: tops.size,
        };
      });
      const name = `${width}${path.replaceAll('/', '_').replace(/_$/, '') || '_home'}.png`;
      await page.screenshot({ path: `${outDir}${name}`, fullPage: true });
      console.log(
        `${width}px ${path}  overflow=${info.overflow}px  nav=${info.navVisible ? `${info.navLines} line(s)` : 'menu'}`,
      );
    }
    await page.close();
  }
} finally {
  await browser?.close();
  if (process.platform === 'win32' && server.pid) {
    spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  } else {
    server.kill();
  }
}
