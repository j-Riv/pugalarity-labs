// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// `site` is the custom domain. Do not set `base`: on a custom domain
// GitHub Pages serves from the root, and a leftover `base` breaks routing.
// https://astro.build/config
export default defineConfig({
  site: 'https://pugalaritylabs.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
