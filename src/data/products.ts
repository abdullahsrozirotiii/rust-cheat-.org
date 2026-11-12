import { t } from '../i18n';
import { checkoutForSlug } from '../config/checkout';
import { RUST_CHEATS_CATALOG_TITLE, ZADEYO_CHECKOUT, zadeyoCheckoutForSlug } from '../config/levo-checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';
import { applyZadeyoToProduct, type FeatureGroup } from './zadeyoCatalog';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  featureGroups?: FeatureGroup[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['rust-esp-setup', 'rust-lite-vs-pro', 'rust-radar-loot-esp-guide', 'eac-patch-day-checklist'],
  pro: [
    'rust-aimbot-pvp-guide',
    'rust-no-recoil-silent-aim',
    'rust-lite-vs-pro',
    'rust-stream-proof-setup',
  ],
  elite: [
    'rust-elite-cheats',
    'rust-cheats-features',
    'rust-esp-setup',
    'eac-patch-day-checklist',
    'how-to-buy-rust-cheats',
  ],
  'rust-hwid-spoofer': [
    'rust-hwid-spoofer',
    'rust-eac-unable-to-verify',
    'eac-patch-day-checklist',
    'rust-external-cheats',
  ],
  'rust-ugc': ['rust-eac-unable-to-verify', 'rust-hwid-spoofer', 'how-to-buy-rust-cheats'],
  'rust-skin-unlock': ['rust-skin-unlock-guide', 'rust-cheats-features', 'rust-stream-proof-setup'],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on rust-cheat.org and Discord #status before purchase—especially after a Rust or Easy Anti-Cheat (EAC) update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Lite, Pro, Elite, or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, external loader, and setup guide. Test on a low-pop server, load conservative presets, then join official.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rust and Easy Anti-Cheat receive frequent Facepunch updates. Confirm module availability on the live status panel at rust-cheat.org before you purchase or launch. Overlay behavior may differ on modded servers, in menus, and after EAC patches.';

const sharedLimitations =
  'Third-party software on Rust official servers can violate Facepunch Terms of Service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const rustSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Rust client via Steam with latest Facepunch patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for external loader installation and EAC-aware updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Rust published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const GP = '/images/gameplay';

function gpSrc(name: string): string {
  return `${GP}/${name}.webp`;
}

function rust27Slide(num: string, alt: string, caption: string, captionDesc: string): ProductSlide {
  const id = num.padStart(2, '0');
  return {
    src: `/images/blog/rust-27/rust-27-${id}`,
    alt,
    caption,
    captionDesc,
  };
}

const galleryRaw = {
  gpPlayerEsp: {
    src: gpSrc('gpPlayerEsp'),
    alt: 'Rust player ESP showing sleeper tags and distance on Facepunch official',
    caption: 'Player ESP overlay',
    captionDesc: 'Name tags, team colors, sleeper markers, and distance readouts during a monument roam.',
  },
  gpLootEsp: {
    src: gpSrc('gpLootEsp'),
    alt: 'Rust loot ESP highlighting crates, barrels, and stashes',
    caption: 'Loot & stash ESP',
    captionDesc: 'Crate, barrel, and hidden stash highlights tuned for wipe-day farming routes.',
  },
  gpRadar: {
    src: gpSrc('gpRadar'),
    alt: 'Rust radar showing nearby players and tool cupboard range',
    caption: 'Radar & TC awareness',
    captionDesc: 'Minimap-style radar with player blips and base perimeter hints for online raids.',
  },
  gpAimbot: {
    src: gpSrc('gpAimbot'),
    alt: 'Rust aimbot with FOV circle and bone selection for PvP',
    caption: 'Aimbot & targeting',
    captionDesc: 'Smoothing, FOV limits, and bone selection for AK and bolt fights on official servers.',
  },
  gpRecoil: {
    src: gpSrc('gpRecoil'),
    alt: 'Rust no recoil compensation on AK spray pattern',
    caption: 'No recoil control',
    captionDesc: 'Weapon sway compensation with humanized smoothing for semi-auto and full-auto rifles.',
  },
  gpStreamProof: {
    src: gpSrc('gpStreamProof'),
    alt: 'Rust stream proof overlay hidden from OBS capture',
    caption: 'Stream proof mode',
    captionDesc: 'Overlays stay on your monitor while OBS and common recorders capture a clean game feed.',
  },
  gpSkinUnlock: {
    src: gpSrc('gpStreamProof'),
    alt: 'Rust skin unlock utility previewing weapon skins locally',
    caption: 'Skin unlock preview',
    captionDesc: 'Client-side cosmetic preview via Unlock All—other players see your real Steam inventory.',
  },
  gpEliteSuite: {
    src: gpSrc('gpRecoil'),
    alt: 'Rust Elite full module suite with priority EAC patch queue',
    caption: 'Elite full suite',
    captionDesc: 'Every Lite and Pro module plus expanded radar, skin utility, and priority patch delivery.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function detailSlides(
  bases: { file: string; alt: string; caption: string; captionDesc: string }[],
): ProductSlide[] {
  return bases.map(({ file, alt, caption, captionDesc }) => ({
    src: gpSrc(file),
    alt,
    caption,
    captionDesc,
  }));
}

export function catalogCardTitle(product: Pick<ProductPage, 'slug' | 'title'>): string {
  if (product.slug === 'elite') return RUST_CHEATS_CATALOG_TITLE;
  return product.title;
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'rust-cheats';
}

function tierDisplayName(name: string): string {
  if (name === 'Lite') return 'Rust Lite';
  if (name === 'Pro') return 'Rust Pro';
  return 'Rust Elite';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Rust Lite is built for players who want awareness first. On Facepunch official, knowing sleeper tags, loot routes, and nearby roamers wins more fights than raw aim—Lite gives you that edge without combat automation.',
    },
    { type: 'h2', text: 'EAC-aware by design' },
    {
      type: 'p',
      text: 'Lite skips aimbot and no recoil entirely. Your gameplay looks natural while player ESP, loot ESP, and radar keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Rust Pro is the sweet spot for PvP-heavy wipes. Aimbot, no recoil, and silent aim help you win fights when you tune smoothing and FOV using portal presets—not max sliders on day one.',
    },
    { type: 'h2', text: 'Combat plus awareness' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds recoil control, aim assistance, and silent aim variants. You see the angle before you peek and win trades with settings that stay human at default profiles.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Rust Elite is the private build for operators who want everything—full radar suite, skin unlock utility, priority EAC patch queue, and direct developer support. Limited slots keep builds maintainable after Facepunch updates.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test on low-pop servers, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before main official queues.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with sleeper tags, loot and stash ESP, tool cupboard radar basics, distance readouts, and stream-safe overlay hiding. Config presets for solo and group play ship in the portal—load before your first wipe session.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Combat assistance' },
    {
      type: 'p',
      text: 'No recoil, aimbot with FOV limits, silent aim, and bone selection for AK, LR, and bolt fights. Smoothing and activation keys live in one combat tab—tuned for official servers when you start with portal presets.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at rust-cheat.org—enough firepower for monument PvP without Elite slot limits. Pair with our aimbot and recoil guides in the blog before your first official session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full operator suite' },
    {
      type: 'p',
      text: 'Expanded radar, loot filters, skin unlock utility, and priority EAC patch notifications on top of every Lite and Pro module. Use low-pop testing before main official—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'rust-hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic HWID enforcement from EAC. Do not use for account-only ban cases; see [UGC](/products/rust-cheats/rust-ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before official. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'rust-ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam restrictions, EAC bans, trade holds, and security flags. Build custom workflows, automate dispute steps, and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for platform review. Pair with [HWID Spoofer](/products/rust-cheats/rust-hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'rust-skin-unlock': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Weapon and outfit skins display on your client for testing and content creation. Other players on the server see your actual Steam inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin unlock utility ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpPlayerEsp', 'gpLootEsp', 'gpRadar'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: rustSystemRequirements,
    fullFeatures: [
      'Player ESP & sleeper tags',
      'Loot, crate & barrel ESP',
      'Stash & hemp highlights',
      'Tool cupboard radar basics',
      'Distance readouts',
      'Team & sleeper filters',
      'Monument route presets',
      'Streamproof overlay mode',
      'Wipe-day farming preset',
      'Group play preset',
      'Cloud config backup',
      'EAC patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Rust awareness workflow',
      paragraphs: [
        'Rust Lite focuses on player ESP, loot ESP, sleeper tags, and radar basics—everything you need to track roamers and farm efficiently without combat automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first official session.',
        'Lite is the entry path for Facepunch official players who want map and loot awareness with minimal report risk. No aimbot, no recoil—just readable overlays maintained every EAC patch at rust-cheat.org.',
      ],
    },
  },
  pro: {
    images: slide('gpAimbot', 'gpRecoil', 'gpPlayerEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: rustSystemRequirements,
    fullFeatures: [
      'All Lite ESP & radar modules',
      'No recoil compensation',
      'Aimbot with FOV limits',
      'Silent aim variants',
      'Bone selection & smoothing',
      'Semi-auto & full-auto profiles',
      'Combat activation keys',
      'Humanized default presets',
      'Low-pop test profile',
      'Official PvP preset',
      'Cloud config backup',
      'EAC patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Rust PvP workflow',
      paragraphs: [
        'Rust Pro adds no recoil, aimbot, and silent aim on top of every Lite module. Weapon profiles, smoothing, and activation keys live in one combat tab—tuned for monument fights when you start with portal presets, not max FOV.',
        'Pro is the most popular tier: enough firepower for official PvP without Elite slot limits. Player ESP keeps you pre-aimed while recoil and aim assist stay human at default settings.',
      ],
    },
  },
  elite: {
    images: [
      rust27Slide(
        '01',
        'Rust player ESP and roam on Facepunch official',
        'Player ESP overlay',
        'Name tags, distance, and awareness layers during an official-server session.',
      ),
      rust27Slide(
        '15',
        'Rust wipe day gameplay with modules enabled',
        'Wipe day session',
        'Progression and PvP footage from the same media set as our blog and hero slider.',
      ),
      rust27Slide(
        '18',
        'Rust monument fight with ESP and radar',
        'Monument PvP',
        'High-pop official roam—full frame preview without logo or catalog art.',
      ),
      rust27Slide(
        '22',
        'Rust snow biome gameplay screenshot',
        'Biome coverage',
        'Additional angle from rust-27 captures used across guides and product pages.',
      ),
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: rustSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Expanded radar suite',
      'Advanced loot filters',
      'Skin unlock (Unlock All)',
      'Priority EAC patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Stream proof per module',
      'External loader architecture',
      'Cloud config backup',
      'EAC patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full Rust operator workflow',
      paragraphs: [
        'Rust Elite is the private build with expanded radar, loot filters, skin unlock utility, and priority EAC patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast after Facepunch updates. Direct dev support in Discord helps you tune conservative profiles before main official. Check the status banner on rust-cheat.org before purchase.',
      ],
    },
  },
  'rust-hwid-spoofer': {
    images: detailSlides([
      {
        file: 'hwid-detail-1',
        alt: 'HWID spoofer compatibility scan and restore point checklist',
        caption: 'Spoofer setup',
        captionDesc: 'Portal workflow for disk serial rotation, MAC profile tools, and pre-flight compatibility scan.',
      },
      {
        file: 'hwid-detail-2',
        alt: 'Post-spoof verification and identifier diff report',
        caption: 'Verification step',
        captionDesc: 'Confirm hardware identifiers changed after a cold reboot before launching Rust on a new account.',
      },
    ]),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rust.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Rust after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Rust players recover when EAC flags PC hardware but the Steam account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only ban cases. After spoof, load a conservative cheat profile from rust-cheat.org before joining official.',
      ],
    },
  },
  'rust-ugc': {
    images: detailSlides([
      {
        file: 'ugc-detail-1',
        alt: 'UGC appeal workspace with case documentation and status tracking',
        caption: 'Appeal workspace',
        captionDesc: 'Structured dispute workflows for Steam restrictions, EAC bans, and security holds—not instant unban guarantees.',
      },
    ]),
    goodToKnow:
      'Gather order email, platform account details, and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on rust-cheat.org.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social, and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status, and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'rust-skin-unlock': {
    images: detailSlides([
      {
        file: 'skin-changer-detail-1',
        alt: 'Rust skin unlock utility previewing weapon skins locally',
        caption: 'Skin preview',
        captionDesc: 'Browse weapon and outfit skins on your client—other players still see your real Steam inventory on official.',
      },
    ]),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players on the server see your real Steam inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Steam inventory or store state. Other players cannot see previewed weapon or outfit skins.',
    systemRequirements: rustSystemRequirements,
    fullFeatures: [
      'Weapon skin swap',
      'Outfit & armor preview',
      'Effect customizer',
      'Loading screen themes',
      'Crosshair & HUD themes',
      'Deployable skin preview',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse weapon skins, outfits, and rare variants locally in Rust—searchable catalog, favorites, and loadout export without modifying live Steam purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = tierDisplayName(cheat.name);
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: slug === 'elite' ? RUST_CHEATS_CATALOG_TITLE : cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content?.images ?? slide('gpPlayerEsp'),
      overview: content?.overview ?? { title: cheat.title, paragraphs: [cheat.desc] },
      acquisition: acquisitionFor(displayName),
      goodToKnow: content?.goodToKnow ?? sharedGoodToKnow,
      limitations: content?.limitations ?? sharedLimitations,
      fullFeatures: content?.fullFeatures ?? cheat.features,
      systemRequirements: content?.systemRequirements ?? rustSystemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  }).map(applyZadeyoToProduct);
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content?.images ?? [],
        overview: content?.overview ?? { title: product.title, paragraphs: [product.desc] },
        acquisition: acquisitionFor(product.title),
        goodToKnow: content?.goodToKnow ?? sharedGoodToKnow,
        limitations: content?.limitations ?? sharedLimitations,
        fullFeatures: content?.fullFeatures ?? product.features,
        systemRequirements: content?.systemRequirements ?? rustSystemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    })
    .map(applyZadeyoToProduct);
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

function blogHeroSlide(id: string, caption: string, captionDesc: string): ProductSlide {
  return rust27Slide(
    id,
    'Rust gameplay on Facepunch official with Rust Cheat modules',
    caption,
    captionDesc,
  );
}

/** Home hero — gameplay stills only (no logo / catalog art). */
export const heroSlides: ProductSlide[] = [
  blogHeroSlide('01', 'Player ESP & awareness', 'Live official-server session from our rust-27 media set.'),
  blogHeroSlide('05', 'Raid & PvP highlights', 'Combat and roam footage—updated every Facepunch patch.'),
  blogHeroSlide('15', 'Wipe day progression', 'From fresh spawn to geared PvP with portal presets.'),
  blogHeroSlide('18', 'Monument & zerg fights', 'Radar and ESP layers during high-pop official.'),
  blogHeroSlide('22', 'Snow & desert biomes', 'Full-frame gameplay captures for the home hero slider.'),
  blogHeroSlide('04', 'Duo & team wipes', 'Module preview shots reused across guides and product pages.'),
];

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Rust cheats with ESP, aimbot, no recoil, and radar for Facepunch official on Steam—plus HWID spoofer, UGC recovery, and skin unlock utilities at rust-cheat.org.',
  buyUrl: ZADEYO_CHECKOUT.rustCheats,
};
