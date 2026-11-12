/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Rust Cheats – ESP, Aimbot & No Recoil | Rust Cheat',
    description:
      'Undetected Rust cheats for Steam PC—player ESP, aimbot, no recoil, radar, and loot ESP for Facepunch official. Updated every patch at rust-cheat.org.',
  },
  '/products/rust-cheats/': {
    title: 'Buy Rust Cheats | Lite, Pro & Elite Tiers',
    description:
      'Compare and buy Rust cheats: Lite awareness, Pro PvP combat, Elite full suite—plus HWID spoofer, UGC, and skin unlock utilities.',
  },
  '/products/rust-cheats/lite/': {
    title: 'Rust Lite Cheats | ESP, Radar & Loot Awareness',
    description:
      'Rust Lite tier: player ESP, sleeper tags, loot ESP, and radar for official servers—conservative portal presets and EAC patch updates.',
  },
  '/products/rust-cheats/pro/': {
    title: 'Rust Pro Cheats | No Recoil, Aimbot & ESP',
    description:
      'Rust Pro adds no recoil, aimbot, and silent aim to every Lite module—weapon profiles and smoothing for official PvP on Steam PC.',
  },
  '/products/rust-cheats/elite/': {
    title: 'Rust Elite Cheats | Full ESP, Aimbot & Radar',
    description:
      'Rust Elite tier: all Lite and Pro modules, expanded radar, skin unlock utility, and priority EAC updates for Steam PC.',
  },
  '/products/rust-cheats/rust-hwid-spoofer/': {
    title: 'Rust HWID Spoofer | EAC Hardware Ban Recovery',
    description:
      'Rust HWID spoofer workflow for disk and MAC profiles after EAC hardware flags—compatibility scan and portal setup guide.',
  },
  '/products/rust-cheats/rust-ugc/': {
    title: 'Rust UGC | Account Recovery & Ban Appeals',
    description:
      'UGC appeal workspace for Steam and EAC restrictions—structured cases and dispute tools, not guaranteed unban.',
  },
  '/products/rust-cheats/rust-skin-unlock/': {
    title: 'Rust Skin Changer & Local Skin Unlock',
    description:
      'Preview Rust weapon and outfit skins on your client—local cosmetic unlock without changing Steam inventory.',
  },
  '/products/rust-cheats/utilities/': {
    title: 'Rust Cheat Utilities | HWID, UGC & Skins',
    description:
      'Pick the right Rust utility: HWID spoofer after hardware bans, UGC for appeals, or skin unlock for local preview.',
  },
  '/blog/': {
    title: 'Guides – ESP, Aimbot & EAC Patch Notes | Rust Cheat',
    description:
      'Guides covering Rust ESP setup, Lite vs Pro tiers, aimbot tuning, HWID recovery, admin commands, and EAC patch-day checklists at rust-cheat.org.',
  },
  '/forum/': {
    title: 'Rust Cheats Forum | Guide Q&A',
    description:
      'Community Q&A on Rust ESP, tiers, EAC errors, and patch day—summaries linked to Rust Cheat guides.',
  },
  '/faq/': {
    title: 'Rust Cheats FAQ | Tiers, ESP & Checkout | Rust Cheat',
    description:
      'Tiers ESP: FAQ on Rust cheat tiers, ESP and aimbot modules, HWID tools, platform support, and secure checkout at rust-cheat.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Rust Cheat',
    description:
      'Purchase terms, license use, and refund policy for Rust Cheat products sold through rust-cheat.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Rust Cheat',
    description:
      'How rust-cheat.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'Cheats Provider – About Us | Rust Cheat',
    description:
      'Cheats Provider: Rust Cheat publishes Rust cheat tiers, utilities, setup guides, and status notes for Steam PC players.',
  },
  '/support/': {
    title: 'Rust Cheats Support | Rust Cheat',
    description:
      'Loader setup, HWID help, and checkout questions for Rust Lite, Pro, Elite, and utilities—forum and FAQ links.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  const normalized = normalizeSeoPath(pathname);
  return PAGE_SEO[normalized] ?? PAGE_SEO[normalized.replace('/products/dota-2-cheats/', '/products/rust-cheats/')];
}
