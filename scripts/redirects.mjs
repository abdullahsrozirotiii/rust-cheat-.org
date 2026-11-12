/** Static path redirects (301). Keys are pathname without query/hash. */
import { slugRedirectMap } from '../src/config/urlRedirects.mjs';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/rust-cheats/'],
  ['/cheats/', '/products/rust-cheats/'],
  ['/cheats/lite', '/products/rust-cheats/'],
  ['/cheats/lite/', '/products/rust-cheats/'],
  ['/cheats/pro', '/products/rust-cheats/'],
  ['/cheats/pro/', '/products/rust-cheats/'],
  ['/cheats/elite', '/products/rust-cheats/elite/'],
  ['/cheats/elite/', '/products/rust-cheats/elite/'],
  ['/cheats/compare', '/blog/rust-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/rust-lite-vs-pro/'],
  ['/products/dota-2-cheats', '/products/rust-cheats/'],
  ['/products/dota-2-cheats/', '/products/rust-cheats/'],
  ['/products/dota-2-cheats/utilities', '/products/rust-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/rust-cheats/utilities/'],
  ['/products/dota-2-cheats/account-recovery', '/products/rust-cheats/rust-ugc/'],
  ['/products/dota-2-cheats/account-recovery/', '/products/rust-cheats/rust-ugc/'],
  ['/products/rust-cheats/utilities', '/products/rust-cheats/utilities/'],
  ['/products/rust-cheats', '/products/rust-cheats/'],
  ...slugRedirectMap(),
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
