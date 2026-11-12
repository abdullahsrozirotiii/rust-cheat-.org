import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { astroSlugRedirects, sitemapShouldIncludePage } from './src/config/urlRedirects.mjs';

export default defineConfig({
  site: 'https://rust-cheat.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/rust-cheats/',
    '/cheats/lite/': '/products/rust-cheats/',
    '/cheats/pro/': '/products/rust-cheats/',
    '/cheats/elite/': '/products/rust-cheats/elite/',
    '/cheats/compare/': '/blog/rust-lite-vs-pro/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/rust-cheats/',
    '/products/dota-2-cheats/account-recovery/': '/products/rust-cheats/rust-ugc/',
    ...astroSlugRedirects(),
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        sitemapShouldIncludePage(page),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
