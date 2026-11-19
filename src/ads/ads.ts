// ==========================================
// Ads (Google AdMob), Android/iOS app only.
//
// An ad card shows up in the swipe deck every AD_EVERY dishes. The web version
// (GitHub Pages, the QR code at the stand) never shows ads: the native ad plugin
// does not work in a browser.
//
// Until Kaydırak's own AdMob IDs are filled in below, Google's test ads are shown
// (a "Test Ad" label, no money is earned). Fill in NATIVE_AD_UNIT_ID_ANDROID and
// the application ID in android/app/src/main/res/values/strings.xml to earn.
// ==========================================
import { Capacitor } from "@capacitor/core";

// One ad card after every this many swiped dishes.
export const AD_EVERY = 8;

// AdMob > Apps > Kaydırak > Ad units > Native advanced: "ca-app-pub-XXXXXXXX/YYYYYYYY".
// Empty = Google's test ad unit.
export const NATIVE_AD_UNIT_ID_ANDROID = "";
export const NATIVE_AD_UNIT_ID_IOS = "";

export const AD_FEED_ID = "kaydirak-swipe";

export const nativeAdUnitId = (): string =>
  Capacitor.getPlatform() === "ios" ? NATIVE_AD_UNIT_ID_IOS : NATIVE_AD_UNIT_ID_ANDROID;

export const adsSupported = (): boolean => Capacitor.isNativePlatform();

// Is an ad card due? `swipesSinceAd` = dishes swiped since the last ad card (or app start).
// Pure, so it can be unit tested.
export const adDue = (swipesSinceAd: number, every = AD_EVERY): boolean => every > 0 && swipesSinceAd >= every;

let ready: Promise<boolean> | null = null;

// Ask for privacy consent (Google's form, only where the law requires it, e.g. the EU),
// then start the AdMob SDK. Resolves false when ads cannot be shown; the app keeps working.
export const prepareAds = (): Promise<boolean> => {
  if (!adsSupported()) return Promise.resolve(false);
  if (ready) return ready;
  ready = (async () => {
    try {
      const { AdMob, AdmobConsentStatus } = await import("@capacitor-community/admob");
      let consent = await AdMob.requestConsentInfo();
      if (consent.isConsentFormAvailable && consent.status === AdmobConsentStatus.REQUIRED) {
        consent = await AdMob.showConsentForm();
      }
      if (!consent.canRequestAds) return false;
      await AdMob.initialize();
      return true;
    } catch (err) {
      console.warn("Reklamlar başlatılamadı", err);
      ready = null; // try again next time
      return false;
    }
  })();
  return ready;
};

// Privacy choices screen (Profile), for users who want to change their ad consent.
export const showAdPrivacyOptions = async (): Promise<void> => {
  if (!adsSupported()) return;
  try {
    const { AdMob } = await import("@capacitor-community/admob");
    await AdMob.showPrivacyOptionsForm();
  } catch (err) {
    console.warn("Gizlilik seçenekleri açılamadı", err);
  }
};
