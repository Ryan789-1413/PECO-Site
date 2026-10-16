// Content collections for the product catalog (Phase 2).
// Facts come from docs/PROJECT_CONTEXT.md §2. Anything still missing goes in `gaps`: each gap
// renders as a visible CONFIRM marker in drafts and makes `npm run check:launch` fail.
import { defineCollection, reference } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const gaps = z
  .array(z.string())
  .default([])
  .describe('Content still needed from PECO. Each item is shown as a draft marker.');

/**
 * Catalog categories. The id is the URL path under /products/, e.g. "pumps/lmi" is
 * /products/pumps/lmi/. Chemistry series are categories with a `series` block.
 */
const categories = defineCollection({
  loader: file('src/content/catalog/categories.yaml'),
  schema: z.object({
    title: z.string(),
    /** Short label for cards and breadcrumbs. Defaults to the title. */
    label: z.string().optional(),
    group: z.enum(['chemistry', 'equipment']),
    parent: reference('categories').optional(),
    order: z.number().int(),
    /** One or two sentences for the category card. */
    summary: z.string(),
    /** Lead paragraph at the top of the category page. */
    intro: z.string(),
    /** Extra points shown under the intro (e.g. "custom orders and manufacturing"). */
    notes: z.array(z.string()).default([]),
    series: z
      .object({
        code: z.string(),
        products: z.string(),
        for: z.string().optional(),
      })
      .optional(),
    seo: z.object({ title: z.string(), description: z.string() }),
    gaps,
  }),
});

const spec = z.object({ label: z.string(), value: z.string() });

const products = defineCollection({
  loader: file('src/content/catalog/products.yaml'),
  schema: z.object({
    name: z.string(),
    category: reference('categories'),
    brand: z.string().optional(),
    order: z.number().int(),
    summary: z.string(),
    /** Longer description paragraphs for the product page. */
    description: z.array(z.string()).default([]),
    specs: z.array(spec).default([]),
    /** Models or variants in the family, e.g. pump series. */
    models: z.array(z.string()).default([]),
    /** What the family includes, e.g. housings, cartridges. */
    includes: z.array(z.string()).default([]),
    /** Optional table, e.g. tank sizes. */
    table: z
      .object({
        caption: z.string(),
        columns: z.array(z.string()),
        rows: z.array(z.array(z.string())),
      })
      .optional(),
    gaps,
  }),
});

export const collections = { categories, products };
