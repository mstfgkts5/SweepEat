// ==========================================
// Kaydırak Plus: a Google Play subscription that turns the ad cards off.
//
// Play Console > Monetize > Subscriptions must have:
//   product ID  "kaydirak_plus"
//   base plans  "aylik" (monthly) and "yillik" (yearly)
// Prices are set there; the app shows whatever Play returns, in the user's currency.
//
// The subscription is checked on the device with Google Play (no server of our own).
// The last known state is remembered so the app starts ad-free while offline.
// ==========================================
import { Capacitor } from "@capacitor/core";

export const PLUS_PRODUCT_ID = "kaydirak_plus";
export const PLUS_PLANS = ["aylik", "yillik"] as const;
export type PlusPlanId = (typeof PLUS_PLANS)[number];

const PLUS_KEY = "kaydirak_plus_v1";

export const plusSupported = (): boolean => Capacitor.getPlatform() === "android";

export interface PlusPlan {
  planId: string;
  price: string; // formatted by Play, e.g. "₺49,99"
  offerToken?: string;
}

// Minimal shape of a Play purchase, so the check can be unit tested without the plugin.
export interface PurchaseLike {
  productIdentifier: string;
  purchaseState?: string;
  isActive?: boolean;
  subscriptionState?: string;
}

// Does this list of purchases contain an active Kaydırak Plus? Android reports
// purchaseState "1" (PURCHASED) for an owned subscription; iOS uses isActive.
export const hasActivePlus = (purchases: PurchaseLike[]): boolean =>
  purchases.some(
    (p) =>
      p.productIdentifier === PLUS_PRODUCT_ID &&
      p.subscriptionState !== "expired" &&
      p.subscriptionState !== "revoked" &&
      (p.purchaseState === "1" || p.isActive === true)
  );

export const loadSavedPlus = (): boolean => {
  try {
    return localStorage.getItem(PLUS_KEY) === "1";
  } catch {
    return false;
  }
};

const savePlus = (on: boolean) => {
  try {
    if (on) localStorage.setItem(PLUS_KEY, "1");
    else localStorage.removeItem(PLUS_KEY);
  } catch {
    // storage unavailable: the state is kept in memory only
  }
};

const plugin = async () => (await import("@capgo/native-purchases")).NativePurchases;
const SUBS = "subs" as import("@capgo/native-purchases").PURCHASE_TYPE;

// Ask Google Play whether this account has Plus. Returns null when Play cannot be
// reached (offline), so the caller keeps the remembered state.
export const checkPlus = async (): Promise<boolean | null> => {
  if (!plusSupported()) return false;
  try {
    const np = await plugin();
    const { purchases } = await np.getPurchases({ productType: SUBS });
    const on = hasActivePlus(purchases);
    savePlus(on);
    return on;
  } catch (err) {
    console.warn("Plus durumu alınamadı", err);
    return null;
  }
};

// The monthly and yearly plans with their Play prices, monthly first.
export const loadPlusPlans = async (): Promise<PlusPlan[]> => {
  if (!plusSupported()) return [];
  const np = await plugin();
  const { products } = await np.getProducts({ productIdentifiers: [PLUS_PRODUCT_ID], productType: SUBS });
  const plans: PlusPlan[] = [];
  for (const id of PLUS_PLANS) {
    // One entry per offer; prefer the base offer (the plain recurring price).
    const offers = products.filter((p) => p.identifier === id);
    const base = offers.find((p) => !p.introductoryPrice) ?? offers[0];
    if (base) plans.push({ planId: id, price: base.priceString, offerToken: base.offerToken });
  }
  return plans;
};

// Opens Google Play's purchase sheet. Resolves true when Plus is active afterwards.
export const buyPlus = async (plan: PlusPlan): Promise<boolean> => {
  const np = await plugin();
  await np.purchaseProduct({
    productIdentifier: PLUS_PRODUCT_ID,
    productType: SUBS,
    planIdentifier: plan.planId,
    ...(plan.offerToken ? { offerToken: plan.offerToken } : {})
  });
  return (await checkPlus()) === true;
};

// "Satın alımları geri yükle": a new phone or a reinstall with the same Google account.
export const restorePlus = async (): Promise<boolean> => {
  if (!plusSupported()) return false;
  try {
    const np = await plugin();
    await np.restorePurchases();
  } catch {
    // Android has nothing to restore separately; the check below is what counts
  }
  return (await checkPlus()) === true;
};

// Google Play's own page to cancel or change the subscription.
export const managePlus = async (): Promise<void> => {
  const np = await plugin();
  await np.manageSubscriptions();
};
