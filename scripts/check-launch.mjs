// Fails if any [CONFIRM] marker (Unconfirmed.astro) is still in the built site.
// Run after `npm run build`. Required to pass before launch (Phase 5).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

const decode = (s) =>
  s
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');

let count = 0;
for await (const file of htmlFiles(dist)) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/data-confirm="([^"]*)"/g)) {
    count++;
    console.log(`${file.slice(dist.length)}: ${decode(match[1])}`);
  }
}

if (count > 0) {
  console.error(`\n${count} unconfirmed item(s) in dist/. Confirm or remove them before launch.`);
  process.exit(1);
}
console.log('No unconfirmed copy in dist/.');
