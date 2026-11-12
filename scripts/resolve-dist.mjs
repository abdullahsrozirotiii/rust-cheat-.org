import fs from 'node:fs';
import path from 'node:path';

/**
 * Astro static output → `dist/`.
 * If a Cloudflare adapter is present, HTML assets may live under `dist/client/`.
 */
export function resolveDistRoot(cwd = process.cwd()) {
  const dist = path.join(cwd, 'dist');
  const client = path.join(dist, 'client');

  if (fs.existsSync(client)) {
    const clientHasSite =
      fs.existsSync(path.join(client, 'index.html')) ||
      fs.existsSync(path.join(client, 'sitemap-0.xml')) ||
      fs.existsSync(path.join(client, 'sitemap-index.xml'));
    if (clientHasSite) return client;
  }

  return dist;
}
