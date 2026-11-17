import React, { useRef, useState } from "react";
import { Heart, X, MapPin, Swords, Sparkles, Leaf, UtensilsCrossed, CakeSlice, ChevronRight } from "lucide-react";

interface OnboardingProps {
  language: "tr" | "en";
  onDone: () => void;
}

interface Page {
  key: string;
  title: { tr: string; en: string };
  text: { tr: string; en: string };
  art: React.ReactNode;
}

// Small drawings for each page (CSS + lucide icons only, no images to load).
const SwipeArt = () => (
  <div className="ob-art ob-swipe">
    <div className="ob-swipe-hint left"><X size={18} /></div>
    <div className="ob-swipe-card">
      <div className="ob-swipe-photo" />
      <div className="ob-swipe-line" />
      <div className="ob-swipe-line short" />
    </div>
    <div className="ob-swipe-hint right"><Heart size={18} fill="currentColor" /></div>
  </div>
);

const IconArt: React.FC<{ icon: React.ReactNode; tone: "red" | "teal" | "yellow" | "navy" }> = ({ icon, tone }) => (
  <div className="ob-art">
    <div className={`ob-icon-circle ${tone}`}>{icon}</div>
  </div>
);

const PAGES: Page[] = [
  {
    key: "welcome",
    title: { tr: "Kaydırak'a hoş geldin!", en: "Welcome to Kaydırak!" },
    text: {
      tr: "“Bugün ne yesek?” derdine son. Yemekleri kaydır, beğendiklerini seç, sana en uygun lezzete ve restorana birlikte karar verelim.",
      en: "No more “what should we eat today?”. Swipe dishes, pick the ones you like, and find the right dish and restaurant together."
    },
    art: <IconArt icon={<UtensilsCrossed size={44} />} tone="red" />
  },
  {
    key: "swipe",
    title: { tr: "Kaydır: sağa beğen, sola geç", en: "Swipe: right to like, left to skip" },
    text: {
      tr: "Kartı sağa kaydır ya da ❤️'ye bas: beğendin. Sola kaydır ya da ✕'e bas: geçtin. Karta dokunup “Yapay Zeka Analizi” ile yemeğin detayına bakabilirsin.",
      en: "Swipe right or tap ❤️ to like. Swipe left or tap ✕ to skip. Tap “AI Analysis” on a card to see the dish in detail."
    },
    art: <SwipeArt />
  },
  {
    key: "dessert",
    title: { tr: "Tatlılar ayrı bir sekmede", en: "Desserts have their own tab" },
    text: {
      tr: "Kartların üstündeki “Ana Yemekler / Tatlılar” düğmesiyle sadece tatlılara bakabilir, tek dokunuşla ana yemeklere dönebilirsin.",
      en: "Use the “Main Dishes / Desserts” switch above the cards to see only desserts, and tap again to go back."
    },
    art: <IconArt icon={<CakeSlice size={44} />} tone="yellow" />
  },
  {
    key: "mode",
    title: { tr: "Modunu ve şehrini seç", en: "Pick your mode and city" },
    text: {
      tr: "Profil'den Fit, Cheat Day, Ekonomik, Gurme, Vegan, Turist ya da Sıfır Atık modunu seç. Konum izni verirsen bulunduğun ili otomatik bulur, yemeklere oradan başlarız; konumun telefonundan dışarı çıkmaz.",
      en: "Choose Fit, Cheat Day, Budget, Gourmet, Vegan, Tourist or Zero Waste in Profile. If you allow location, we find your province and start from there; your location never leaves your phone."
    },
    art: <IconArt icon={<MapPin size={44} />} tone="teal" />
  },
  {
    key: "arena",
    title: { tr: "Lezzet Arenası'nda kararını ver", en: "Decide in the Taste Arena" },
    text: {
      tr: "Beğendiklerin Beğenilenler sekmesinde toplanır. En az 4 yemek beğenince arenayı başlat: düellolarda seç, şampiyon kaydıraktan kayıp gelsin. Şampiyon için şehrindeki 5 restoranı gösteririz.",
      en: "Your likes collect in the Liked tab. With 4 or more, start the arena: pick in each duel and the champion slides in. We then show 5 restaurants in your city."
    },
    art: <IconArt icon={<Swords size={44} />} tone="navy" />
  },
  {
    key: "extras",
    title: { tr: "Sana özel, israfa karşı", en: "Just for you, against waste" },
    text: {
      tr: "Son seçimlerine göre “Sana Özel Öneriler” hazırlarız. Sıfır Atık modunda restoranların gün sonu porsiyonlarını indirimle kurtarır, karbon ayak izini görürsün.",
      en: "We prepare “Picked For You” from your last choices. In Zero Waste mode you rescue restaurants' end-of-day portions at a discount and see the carbon footprint."
    },
    art: (
      <div className="ob-art ob-pair">
        <div className="ob-icon-circle red small"><Sparkles size={30} /></div>
        <div className="ob-icon-circle teal small"><Leaf size={30} /></div>
      </div>
    )
  }
];

const LABELS = {
  tr: { skip: "Geç", next: "İleri", start: "Başla", back: "Geri", step: "Adım" },
  en: { skip: "Skip", next: "Next", start: "Let's go", back: "Back", step: "Step" }
};

// First-run guide: one page per feature, swipe or tap to move on, "Geç" closes it any time.
const Onboarding: React.FC<OnboardingProps> = ({ language, onDone }) => {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const l = LABELS[language];
  const page = PAGES[index];
  const isLast = index === PAGES.length - 1;

  const go = (next: number) => setIndex(Math.max(0, Math.min(PAGES.length - 1, next)));
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (dx < -50) {
      if (isLast) onDone();
      else go(index + 1);
    } else if (dx > 50) go(index - 1);
  };

  return (
    <div className="onboarding" role="dialog" aria-modal="true" aria-label={page.title[language]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="ob-top">
        <span className="ob-step">{l.step} {index + 1}/{PAGES.length}</span>
        {!isLast && (
          <button className="ob-skip" onClick={onDone}>{l.skip}</button>
        )}
      </div>

      <div className="ob-page" key={page.key}>
        {page.art}
        <h2 className="ob-title">{page.title[language]}</h2>
        <p className="ob-text">{page.text[language]}</p>
      </div>

      <div className="ob-bottom">
        <div className="ob-dots" role="tablist">
          {PAGES.map((p, i) => (
            <button
              key={p.key}
              className={`ob-dot ${i === index ? "active" : ""}`}
              aria-label={`${l.step} ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="ob-actions">
          {index > 0 ? (
            <button className="ob-back" onClick={() => go(index - 1)}>{l.back}</button>
          ) : (
            <span />
          )}
          <button className="ob-next" onClick={() => (isLast ? onDone() : go(index + 1))}>
            {isLast ? l.start : l.next}
            {!isLast && <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
