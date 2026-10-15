import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sbq-center-website.pages.dev',
  integrations: [sitemap()],
  // Use static output for a fully static site (recommended for GitHub Pages)
  output: 'static',
});
