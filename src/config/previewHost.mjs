/** Cloudflare Pages preview host detection (shared: Pages Functions + local tests). */

export const PREVIEW_ROBOTS_HEADER = 'noindex, nofollow';

const PREVIEW_HOST_SUFFIX = '.pages.dev';
const PRODUCTION_HOSTS = new Set(['rust-cheat.org', 'www.rust-cheat.org']);

/**
 * True for Cloudflare Pages preview / default `*.pages.dev` hosts only.
 * Production custom domain (rust-cheat.org) is never treated as preview.
 */
export function isCloudflarePagesPreviewHost(hostname) {
  if (!hostname || typeof hostname !== 'string') return false;
  const host = hostname.toLowerCase().replace(/:\d+$/, '');
  if (PRODUCTION_HOSTS.has(host)) return false;
  return host === 'pages.dev' || host.endsWith(PREVIEW_HOST_SUFFIX);
}

/**
 * @param {string} hostname
 * @param {HeadersInit} [base]
 * @returns {Headers}
 */
export function previewRobotsHeadersForHost(hostname, base) {
  const headers = new Headers(base);
  if (isCloudflarePagesPreviewHost(hostname)) {
    headers.set('X-Robots-Tag', PREVIEW_ROBOTS_HEADER);
  }
  return headers;
}
