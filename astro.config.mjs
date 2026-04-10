// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bastiondefensa.com', // CAMBIA ESTO por tu dominio real
  integrations: [sitemap()],
});