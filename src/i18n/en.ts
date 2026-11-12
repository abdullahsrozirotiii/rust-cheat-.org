import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const DISCORD_INVITE_URL = 'https://discord.com/invite/wmFY3xVtwm';

export const en: Translations = {
  site: {
    name: 'Rust Cheat',
    domain: 'rust-cheat.org',
    title: 'Rust Cheats – ESP, Aimbot & No Recoil | Rust Cheat',
    description:
      'Undetected Rust cheats with ESP, aimbot, radar, no recoil and loot ESP for Steam PC official servers—updated every Facepunch patch at rust-cheat.org.',
    discord: DISCORD_INVITE_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Rust — Facepunch build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'Rust Cheats',
    titleLine2: 'Aimbot, ESP, No Recoil and Wallhacks for Windows',
    subtitle:
      'Rust cheats with player ESP, loot ESP, radar, no recoil and silent aim for Steam PC on Facepunch official—updated every patch with preset configs and support at rust-cheat.org.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Rust server types',
    modes: ['Official', 'Modded', 'Hardcore', 'Softcore'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Tiers', strong: 'Lite • Pro • Elite' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Rust cheat features for official servers',
    subtitle: 'ESP, radar, combat assistance and utility tools for Rust on Steam, maintained every Facepunch patch.',
    items: [
      {
        title: 'Player ESP',
        subtitle: 'See Threats Before Peeks.',
        desc: 'Player boxes, names, distance and sleeper tags for official and modded servers—readable during raids and counter raids.',
        bullets: [
          'Player boxes with team color and distance readouts',
          'Sleeper and wounded state tags for offline raids',
          'Max range and fade sliders to stay conservative on official',
          'Hotkey toggle for quick hide during compound pushes',
          'Portal presets for solo, duo and large-group wipes',
        ],
        tags: ['rust esp', 'player esp', 'sleeper esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Loot & Stash ESP',
        subtitle: 'Find Loot Without Guesswork.',
        desc: 'Highlight stashes, barrels, airdrops and dropped kits through terrain clutter when you farm or counter.',
        bullets: [
          'Stash and barrel ESP with distance caps',
          'Dropped item and corpse loot filters',
          'Airdrop and locked crate alerts',
        ],
        tags: ['loot esp', 'stash esp', 'airdrop esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Resource ESP',
        subtitle: 'Farm Routes on Lock.',
        desc: 'Sulfur, metal, stone and hemp nodes through hills—pair with radar for efficient wipe farming.',
        bullets: ['Node type filters and color coding', 'Distance-based fade for performance', 'Helicopter and Bradley monument hints'],
        tags: ['resource esp', 'sulfur esp', 'node esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Radar',
        subtitle: 'Map Awareness Without Tab.',
        desc: 'Top-down dot radar for players, helicopters and key monuments—compact overlay for roaming official.',
        bullets: ['Player and vehicle dot filters', 'Monument and outpost markers', 'Zoom and opacity tuned for 1080p and 1440p'],
        tags: ['rust radar', 'map hack', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Combat Suite',
        subtitle: 'Recoil Control That Stays Human.',
        desc: 'No recoil, aimbot and silent aim for Pro and Elite—FOV limits and smoothing tuned for AK, LR and bolt PvP.',
        bullets: [
          'No recoil patterns for AK, LR, MP5 and bolt',
          'Aimbot with FOV circle and bone selection',
          'Silent aim modes with smoothing sliders',
          'Stream proof pairs with combat modules on capture',
        ],
        tags: ['no recoil', 'aimbot', 'silent aim'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'TC & Raid ESP',
        subtitle: 'Know Cupboard Range.',
        desc: 'Tool cupboard radius and building weak points for raid planning—without blind guessing compound layout.',
        bullets: [
          'TC range overlay for online and offline raids',
          'Building and deployable highlights',
          'Conservative defaults for official EAC servers',
          'Pairs with player ESP for counter timing',
        ],
        tags: ['tc esp', 'raid esp', 'building esp'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep ESP and radar on your monitor while OBS, Streamlabs and Discord capture record clean Rust gameplay.',
        bullets: ['OBS and Game Capture safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Skin Preview',
        subtitle: 'Loadouts Without Market Grind.',
        desc: 'Client-side skin preview and unlock utility on Elite—local cosmetics without server item spawn.',
        bullets: ['Weapon and apparel preview locally', 'Loadout favorites export', 'Separate from Steam Market purchases'],
        tags: ['skin unlock', 'cosmetics', 'loadout'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Wipe Day Ready.',
        desc: 'Same presets on every PC—portal updates track Rust and Easy Anti-Cheat patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of Facepunch patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Official-server tooling backed by patches—not promises',
    subtitle:
      'Most Rust cheat shops ship stale loaders, obvious aim snap, and ticket bots. We built rust-cheat.org around Facepunch patch-day delivery, humanized combat settings, and live operators.',
    usLabel: 'Rust Cheat',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of Rust updates—check Discord #status before you join official.',
      },
      {
        title: 'Humanized aim & smoothing',
        desc: 'FOV limits, delay sliders and conservative ESP ranges mimic strong PvP timing—not instant snap that floods reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, module configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky injection into the Rust process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Official, modded and per-wipe profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Rust or EAC changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running ESP, radar and combat modules on rust-cheat.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to official server in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and launch Rust on Steam PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'Open products catalog',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import Lite or Pro presets, and tune ESP, radar and combat sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & join Rust',
        desc: 'Check the live status banner, launch Steam Rust, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Rust after Facepunch updates.',
    items: ['Windows 10 & 11', 'Steam', 'Rust client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Rust Elite cheats',
    subtitle: 'Full official-server suite—ESP, radar, combat modules, skin unlock, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Rust Elite',
        desc: 'Lite, Pro, and Elite access to ESP, aimbot, no recoil, loot filters, and stream-proof overlays — partner-maintained after EAC patches.',
        features: [
          'Player ESP, skeleton & loot labels',
          'Aimbot with FOV & smoothing',
          'No recoil, no spread & weapon options',
          'Radar, stash ESP & world filters',
          'Stream-proof overlay',
        ],
        more: 80,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Buy Rust cheats & compare tiers',
    subtitle:
      'Choose Lite ESP and radar, Pro combat modules, or Elite full suite—plus HWID spoofer, UGC, and skin unlock utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Rust on a new account.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}rust-hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Steam restrictions, EAC bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}rust-ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Unlock',
        subtitle: 'Preview every skin locally',
        desc: 'Lightweight skin unlock for weapons, apparel and rare variants—local preview without Steam Market purchases.',
        features: ['Weapon skin swap', 'Apparel customizer', 'Workshop preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}rust-skin-unlock/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Rust cheats guides & patch notes',
    subtitle:
      'ESP setup, Lite vs Pro, aimbot tuning, HWID recovery, and EAC patch-day checklists for Steam PC.',
    latestTitle: 'Rust cheats guides & patch notes',
    latestSubtitle:
      'Filter by topic or sort to find ESP setup, tier comparisons, admin references, and wipe-day updates.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Rust server admin commands guide for owners',
        slug: 'rust-admin-commands-guide',
        image: '/images/blog/rust-27/rust-27-01',
        desc: 'Facepunch Rust admin and F1 commands for server owners—auth levels, bans, kits, and wipe tools (not ranked third-party cheats).',
        date: 'Jun 6, 2026',
        readTime: '11 min read',
      },
      {
        tag: 'Guides',
        title: 'Rust console commands and tips every player should know',
        slug: 'rust-console-commands',
        image: '/images/blog/rust-27/rust-27-02',
        desc: 'Useful Rust F1 client commands—graphics, binds, perf, and combat feedback without touching server admin auth.',
        date: 'Jul 12, 2024',
        readTime: '9 min read',
      },
      {
        tag: 'Guides',
        title: 'How to use Rust admin commands and the F1 console',
        slug: 'rust-admin-commands-how-to',
        image: '/images/blog/rust-27/rust-27-03',
        desc: 'Step-by-step: enable admin auth, open F1, run moderation commands safely on your Rust server.',
        date: 'Oct 20, 2024',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'Rust cheats features guide: ESP, aimbot, radar, and more',
        slug: 'rust-cheats-features',
        image: '/images/blog/rust-27/rust-27-04',
        desc: 'Complete Rust Cheat module map—player ESP, silent aim, no recoil, loot ESP, radar, stream proof, and tier breakdown.',
        date: 'Jul 19, 2024',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Rust F1 console commands for admins: chat vs console',
        slug: 'rust-f1-console-commands',
        image: '/images/blog/rust-27/rust-27-05',
        desc: 'When to use F1 admin console vs in-game chat on Rust servers—syntax, RCON, and plugin commands.',
        date: 'Nov 10, 2025',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Rust Lite vs Pro: which cheat tier fits your playstyle',
        slug: 'rust-lite-vs-pro',
        image: '/images/blog/rust-27/rust-27-06',
        desc: 'Compare Rust Cheat Lite ESP package vs Pro aimbot and no recoil for Rust official servers.',
        date: 'Apr 17, 2024',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'Rust Elite tier guide: full suite and priority patches',
        slug: 'rust-elite-cheats',
        image: '/images/blog/rust-27/rust-27-07',
        desc: 'When to upgrade to Elite—full ESP, radar, aim suite, skin unlock, and first-in-line Facepunch patch support.',
        date: 'Oct 6, 2024',
        readTime: '11 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust aimbot and silent aim for official server PvP',
        slug: 'rust-aimbot-pvp-guide',
        image: '/images/blog/rust-27/rust-27-08',
        desc: 'Configure Pro tier aimbot and silent aim for Rust PvP—FOV, smoothing, targets, and EAC-safe habits.',
        date: 'Feb 6, 2025',
        readTime: '12 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust ESP setup: players, loot, sleepers, and TC range',
        slug: 'rust-esp-setup',
        image: '/images/blog/rust-27/rust-27-09',
        desc: 'Tune Rust Cheat player ESP, loot ESP, sleeper tags, and tool cupboard range for official servers.',
        date: 'Jan 18, 2024',
        readTime: '10 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust radar and loot ESP guide for farming and raids',
        slug: 'rust-radar-loot-esp-guide',
        image: '/images/blog/rust-27/rust-27-10',
        desc: 'Configure radar dots, helicopter alerts, and sulfur or metal node ESP for Rust wipes.',
        date: 'Sep 14, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Features',
        title: 'Rust skin unlock and preview utility guide',
        slug: 'rust-skin-unlock-guide',
        image: '/images/blog/rust-27/rust-27-11',
        desc: 'Client-side Rust skin preview and unlock-all utility on Elite—cosmetics without server item spawn.',
        date: 'Mar 24, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Safety',
        title: 'EAC patch day checklist for Rust on Steam',
        slug: 'eac-patch-day-checklist',
        image: '/images/blog/rust-27/rust-27-12',
        desc: 'Facepunch update day steps—verify Easy Anti-Cheat, loader status, and safe configs before official servers.',
        date: 'Dec 12, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Safety',
        title: 'Rust HWID spoofer steps after an EAC ban',
        slug: 'rust-hwid-spoofer',
        image: '/images/blog/rust-27/rust-27-13',
        desc: 'What to do after a Rust EAC hardware ban—HWID spoofer basics, new Steam account, and loader hygiene.',
        date: 'Oct 13, 2024',
        readTime: '9 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy Rust cheats in 2026',
        slug: 'how-to-buy-rust-cheats',
        image: '/images/blog/rust-27/rust-27-14',
        desc: 'Rust Cheat purchase walkthrough—pick Lite, Pro, or Elite, secure checkout, loader download, and first launch.',
        date: 'Feb 1, 2025',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust no recoil and silent aim configuration guide',
        slug: 'rust-no-recoil-silent-aim',
        image: '/images/blog/rust-27/rust-27-15',
        desc: 'Tune no recoil patterns and silent aim curves for AK, LR, and bolt on Rust official servers.',
        date: 'Jul 25, 2024',
        readTime: '11 min read',
      },
      {
        tag: 'Safety',
        title: 'Fix EAC unable to verify Rust on Steam',
        slug: 'rust-eac-unable-to-verify',
        image: '/images/blog/rust-27/rust-27-16',
        desc: 'Resolve Easy Anti-Cheat unable to verify errors for Rust—repair, reinstall, and launch order.',
        date: 'Apr 11, 2024',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust external cheat loader guide',
        slug: 'rust-external-cheats',
        image: '/images/blog/rust-27/rust-27-17',
        desc: 'How Rust Cheat external loader works with Rust and EAC—architecture, injection order, and configs.',
        date: 'Jun 14, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Setup',
        title: 'Rust stream proof setup for OBS and recorders',
        slug: 'rust-stream-proof-setup',
        image: '/images/blog/rust-27/rust-27-18',
        desc: 'Hide Rust Cheat ESP and radar from OBS, Streamlabs, and Discord stream while playing Rust.',
        date: 'Apr 6, 2024',
        readTime: '8 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-wipe without tabbing through chaos.',
    items: [
      { num: '01', label: 'ESP', title: 'Vision that stays readable', desc: 'Player, loot, sleeper and TC ESP in one vision tab with range sliders.' },
      { num: '02', label: 'Radar', title: 'Dots that match your roam', desc: 'Filter by distance, team color, helicopter alerts and monument markers.' },
      { num: '03', label: 'Resources', title: 'Farm nodes on lock', desc: 'Sulfur, metal and hemp ESP with node filters on a compact overlay.' },
      { num: '04', label: 'Combat', title: 'Weapon profiles per wipe', desc: 'Save AK, LR and bolt no recoil and aim configs and swap with hotkeys.' },
      { num: '05', label: 'Utility', title: 'Stream & skin tools', desc: 'Stream proof toggles and Elite skin preview in one utilities panel.' },
      { num: '06', label: 'Profiles', title: 'Configs for every server', desc: 'Separate official, modded and hardcore presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Rust profile you can reuse every wipe.',
    ctaLabel: 'Browse cheat tiers',
    ctaHref: productBase,
    ctaSecondary: 'Read setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EAC status',
        desc: 'Read the live banner on rust-cheat.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches your official-server goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune ESP ranges in a low-pop server.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save official and modded presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Rust plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before Facepunch blog posts—check before you join official.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe ESP ranges and aim smoothing, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or module configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Rust Cheat support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Browse the forum',
        desc: 'Reddit-style Q&A pulled from our Rust setup guides.',
        linkLabel: 'Open community forum',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Join our Discord',
        desc: 'Live operators and setup help—24/7 community at rust-cheat.org.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on rust-cheat.org or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11—and your Rust client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Rust cheats are online?',
        a: 'The live status banner is on rust-cheat.org and in the Discord #status channel. Always check after a Rust or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rust.',
      },
      {
        num: '03',
        q: 'How often are Rust cheat modules updated after a Facepunch patch?',
        a: 'We post loader status on rust-cheat.org and Discord #status after Facepunch and EAC updates. Active access includes compatibility builds when status is green—often within 24 hours of major patches.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Rust via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Unlock live at rust-cheat.org/products/rust-cheats/ with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Rust cheats — ESP, radar and tools for Steam PC. rust-cheat.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}elite/`, label: 'Elite Rust cheats', ariaLabel: 'Elite cheats' },
      { href: productBase, label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Rust Cheat',
      description:
        'Rust Cheat provides Rust cheat tiers, utility tools and PC support resources at rust-cheat.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Rust Cheat is a PC-focused resource for Rust players exploring ESP, radar, no recoil and skin unlock workflows on Steam. We publish tier comparisons, setup guides, and live status notes so you can evaluate Rust cheats before checkout.',
            'We operate as an independent cheats provider: modules ship through a signed external loader, patch notes land on the blog and forum, and support tickets are answered with loader logs—not generic copy-paste replies.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, HWID utilities, skin unlock and account recovery workflows. Blog articles explain EAC-safe configs, patch-day checks, and Facepunch update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Transparency',
          paragraphs: [
            'We document known limitations—EAC downtime, loader errors, and tier differences—in public FAQ and blog posts instead of hiding them behind sales copy.',
            'Refund and license terms are published on the terms page; we do not promise undetected status or guaranteed unbans.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Rust Cheat handles analytics, cookies, and contact data when you use rust-cheat.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on rust-cheat.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Rust Cheat products and rust-cheat.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using rust-cheat.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Rust cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Skin Unlock) delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Rust or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. rust-cheat.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Rust.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam Rust on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Rust build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Rust can conflict with game updates and Easy Anti-Cheat. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not join official servers while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Rust Cheat Support',
      description:
        'Get support for loader, HWID, and checkout questions at rust-cheat.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Rust Cheat home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Rust Cheat on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
