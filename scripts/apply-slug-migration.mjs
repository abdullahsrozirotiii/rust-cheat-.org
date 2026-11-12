/**
 * Apply approved slug renames across data files (run once after editing urlRedirects.mjs).
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  BLOG_SLUG_RENAMES,
  PRODUCT_SLUG_RENAMES,
  FORUM_SLUG_RENAMES,
} from '../src/config/urlRedirects.mjs';

const root = path.resolve(import.meta.dirname, '..');

const files = [
  'src/data/blog/posts.ts',
  'src/data/blog/blogSeo.ts',
  'src/data/products.ts',
  'src/data/forum.ts',
  'src/data/faq.ts',
  'src/i18n/en.ts',
  'src/config/pageSeo.ts',
  'src/pages/products/rust-cheats/utilities.astro',
  'src/components/BlogSidebar.astro',
];

function replaceBlogUrls(text) {
  let out = text;
  for (const [from, to] of Object.entries(BLOG_SLUG_RENAMES)) {
    out = out.replaceAll(`slug: "${from}"`, `slug: "${to}"`);
    out = out.replaceAll(`slug: '${from}'`, `slug: '${to}'`);
    out = out.replaceAll(`'${from}':`, `'${to}':`);
    out = out.replaceAll(`/blog/${from}/`, `/blog/${to}/`);
  }
  return out;
}

function replaceProductUrls(text) {
  let out = text;
  for (const [from, to] of Object.entries(PRODUCT_SLUG_RENAMES)) {
    out = out.replaceAll(`'${from}':`, `'${to}':`);
    out = out.replaceAll(`"${from}":`, `"${to}":`);
    out = out.replaceAll(`/products/rust-cheats/${from}/`, `/products/rust-cheats/${to}/`);
    out = out.replaceAll(`productPath('${from}')`, `productPath('${to}')`);
    out = out.replaceAll(`scopes: ['${from}']`, `scopes: ['${to}']`);
    if (relIncludesProductHref(rel)) {
      out = out.replaceAll(`${from}/`, `${to}/`);
    }
  }
  return out;
}

function relIncludesProductHref(rel) {
  return rel.includes('en.ts') || rel.includes('utilities.astro');
}

function replaceForumSlugs(text) {
  let out = text;
  for (const [from, to] of Object.entries(FORUM_SLUG_RENAMES)) {
    out = out.replaceAll(`slug: '${from}'`, `slug: '${to}'`);
    out = out.replaceAll(`/forum/${from}/`, `/forum/${to}/`);
  }
  return out;
}

for (const rel of files) {
  const filePath = path.join(root, rel);
  if (!fs.existsSync(filePath)) continue;
  let text = fs.readFileSync(filePath, 'utf8');
  text = replaceBlogUrls(text);
  text = replaceForumSlugs(text);
  let out = text;
  for (const [from, to] of Object.entries(PRODUCT_SLUG_RENAMES)) {
    out = out.replaceAll(`'${from}':`, `'${to}':`);
    out = out.replaceAll(`"${from}":`, `"${to}":`);
    out = out.replaceAll(`/products/rust-cheats/${from}/`, `/products/rust-cheats/${to}/`);
    out = out.replaceAll(`productPath('${from}')`, `productPath('${to}')`);
    out = out.replaceAll(`scopes: ['${from}']`, `scopes: ['${to}']`);
    if (rel.includes('en.ts') || rel.includes('utilities.astro') || rel.includes('BlogSidebar')) {
      out = out.replaceAll(`${from}/`, `${to}/`);
    }
  }
  fs.writeFileSync(filePath, out);
}

console.log('Slug migration applied to', files.length, 'files');
