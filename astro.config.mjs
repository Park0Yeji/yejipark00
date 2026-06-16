// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build — static site, deployed to GitHub Pages on the custom domain.
export default defineConfig({
  site: 'https://yeji-park.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  build: {
    format: 'directory',
  },
});
