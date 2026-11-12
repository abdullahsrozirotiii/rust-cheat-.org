# Search Console workflow (rust-cheat.org)

Verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `rust-cheat.org`.
2. Under **Sitemaps**, submit: `https://rust-cheat.org/sitemap.xml`
3. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters). Optional: enable [IndexNow](https://www.indexnow.org/) using `INDEXNOW_KEY` at build time (key file published at `https://rust-cheat.org/{key}.txt`).

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For queries that map to existing routes, edit the matching entry in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Keep titles near **~60 characters**; descriptions **~150–160** with natural keyword use (primary: **rust cheats**).
5. Deploy and allow 1–2 weeks before judging CTR.

## Path cheat sheet

| Common query intent | Path / file |
| ------------------- | ----------- |
| rust cheats (broad) | `/` → `PAGE_SEO['/']` |
| buy / compare tiers | `/products/rust-cheats/`, `/blog/rust-lite-vs-pro/` |
| rust aimbot, esp | `/products/rust-cheats/pro/`, blog posts |
| hwid spoofer, skin unlock | `/products/rust-cheats/utilities/` |
| eac / loader status | `/blog/eac-patch-day-checklist/` |
| purchase / refund | `/terms/`, `/support/` |

Blog posts use per-article metadata in [`src/data/blog/blogSeo.ts`](../src/data/blog/blogSeo.ts) when present.
