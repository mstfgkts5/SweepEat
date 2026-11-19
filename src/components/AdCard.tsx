import React, { useEffect, useRef, useState } from "react";
import { Crown, X, Heart } from "lucide-react";
import { AD_FEED_ID, nativeAdUnitId, prepareAds } from "../ads/ads";

interface AdCardProps {
  // Stable id of this ad position in the deck (e.g. "after-16").
  slotKey: string;
  language: "tr" | "en";
  // An overlay (dish detail, guide) covers the deck: the native ad must hide.
  paused: boolean;
  // Leave the ad: swiped left / tapped ✕, or no ad could be loaded.
  onDone: () => void;
  // Open the Kaydırak Plus (ad-free) sheet.
  onOpenPlus: () => void;
}

// Google's ad is a native view drawn above the app, in the slot this card reserves.
// It cannot follow a dragged card, so it is hidden while the card moves and shown again
// once the card is back in place.
//   swipe left / ✕  : skip the ad
//   swipe right / ❤ : the card stays and says "tap the ad if you are interested"
// (Google does not allow the app to click an ad for the user, so a right swipe cannot open it.)
const LOAD_TIMEOUT_MS = 8000;
const SWIPE_THRESHOLD = 100;
const SETTLE_MS = 350;

const AdCard: React.FC<AdCardProps> = ({ slotKey, language, paused, onDone, onOpenPlus }) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<import("@capacitor-community/admob").NativeAdFeed | null>(null);
  const [loaded, setLoaded] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  // Dragging the card (the drag starts on the card's frame; touches on the ad itself go to the ad).
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [moving, setMoving] = useState(false); // card animating: keep the ad hidden
  const [interested, setInterested] = useState(false);
  const startX = useRef(0);
  const dragXRef = useRef(0);
  const leaving = useRef(false);

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

  const hidden = paused || dragging || moving;
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    if (hidden) feed.pause().catch(() => undefined);
    else feed.resume();
  }, [hidden, loaded]);

  const settle = (x: number, after?: () => void) => {
    setMoving(true);
    setDragX(x);
    setTimeout(() => {
      setMoving(false);
      after?.();
    }, SETTLE_MS);
  };

  const skip = () => {
    if (leaving.current) return;
    leaving.current = true;
    settle(-520, () => doneRef.current());
  };

  const showInterest = () => settle(0, () => setInterested(true));

  const onStart = (clientX: number) => {
    if (leaving.current) return;
    startX.current = clientX;
    dragXRef.current = 0;
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (x: number) => {
      dragXRef.current = x - startX.current;
      setDragX(dragXRef.current);
    };
    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);
    const end = () => {
      setDragging(false);
      const x = dragXRef.current;
      if (x < -SWIPE_THRESHOLD) skip();
      else if (x > SWIPE_THRESHOLD) showInterest();
      else settle(0);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", end);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const tr = language === "tr";
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="card-stack">
        <div
          className="food-card ad-card"
          style={{
            transform: `translate3d(${dragX}px, 0, 0) rotate(${dragX * 0.05}deg)`,
            transition: dragging ? "none" : `transform ${SETTLE_MS}ms ease-out`
          }}
          onMouseDown={(e) => onStart(e.clientX)}
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
        >
          <div className="ad-card-head">
            <span className="ad-card-label">{tr ? "Reklam" : "Ad"}</span>
            <button
              className="ad-card-plus"
              onClick={onOpenPlus}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <Crown size={14} />
              {tr ? "Reklamsız deneyim için Kaydırak Plus" : "Go ad-free with Kaydırak Plus"}
            </button>
          </div>
          {/* The plugin draws Google's ad over this box. */}
          <div ref={slotRef} className="ad-card-slot">
            {!loaded && <span className="ad-card-loading">{tr ? "Reklam yükleniyor…" : "Loading ad…"}</span>}
          </div>
        </div>
      </div>
      <p className={`ad-card-hint ${interested ? "show" : ""}`} aria-live="polite">
        {interested
          ? (tr ? "İlgileniyorsan reklama dokun. Geçmek için sola kaydır." : "Interested? Tap the ad. Swipe left to skip.")
          : (tr ? "Sola kaydır: geç · Sağa kaydır: ilgileniyorum" : "Swipe left: skip · Swipe right: interested")}
      </p>
      <div className="swipe-controls">
        <button className="control-btn dislike" onClick={skip} aria-label={tr ? "Reklamı geç" : "Skip ad"}>
          <X size={24} strokeWidth={3} />
        </button>
        <button className="control-btn like" onClick={showInterest} aria-label={tr ? "İlgileniyorum" : "Interested"}>
          <Heart size={24} strokeWidth={3} fill="white" />
        </button>
      </div>
    </div>
  );
};

export default AdCard;
