/**
 * SEO slug migrations — single source for Astro + Node serve 301s.
 * Keys and values use trailing slashes (site trailingSlash: 'always').
 */

/** @type {Record<string, string>} old blog slug → new blog slug */
export const BLOG_SLUG_RENAMES = {
  'how-to-buy-rust-cheats-2026': 'how-to-buy-rust-cheats',
  'rust-hwid-spoofer-after-ban': 'rust-hwid-spoofer',
  'rust-cheats-features-guide': 'rust-cheats-features',
  'rust-elite-tier-guide': 'rust-elite-cheats',
  'rust-console-commands-tips': 'rust-console-commands',
  'how-to-use-rust-admin-commands': 'rust-admin-commands-how-to',
  'rust-recoil-silent-aim-guide': 'rust-no-recoil-silent-aim',
  'eac-unable-to-verify-rust': 'rust-eac-unable-to-verify',
  'rust-external-cheat-guide': 'rust-external-cheats',
};

/** @type {Record<string, string>} old product slug → new product slug (under /products/rust-cheats/) */
export const PRODUCT_SLUG_RENAMES = {
  'unlock-all': 'rust-skin-unlock',
  'hwid-spoofer': 'rust-hwid-spoofer',
  ugc: 'rust-ugc',
};

/** @type {Record<string, string>} old forum slug → new forum slug */
export const FORUM_SLUG_RENAMES = {
  'can-admin-commands-be-used-on-official': 'admin-commands-on-official',
  'how-to-enable-the-rust-f1-console': 'rust-f1-console-enable',
  'practice-rust-visibility-with-client-cvars': 'rust-client-cvars',
  'what-to-check-after-a-rust-patch': 'rust-patch-day-checks',
  'rust-lite-or-pro-combat-modules': 'rust-lite-pro-combat',
  'how-to-learn-f1-admin-vs-chat-on-servers': 'rust-f1-admin-vs-chat',
  'what-does-rust-esp-include': 'rust-esp-included',
  'how-to-set-up-rust-esp-overlay': 'rust-esp-overlay-setup',
  'what-radar-settings-are-comfortable': 'rust-radar-settings',
  'how-to-tune-recoil-and-silent-aim': 'rust-recoil-silent-aim',
  'how-to-practice-aimbot-pvp-settings': 'rust-aimbot-pvp-practice',
  'what-is-in-the-elite-tier': 'rust-elite-tier-modules',
  'how-do-lite-and-pro-differ': 'rust-lite-vs-pro-diff',
  'what-to-know-about-skin-unlock': 'rust-skin-unlock-questions',
  'what-to-do-if-eac-cannot-verify': 'rust-eac-cannot-verify',
  'how-does-an-external-loader-work': 'rust-external-loader',
  'how-to-check-stream-proof-capture': 'rust-stream-proof-test',
  'what-to-do-after-hwid-change': 'rust-hwid-after-change',
  'what-to-check-before-installing-tools': 'before-installing-rust-cheats',
  'how-to-choose-rust-product-tier': 'choose-rust-cheat-tier',
};

function blogPath(slug) {
  return `/blog/${slug}/`;
}

function productPath(slug) {
  return `/products/rust-cheats/${slug}/`;
}

function forumPath(slug) {
  return `/forum/${slug}/`;
}

/** @returns {[string, string][]} */
export function buildSlugRedirectPairs() {
  /** @type {[string, string][]} */
  const pairs = [];

  for (const [from, to] of Object.entries(BLOG_SLUG_RENAMES)) {
    pairs.push([blogPath(from), blogPath(to)]);
  }
  for (const [from, to] of Object.entries(PRODUCT_SLUG_RENAMES)) {
    pairs.push([productPath(from), productPath(to)]);
  }
  for (const [from, to] of Object.entries(FORUM_SLUG_RENAMES)) {
    pairs.push([forumPath(from), forumPath(to)]);
  }

  return pairs;
}

/** @returns {Record<string, string>} for astro.config redirects */
export function astroSlugRedirects() {
  /** @type {Record<string, string>} */
  const out = {};
  for (const [from, to] of buildSlugRedirectPairs()) {
    out[from] = to;
  }
  return out;
}

/** @returns {Map<string, string>} for scripts/redirects.mjs */
export function slugRedirectMap() {
  const map = new Map();
  for (const [from, to] of buildSlugRedirectPairs()) {
    map.set(from, to);
    map.set(from.replace(/\/$/, ''), to);
  }
  return map;
}

/** Pathnames that only exist to 301 — omit from sitemap. */
export function legacyRedirectPathnames() {
  return buildSlugRedirectPairs().map(([from]) => from);
}

export function isLegacyRedirectPath(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return legacyRedirectPathnames().includes(normalized);
}

export function sitemapShouldIncludePage(url) {
  try {
    return !isLegacyRedirectPath(new URL(url).pathname);
  } catch {
    return true;
  }
}
