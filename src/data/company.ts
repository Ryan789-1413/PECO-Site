// Company contact facts used across the site. Sources: docs/PROJECT_CONTEXT.md §2.

/** Display format approved by Ryan (Oct 14, 2026). */
export const PHONE_DISPLAY = '801-532-6972';
/** E.164 form for tel: links. */
export const PHONE_TEL = 'tel:+18015326972';

/** Where customers request product data sheets and SDS (Ryan, Oct 16, 2026). */
export const ORDERS_EMAIL = 'orders@pecowater.com';

/** mailto: link to ORDERS_EMAIL with a prefilled subject. */
export const ordersMailto = (subject: string) =>
  `mailto:${ORDERS_EMAIL}?subject=${encodeURIComponent(subject)}`;
