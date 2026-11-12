import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const siteHome = `rust-cheat.org`;
const elite = link('Rust Elite', productPath('elite'));
const lite = link('Lite tier (ESP & radar)', productPath('lite'));
const liteEsp = link('Lite ESP package', productPath('lite'));
const liteAwareness = link('Lite awareness tier', productPath('lite'));
const pro = link('Pro tier (aimbot & no recoil)', productPath('pro'));
const proCombat = link('Pro combat modules', productPath('pro'));
const proPvp = link('Pro PvP tier', productPath('pro'));
const eliteSuite = link('Elite full suite', productPath('elite'));
const eliteRadar = link('Elite radar stack', productPath('elite'));
const productsHub = link('Rust cheat tiers', ROUTES.products);
const productsCatalog = link('cheat product catalog', ROUTES.products);
const productsCompare = link('tier comparison hub', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('rust-hwid-spoofer'));
const ugc = link('UGC', productPath('rust-ugc'));
const skin = link('Skin Unlock utility', productPath('rust-skin-unlock'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Rust cheats are online?',
    a: a(
      `The live status banner is on ${siteHome} and in the Discord #status channel. Always check after a Facepunch update or EAC maintenance window.`,
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Your portal unlocks the external loader, setup guide, and config library via our secure checkout. Follow the guide before joining official or modded Rust servers.',
    ),
  },
  {
    id: 'patch-cadence',
    topic: 'updates',
    icon: 'faqBanRisk',
    q: 'How often are Rust cheat modules updated after a Facepunch patch?',
    a: a(
      'We track Facepunch and Easy Anti-Cheat (EAC) releases on the live status banner and Discord #status. Active subscribers receive loader updates when builds are green—often within 24 hours of major patches, though timing varies.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a(
      'Rust via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported. Official Facepunch servers and most modded Steam servers are in scope.',
    ),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists Lite, Pro, and Elite cheat tiers, plus ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Rust player ESP?',
    a: `Player ESP shows nearby players, sleepers, loot, and base hints through walls and at range. ${liteEsp} covers awareness overlays and basic radar. ${proCombat} and ${eliteSuite} add combat modules on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and combat modules?',
    a: `ESP and radar are information overlays—they do not pull trigger or remove recoil. No recoil, aimbot, and silent aim are combat modules on ${proPvp} and ${eliteRadar}. You can run awareness-only on ${liteAwareness}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for ESP and radar only?',
    a: `${liteAwareness} is awareness only: player ESP, sleeper tags, loot ESP, resource nodes, basic radar, and stream proof. ${proCombat} adds no recoil and aim assist. ${eliteSuite} adds the full radar suite and skin utility.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes aimbot and no recoil?',
    a: `${proPvp} ships no recoil, aimbot FOV, silent aim modes, and weapon hotkey profiles. ${eliteRadar} includes everything in Pro plus expanded radar, skin unlock, and priority patch delivery. ${liteEsp} has no combat automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Awareness and farming → ${liteEsp}. Official PvP with aim assist → ${proPvp}. Full module suite and priority Facepunch patches → ${eliteSuite}. Compare on each cheat page or the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority EAC patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${liteAwareness}, ${proCombat}, and ${eliteRadar} hides overlays from OBS and Discord share. Test a local recording before going live on Rust streams.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Rust cheats guaranteed?',
    a: a(
      'No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.',
    ),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aimbot?',
    a: a(
      'ESP is quieter in demos than obvious snap aim, but it is still a cheat. EAC does not ignore overlays because you left aimbot off.',
    ),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Steam accounts fail instantly on one PC but work elsewhere—EAC hardware enforcement. Not for account-only bans; see ${ugc} instead.`,
    scopes: ['rust-hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Steam restrictions and EAC bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['rust-ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Unlock modify my Steam inventory?',
    a: `${skin} previews skins locally on your client. Other players see your real inventory on the server. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['rust-skin-unlock'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Rust game folder?',
    a: `Rust Cheat runs external with cloud config sync—no files injected into the Rust directory EAC scans. Ban risk still applies. See ${productsCatalog}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog F1 admin commands the same as Rust cheats?',
    a: `No. Blog articles about Facepunch server admin and F1 commands apply only on servers you own or moderate. Official EAC servers require separate Rust cheats from ${lite}, ${proCombat}, and ${eliteRadar}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsCompare}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqPage} collects product, cheat, and blog answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want player ESP, loot tags, sleeper awareness, and basic radar—and will not touch aimbot or no recoil. If you keep enabling combat modules, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `Roaming PvP players on Facepunch official who want no recoil, aimbot, and silent aim with full ESP included. Pro is the most popular tier at ${siteHome}.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want the full radar suite, skin unlock utility, and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after an EAC or Facepunch update?',
    a: a(
      `Check ${siteHome} status and Discord #status. Do not launch until the banner shows online. Reload the external loader and load conservative presets after any patch.`,
    ),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version, and Rust client build. Staff walk through external loader setup live.',
    ),
  },
  {
    id: 'turbo-ranked',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do tiers work on official and modded servers?',
    a: `Yes—${lite}, ${pro}, and ${elite} include presets for Facepunch official and common modded Steam servers in the portal. Tune ESP distance and aim smoothing before your main wipe.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes radar overlay?',
    a: `Basic radar ships on ${lite} and carries through ${pro} and ${elite}. Elite adds advanced filters, event alerts, and extended range options.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes the full radar and ESP suite?',
    a: `Expanded radar categories, heli and Bradley alerts, and bundled skin utility are ${elite} only. ${pro} covers combat modules without the full Elite radar stack.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Rust cheats?',
    a: a(
      'Private means per-user keys and maintained builds—not public zip packs. Rust Cheat ships portal delivery for ESP, combat modules, and utility tiers.',
    ),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat, and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'patch-cadence', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter cheat plans, ESP, combat modules, products, setup, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'vac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use F1 admin commands on official servers?',
      a: a(
        `No. Facepunch admin and F1 kits only work on servers you control. Official EAC servers require separate Rust cheats from ${siteHome} tiers.`,
      ),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `ESP and radar guides → ${lite}. Aimbot and no recoil guides → ${pro}. Elite radar and skin topics → ${elite}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a(
        'Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.',
      ),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test on a low-pop server first?',
      a: a(
        'Yes. Load conservative presets on a test or low-pop server before your main official wipe. Tune aim smoothing and ESP distance over several sessions.',
      ),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a(
        'No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.',
      ),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${lite}, ${pro}, ${elite}, and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a(
      'Re-check status after every Facepunch update. Portal presets update with patch notes—reload configs instead of copying old sliders.',
    ),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (
    slug.includes('esp') ||
    slug.includes('loot') ||
    slug.includes('radar') ||
    slug.includes('sleeper')
  ) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP from this article?',
      a: `${lite} includes player ESP, loot tags, sleeper awareness, and basic radar. ${pro} adds no recoil and aim assist on the same overlay stack.`,
    });
  }
  if (
    slug.includes('aimbot') ||
    slug.includes('recoil') ||
    slug.includes('silent') ||
    slug.includes('pvp')
  ) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the combat modules in this article?',
      a: `${pro} and ${elite} ship aimbot, no recoil, and silent aim. ${lite} is ESP and radar only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  {
    feature: 'Player ESP & sleeper tags',
    icon: 'comparePlayerEsp' as const,
    lite: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Loot, stash & crate ESP',
    icon: 'compareWardLocator' as const,
    lite: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Resource nodes & TC hints',
    icon: 'compareRuneTimer' as const,
    lite: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Basic radar overlay',
    icon: 'compareMinimapHack' as const,
    lite: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Streamproof overlay',
    icon: 'compareStreamproof' as const,
    lite: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'No recoil & spread control',
    icon: 'compareOrbwalker' as const,
    lite: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Aimbot & bone aim',
    icon: 'compareAutoCombo' as const,
    lite: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Silent aim modes',
    icon: 'compareTargetSelector' as const,
    lite: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Weapon hotkey profiles',
    icon: 'compareActivator' as const,
    lite: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Advanced radar filters',
    icon: 'compareAbilityRadius' as const,
    lite: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Heli & Bradley alerts',
    icon: 'compareSmokeAlert' as const,
    lite: false,
    pro: false,
    elite: true,
  },
  {
    feature: 'Full radar & ESP suite',
    icon: 'compareFullMapHack' as const,
    lite: false,
    pro: false,
    elite: true,
  },
  {
    feature: 'Skin Unlock utility',
    icon: 'compareSkinChanger' as const,
    lite: false,
    pro: false,
    elite: true,
  },
  {
    feature: 'Priority Facepunch patch queue',
    icon: 'comparePriorityPatch' as const,
    lite: false,
    pro: false,
    elite: true,
  },
  {
    feature: 'Direct dev Discord support',
    icon: 'compareDevSupport' as const,
    lite: false,
    pro: false,
    elite: true,
  },
  {
    feature: 'Cloud config backup',
    icon: 'compareCloudBackup' as const,
    lite: true,
    pro: true,
    elite: true,
  },
];
