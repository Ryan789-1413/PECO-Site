import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Cloudflare applies public/_redirects only on its own servers, so this checks the file itself.
test('public/_redirects rules are well formed', () => {
  const rules = readFileSync('public/_redirects', 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/));

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
