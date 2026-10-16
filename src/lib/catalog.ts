// Helpers for the product catalog: ordering, tree navigation, URLs and breadcrumbs.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'categories'>;
export type Product = CollectionEntry<'products'>;
export type Crumb = { label: string; href?: string };

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

export async function loadCatalog() {
  const categories = (await getCollection('categories')).sort(byOrder);
  const products = (await getCollection('products')).sort(byOrder);
  const byId = new Map(categories.map((c) => [c.id, c]));

  const childrenOf = (id: string | undefined) => categories.filter((c) => c.data.parent?.id === id);
  const productsIn = (id: string) => products.filter((p) => p.data.category.id === id);
  /** Products in a category and all of its descendants. */
  const countUnder = (id: string): number =>
    productsIn(id).length + childrenOf(id).reduce((n, c) => n + countUnder(c.id), 0);
  const lineage = (id: string): Category[] => {
    const chain: Category[] = [];
    for (let c = byId.get(id); c; c = c.data.parent ? byId.get(c.data.parent.id) : undefined) {
      chain.unshift(c);
    }
    return chain;
  };

  /**
   * Chemistry series products are listed on their series page only, with no product page
   * of their own (Ryan, Oct 16, 2026). Equipment products keep their pages.
   */
  const hasPage = (p: Product) => byId.get(p.data.category.id)?.data.group !== 'chemistry';

  return { categories, products, byId, childrenOf, productsIn, countUnder, lineage, hasPage };
}

export const categoryHref = (id: string) => `/products/${id}/`;
export const productHref = (p: Product) => `/products/${p.data.category.id}/${p.id}/`;
export const labelOf = (c: Category) => c.data.label ?? c.data.title;

export function crumbsFor(lineage: Category[], current?: string): Crumb[] {
  const crumbs: Crumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
  ];
  lineage.forEach((c, i) => {
    const isLast = i === lineage.length - 1 && !current;
    crumbs.push({ label: labelOf(c), href: isLast ? undefined : categoryHref(c.id) });
  });
  if (current) crumbs.push({ label: current });
  return crumbs;
}
