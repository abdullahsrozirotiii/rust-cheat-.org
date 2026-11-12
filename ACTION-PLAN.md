# SEO Action Plan — rust-cheat.org

Prioritized by impact. Effort: S = small, M = medium, L = large.

## Critical (before / right after launch)

| # | Fix | Why | Effort |
|---|-----|-----|--------|
| 1 | Deploy `dist/` to Cloudflare; fix **200 OK** on `https://rust-cheat.org/` | Site not auditable live; no indexing value until stable | S (ops) |
| 2 | Submit **sitemap** in Google Search Console & Bing: `https://rust-cheat.org/sitemap.xml` | Discovery for 52 URLs | S |
| 3 | Verify **SSL Full (strict)** and trailing-slash URLs match canonicals | Avoid duplicate / redirect chains | S |

## High impact (within 2 weeks)

| # | Fix | Why | Effort |
|---|-----|-----|--------|
| 4 | Set **`DEFAULT_OG_IMAGE`** to 1200×630 asset (e.g. hero still or branded OG card) in `seo.ts` | Empty og:image hurts social CTR and sharing previews | S |
| 5 | Fix **Product JSON-LD** — ensure every block has `@type` (elite page validator warning) | Cleaner rich-result eligibility | S |
| 6 | Re-run **Lighthouse + PageSpeed** on production mobile | Confirm CWV after CDN | S |
| 7 | Optional: remove **FAQPage** schema from homepage; keep FAQ content visible only | FAQ rich results not for commercial sites; reduces noise | S |

## Medium impact (within 1 month)

| # | Fix | Why | Effort |
|---|-----|-----|--------|
| 8 | Add **`llms.txt`** in `public/` with site summary + key URLs | AI search / crawler clarity | S |
| 9 | Set **`PUBLIC_ORG_SAME_AS`** (Discord, X) in production env | Organization entity in schema | S |
| 10 | Enable **`INDEXNOW_KEY`** on build for faster Bing indexing | Optional speed boost | S |
| 11 | Audit **“undetected”** claims — tie to status banner + dated patch notes | E-E-A-T and policy safety | M |
| 12 | Hero images: prefer **real `src` in HTML** vs placeholder gif for LCP | Image SEO + CWV | M |

## Ongoing

| # | Fix | Why | Effort |
|---|-----|-----|--------|
| 13 | Monthly GSC: top queries → tune `pageSeo.ts` titles (≤60 chars) | CTR | S |
| 14 | Internal links from new blog posts to product tiers | Link equity | S |
| 15 | Monitor Core Updates + EAC patch posts freshness | Content decay | M |

## Post-deploy verification checklist

- [ ] `curl -I https://rust-cheat.org/` → 200
- [ ] `https://rust-cheat.org/robots.txt` matches repo
- [ ] `https://rust-cheat.org/sitemap.xml` — 52 URLs
- [ ] Rich Results Test on home + one product + one blog post
- [ ] Mobile PageSpeed: LCP, INP, CLS in “Good” range
