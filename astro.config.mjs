// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pecowater.com',
  output: 'static',
  // Every page is served as /path/ so Cloudflare Pages never adds a second redirect hop.
  trailingSlash: 'always',
  // Inline all CSS: no render-blocking stylesheet requests before the first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
