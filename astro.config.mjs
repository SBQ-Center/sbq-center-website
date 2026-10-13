import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sbq-center-website.pages.dev',
  integrations: [sitemap()],
  output: 'static'
});
