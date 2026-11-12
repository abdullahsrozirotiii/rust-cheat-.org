export type ProductPlanId = 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const standardPlans: ProductPlan[] = [
  { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / month' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

const ugcPlans: ProductPlan[] = [
  { id: 'onetime', label: 'One-time access', priceUsd: 50, priceNote: 'USD · one-time' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'ugc') return ugcPlans;
  return standardPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

/** Short price line for product catalog cards (uses default plan). */
export function getCatalogPriceLine(productSlug: string): string {
  const plan = getProductPlans(productSlug)[0]!;
  const note = plan.priceNote
    .replace(/^USD\s*\/\s*/i, '')
    .replace(/^USD\s*·\s*/i, '')
    .trim();
  return `${formatPlanPrice(plan.priceUsd)} / ${note}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
