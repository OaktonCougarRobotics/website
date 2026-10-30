import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Multi-page site: Vite only builds index.html unless every page is listed.
const pages = Object.fromEntries(
  readdirSync(__dirname)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), resolve(__dirname, f)]),
);

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: { input: pages },
  },
});
