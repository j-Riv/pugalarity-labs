// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// `site` is the custom domain. Do not set `base`: on a custom domain
// GitHub Pages serves from the root, and a leftover `base` breaks routing.
// https://astro.build/config
export default defineConfig({
  site: 'https://pugalaritylabs.com',
  // GitHub Pages can't send headers, so Astro writes a CSP <meta> tag per page,
  // hashing the scripts and styles it emits. Inline style="" attributes (the
  // bar chart widths) aren't hashed, so they get an explicit attribute-only allowance.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ],
      styleDirective: {
        resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }]
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
