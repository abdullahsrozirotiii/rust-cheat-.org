import { ZADEYO_CHECKOUT, zadeyoCheckoutForSlug } from './levo-checkout';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = {
  rustCheats: ZADEYO_CHECKOUT.rustCheats,
  skinChanger: ZADEYO_CHECKOUT.skinChanger,
  hwidSpoofer: ZADEYO_CHECKOUT.hwidSpoofer,
  ugc: ZADEYO_CHECKOUT.ugc,
} as const;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  rustCheats: 'rust',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Default Buy now target (Rust cheats bundle). */
export const PRIMARY_CHECKOUT_PATH = ZADEYO_CHECKOUT.rustCheats;

/** Map internal product slugs to Zadeyo affiliate checkout URLs. */
export function checkoutForSlug(slug: string): string {
  return zadeyoCheckoutForSlug(slug);
}

/** Legacy /go/* paths still redirect server-side; prefer checkoutForSlug on buttons. */
export function checkoutPath(product: CheckoutProduct = 'rustCheats'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return url;
    }
  }

  if (href.includes('%2Fproducts%2Frust') || href.includes('/products/rust')) {
    return ZADEYO_CHECKOUT.rustCheats;
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return ZADEYO_CHECKOUT.skinChanger;
  }
  if (
    href.includes('%2Fproducts%2Fhwid-spoofer') ||
    href.includes('/products/hwid-spoofer') ||
    href.includes('/products/rust-cheats/rust-hwid-spoofer')
  ) {
    return ZADEYO_CHECKOUT.hwidSpoofer;
  }
  if (
    href.includes('%2Fproducts%2Fugc') ||
    href.includes('/products/ugc') ||
    href.includes('/products/rust-cheats/rust-ugc')
  ) {
    return ZADEYO_CHECKOUT.ugc;
  }
  if (href.includes('%2Fproducts%2Fdota-2') || href.includes('/products/dota-2')) {
    return ZADEYO_CHECKOUT.rustCheats;
  }

  return href;
}
