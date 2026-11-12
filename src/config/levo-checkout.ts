/** External Zadeyo affiliate checkout URLs (Buy now targets). */
export const ZADEYO_CHECKOUT = {
  rustCheats: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Frust',
  hwidSpoofer: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fugc',
  skinChanger: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fskin-changer',
} as const;

/** @deprecated Use ZADEYO_CHECKOUT */
export const LEVO_CHECKOUT = ZADEYO_CHECKOUT;

/** Catalog card title for Lite / Pro / Elite bundle (Elite product row). */
export const RUST_CHEATS_CATALOG_TITLE = 'Rust Cheats (Lite • Pro • Elite)';

export function zadeyoCheckoutForSlug(slug: string): string {
  switch (slug) {
    case 'rust-skin-unlock':
    case 'unlock-all':
      return ZADEYO_CHECKOUT.skinChanger;
    case 'rust-hwid-spoofer':
    case 'hwid-spoofer':
      return ZADEYO_CHECKOUT.hwidSpoofer;
    case 'rust-ugc':
    case 'ugc':
    case 'account-recovery':
      return ZADEYO_CHECKOUT.ugc;
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return ZADEYO_CHECKOUT.rustCheats;
  }
}

export function isExternalCheckoutUrl(url: string): boolean {
  return url.startsWith('http');
}

/** Zadeyo product pages — reference URLs for feature copy (detail pages on rust-cheat.org). */
export const ZADEYO_PRODUCT_DETAIL = {
  rustCheats: 'https://zadeyo.com/products/rust-cheats',
  hwidSpoofer: 'https://zadeyo.com/products/hwid-spoofer',
  ugc: 'https://zadeyo.com/products/ugc',
  skinChanger: 'https://zadeyo.com/products/skin-changer-cheats',
} as const;

export function zadeyoDetailUrlForSlug(slug: string): string {
  switch (slug) {
    case 'rust-skin-unlock':
    case 'unlock-all':
      return ZADEYO_PRODUCT_DETAIL.skinChanger;
    case 'rust-hwid-spoofer':
    case 'hwid-spoofer':
      return ZADEYO_PRODUCT_DETAIL.hwidSpoofer;
    case 'rust-ugc':
    case 'ugc':
    case 'account-recovery':
      return ZADEYO_PRODUCT_DETAIL.ugc;
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return ZADEYO_PRODUCT_DETAIL.rustCheats;
  }
}
