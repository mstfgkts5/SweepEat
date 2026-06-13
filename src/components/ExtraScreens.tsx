import React, { useState } from "react";
import { Trash2, Trophy, ArrowRight, User, Settings, Check, Sparkles, ShoppingCart, RefreshCw, Award, Leaf, Dumbbell, Flame, Wallet, Compass, MapPin, Star } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import { translations } from "../data/translations";
import confetti from "canvas-confetti";

// ==========================================
// LIKED ITEMS SCREEN
// ==========================================
interface LikedScreenProps {
  likedPool: MenuItem[];
  onRemove: (item: MenuItem) => void;
  onStartTournament: () => void;
  language: "tr" | "en";
}

export const LikedScreen: React.FC<LikedScreenProps> = ({
  likedPool,
  onRemove,
  onStartTournament,
  language
}) => {
  const t = translations[language];
  const minRequired = 4;
  const progressPercent = Math.min((likedPool.length / minRequired) * 100, 100);

  return (
    <div className="liked-screen">
      <h2 className="liked-header">{t.likedHeader}</h2>
      <p className="liked-subtitle">{t.likedSubtitle}</p>

      {/* Tournament Promo */}
      <div className="tournament-promo-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span className="promo-title">{t.likedPromoTitle}</span>
          <Trophy size={22} />
        </div>
        <p className="promo-text">{t.likedPromoText}</p>

        {likedPool.length >= minRequired ? (
          <button className="promo-btn" onClick={onStartTournament} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {t.likedStartBtn} <ArrowRight size={16} />
          </button>
        ) : (
          <div style={{ width: "100%", marginTop: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "4px", fontWeight: "bold" }}>
              <span>{t.likedPoolStatus} ({likedPool.length}/{minRequired})</span>
              <span>{t.likedRequiredText}</span>
            </div>
            <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ width: `${progressPercent}%`, height: "100%", backgroundColor: "#ffffff", borderRadius: "3px", transition: "width 0.3s" }} />
            </div>
          </div>
        )}
      </div>

      {/* List */}
      <span className="section-label">
        {t.likedPoolLabel.replace("{count}", likedPool.length.toString())}
      </span>

      {likedPool.length === 0 ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "var(--text-light)", gap: "12px", minHeight: "200px" }}>
          <Trophy size={40} strokeWidth={1.5} style={{ color: "var(--border-color)" }} />
          <span style={{ fontSize: "13px" }}>{t.likedEmptyText}</span>
        </div>
      ) : (
        <div className="liked-grid">
          {likedPool.map((item) => (
            <div key={item.id} className="liked-card-item">
              <img src={item.imageUrl} alt={language === "tr" ? item.nameTr : item.nameEn} className="liked-card-img" />
              <div className="liked-card-info">
                <span className="liked-card-name">{language === "tr" ? item.nameTr : item.nameEn}</span>
                <div className="liked-card-meta">
                  <span className="liked-card-price">{item.currency}{item.price.toFixed(2)}</span>
                </div>
              </div>
              <button className="liked-card-remove" onClick={() => onRemove(item)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ==========================================
// PROFILE / SETTINGS SCREEN
// ==========================================
interface ProfileScreenProps {
  activePersona: "fit" | "cheat_day" | "economic" | "gourmet" | "vegan";
  onChangePersona: (persona: "fit" | "cheat_day" | "economic" | "gourmet" | "vegan") => void;
  language: "tr" | "en";
  setLanguage: (lang: "tr" | "en") => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  activePersona,
  onChangePersona,
  language,
  setLanguage
}) => {
  const t = translations[language];

  const getPersonaDesc = (persona: string) => {
    switch (persona) {
      case "fit":
        return t.profileFitDesc;
      case "cheat_day":
        return t.profileCheatDesc;
      case "economic":
        return t.profileEconomicDesc;
      case "gourmet":
        return t.profileGourmetDesc;
      case "vegan":
        return t.profileVeganDesc;
      default:
        return "";
    }
  };

  const getPersonaTitle = (persona: string) => {
    switch (persona) {
      case "fit":
        return t.profileFitTitle;
      case "cheat_day":
        return t.profileCheatTitle;
      case "economic":
        return t.profileEconomicTitle;
      case "gourmet":
        return t.profileGourmetTitle;
      case "vegan":
        return t.profileVeganTitle;
      default:
        return "";
    }
  };

  const getPersonaIcon = (persona: string) => {
    switch (persona) {
      case "fit":
        return <Dumbbell size={18} />;
      case "cheat_day":
        return <Flame size={18} />;
      case "economic":
        return <Wallet size={18} />;
      case "gourmet":
        return <Compass size={18} />;
      case "vegan":
        return <Leaf size={18} />;
      default:
        return <User size={18} />;
    }
  };

  return (
    <div className="profile-screen">
      <div className="profile-avatar-row">
        <div className="profile-avatar">S</div>
        <h3 className="profile-name">{t.profileHeader}</h3>
        <span className="profile-subtitle">{t.profileLocation}</span>
      </div>

      <span className="section-label">{t.profileAiModeLabel}</span>
      <div className="setting-card">
        {(["fit", "cheat_day", "economic", "gourmet", "vegan"] as const).map((persona) => (
          <div
            key={persona}
            className={`setting-row`}
            style={{
              padding: "8px 0",
              cursor: "pointer",
              borderBottom: persona !== "vegan" ? "1px solid #f3f4f6" : "none"
            }}
            onClick={() => onChangePersona(persona)}
          >
            <div className="setting-info">
              <div
                className="setting-icon"
                style={{
                  color: activePersona === persona ? "var(--emerald-green)" : "var(--text-secondary)",
                  backgroundColor: activePersona === persona ? "var(--emerald-green-light)" : "#f3f4f6"
                }}
              >
                {getPersonaIcon(persona)}
              </div>
              <div>
                <span className="setting-title" style={{ color: activePersona === persona ? "var(--emerald-green)" : "var(--text-primary)", display: "block" }}>
                  {getPersonaTitle(persona)}
                </span>
                <span className="setting-desc" style={{ fontSize: "11px" }}>{getPersonaDesc(persona)}</span>
              </div>
            </div>
            {activePersona === persona && <Check size={18} style={{ color: "var(--emerald-green)" }} />}
          </div>
        ))}
      </div>

      {/* SETTINGS SECTION */}
      <span className="section-label">{t.profileSettingsHeader}</span>
      <div className="setting-card">
        <div className="setting-row" style={{ padding: "8px 0", borderBottom: "none" }}>
          <div className="setting-info">
            <div className="setting-icon" style={{ color: "var(--accent-orange)", backgroundColor: "rgba(255,149,0,0.1)" }}>
              <Settings size={18} />
            </div>
            <div>
              <span className="setting-title" style={{ display: "block" }}>{t.profileLanguageLabel}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", backgroundColor: "#f3f4f6", padding: "4px", borderRadius: "20px" }}>
            <button 
              onClick={() => setLanguage("tr")}
              style={{
                border: "none",
                padding: "4px 12px",
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: language === "tr" ? "bold" : "normal",
                color: language === "tr" ? "#ffffff" : "var(--text-secondary)",
                backgroundColor: language === "tr" ? "var(--accent-orange)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              TR 🇹🇷
            </button>
            <button 
              onClick={() => setLanguage("en")}
              style={{
                border: "none",
                padding: "4px 12px",
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: language === "en" ? "bold" : "normal",
                color: language === "en" ? "#ffffff" : "var(--text-secondary)",
                backgroundColor: language === "en" ? "var(--accent-orange)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              EN 🇬🇧
            </button>
          </div>
        </div>
      </div>

      <span className="section-label">{t.profileAppInfoLabel}</span>
      <div className="setting-card" style={{ gap: "16px" }}>
        <div className="setting-row" style={{ borderBottom: "none" }}>
          <span className="setting-title" style={{ fontWeight: 500 }}>{t.profileVersionLabel}</span>
          <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>v1.0.0 (Web)</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// TOURNAMENT / DUELLO STAGE SCREEN
// ==========================================
interface TournamentScreenProps {
  likedPool: MenuItem[];
  onFinish: (champion: MenuItem) => void;
  onCancel: () => void;
  language: "tr" | "en";
}

export const TournamentScreen: React.FC<TournamentScreenProps> = ({
  likedPool,
  onFinish,
  onCancel,
  language
}) => {
  const t = translations[language];
  // We need to establish a power of 2 bracket size (e.g. 4 or 8)
  const size = likedPool.length >= 8 ? 8 : 4;
  const initialItems = likedPool.slice(0, size);

  // States
  const [roundItems, setRoundItems] = useState<MenuItem[]>(initialItems);
  const [nextRoundWinners, setNextRoundWinners] = useState<MenuItem[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  // Current pair
  const itemA = roundItems[currentMatchIndex * 2];
  const itemB = roundItems[currentMatchIndex * 2 + 1];

  const getRoundLabel = () => {
    const totalMatchesInRound = roundItems.length / 2;
    if (totalMatchesInRound === 4) return t.tourRoundQuarter;
    if (totalMatchesInRound === 2) return t.tourRoundSemi;
    return t.tourRoundFinal;
  };

  const handleSelectWinner = (winner: MenuItem) => {
    const updatedWinners = [...nextRoundWinners, winner];
    setNextRoundWinners(updatedWinners);

    const totalMatchesInRound = roundItems.length / 2;
    
    if (currentMatchIndex + 1 < totalMatchesInRound) {
      // Advance to next match of current round
      setCurrentMatchIndex((prev) => prev + 1);
    } else {
      // Round completed!
      if (updatedWinners.length === 1) {
        // Champion decided!
        const champion = updatedWinners[0];
        
        // Trigger confetti
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });

        onFinish(champion);
      } else {
        // Start next round
        setRoundItems(updatedWinners);
        setNextRoundWinners([]);
        setCurrentMatchIndex(0);
      }
    }
  };

  if (!itemA || !itemB) return null;

  return (
    <div className="tournament-screen">
      <div className="tournament-title-row">
        <span className="tournament-round-badge">{getRoundLabel()}</span>
        <h2 className="tournament-heading">{t.tourHeader}</h2>
        <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
          {t.tourSub}
        </span>
      </div>

      <div className="tournament-vs-container">
        {/* Item A */}
        <div className="duel-card" onClick={() => handleSelectWinner(itemA)}>
          <img src={itemA.imageUrl} alt={language === "tr" ? itemA.nameTr : itemA.nameEn} className="duel-card-img" />
          <div className="duel-card-info">
            <span className="duel-card-name">{language === "tr" ? itemA.nameTr : itemA.nameEn}</span>
            <span className="duel-card-price">{itemA.currency}{itemA.price.toFixed(2)}</span>
          </div>
        </div>

        <div className="tournament-vs-circle">VS</div>

        {/* Item B */}
        <div className="duel-card" onClick={() => handleSelectWinner(itemB)}>
          <img src={itemB.imageUrl} alt={language === "tr" ? itemB.nameTr : itemB.nameEn} className="duel-card-img" />
          <div className="duel-card-info">
            <span className="duel-card-name">{language === "tr" ? itemB.nameTr : itemB.nameEn}</span>
            <span className="duel-card-price">{itemB.currency}{itemB.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="secondary-btn" onClick={onCancel} style={{ width: "100%", padding: "10px 0" }}>
        {t.tourCancel}
      </button>
    </div>
  );
};

// ==========================================
// TOURNAMENT CHAMPION WINNER SCREEN
// ==========================================
interface WinnerScreenProps {
  champion: MenuItem;
  commentary: string;
  onRestart: () => void;
  language: "tr" | "en";
  userCity: string;
}

interface MockRestaurant {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  area: string;
}

const generateTopRestaurants = (
  foodNameTr: string,
  city: string
): MockRestaurant[] => {
  const nameLower = foodNameTr.toLowerCase();
  let templates: string[] = [];

  if (nameLower.includes("burger")) {
    templates = [
      "Zula",
      "Burger & Co.",
      "B.O.B. Best of Burger",
      "Burger Laboratuvarı",
      "Hopdaddy",
      "Virginia Angus",
      "Bready",
      "Burger No7",
      "Salt & Pepper Burger",
      "The Burger House"
    ];
  } else if (
    nameLower.includes("kebap") ||
    nameLower.includes("tandır") ||
    nameLower.includes("köfte") ||
    nameLower.includes("et ") ||
    nameLower.includes("döner") ||
    nameLower.includes("saray")
  ) {
    templates = [
      "Günaydın Kebap & Steakhouse",
      "Develi",
      "Kaşıbeyaz",
      "Nusr-Et",
      "Antep Sofrası",
      "Köşebaşı",
      "Tarihi Sultanahmet Köftecisi",
      "Zübeyir Ocakbaşı",
      "Saray Et Lokantası",
      "Hacıoğlu"
    ];
  } else if (
    nameLower.includes("salata") ||
    nameLower.includes("kinoa") ||
    nameLower.includes("avokado") ||
    nameLower.includes("bowl") ||
    nameLower.includes("vegan") ||
    nameLower.includes("sebze") ||
    nameLower.includes("acai")
  ) {
    templates = [
      "Plus Kitchen",
      "Salad Station",
      "Green & Co. Organic",
      "Vegan Bistro",
      "Fit & Fresh Bowl",
      "Happy Greens Lounge",
      "Raw Kitchen & Bar",
      "Veggie Garden",
      "The Green Table",
      "Healthy Bites"
    ];
  } else if (nameLower.includes("çorba")) {
    templates = [
      "Çorba Dünyası",
      "Karaköy Çorbacısı",
      "Lale İşkembecisi",
      "Tarihi Çorbacı",
      "Şifa Çorba Evi",
      "Saray Çorba ve Kebap",
      "Lezzet Çorbacısı",
      "Meşhur Çorbacı",
      "Çorba Sarayı",
      "Bizim Çorbacı"
    ];
  } else if (
    nameLower.includes("makarna") ||
    nameLower.includes("pasta") ||
    nameLower.includes("lazanya")
  ) {
    templates = [
      "Trattoria Enzo",
      "Pizzeria Il Padrino",
      "Vapiano",
      "Eataly",
      "Fauna Makarna",
      "Da Mario",
      "Mezzaluna",
      "La Pasteria",
      "Pasta Fasta",
      "Bella Italia"
    ];
  } else if (
    nameLower.includes("tatlı") ||
    nameLower.includes("waffle") ||
    nameLower.includes("pancake") ||
    nameLower.includes("dondurma")
  ) {
    templates = [
      "Saray Muhallebicisi",
      "Hafız Mustafa 1864",
      "Karaköy Güllüoğlu",
      "Mado",
      "Waffle Port",
      "Pancake House",
      "L'Atelier de Dessert",
      "Çikolata Dükkanı",
      "Tarihi Beyoğlu Çikolatacısı",
      "Dondurmacı Yaşar Usta"
    ];
  } else {
    templates = [
      "BigChefs",
      "Midpoint",
      "Happy Moon's",
      "Kitchenette",
      "Divan Brasserie",
      "Cookshop",
      "Welldone",
      "Huqqa",
      "Tarihi Karaköy Lokantası",
      "Leman Kültür"
    ];
  }

  let areas: string[] = [];
  if (city === "İstanbul") {
    areas = ["Kadıköy", "Beşiktaş", "Nişantaşı", "Bebek", "Şişli", "Ataşehir", "Karaköy", "Florya", "Üsküdar", "Sarıyer"];
  } else if (city === "İzmir") {
    areas = ["Alsancak", "Bostanlı", "Karşıyaka", "Bornova", "Urla", "Çeşme", "Göztepe", "Konak", "Bayraklı", "Mavişehir"];
  } else if (city === "Ankara") {
    areas = ["Çankaya", "Tunalı Hilmi", "Bahçelievler", "Ümitköy", "GOP", "Çayyolu", "Kızılay", "Öveçler", "Balgat", "İncek"];
  } else if (city === "Antalya") {
    areas = ["Lara", "Konyaaltı", "Kaleiçi", "Merkez", "Muratpaşa", "Kepez", "Alanya", "Kemer", "Manavgat", "Belek"];
  } else {
    areas = ["Merkez", "Sahil", "Çarşı", "İstasyon", "Yeni Mahalle", "Gazi Mahallesi", "Cumhuriyet", "Atatürk Caddesi", "Park AVM", "Meydan"];
  }

  const baseRatings = [4.9, 4.8, 4.8, 4.7, 4.7, 4.6, 4.5, 4.5, 4.4, 4.3];
  return templates.slice(0, 10).map((name, index) => {
    const fullName = `${name} ${city}`;
    const rating = baseRatings[index];
    const reviewCount = Math.floor(1800 - index * 160 + Math.random() * 80);
    const area = areas[index % areas.length];
    return {
      id: `${index + 1}`,
      name: fullName,
      rating,
      reviewCount,
      area
    };
  });
};

export const WinnerScreen: React.FC<WinnerScreenProps> = ({
  champion,
  commentary,
  onRestart,
  language,
  userCity
}) => {
  const t = translations[language];
  const [activeTabSection, setActiveTabSection] = useState<"commentary" | "restaurants">("commentary");

  const topRestaurants = generateTopRestaurants(champion.nameTr, userCity);

  const handleOrder = () => {
    const name = language === "tr" ? champion.nameTr : champion.nameEn;
    const bestRestaurant = topRestaurants[0]?.name || champion.restaurant;
    const msg = language === "tr"
      ? `Eşsiz Seçim! Yemeksepeti / Getir Yemek yönlendirmesi simüle ediliyor: ${name} - ${bestRestaurant}`
      : `Excellent Choice! Redirecting to Yemeksepeti / Getir Yemek: ${name} - ${bestRestaurant}`;
    alert(msg);
  };

  return (
    <div className="winner-screen">
      <div className="winner-crown">
        <Award size={36} />
      </div>
      <span className="winner-subtitle">{t.winnerLabel}</span>
      <h2 className="winner-title">{language === "tr" ? champion.nameTr : champion.nameEn}</h2>

      <img src={champion.imageUrl} alt={language === "tr" ? champion.nameTr : champion.nameEn} className="winner-image" />

      {/* TABS SELECTOR */}
      <div className="winner-tabs-container">
        <button
          className={`winner-tab-btn ${activeTabSection === "commentary" ? "active" : ""}`}
          onClick={() => setActiveTabSection("commentary")}
        >
          <Sparkles size={13} />
          <span>{t.winnerTabCommentary}</span>
        </button>
        <button
          className={`winner-tab-btn ${activeTabSection === "restaurants" ? "active" : ""}`}
          onClick={() => setActiveTabSection("restaurants")}
        >
          <Trophy size={13} />
          <span>{t.winnerTabRestaurants} ({userCity})</span>
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTabSection === "commentary" ? (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", minHeight: "180px" }}>
          {/* AI Box */}
          <div className="winner-box" style={{ margin: 0 }}>
            <div className="winner-referee-title">
              <Sparkles size={14} />
              <span>{t.winnerAiRefLabel}</span>
            </div>
            <p className="winner-commentary">
              "{commentary}"
            </p>
          </div>

          {/* Sponsored discount section */}
          {champion.isSponsored && champion.sponsorDiscount && (
            <div className="coupon-dialog" style={{ width: "100%", margin: 0 }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent-orange)", letterSpacing: "0.5px" }}>
                {t.winnerSponsorLabel}
              </div>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                {t.winnerSponsorText.replace("{discount}", champion.sponsorDiscount.toString())}
              </p>
              <span className="coupon-code">{champion.sponsorCoupon}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="winner-restaurant-list">
          {topRestaurants.map((rest, idx) => (
            <div key={rest.id} className="winner-restaurant-card">
              <div className="restaurant-rank-badge">#{idx + 1}</div>
              <div className="restaurant-info-box">
                <span className="restaurant-name-text">{rest.name}</span>
                <div className="restaurant-meta-detail">
                  <span>{rest.area}</span>
                  <span>•</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#fbbf24" }}>
                    <Star size={11} fill="#fbbf24" style={{ color: "#fbbf24" }} />
                    <span style={{ fontWeight: 700 }}>{rest.rating}</span>
                    <span style={{ fontSize: "10px", opacity: 0.7 }}>({rest.reviewCount})</span>
                  </div>
                </div>
              </div>
              <button
                className="restaurant-maps-btn"
                onClick={() => {
                  const query = encodeURIComponent(rest.name);
                  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
                  window.open(url, "_blank");
                }}
              >
                <MapPin size={11} />
                <span>{t.winnerGoogleMapBtn}</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="order-btn-group" style={{ marginTop: "16px" }}>
        <button className="action-btn" onClick={handleOrder} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          <ShoppingCart size={18} /> {t.winnerOrderBtn}
        </button>
        <button className="secondary-btn" onClick={onRestart} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          <RefreshCw size={16} /> {t.winnerReturnBtn}
        </button>
      </div>
    </div>
  );
};

