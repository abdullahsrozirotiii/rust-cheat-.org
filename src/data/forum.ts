export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, upvotes, excerpt, ...post } = input;
  const threadAuthors = [
    { author: 'wipe_day_solo', age: '7h ago', score: 41, body: answer },
    { author: 'monument_rat', age: '6h ago', score: 28, body: detail },
    { author: 'low_pop_tester', age: '5h ago', score: 19, body: 'Saved this before wipe night—exactly the workflow I needed on official.' },
    { author: 'tc_raider', age: '4h ago', score: 14, body: 'Linking back to the guide helps more than random Discord paste configs.' },
    { author: 'ak_main', age: '3h ago', score: 11, body: 'Anyone else test on low pop first? This thread matches what support told me.' },
    { author: 'office_farmer', age: '2h ago', score: 8, body: excerpt },
    {
      author: 'guide_team',
      age: '1h ago',
      score: 22,
      body: tip,
      replies: [
        {
          author: 'helpful_mod',
          age: '42m ago',
          score: 6,
          body: 'Stick to rust-cheat.org and the linked article for module lists—avoid third-party download links.',
        },
      ],
    },
  ];
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: threadAuthors.length,
    upvotes,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: threadAuthors,
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'rust-esp-included',
    title: 'What does player ESP include in the Rust Cheat guide?',
    upvotes: 73,
    excerpt: 'A quick breakdown of player boxes, sleepers, loot, and TC range covered by the ESP setup guide.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust ESP setup: players, loot, sleepers, and TC range',
    sourcePath: '/blog/rust-esp-setup/',
    answer:
      'The guide covers player ESP with boxes, names, distance, and weapon-in-hand tags, plus optional sleeper, loot, stash, and tool cupboard range markers. Exact options depend on your Lite, Pro, or Elite tier.',
    detail:
      'It recommends starting with a restrained layout on Facepunch official—enable only what you can read during a raid or roam fight.',
    tip: 'Keep the overlay uncluttered: begin with player ESP at a moderate distance, then adjust colors and filters one at a time.',
  }),
  guideDiscussion({
    slug: 'rust-esp-overlay-setup',
    title: 'How should I set up the ESP overlay for the first time?',
    upvotes: 58,
    excerpt: 'Start with portal presets, confirm the overlay in a low-pop server, then adjust one setting at a time.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust ESP setup: players, loot, sleepers, and TC range',
    sourcePath: '/blog/rust-esp-setup/',
    answer:
      'Use the ESP setup guide to load a conservative preset, pick readable team colors, and check that boxes do not cover your crosshair or hotbar.',
    detail:
      'Test your layout on a low-pop official server before wipe night. A simple configuration is easier to trust than turning on every category immediately.',
    tip: 'If the screen feels crowded, reduce loot categories before changing box size or max distance.',
  }),
  guideDiscussion({
    slug: 'rust-radar-settings',
    title: 'What radar scale and filters are comfortable for farming?',
    upvotes: 44,
    excerpt: 'The radar guide focuses on corner HUD placement, node ESP, and helicopter alerts without replacing game sense.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust radar and loot ESP guide for farming and raids',
    sourcePath: '/blog/rust-radar-loot-esp-guide/',
    answer:
      'There is no single ideal radar size for every player. The guide recommends scaling the dot map to a corner, toggling sulfur and metal independently, and fading distance so cliffs do not clutter the overlay.',
    detail:
      'Keep the vanilla F1 map available for stream viewers when you use stream proof—radar is for your local awareness, not a replacement for monument knowledge.',
    tip: 'Change one filter at a time and run a short farm loop before settling on a new radar layout.',
  }),
  guideDiscussion({
    slug: 'rust-recoil-silent-aim',
    title: 'How do recoil and silent aim settings affect Pro combat modules?',
    upvotes: 32,
    excerpt: 'A practical question about weapon profiles, smoothing, and why the guide recommends conservative tuning on official servers.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust no recoil and silent aim configuration guide',
    sourcePath: '/blog/rust-no-recoil-silent-aim/',
    answer:
      'Recoil profiles compensate spray patterns per weapon; silent aim adjusts trajectory with minimal crosshair movement. The guide recommends starting below max compensation and testing on low pop before main wipe.',
    detail:
      'Humanized values beat obvious laser beams—change one weapon profile at a time and note what you tried in the portal cloud config.',
    tip: 'Reload portal presets after every Facepunch weapon tweak; patch day checklist covers when to stop and wait for a green status banner.',
  }),
  guideDiscussion({
    slug: 'rust-aimbot-pvp-practice',
    title: 'What is a good way to practice aimbot and silent aim settings?',
    upvotes: 29,
    excerpt: 'Use ranked official presets, one weapon at a time, and verify behavior before high-pop fights.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust aimbot and silent aim for official server PvP',
    sourcePath: '/blog/rust-aimbot-pvp-guide/',
    answer:
      'Choose one weapon and one engagement range at a time. The guide walks through FOV limits, bone priority, and when to disable aim assist during raids so demos look natural.',
    detail:
      'A low-pop test server lets you repeat the same angle fight without the pressure of a full online raid.',
    tip: 'Learn manual recoil control first; that makes it much easier to spot when a profile is overtuned.',
  }),
  guideDiscussion({
    slug: 'rust-elite-tier-modules',
    title: 'What additional tools are included in the Elite tier?',
    upvotes: 67,
    excerpt: 'The Elite guide explains how priority patches, advanced radar, and skin utility compare with Lite and Pro.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Rust Elite tier guide: full suite and priority patches',
    sourcePath: '/blog/rust-elite-cheats/',
    answer:
      'The guide describes Elite as including every Lite and Pro module plus advanced radar filters, skin unlock utility, cloud config sync, and first-in-line loader builds after Facepunch updates.',
    detail:
      'It also covers who benefits from upgrading after clean Pro sessions—not day-one buyers who still tune ESP distance.',
    tip: 'Compare included modules against your wipe style before upgrading; the full breakdown links to /products/rust-cheats/.',
  }),
  guideDiscussion({
    slug: 'rust-lite-vs-pro-diff',
    title: 'How do Lite and Pro differ in practice on official servers?',
    upvotes: 53,
    excerpt: 'Lite centers on ESP and radar; Pro adds no recoil, aimbot, and silent aim—here is the short version.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Rust Lite vs Pro: which cheat tier fits your playstyle',
    sourcePath: '/blog/rust-lite-vs-pro/',
    answer:
      'The comparison guide describes Lite as focused on awareness—player ESP, loot, sleeper tags, basic radar, and stream proof. Pro adds combat assistance on top of that foundation.',
    detail:
      'The right choice depends on whether you farm and roam for info alone or also want Pro combat modules described in the features guide.',
    tip: 'Use the full side-by-side comparison and features guide before checkout at rust-cheat.org.',
  }),
  guideDiscussion({
    slug: 'rust-skin-unlock-questions',
    title: 'What should I know about the skin unlock utility?',
    upvotes: 38,
    excerpt: 'The product guide explains client-side cosmetic preview and what to expect on official Facepunch servers.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Rust skin unlock and preview utility guide',
    sourcePath: '/blog/rust-skin-unlock-guide/',
    answer:
      'The guide describes skin unlock as a client-side cosmetic preview utility. It explains setup, Elite bundling, and that other players still see default skins on official.',
    detail:
      'Review compatibility and stream capture notes before showcasing skins on OBS—stream proof behavior differs for ESP versus cosmetics.',
    tip: 'Cosmetic changes are local previews only; they do not spawn items or replace Steam Market inventory.',
  }),
  guideDiscussion({
    slug: 'rust-eac-cannot-verify',
    title: 'What should I do if EAC cannot verify my Rust install?',
    upvotes: 24,
    excerpt: 'Start with Steam file verification and a clean EAC repair before assuming the issue is a hardware ban.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'Fix EAC unable to verify Rust on Steam',
    sourcePath: '/blog/rust-eac-unable-to-verify/',
    answer:
      'The troubleshooting guide says the message can result from corrupted game files or software conflicts and does not always mean an EAC ban. First verify Rust files through Steam.',
    detail:
      'It also recommends repairing Easy Anti-Cheat from the Rust install folder, rebooting, and checking overlays before loading any Rust Cheat loader.',
    tip: 'Launch Rust once clean through Steam before injecting supported builds from the operator portal.',
  }),
  guideDiscussion({
    slug: 'rust-external-loader',
    title: 'What does “external loader” mean for Rust?',
    upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines launch order with EAC on Facepunch official.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Rust external cheat loader guide',
    sourcePath: '/blog/rust-external-cheats/',
    answer:
      'The article uses “external” to describe software that runs separately from the Rust process and renders modules as an overlay—avoiding internal hooks EAC scans aggressively.',
    detail:
      'It discusses injection order, cloud configs, and why forum paste internals are not comparable to signed portal builds.',
    tip: 'Check rust-cheat.org status and compatibility whenever Facepunch ships an update.',
  }),
  guideDiscussion({
    slug: 'rust-stream-proof-test',
    title: 'How can I check whether OBS captures ESP or radar?',
    upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking playback before going live.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Rust stream proof setup for OBS and recorders',
    sourcePath: '/blog/rust-stream-proof-setup/',
    answer:
      'Record a short local test with the exact OBS Game Capture scene you plan to use, then review the playback for box outlines or radar dots.',
    detail:
      'The guide recommends testing Game Capture on Rust.exe separately from face cam sources, since multi-monitor setups behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'rust-hwid-after-change',
    title: 'What should I check after an EAC hardware ban or PC swap?',
    upvotes: 33,
    excerpt: 'The HWID guide covers spoofer workflow, new Steam discipline, and when to contact Rust Cheat support.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Rust HWID spoofer steps after an EAC ban',
    sourcePath: '/blog/rust-hwid-spoofer/',
    answer:
      'Start by confirming ban type—EAC hardware versus a single server ban. The guide explains spoofer order, clean Windows habits, and waiting for green loader status after patches.',
    detail:
      'Avoid changing several system identifiers at once without portal docs. If the loader does not recognize your device, contact support with the exact error text.',
    tip: 'Use official support for device resets instead of random third-party spoofer ads.',
  }),
  guideDiscussion({
    slug: 'before-installing-rust-cheats',
    title: 'What should I review before installing Rust Cheat modules?',
    upvotes: 18,
    excerpt: 'Check the features guide, tier comparison, and current status banner before first inject.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Rust cheats features guide: ESP, aimbot, radar, and more',
    sourcePath: '/blog/rust-cheats-features/',
    answer:
      'Read the features and tier tables first, confirm your PC matches loader requirements, and check the live status note on rust-cheat.org.',
    detail:
      'The site guide maps ESP, aimbot, radar, stream proof, and skin utility across Lite, Pro, and Elite with links to focused setup articles.',
    tip: 'Use /products/rust-cheats/ and the operator portal as the source of truth—never download from YouTube comment links.',
  }),
  guideDiscussion({
    slug: 'choose-rust-cheat-tier',
    title: 'How do I choose the right Rust cheat tier in 2026?',
    upvotes: 48,
    excerpt: 'Compare Lite, Pro, and Elite feature sets first, then follow secure checkout and portal download steps.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'How to buy Rust cheats in 2026',
    sourcePath: '/blog/how-to-buy-rust-cheats/',
    answer:
      'The buying guide recommends comparing modules in the features guide, picking Lite for awareness, Pro for PvP combat, or Elite for long-term operators, then completing checkout on rust-cheat.org.',
    detail:
      'It covers portal login, loader download, Defender exclusions per docs, and first launch with conservative presets on low pop.',
    tip: 'If you have a payment or account question, use site support—do not share purchase details in public threads.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'admin-commands-on-official',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can I use Rust admin commands on Facepunch official servers?',
    excerpt:
      'Quick answer from the admin guide: F1 moderation commands only work with auth on servers you control—not on EAC-protected official.',
    author: 'guide_team',
    age: '2 hours ago',
    commentsCount: 7,
    upvotes: 128,
    flair: 'Guide Q&A',
    sourceTitle: 'Rust server admin commands guide for owners',
    sourcePath: '/blog/rust-admin-commands-guide/',
    body: [
      'No. kick, ban, teleport, and inventory.give require auth level on your dedicated or hosted server. They never work on Facepunch official Steam servers protected by Easy Anti-Cheat.',
      'Use admin commands on community servers you operate for events and moderation. For official servers, legitimate awareness tools are described separately in the Rust Cheat features guide—not RCON kits.',
    ],
    comments: [
      {
        author: 'wipe_day_roamer',
        age: '1 hour ago',
        score: 24,
        body: 'Correct: ownerid and moderatorid live in users.cfg on your box. Official has no player admin unless Facepunch staff.',
      },
      {
        author: 'hosting_101',
        age: '48 min. ago',
        score: 11,
        body: 'The guide lists kick, ban, and global.say for wipe announcements. Remember server.writecfg after auth edits.',
      },
      {
        author: 'official_only',
        age: '35 min. ago',
        score: 8,
        body: 'Useful distinction. F1 client binds are not the same as admin spawn on official.',
      },
      {
        author: 'plugin_dev',
        age: '28 min. ago',
        score: 6,
        body: 'Ox plugins can expose chat /tp but that is server-side config—not something you run on Facepunch official.',
      },
      {
        author: 'event_host',
        age: '22 min. ago',
        score: 5,
        body: 'We use global.say for wipe timers on our community host. Zero overlap with ranked cheat modules.',
      },
      {
        author: 'new_mod',
        age: '15 min. ago',
        score: 4,
        body: 'Bookmarked the admin guide—status and kick syntax in one place.',
      },
    ],
  },
  {
    slug: 'rust-f1-console-enable',
    category: 'General',
    categoryTone: 'purple',
    title: 'How do I open the Rust F1 console on Steam PC?',
    excerpt: 'Enable the console under Rust options, then use client cvars or admin auth depending on the server.',
    author: 'guide_team',
    age: '4 hours ago',
    commentsCount: 2,
    upvotes: 86,
    flair: 'Guide Q&A',
    sourceTitle: 'How to use Rust admin commands and the F1 console',
    sourcePath: '/blog/rust-admin-commands-how-to/',
    body: [
      'Press F1 in-game after enabling the console under Rust → Options → Interface. Client commands adjust graphics and binds anywhere; admin commands require moderator or owner auth on that server instance.',
      'If a command returns unknown, confirm you are on the right server type—official players cannot run spawn or give commands without plugin-specific chat aliases.',
    ],
    comments: [
      {
        author: 'bind_saver',
        age: '3 hours ago',
        score: 17,
        body: 'Store persistent binds in client.cfg so official wipes do not reset your med and torch keys.',
      },
      {
        author: 'new_host',
        age: '2 hours ago',
        score: 9,
        body: 'Run status once connected to copy your Steam64 before adding ownerid in users.cfg.',
      },
    ],
  },
  {
    slug: 'rust-client-cvars',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What is a safe way to tune visibility and FPS with F1 client commands?',
    excerpt: 'Use legitimate client cvars for shadows and draw distance—then compare with ESP setup if you use Rust Cheat Lite.',
    author: 'guide_team',
    age: '6 hours ago',
    commentsCount: 2,
    upvotes: 64,
    flair: 'Guide Q&A',
    sourceTitle: 'Rust console commands and tips every player should know',
    sourcePath: '/blog/rust-console-commands/',
    body: [
      'Adjust graphics.shadowquality, graphics.drawdistance, and effects.quality in F1 to balance FPS during raids. These settings work on official without admin auth.',
      'Client cvars cannot reveal players through walls or bypass EAC. For awareness beyond vanilla, read the ESP setup guide and compare tiers at /products/rust-cheats/.',
    ],
    comments: [
      {
        author: 'fps_raider',
        age: '5 hours ago',
        score: 13,
        body: 'I lower shadow quality before online raids. Helps more than random forum “console wallhacks.”',
      },
      {
        author: 'solo_farmer',
        age: '4 hours ago',
        score: 6,
        body: 'Document binds in client.cfg—saves time every wipe on official.',
      },
    ],
  },
  {
    slug: 'rust-patch-day-checks',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What should I check before playing after a Facepunch patch?',
    excerpt: 'The EAC patch-day checklist recommends status banner, loader update, and conservative configs before official queues.',
    author: 'guide_team',
    age: '9 hours ago',
    commentsCount: 2,
    upvotes: 42,
    flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist for Rust on Steam',
    sourcePath: '/blog/eac-patch-day-checklist/',
    body: [
      'Read the rust-cheat.org status banner first. After a game update, wait for a compatible loader build, download from the portal, then verify ESP alignment on low pop before main wipe night.',
      'If EAC fails to start, fix verification errors before injecting anything. The checklist covers Facepunch update discipline in more detail.',
    ],
    comments: [
      {
        author: 'patch_patrol',
        age: '8 hours ago',
        score: 12,
        body: 'Testing after the update before high pop is the part I used to skip. Now I check status and run one conservative session.',
      },
      {
        author: 'duo_builder',
        age: '7 hours ago',
        score: 7,
        body: 'Agree. If the banner is yellow, wait. Guessing offsets is worse than a checklist.',
      },
    ],
  },
  {
    slug: 'rust-lite-pro-combat',
    category: 'Community',
    categoryTone: 'green',
    title: 'Lite or Pro: which tier includes aimbot and no recoil?',
    excerpt: 'Our comparison guide breaks it down: Lite is ESP and radar; Pro adds combat modules for official PvP.',
    author: 'guide_team',
    age: '12 hours ago',
    commentsCount: 1,
    upvotes: 31,
    flair: 'Guide Q&A',
    sourceTitle: 'Rust Lite vs Pro: which cheat tier fits your playstyle',
    sourcePath: '/blog/rust-lite-vs-pro/',
    body: [
      'According to the comparison guide, Lite centers on player ESP, loot and sleeper tags, resource nodes, basic radar, and stream proof. Pro includes those modules and adds no recoil, aimbot, and silent aim.',
      'The best fit depends on whether you farm for awareness or roam for fights. Read the full comparison and features guide before checkout.',
    ],
    comments: [
      {
        author: 'one_more_wipe',
        age: '10 hours ago',
        score: 10,
        body: 'The comparison page shows which modules ship in each tier instead of only marketing headlines.',
      },
    ],
  },
  {
    slug: 'rust-f1-admin-vs-chat',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'When should server owners use F1 console instead of chat commands?',
    excerpt: 'Admins run moderation in F1; plugins add chat aliases—see the F1 console guide for syntax.',
    author: 'guide_team',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 27,
    flair: 'Guide Q&A',
    sourceTitle: 'Rust F1 console commands for admins: chat vs console',
    sourcePath: '/blog/rust-f1-console-commands/',
    body: [
      'Use F1 for kick, ban, teleport, and global.say when you hold auth. uMod chat commands like /kit are plugin-specific and should be documented in your server rules.',
      'RCON mirrors F1 for headless hosts—never leak passwords. None of this grants ESP on official; external modules are covered in the Rust Cheat external loader guide.',
    ],
    comments: [
      {
        author: 'mod_team_lead',
        age: '20 hours ago',
        score: 10,
        body: 'Log console actions for appeals. Chat teleports confuse players who think you are cheating on official.',
      },
      {
        author: 'rcon_script',
        age: '18 hours ago',
        score: 5,
        body: 'Same commands as F1 over RCON for automated restarts—keep the password out of Discord screenshots.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
