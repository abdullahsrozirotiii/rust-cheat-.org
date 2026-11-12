/**
 * Feature and compatibility copy sourced from Zadeyo product pages
 * (rust-cheat.org cards route here for detail pages — no prices on-site).
 */
import type { ProductOverview, SystemRequirement } from './products';

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface ZadeyoCatalogEntry {
  sourceUrl: string;
  cardFeatures: string[];
  overview: ProductOverview;
  featureGroups: FeatureGroup[];
  systemRequirements: SystemRequirement[];
  goodToKnow: string;
}

function flattenGroups(groups: FeatureGroup[]): string[] {
  return groups.flatMap((g) => g.items);
}

export function cardMoreCount(entry: ZadeyoCatalogEntry, shown = 4): number {
  const total = flattenGroups(entry.featureGroups).length;
  return Math.max(0, total - shown);
}

export type ZadeyoCatalogKey = 'rustCheats' | 'hwidSpoofer' | 'ugc' | 'skinChanger';

const rustZadeyoRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
  {
    icon: 'reqSettings',
    text: 'HVCI on, Core Isolation on, TPM on, Secure Boot on — per partner build requirements.',
  },
  {
    icon: 'reqCpu',
    text: 'Cloud DMA required for full functionality on supported builds (partner loader).',
  },
  { icon: 'reqWifi', text: 'Stable internet for loader access, updates, and secure checkout.' },
];

export const ZADEYO_CATALOG: Record<ZadeyoCatalogKey, ZadeyoCatalogEntry> = {
  rustCheats: {
    sourceUrl: 'https://zadeyo.com/products/rust-cheats',
    cardFeatures: [
      'Player ESP, skeleton & loot labels',
      'Aimbot with FOV & smoothing',
      'No recoil, no spread & weapon options',
      'Radar, stash ESP & world filters',
      'Stream-proof overlay',
    ],
    overview: {
      title: 'Rust cheats — ESP, aimbot & survival modules',
      paragraphs: [
        'Undetected Rust cheats with player ESP, precision aimbot, wallhack-style awareness, loot ESP, and weapon helpers — maintained for Steam PC with secure checkout and digital delivery through our partner.',
        'This catalog entry covers Lite, Pro, and Elite access to the same module families; pick your tier at checkout. Feature availability follows the live partner build after Facepunch and Easy Anti-Cheat updates.',
      ],
    },
    featureGroups: [
      {
        title: 'Visual ESP',
        items: [
          'Toggle players',
          'Custom players & team colors',
          'Player distance slider',
          'Toggle scientists',
          'Scientists distance',
          'ESP style',
          'Box ESP',
          'Skeleton ESP',
          'Name ESP',
          'Health ESP',
          'Player item ESP',
          'Player weapon ESP',
          'Toggle animal ESP',
          'Animal distance slider',
          'Boar, deer, bear, wolf, horse, chicken ESP',
          'Toggle ores ESP',
          'Sulfur, metal & stone ESP',
        ],
      },
      {
        title: 'World & loot ESP',
        items: [
          'Collectables ESP (wood, berry, hemp, food)',
          'Trap ESP (shotgun, auto turret, snap, flame, mines, SAM)',
          'Hidden stashes',
          'Tool cupboards',
          'Dropped items ESP',
          'Weapons-only filter',
          'Vehicles ESP with distance slider',
        ],
      },
      {
        title: 'Weapon options',
        items: [
          'Instant eoka, compound & bow',
          'No recoil (yaw & pitch)',
          'No sway, spread & bob',
          'Sprint & far melee',
          'Recoil while scoped',
          'Auto reload sniper',
          'Always automatic',
          'Rapid fire',
          'Longneck & shortneck keys',
          'Left/right side peek keys',
        ],
      },
      {
        title: 'Aimbot options',
        items: [
          'Toggle aimbot',
          'Aimbot FOV slider',
          'FOV circle',
          'Aimbot smoothing slider',
          'Custom aim bone',
          'Custom aim key',
        ],
      },
      {
        title: 'Movement & utility',
        items: [
          'Admin flag',
          'Stash exploit',
          'Bright night & fullbright',
          'Spiderman',
          'Infinite jump',
          'Low gravity',
          'Climb assist',
          'No fall damage',
          'Zoom & FOV changer',
          'Flyhack',
          'Self kill',
        ],
      },
      {
        title: 'Config & overlay',
        items: [
          'Close cheat hotkey',
          'Toggle watermark',
          'Font, icon & corner size sliders',
          'Box width & skeleton size',
          'Game width',
          'Update & renderer FPS sliders',
        ],
      },
    ],
    systemRequirements: rustZadeyoRequirements,
    goodToKnow:
      'Check rust-cheat.org status and partner loader notes after every Rust or EAC patch. Cloud DMA is required for full functionality on supported builds.',
  },
  hwidSpoofer: {
    sourceUrl: 'https://zadeyo.com/products/hwid-spoofer',
    cardFeatures: [
      'Hardware spoofer with cleaner',
      'Valorant / Vanguard support',
      'Easy Anti-Cheat titles (incl. Rust)',
      'BattlEye & Ricochet coverage',
      'ACE & Javelin anti-cheat titles',
    ],
    overview: {
      title: 'HWID spoofer — hardware ban recovery',
      paragraphs: [
        'HWID spoofer for disk serials, MAC addresses, GPU IDs, and related fingerprints — built for hardware ban recovery when anti-cheat locks your machine, not just the account.',
        'Includes cleanup steps before you launch protected games. Follow the portal guide and verify identifiers after a cold reboot.',
      ],
    },
    featureGroups: [
      {
        title: 'Core',
        items: ['Hardware spoofer (cleaner included)'],
      },
      {
        title: 'Riot Vanguard',
        items: ['Valorant'],
      },
      {
        title: 'Easy Anti-Cheat (EAC)',
        items: [
          'Rust (cleaner included)',
          'Fortnite & Fortnite tournaments (cleaner included)',
          'Apex Legends (cleaner included)',
          'Bloodhunt',
          'Dead by Daylight',
          'Gray Zone Warfare',
          'Scum',
          'Sea of Thieves',
          'Squad',
          'The Finals',
          'War Thunder',
          'Spoofing supported on EAC titles listed by partner',
        ],
      },
      {
        title: 'BattlEye (BE)',
        items: [
          'Arma 3 & Reforger',
          'ARK: Survival Ascended & Evolved',
          'Black Squad',
          'DayZ',
          'Escape from Tarkov',
          'Rainbow Six Siege',
          'Super People',
          'Unturned',
          'Spoofing supported on BattlEye titles listed by partner',
        ],
      },
      {
        title: 'Ricochet Anti-Cheat',
        items: [
          'Call of Duty: Warzone',
          'Modern Warfare II & III',
          'Black Ops 6 & 7',
        ],
      },
      {
        title: 'Other anti-cheats',
        items: [
          'Delta Force',
          'Arena Breakout',
          'Battlefield 1, V, 6 & 2042',
          'FiveGuard',
          'ACE & Javelin titles (per partner list)',
        ],
      },
    ],
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 / 11 (64-bit).' },
      { icon: 'reqSettings', text: 'Administrator rights for spoof and cleanup steps.' },
      { icon: 'reqWifi', text: 'Stable internet for activation and loader updates.' },
      {
        icon: 'reqShieldGuide',
        text: 'Follow the guide before launching Valorant, Rust, or other protected games.',
      },
    ],
    goodToKnow:
      'Create a restore point before spoofing. Verify hardware IDs changed after reboot. Spoofing does not replace account appeals for non-HWID bans.',
  },
  ugc: {
    sourceUrl: 'https://zadeyo.com/products/ugc',
    cardFeatures: [
      'Ready-made game accounts',
      'Ranked & leveled stock',
      'Secure credential handoff',
      'Rotating inventory',
      'Checkout & 24/7 support',
    ],
    overview: {
      title: 'Game accounts — ready-made access',
      paragraphs: [
        'Buy ready-made game accounts for titles you play: complete checkout, receive secure credential handoff, and get support if you need help getting started.',
        'Stock rotates across ranked, leveled, and starter options. Availability varies — confirm current listings at checkout.',
      ],
    },
    featureGroups: [
      {
        title: 'Account options',
        items: ['Ready-made accounts', 'Ranked-ready profiles', 'Secure delivery workflow', 'Fresh stock rotation', 'Guided checkout & support'],
      },
    ],
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows PC with stable internet.' },
      { icon: 'reqMailOrder', text: 'Order email for delivery and support tickets.' },
      { icon: 'reqWifiPortal', text: 'Access to partner portal or ticket channel after purchase.' },
    ],
    goodToKnow:
      'Credential handoff is digital after payment clears. Keep order email and follow partner instructions for first login — not a guaranteed ban reversal service.',
  },
  skinChanger: {
    sourceUrl: 'https://zadeyo.com/products/skin-changer-cheats',
    cardFeatures: [
      'Full cosmetic marketplace unlock',
      'Weapon & outfit skins',
      'Rare knife variants',
      'Lightweight local client',
      'Multi-title skin changer',
    ],
    overview: {
      title: 'Skin changer — local cosmetic control',
      paragraphs: [
        'Lightweight skin changer for in-game cosmetics: unlock the marketplace of weapon skins, character outfits, and rare knife variants locally instead of buying every microtransaction.',
        'Preview loadouts on your client. Other players on live servers still see your real Steam inventory unless otherwise noted by the partner build.',
      ],
    },
    featureGroups: [
      {
        title: 'Cosmetic control',
        items: [
          'Weapon skin unlock & swap',
          'Character outfits & armor',
          'Knife & melee variants',
          'Searchable skin catalog',
          'Favorites & loadout export',
          'Lightweight overlay client',
          'Multi-game cosmetic support (per partner catalog)',
        ],
      },
    ],
    systemRequirements: rustZadeyoRequirements,
    goodToKnow:
      'Local preview only on supported builds. Pair with stream-proof settings when recording. Check partner status after game updates.',
  },
};

export function zadeyoKeyForSlug(slug: string): ZadeyoCatalogKey | null {
  switch (slug) {
    case 'elite':
    case 'lite':
    case 'pro':
      return 'rustCheats';
    case 'rust-hwid-spoofer':
    case 'hwid-spoofer':
      return 'hwidSpoofer';
    case 'rust-ugc':
    case 'ugc':
      return 'ugc';
    case 'rust-skin-unlock':
    case 'unlock-all':
      return 'skinChanger';
    default:
      return null;
  }
}

export function applyZadeyoToProduct<T extends {
  slug: string;
  features: string[];
  more: number;
  overview: ProductOverview;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  goodToKnow: string;
  featureGroups?: FeatureGroup[];
}>(product: T): T {
  const key = zadeyoKeyForSlug(product.slug);
  if (!key) return product;
  const entry = ZADEYO_CATALOG[key];
  const flat = flattenGroups(entry.featureGroups);
  return {
    ...product,
    features: entry.cardFeatures,
    more: cardMoreCount(entry, 5),
    overview: entry.overview,
    fullFeatures: flat,
    featureGroups: entry.featureGroups,
    systemRequirements: entry.systemRequirements,
    goodToKnow: entry.goodToKnow,
  };
}
