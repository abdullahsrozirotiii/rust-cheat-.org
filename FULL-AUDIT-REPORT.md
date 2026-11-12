# SEO Full Audit — rust-cheat.org

**Audit date:** 2026-11-11  
**Primary URL:** https://rust-cheat.org/  
**Evidence base:** Production `dist/` build (post-rebrand) + `parse_html.py` on `dist/index.html`. Live URL fetch returned HTTP 500 / DNS resolution failed in this environment — live Technical & CWV scores marked with lower confidence until post-Cloudflare verification.

## Overall score

| Overall | Rating |
|---------|--------|
| **78 / 100** | Good (Needs Improvement on a few high-impact items) |

## Category scores (weighted)

| Category | Weight | Score | Confidence |
|----------|--------|-------|------------|
| Technical SEO | 25% | 84 | Likely (build); live unverified |
| Content quality | 20% | 74 | Confirmed (source + dist) |
| On-page SEO | 15% | 88 | Confirmed |
| Schema / structured data | 15% | 68 | Confirmed |
| Performance (CWV) | 10% | 92 | Likely (local Lighthouse preview) |
| Image SEO | 10% | 76 | Confirmed |
| AI search readiness (GEO) | 5% | 45 | Confirmed |

---

## Summary findings

| Element | Value | Severity |
|---------|-------|----------|
| Title | `Rust Cheats – ESP, Aimbot & No Recoil \| Rust Cheat` (50 chars) | Pass |
| Meta description | 149 chars, primary keyword + domain | Pass |
| Canonical | `https://rust-cheat.org/` | Pass |
| Robots | `index, follow` | Pass |
| robots.txt | Allow `/`, Disallow `/go/`, sitemap declared | Pass |
| Sitemap | 52 URLs, `https://rust-cheat.org/...` | Pass |
| H1 | Rust Cheats + subtitle (hero) | Pass |
| og:image | `DEFAULT_OG_IMAGE` empty → weak social preview | Warning |
| FAQPage JSON-LD | On home + `/faq/` (commercial site) | Warning |
| Product schema | Validator: missing `@type` on one block (elite page) | Warning |
| llms.txt | Not present | Info |
| Live site | 500 / DNS fail in audit environment | Critical (deploy) |

---

## Technical SEO

**Pass**
- Static Astro output; trailing-slash canonicals consistent.
- `sitemap.xml` and RSS linked in `<head>`.
- Internal linking: products, blog (18 posts), forum, support.

**Warnings**
- Domain not reliably reachable at audit time — confirm Cloudflare SSL, apex/www, and 200 on `/` before indexing push.
- Legacy redirect HTML for old `/cheats/` paths present (good); ensure 301 behavior on Cloudflare matches `scripts/redirects.mjs`.

---

## On-page SEO

**Pass**
- Homepage targets **rust cheats** in title, description, H1 line 1.
- Per-route metadata in `pageSeo.ts` for money pages.
- One primary H1 on product templates via `ProductDetailHeader`.

**Info**
- Hero H1 uses two visual lines; parser may concatenate text — acceptable for UX, monitor in Search Console.

---

## Content

**Pass**
- Substantial guides (ESP, EAC, tiers, HWID) support informational intent.
- Product pages now feature-rich without on-site pricing (checkout off-site).

**Warning**
- Niche (game cheats) faces trust / policy scrutiny — strengthen About, Terms, Support E-E-A-T signals and avoid overclaiming “undetected” without dated status proof.

---

## Schema

**Pass**
- `WebSite`, `Organization` on home; `Product`, `BreadcrumbList` on products; `Article` on blog.

**Warnings**
- **FAQPage** on homepage and FAQ — Google restricts FAQ rich results for most commercial sites (since 2023). Low risk of rich snippet, not a penalty, but low ROI.
- Run full JSON-LD review on product pages — validator reported missing `@type` on one block.

---

## Performance

**Likely (local preview, not production CDN)**
- Lighthouse (prior run): Performance 100 mobile/desktop; SEO 100; Accessibility 87–96.

Re-test on `https://rust-cheat.org/` after Cloudflare deploy.

---

## Images

**Pass**
- WebP gameplay assets, responsive widths, alt text on brand mark.

**Warning**
- Hero carousel uses placeholder `data:image/gif` until JS/hydration — ensure real `src` in HTML where possible for LCP bots.

---

## GEO / AI search

**Info**
- No `llms.txt`; robots allows major crawlers by default. Optional: add `llms.txt` + `PUBLIC_ORG_SAME_AS` for entity clarity.

---

## Environment limitations

- `https://rust-cheat.org/` — fetch 500 (WebFetch) / DNS error (robots_checker).
- PageSpeed Insights and live CWV not run against production.
- Broken-link crawl not run on live host.

Confidence on **live** technical & performance categories: **Hypothesis** until redeploy verification.
