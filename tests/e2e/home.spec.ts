import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const SECTION_IDS = [
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
  'contact',
];

test.describe('home page', () => {
  test('renders the hero and every linked section', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Power Engineering/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'One ecosystem for industrial water.',
    );
    for (const id of SECTION_IDS) {
      await expect(page.locator(`section#${id}`), `section #${id}`).toHaveCount(1);
    }
  });

  test('every in-page link has a target', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page
      .locator('a[href^="#"], a[href^="/#"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute('href') ?? ''));
    for (const href of new Set(hrefs)) {
      const id = href.split('#')[1];
      await expect(page.locator(`[id="${id}"]`), href).toHaveCount(1);
    }
  });

  test('ships no client JavaScript', async ({ page }) => {
    const scripts: string[] = [];
    page.on('request', (req) => {
      if (req.resourceType() === 'script') scripts.push(req.url());
    });
    await page.goto('/');
    expect(await page.locator('script').count()).toBe(0);
    expect(scripts).toEqual([]);
  });

  test('phone numbers are tel: links in 801-532-6972 format', async ({ page }) => {
    await page.goto('/');
    const phones = page.locator('a[href="tel:+18015326972"]');
    expect(await phones.count()).toBeGreaterThanOrEqual(3);
    for (const text of await phones.allTextContents()) expect(text.trim()).toBe('801-532-6972');
  });

  test('every image has alt text', async ({ page }) => {
    await page.goto('/');
    expect(await page.locator('img:not([alt])').count()).toBe(0);
  });

  test('keeps the Wikimedia photo credits', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.credits a[href*="commons.wikimedia.org"]')).toHaveCount(9);
  });

  test('skip link moves focus to main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main#main')).toBeFocused();
  });

  test('no horizontal scroll at 360px', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('has no axe violations (WCAG 2.2 A/AA)', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const summary = results.violations.map(
      (v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`,
    );
    expect(summary).toEqual([]);
  });
});

test('unknown URLs get the 404 page', async ({ page }) => {
  const response = await page.goto('/no-such-page/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
});

test('robots.txt and sitemap are published', async ({ request }) => {
  expect((await request.get('/robots.txt')).ok()).toBe(true);
  expect((await request.get('/sitemap-index.xml')).ok()).toBe(true);
});

test('founding year is 1945 and the banner reads 1945–2025', async ({ page }) => {
  for (const path of ['/', '/products/', '/404.html']) {
    await page.goto(path);
    await expect(page.locator('.utility'), path).toContainText('1945–2025');
    await expect(page.locator('body'), path).not.toContainText('1946');
  }
  await page.goto('/');
  await expect(page.locator('.about .yr')).toHaveText('1945');
  await expect(page.locator('.proof')).toContainText('Continuous operation since 1945');
});
