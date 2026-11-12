/** Per-post meta titles, descriptions, and optional H1 overrides (display title stays in posts.ts). */
export const BLOG_SEO: Record<
  string,
  { metaTitle: string; metaDescription: string; h1?: string }
> = {
  'rust-admin-commands-guide': {
    metaTitle: 'Admin Commands for Server Owners',
    metaDescription:
      'Rust admin commands reference for dedicated servers—auth levels, kick, ban, kits, and wipe tools. Not for Facepunch official EAC servers.',
    h1: 'Rust server admin commands guide for owners (not third-party cheats)',
  },
  'rust-console-commands': {
    metaTitle: 'Commands – F1 Client Tips for Steam PC',
    metaDescription:
      'Rust F1 client commands for graphics, binds, and performance on Steam PC—no server admin auth required. Full commands reference for players.',
    h1: 'Rust client console commands on Steam, F1 tips, and cheats contrast',
  },
  'rust-admin-commands-how-to': {
    metaTitle: 'Admin F1 Console & Moderation Guide',
    metaDescription:
      'Grant auth, open the F1 console on your Rust server, and run moderation commands safely—host and RCON workflow for dedicated servers.',
    h1: 'How to use Rust admin commands: F1 moderation guide on official servers',
  },
  'rust-cheats-features': {
    metaTitle: 'Rust Cheats Features: ESP, Aimbot & Radar',
    metaDescription:
      'Compare Rust cheat modules—player ESP, loot ESP, radar, no recoil, and aimbot—and how Lite, Pro, and Elite tiers differ.',
  },
  'rust-f1-console-commands': {
    metaTitle: 'Rust F1 Console Commands for Admins',
    metaDescription:
      'Admin-focused Rust F1 console syntax—chat vs console, RCON, and moderation on community servers you control.',
  },
  'rust-lite-vs-pro': {
    metaTitle: 'Lite vs Pro: Which Cheat Tier Fits You?',
    metaDescription:
      'Rust Lite vs Pro compared for official servers—ESP and radar on Lite; no recoil, aimbot, and silent aim on Pro. Tier comparison before checkout.',
    h1: 'Rust Lite vs Pro: which cheats tier fits your playstyle',
  },
  'rust-elite-cheats': {
    metaTitle: 'Rust Elite Cheats: Full Tier Guide',
    metaDescription:
      'What Rust Elite includes—full ESP and combat suite, expanded radar, skin utility, and priority EAC patch delivery.',
  },
  'rust-aimbot-pvp-guide': {
    metaTitle: 'Rust Aimbot Settings for Official PvP',
    metaDescription:
      'Tune Rust aimbot FOV, smoothing, and bone selection for AK and bolt fights—conservative presets before main wipe.',
  },
  'rust-esp-setup': {
    metaTitle: 'Rust ESP Setup: Players, Loot & Sleepers',
    metaDescription:
      'Configure Rust player ESP, loot ESP, sleeper tags, and distance limits with portal presets for Facepunch official.',
  },
  'rust-radar-loot-esp-guide': {
    metaTitle: 'Rust Radar & Loot ESP for Farming',
    metaDescription:
      'Rust radar filters, loot ESP categories, and farming routes for sulfur, metal, and monument runs on official.',
  },
  'rust-skin-unlock-guide': {
    metaTitle: 'Rust Skin Unlock & Local Preview Guide',
    metaDescription:
      'How Rust skin unlock preview works on your client, Elite bundling, and what other players see on official servers.',
  },
  'eac-patch-day-checklist': {
    metaTitle: 'Eac Patch – Facepunch Update Day Checklist',
    metaDescription:
      'Eac Patch: After a Facepunch update, check cheat status, update the loader, and test ESP on low pop before joining official servers.',
    h1: 'EAC patch day checklist after Facepunch update for Rust cheats on Steam',
  },
  'rust-hwid-spoofer': {
    metaTitle: 'Rust HWID Spoofer Steps After an EAC Ban',
    metaDescription:
      'Hardware ban vs account ban on Rust, spoofer order, restore points, and when to use the HWID Spoofer utility.',
  },
  'how-to-buy-rust-cheats': {
    metaTitle: 'Buy Rust – Portal Checkout & Tiers',
    metaDescription:
      'Pick Lite, Pro, or Elite, complete checkout, and download from the portal—tier comparison and buy Rust walkthrough before your first official wipe.',
    h1: 'How to buy Rust cheats in 2026: portal checkout and tier comparison',
  },
  'rust-no-recoil-silent-aim': {
    metaTitle: 'Rust No Recoil & Silent Aim Configuration',
    metaDescription:
      'Weapon profiles, smoothing, and silent aim modes for Rust Pro—start below max settings on official servers.',
  },
  'rust-eac-unable-to-verify': {
    metaTitle: 'Fix EAC Unable to Verify Rust on Steam',
    metaDescription:
      'Repair Easy Anti-Cheat, verify Rust game files, and rule out software conflicts before using any loader.',
  },
  'rust-external-cheats': {
    metaTitle: 'Rust External Cheat & Loader Explained',
    metaDescription:
      'What an external Rust loader does, launch order with EAC, and why portal builds differ from random downloads.',
  },
  'rust-stream-proof-setup': {
    metaTitle: 'Rust Stream Proof Setup for OBS',
    metaDescription:
      'Test OBS Game Capture with Rust stream proof enabled so ESP and radar stay off your recording.',
  },
};
