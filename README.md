# rust-cheat.org

Static Astro site for [Rust Cheat](https://rust-cheat.org) — Rust cheat tiers, utilities, blog, forum, and SEO-optimized pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Cloudflare (Pages or Workers static assets)

1. **Build command:** `npm run build`
2. **Output / assets directory:** `dist`
3. **Workers deploy:** `npx wrangler deploy` — uses repo `wrangler.toml` (static files only; no Cloudflare Astro adapter).
4. **Pages (recommended):** leave **Deploy command empty**; only build + publish `dist`.

Full OS handoff steps: [`DEPLOYMENT.md`](DEPLOYMENT.md).

Do not let Wrangler auto-run `astro add cloudflare` — this site is fully static.

## Optional environment

Copy [`.env.example`](.env.example) to `.env` for local analytics or IndexNow during build.
