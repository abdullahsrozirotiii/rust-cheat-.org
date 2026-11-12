# Deployment — rust-cheat.org (OS Department)

Static Astro site. **No SSR adapter.** Do not run `astro add cloudflare`.

## Requirements

- **Node.js** `>=22.12.0` (see `package.json` `engines`)
- npm (use `npm ci` when `package-lock.json` is present)

## Build

```bash
npm ci
npm run build
```

Output directory: **`dist/`**

Build pipeline: image optimize → Astro static build → prune images → finalize sitemap → IndexNow (skipped if `INDEXNOW_KEY` unset).

## Cloudflare options

### Option A — Cloudflare Pages (recommended for static)

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | *(leave empty)* |
| Node version | 22+ |

Attach custom domain **`rust-cheat.org`** (and `www` if needed). Use **Full (strict)** SSL.

### Option B — Cloudflare Workers (static assets)

Uses [`wrangler.toml`](wrangler.toml):

```bash
npm run build
npx wrangler deploy
```

`[assets]` points at `./dist` with `html_handling = "auto-trailing-slash"` (matches Astro `trailingSlash: 'always'`).

## Environment variables (optional)

See [`.env.example`](.env.example). Set in Cloudflare dashboard for production builds if analytics or IndexNow are required.

## Local smoke test

```bash
npm run preview
# or production-like server with redirects:
npm start
```

Redirect verification (requires existing `dist/`):

```bash
node scripts/test-url-redirects.mjs
```

## DNS / domain (OS)

1. Point `rust-cheat.org` to Cloudflare Pages or Workers project.
2. Ensure HTTPS and trailing-slash behavior match production URLs (canonicals use `https://rust-cheat.org/.../`).

## Post-deploy SEO

See [`docs/search-console.md`](docs/search-console.md) — submit `https://rust-cheat.org/sitemap.xml`.

## Checkout

Purchase flows use external Zadeyo URLs and internal `/go/*` redirect pages (`robots.txt` disallows `/go/`). No server-side secrets required for static deploy.
