import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  '/products/',
  '/products/chemistry/',
  '/products/pumps/',
  '/products/pumps/walchem/walchem-ehe/',
  '/products/tanks/dual-containment-tanks/',
  '/products/filtration/quantrol-cartridge-filtration/',
];

test.describe('product catalog', () => {
  test('catalog index lists the equipment categories', async ({ page }) => {
    await page.goto('/products/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Chemistry and equipment');
    for (const id of [
      'controllers',
      'pumps',
      'feeders',
      'tanks',
      'valves',
      'monitoring',
      'filtration',
      'pretreatment',
    ]) {
      await expect(page.locator(`a[href="/products/${id}/"]`).first()).toBeVisible();
    }
  });

  test('header links to the catalog', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header a[href="/products/"]').first()).toBeAttached();
  });

  test('breadcrumbs lead back up the tree', async ({ page }) => {
    await page.goto('/products/pumps/walchem/walchem-ehe/');
    const crumbs = page.getByRole('navigation', { name: 'Breadcrumb' });
    await expect(crumbs.getByRole('link', { name: 'Products' })).toHaveAttribute(
      'href',
      '/products/',
    );
    await expect(crumbs.getByRole('link', { name: 'Pumps' })).toHaveAttribute(
      'href',
      '/products/pumps/',
    );
    await expect(crumbs.getByRole('link', { name: 'Walchem' })).toHaveAttribute(
      'href',
      '/products/pumps/walchem/',
    );
    await expect(crumbs.locator('[aria-current="page"]')).toHaveText(
      'Walchem EHE Series metering pumps',
    );
  });

  test('product pages explain how to request data sheets, with no PDF downloads', async ({
    page,
  }) => {
    for (const path of PAGES) {
      await page.goto(path);
      const note = page.getByRole('complementary', { name: 'Product data sheets' }).last();
      await expect(note).toContainText('available on request');
      await expect(note.locator('a[href="tel:+18015326972"]')).toHaveCount(1);
      const email = note.locator('a[href^="mailto:orders@pecowater.com?subject="]');
      await expect(email, path).toHaveText('orders@pecowater.com');
      expect(await page.locator('a[href$=".pdf" i]').count(), path).toBe(0);
    }
    // On a product page the email subject names the product.
    await page.goto('/products/pumps/walchem/walchem-ehe/');
    await expect(page.locator('a[href^="mailto:orders@pecowater.com"]')).toHaveAttribute(
      'href',
      'mailto:orders@pecowater.com?subject=Data%20sheet%20request%3A%20Walchem%20EHE%20Series%20metering%20pumps',
    );
  });

  test('never lists RO re-pressure pumps', async ({ page }) => {
    for (const path of ['/', ...PAGES]) {
      await page.goto(path);
      await expect(page.locator('body'), path).not.toContainText(/re-?pressure/i);
    }
  });

  test('tanks are PECO dual containment tanks, with no manufacturer named', async ({ page }) => {
    for (const path of [
      '/products/',
      '/products/tanks/',
      '/products/tanks/dual-containment-tanks/',
    ]) {
      await page.goto(path);
      await expect(page.locator('body'), path).not.toContainText(/peabody|gemini/i);
    }
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('PECO dual containment tanks');
  });

  test('chemistry is shown as series only, with no series or product pages', async ({
    page,
    request,
  }) => {
    for (const path of ['/products/', '/products/chemistry/']) {
      await page.goto(path);
      const cards = page.locator('article.card.series');
      await expect(cards, path).toHaveCount(8);
      for (const code of ['2000', '3000', '4000', '5000', '7000', '8000', '9000', 'O']) {
        await expect(cards.filter({ hasText: `Series ${code}` }), `${path} ${code}`).toHaveCount(1);
      }
      await expect(cards.first()).toContainText('Steam boiler products');
      expect(await page.locator('a[href*="-series/"]').count(), path).toBe(0);
      await expect(page.locator('main'), path).not.toContainText('PECO 4971');
      const note = page.getByRole('complementary', { name: 'Product data sheets' }).first();
      await expect(note, path).toContainText('Need more information on our chemistry?');
      await expect(note.locator('a[href^="mailto:orders@pecowater.com"]')).toHaveAttribute(
        'href',
        'mailto:orders@pecowater.com?subject=Product%20information%3A%20PECO%20chemistry',
      );
    }
    for (const gone of ['/products/chemistry/4000-series/peco-4990/']) {
      expect((await request.get(gone)).status(), gone).toBe(404);
    }
  });

  test('equipment products still link to their pages', async ({ page }) => {
    await page.goto('/products/pumps/walchem/');
    await expect(page.locator('a[href="/products/pumps/walchem/walchem-ehe/"]')).toBeVisible();
  });

  test('missing content is marked for drafts', async ({ page }) => {
    await page.goto('/products/pretreatment/');
    await expect(page.locator('[data-confirm^="Content needed:"]').first()).toBeVisible();
  });

  test('no horizontal scroll at 360px', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    for (const path of PAGES) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, path).toBeLessThanOrEqual(0);
    }
  });

  for (const path of PAGES) {
    test(`no axe violations on ${path}`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const summary = results.violations.map(
        (v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`,
      );
      expect(summary).toEqual([]);
    });
  }
});
