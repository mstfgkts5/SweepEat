import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Crown } from "lucide-react";
import { AD_FEED_ID, nativeAdUnitId, prepareAds } from "../ads/ads";

interface AdCardProps {
  // Stable id of this ad position in the deck (e.g. "after-16").
  slotKey: string;
  language: "tr" | "en";
  // An overlay (dish detail, guide) covers the deck: the native ad must hide.
  paused: boolean;
  // Leave the ad: the user tapped "Devam", or no ad could be loaded.
  onDone: () => void;
}

// Google's ad is a native view drawn above the app, in the slot this card reserves.
// It cannot follow a dragged/rotated card, so this card stays still and is left with a button.
const LOAD_TIMEOUT_MS = 8000;

const AdCard: React.FC<AdCardProps> = ({ slotKey, language, paused, onDone }) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<import("@capacitor-community/admob").NativeAdFeed | null>(null);
  const [loaded, setLoaded] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const removers: Array<() => Promise<void>> = [];
    const giveUp = () => {
      if (!cancelled) doneRef.current();
    };

    (async () => {
      const ok = await prepareAds();
      if (cancelled) return;
      if (!ok) return giveUp();
      try {
        const { NativeAdFeed, NativeAdPluginEvents, NativeAdTemplate } = await import("@capacitor-community/admob");
        const adId = nativeAdUnitId();
        const feed = await NativeAdFeed.create({
          feedId: AD_FEED_ID,
          template: NativeAdTemplate.Medium,
          ...(adId ? { adId } : { isTesting: true }),
          style: {
            backgroundColor: "#FFFFFF",
            cornerRadius: 20,
            headlineColor: "#1D2D44",
            bodyColor: "#4A5A70",
            callToActionBackgroundColor: "#2A9D8F",
            callToActionTextColor: "#FFFFFF"
          }
        });
        if (cancelled) {
          await feed.destroy();
          return;
        }
        feedRef.current = feed;
        const onLoaded = await feed.addListener(NativeAdPluginEvents.Loaded, () => {
          if (!cancelled) {
            clearTimeout(timer);
            setLoaded(true);
          }
        });
        const onFailed = await feed.addListener(NativeAdPluginEvents.FailedToLoad, giveUp);
        removers.push(() => onLoaded.remove(), () => onFailed.remove());
        timer = setTimeout(giveUp, LOAD_TIMEOUT_MS);
        if (slotRef.current) feed.attach(slotKey, slotRef.current);
      } catch (err) {
        console.warn("Reklam yüklenemedi", err);
        giveUp();
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(timer);
      const feed = feedRef.current;
      feedRef.current = null;
      if (feed) {
        if (slotRef.current) feed.detach(slotRef.current);
        Promise.all(removers.map((r) => r()))
          .catch(() => undefined)
          .finally(() => feed.destroy().catch(() => undefined));
      }
    };
  }, [slotKey]);

  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    if (paused) feed.pause().catch(() => undefined);
    else feed.resume();
  }, [paused, loaded]);

  const tr = language === "tr";
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="card-stack">
        <div className="food-card ad-card">
          <div className="ad-card-head">
            <span className="ad-card-label">{tr ? "Reklam" : "Ad"}</span>
            <span className="ad-card-plus">
              <Crown size={14} />
              {tr ? "Reklamsız deneyim için Kaydırak Plus" : "Go ad-free with Kaydırak Plus"}
            </span>
          </div>
          {/* The plugin draws Google's ad over this box. */}
          <div ref={slotRef} className="ad-card-slot">
            {!loaded && <span className="ad-card-loading">{tr ? "Reklam yükleniyor…" : "Loading ad…"}</span>}
          </div>
        </div>
      </div>
      <div className="swipe-controls">
        <button className="ad-card-next" onClick={onDone}>
          {tr ? "Yemeklere devam" : "Back to dishes"}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdCard;
