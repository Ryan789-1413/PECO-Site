import { test, expect } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';

// Cloudflare applies public/_redirects only on its own servers, so these check the file itself.
const rules = readFileSync('public/_redirects', 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/));

/** Redirect targets whose pages arrive in Phase 3. Remove each one as its page is built. */
const PENDING_PAGES = new Set(['/about/', '/contact/']);

test('public/_redirects rules are well formed', () => {
  expect(rules.length).toBeGreaterThan(0);
  expect(rules.length).toBeLessThanOrEqual(2000); // Cloudflare's static rule limit

  const sources = new Set<string>();
  for (const [from, to, status, ...rest] of rules) {
    expect(rest, `extra fields in "${from}"`).toEqual([]);
    expect(from, 'source').toMatch(/^\//);
    expect(to, `target of ${from}`).toMatch(/^\/.*\/$/);
    expect(status, `status of ${from}`).toBe('301');
    expect(from, 'redirect to itself').not.toBe(to);
    expect(sources.has(from), `duplicate source ${from}`).toBe(false);
    sources.add(from);
  }
  expect(sources.has('/all-products/')).toBe(true);
});

test('every redirect target is a built page', () => {
  const missing = [...new Set(rules.map(([, to]) => to))].filter(
    (to) => !PENDING_PAGES.has(to) && !existsSync(`dist${to}index.html`),
  );
  expect(missing).toEqual([]);
});

test('old product bulletin pages land on the chemistry page', () => {
  const targets = new Map(rules.map(([from, to]) => [from, to]));
  const slugs = [
    'cooling-treatment',
    ...[2, 3, 4, 5, 6, 7, 8].map((n) => `cooling-treatment-${n}`),
    'a-multi-duty-cooling-water-treatment',
    ...[2, 3, 4, 5].map((n) => `a-multi-duty-cooling-water-treatment-${n}`),
  ];
  for (const slug of slugs) {
    for (const from of [`/treatments/${slug}/`, `/treatments/${slug}`]) {
      expect(targets.get(from), from).toBe('/products/chemistry/');
    }
  }
  expect(targets.get('/treatments/')).toBe('/products/chemistry/');
});
