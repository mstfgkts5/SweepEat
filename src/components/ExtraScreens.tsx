import React, { useState, useMemo } from "react";
import { Trash2, Trophy, ArrowRight, User, Settings, Check, Sparkles, ShoppingCart, RefreshCw, Award, Leaf, Dumbbell, Flame, Wallet, Compass, MapPin, Star, Landmark, Recycle, Sprout } from "lucide-react";
import type { MenuItem, Persona } from "../data/mockFood";
import { translations } from "../data/translations";
import confetti from "canvas-confetti";
import { estimateCarbon, getSurplusDeal, CARBON_GRADE_COLORS, ecoText, EMPTY_IMPACT } from "../data/sustainability";
import type { ImpactStats } from "../data/sustainability";
import { RATING_CHECKED_AT } from "../data/verifiedRestaurants";
import { generateTopRestaurants } from "../data/restaurantMatch";
import { buildRound, roundKind, roundCount } from "../data/bracket";
import SlideCelebration from "./SlideCelebration";
import { prefersReducedMotion, PICK_SLIDE_MS } from "../data/motion";
import { restaurantCityFor } from "../data/provinces";
import { restaurantLookupNames, dishKeyOf, filterByCourse } from "../data/allFood";
import type { Course } from "../data/allFood";
import CourseToggle from "./CourseToggle";
import Recommendations from "./Recommendations";

// ==========================================
// LIKED ITEMS SCREEN
// ==========================================
interface LikedScreenProps {
  likedPool: MenuItem[];
  course: Course;
  onChangeCourse: (course: Course) => void;
  recommendations: MenuItem[];
  recoSubtitle: string;
  onOpenItem: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onStartTournament: () => void;
  language: "tr" | "en";
}

export const LikedScreen: React.FC<LikedScreenProps> = ({
  likedPool,
  course,
  onChangeCourse,
  recommendations,
  recoSubtitle,
  onOpenItem,
  onRemove,
  onStartTournament,
  language
}) => {
  const t = translations[language];
  const shownLiked = filterByCourse(likedPool, course);
  const minRequired = 4;
  const progressPercent = Math.min((likedPool.length / minRequired) * 100, 100);

  return (
    <div className="liked-screen">
      <h2 className="liked-header">{t.likedHeader}</h2>
      <p className="liked-subtitle">{t.likedSubtitle}</p>

      {/* Personal recommendations (last 5 selections) */}
      <Recommendations items={recommendations} subtitle={recoSubtitle} language={language} onOpen={onOpenItem} />

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

      {likedPool.length > 0 && (
        <CourseToggle
          course={course}
          onChange={onChangeCourse}
          counts={{ main: filterByCourse(likedPool, "main").length, dessert: filterByCourse(likedPool, "dessert").length }}
          language={language}
        />
      )}

      {likedPool.length === 0 ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "var(--text-light)", gap: "12px", minHeight: "200px" }}>
          <Trophy size={40} strokeWidth={1.5} style={{ color: "var(--border-color)" }} />
          <span style={{ fontSize: "13px" }}>{t.likedEmptyText}</span>
        </div>
      ) : shownLiked.length === 0 ? (
        <p className="course-empty">{course === "dessert" ? t.courseDessertEmpty : t.likedEmptyText}</p>
      ) : (
        <div className="liked-grid">
          {shownLiked.map((item) => (
            <div key={item.id} className="liked-card-item">
              <img src={item.imageUrl} alt={language === "tr" ? item.nameTr : item.nameEn} className="liked-card-img" />
              <div className="liked-card-info">
                <span className="liked-card-name">{language === "tr" ? item.nameTr : item.nameEn}</span>
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
  activePersona: Persona;
  onChangePersona: (persona: Persona) => void;
  language: "tr" | "en";
  setLanguage: (lang: "tr" | "en") => void;
  showCarbonLabels?: boolean;
  setShowCarbonLabels?: (value: boolean) => void;
  impact?: ImpactStats;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  activePersona,
  onChangePersona,
  language,
  setLanguage,
  showCarbonLabels = false,
  setShowCarbonLabels,
  impact = EMPTY_IMPACT
}) => {
  const t = translations[language];
  const eco = ecoText[language];

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
      case "tourist":
        return t.profileTouristDesc;
      case "zero_waste":
        return eco.zeroWasteDesc;
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
      case "tourist":
        return t.profileTouristTitle;
      case "zero_waste":
        return eco.zeroWasteTitle;
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
      case "tourist":
        return <Landmark size={18} />;
      case "zero_waste":
        return <Recycle size={18} />;
      default:
        return <User size={18} />;
    }
  };

  return (
    <div className="profile-screen">
      <div className="profile-avatar-row">
        <div className="profile-avatar">K</div>
        <h3 className="profile-name">{t.profileHeader}</h3>
        <span className="profile-subtitle">{t.profileLocation}</span>
      </div>

      <span className="section-label">{t.profileAiModeLabel}</span>
      <div className="setting-card">
        {(["fit", "cheat_day", "economic", "gourmet", "vegan", "tourist", "zero_waste"] as const).map((persona) => (
          <div
            key={persona}
            className={`setting-row`}
            style={{
              padding: "8px 0",
              cursor: "pointer",
              borderBottom: persona !== "zero_waste" ? "1px solid #f3f4f6" : "none"
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

      {/* SUSTAINABILITY IMPACT (HASAT-13) */}
      <span className="section-label">{eco.impactHeader}</span>
      <div className="impact-card">
        <div className="impact-stat">
          <span className="impact-value">{impact.meals}</span>
          <span className="impact-label">{eco.impactMeals}</span>
        </div>
        <div className="impact-stat">
          <span className="impact-value">{impact.foodKg} kg</span>
          <span className="impact-label">{eco.impactFood}</span>
        </div>
        <div className="impact-stat">
          <span className="impact-value">{impact.co2Kg} kg</span>
          <span className="impact-label">{eco.impactCo2}</span>
        </div>
        <div className="impact-stat">
          <span className="impact-value">{impact.moneySaved} ₺</span>
          <span className="impact-label">{eco.impactMoney}</span>
        </div>
      </div>

      {/* SETTINGS SECTION */}
      <span className="section-label">{t.profileSettingsHeader}</span>
      {setShowCarbonLabels && (
        <div className="setting-card">
          <div
            className="setting-row"
            style={{ padding: "8px 0", borderBottom: "none", cursor: "pointer" }}
            onClick={() => setShowCarbonLabels(!showCarbonLabels)}
          >
            <div className="setting-info">
              <div className="setting-icon" style={{ color: "var(--emerald-green)", backgroundColor: "var(--emerald-green-light)" }}>
                <Sprout size={18} />
              </div>
              <div>
                <span className="setting-title" style={{ display: "block" }}>{eco.carbonToggleTitle}</span>
                <span className="setting-desc" style={{ fontSize: "11px" }}>{eco.carbonToggleDesc}</span>
              </div>
            </div>
            <div className={`eco-switch ${showCarbonLabels ? "on" : ""}`} role="switch" aria-checked={showCarbonLabels}>
              <div className="eco-switch-knob" />
            </div>
          </div>
        </div>
      )}
      <div className="setting-card">
        <div className="setting-row" style={{ padding: "8px 0", borderBottom: "none" }}>
          <div className="setting-info">
            <div className="setting-icon" style={{ color: "var(--accent-text)", backgroundColor: "var(--accent-orange-light)" }}>
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
                backgroundColor: language === "tr" ? "var(--navy)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              TR
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
                backgroundColor: language === "en" ? "var(--navy)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              EN
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
  showCarbon?: boolean;
}

export const TournamentScreen: React.FC<TournamentScreenProps> = ({
  likedPool,
  onFinish,
  onCancel,
  language,
  showCarbon = false
}) => {
  const t = translations[language];
  const eco = ecoText[language];
  // Every liked dish plays (see data/bracket.ts): pairs, plus one three-way duel when the count is odd.
  const [roundItems, setRoundItems] = useState<MenuItem[]>(() => likedPool.slice());
  const [nextRoundWinners, setNextRoundWinners] = useState<MenuItem[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  // Kaydırak animation: the picked card slides away; the champion gets the full slide.
  const [picked, setPicked] = useState<MenuItem | null>(null);
  const [champion, setChampion] = useState<MenuItem | null>(null);

  const matches = buildRound(roundItems);
  const currentMatch = matches[currentMatchIndex] ?? [];

  const getRoundLabel = () => {
    const kind = roundKind(matches.length);
    if (kind === "final") return t.tourRoundFinal;
    if (kind === "semi") return t.tourRoundSemi;
    if (kind === "quarter") return t.tourRoundQuarter;
    return t.tourRoundN.replace("{n}", String(roundCount(likedPool.length) - roundCount(roundItems.length) + 1));
  };

  const finishWithChampion = (winner: MenuItem) => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.45 },
      colors: ["#2A9D8F", "#E9C46A", "#E63946", "#1D2D44"]
    });
    onFinish(winner);
  };

  const advance = (winner: MenuItem) => {
    const updatedWinners = [...nextRoundWinners, winner];
    if (currentMatchIndex + 1 < matches.length) {
      setNextRoundWinners(updatedWinners);
      setCurrentMatchIndex((prev) => prev + 1);
    } else if (updatedWinners.length === 1) {
      // Champion decided: the full slide animation, then the winner screen.
      if (prefersReducedMotion()) finishWithChampion(winner);
      else setChampion(winner);
    } else {
      setRoundItems(updatedWinners);
      setNextRoundWinners([]);
      setCurrentMatchIndex(0);
    }
  };

  const handleSelectWinner = (winner: MenuItem) => {
    if (picked || champion) return; // no double picks while animating
    const isFinalPick = currentMatchIndex + 1 >= matches.length && nextRoundWinners.length === 0;
    if (prefersReducedMotion() || isFinalPick) {
      advance(winner);
      return;
    }
    setPicked(winner);
    setTimeout(() => {
      setPicked(null);
      advance(winner);
    }, PICK_SLIDE_MS);
  };

  if (champion) {
    return <SlideCelebration item={champion} language={language} onLanded={() => finishWithChampion(champion)} />;
  }

  if (currentMatch.length < 2) return null;

  // Carbon comparison (only rendered when labels are on): the lowest one gets the eco hint.
  const carbons = currentMatch.map((item) => estimateCarbon(item));
  const lowestKg = Math.min(...carbons.map((c) => c.kg));
  const renderDuelCarbon = (own: (typeof carbons)[number]) => {
    if (!showCarbon) return null;
    return (
      <div className="duel-carbon-row">
        <span className="carbon-grade-chip" style={{ backgroundColor: CARBON_GRADE_COLORS[own.grade] }}>{own.grade}</span>
        <span>{own.kg} kg CO₂e</span>
        {own.kg === lowestKg && carbons.some((c) => c.kg > lowestKg) && <span className="duel-eco-hint">🌱 {eco.duelEcoHint}</span>}
      </div>
    );
  };
  const isTriple = currentMatch.length === 3;

  return (
    <div className="tournament-screen">
      <div className="tournament-title-row">
        <span className="tournament-round-badge">{getRoundLabel()}</span>
        <h2 className="tournament-heading">{t.tourHeader}</h2>
        <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
          {isTriple ? t.tourSubTriple : t.tourSub}
        </span>
      </div>

      <div className={`tournament-vs-container ${isTriple ? "triple" : ""}`} key={`${roundItems.length}-${currentMatchIndex}`}>
        {currentMatch.map((item, i) => (
          <React.Fragment key={item.id}>
            {i > 0 && <div className="tournament-vs-circle">VS</div>}
            <div
              className={`duel-card ${picked ? (picked.id === item.id ? "slide-picked" : "slide-dropped") : ""}`}
              onClick={() => handleSelectWinner(item)}
            >
              <img src={item.imageUrl} alt={language === "tr" ? item.nameTr : item.nameEn} className="duel-card-img" />
              <div className="duel-card-info">
                <span className="duel-card-name">{language === "tr" ? item.nameTr : item.nameEn}</span>
                {renderDuelCarbon(carbons[i])}
              </div>
            </div>
          </React.Fragment>
        ))}
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
  showCarbon?: boolean;
  averageCarbon?: number;
  zeroWaste?: boolean;
  onRescue?: (item: MenuItem) => void;
}

export const WinnerScreen: React.FC<WinnerScreenProps> = ({
  champion,
  commentary,
  onRestart,
  language,
  userCity,
  showCarbon = false,
  averageCarbon = 0,
  zeroWaste = false,
  onRescue
}) => {
  const t = translations[language];
  const eco = ecoText[language];
  const championCarbon = estimateCarbon(champion);
  const championDeal = zeroWaste ? getSurplusDeal(champion) : null;
  const [isRescued, setIsRescued] = useState(false);
  const [activeTabSection, setActiveTabSection] = useState<"commentary" | "restaurants">("commentary");

  // Local data only: no network, no API key.
  const restaurants = useMemo(
    // Look up with the dish's original name: the curated restaurant lists are keyed by it.
    () =>
      generateTopRestaurants(
        { key: dishKeyOf(champion), names: restaurantLookupNames(champion), nameEn: champion.nameEn, dishType: champion.dishType, category: champion.category },
        userCity,
        language
      ),
    [champion, userCity, language]
  );
  const isLoadingRestaurants = false;
  // Provinces without restaurant data use the nearest city that has it.
  const restaurantCity = restaurantCityFor(userCity);

  const handleOrder = () => {
    const name = language === "tr" ? champion.nameTr : champion.nameEn;
    const bestRestaurant = restaurants[0]?.name || champion.restaurant;
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
          <span>{t.winnerTabRestaurants} ({restaurantCityFor(userCity)})</span>
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

          {/* Environmental impact box (HASAT-13) */}
          {showCarbon && (() => {
            const diff = Math.round(Math.abs(averageCarbon - championCarbon.kg) * 10) / 10;
            const lower = championCarbon.kg <= averageCarbon;
            return (
              <div className="eco-box">
                <div className="eco-box-title" lang={language}>
                  <Sprout size={14} />
                  <span>{eco.winnerEcoTitle}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="carbon-grade-chip large" style={{ backgroundColor: CARBON_GRADE_COLORS[championCarbon.grade] }}>{championCarbon.grade}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span>{eco.winnerEcoLine.replace("{kg}", String(championCarbon.kg)).replace("{grade}", championCarbon.grade)}</span>
                    <span style={{ fontWeight: 700, color: lower ? "var(--emerald-green)" : "var(--accent-text)" }}>
                      {(lower ? eco.winnerEcoLower : eco.winnerEcoHigher).replace("{diff}", String(diff))}
                    </span>
                  </div>
                </div>
                <span className="eco-note">{eco.carbonNote}</span>
              </div>
            );
          })()}

          {/* Sponsored discount section */}
          {champion.isSponsored && champion.sponsorDiscount && (
            <div className="coupon-dialog" style={{ width: "100%", margin: 0 }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent-text)", letterSpacing: "0.5px" }}>
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
          {isLoadingRestaurants ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "150px", gap: "12px" }}>
              <RefreshCw size={24} className="spin-animation" style={{ color: "var(--emerald-green)" }} />
              <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 600 }}>
                {language === "tr" ? "Gerçek mekanlar sorgulanıyor..." : "Searching real places..."}
              </span>
            </div>
          ) : restaurants.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "16px 0" }}>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", textAlign: "center" }}>
                {language === "tr"
                  ? `${userCity} için doğrulanmış bir restoranımız yok.`
                  : `We have no verified restaurant for ${userCity} yet.`}
              </p>
              <button
                className="restaurant-maps-btn"
                onClick={() => {
                  const q = encodeURIComponent(`${champion.nameTr} ${userCity}`);
                  window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank");
                }}
              >
                <MapPin size={11} />
                <span>{language === "tr" ? "Google Haritalar'da ara" : "Search on Google Maps"}</span>
              </button>
            </div>
          ) : (
            <>
            {restaurantCity !== userCity && (
              <span className="restaurant-source-note restaurant-city-note">
                {language === "tr"
                  ? `${userCity} için henüz restoran verimiz yok; en yakın şehir ${restaurantCity} gösteriliyor.`
                  : `No restaurant data for ${userCity} yet; showing the nearest city, ${restaurantCity}.`}
              </span>
            )}
            <span className="restaurant-source-note">
              {language === "tr"
                ? `Gerçek mekanlar: adresler OpenStreetMap ve yayımlanmış şehir rehberlerinden. Yıldızlar: Google puanı, ${RATING_CHECKED_AT} elle kontrol.`
                : `Real places: addresses from OpenStreetMap and published city guides. Stars: Google rating, checked by hand ${RATING_CHECKED_AT}.`}
            </span>
            {restaurants.map((rest, idx) => (
              <div key={rest.id} className="winner-restaurant-card">
                <div className="restaurant-rank-badge">#{idx + 1}</div>
                <div className="restaurant-info-box">
                  <span className="restaurant-name-text">{rest.name}</span>
                  <span className={`restaurant-match-chip ${rest.match}`}>
                    {rest.match === "dish"
                      ? language === "tr" ? "Bu yemekle bilinir" : "Known for this dish"
                      : rest.match === "kind"
                        ? language === "tr" ? "Benzer mutfak" : "Similar cuisine"
                        : language === "tr" ? "Genel öneri" : "General pick"}
                  </span>
                  <div className="restaurant-meta-detail">
                    {rest.area && <span>{rest.area}</span>}
                    {rest.area && rest.rating !== null && <span>•</span>}
                    {rest.rating !== null ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#E9C46A" }}>
                        <Star size={11} fill="#E9C46A" style={{ color: "#E9C46A" }} />
                        <span style={{ fontWeight: 700 }}>≈{rest.rating.toFixed(1)}</span>
                        <span style={{ fontSize: "10px", opacity: 0.7 }}>({(rest.reviewCount ?? 0).toLocaleString(language === "tr" ? "tr-TR" : "en-US")})</span>
                      </div>
                    ) : null}
                  </div>
                  {rest.address && <span className="restaurant-address">{rest.address}</span>}
                  {rest.comment && (
                    <p className="restaurant-review-comment" style={{
                      fontSize: "11px",
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                      marginTop: "4px",
                      lineHeight: "1.3",
                      borderLeft: "2px solid var(--accent-orange)",
                      paddingLeft: "6px",
                      marginLeft: "2px"
                    }}>
                      "{rest.comment}"
                    </p>
                  )}
                </div>
                <button
                  className="restaurant-maps-btn"
                  onClick={() => {
                    const query = encodeURIComponent(`${rest.name} ${rest.area} ${restaurantCity}`);
                    const url = rest.mapsUri || `https://www.google.com/maps/search/?api=1&query=${query}`;
                    window.open(url, "_blank");
                  }}
                >
                  <MapPin size={11} />
                  <span>{t.winnerGoogleMapBtn}</span>
                </button>
              </div>
            ))}
            </>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="order-btn-group" style={{ marginTop: "16px" }}>
        {championDeal && (
          <button
            className="action-btn rescue-btn"
            disabled={isRescued}
            onClick={() => {
              setIsRescued(true);
              onRescue?.(champion);
              confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 }, colors: ["#2A9D8F", "#E9C46A", "#E63946"] });
              alert(
                eco.rescuedAlert
                  .replace("{name}", language === "tr" ? champion.nameTr : champion.nameEn)
                  .replace("{restaurant}", champion.restaurant)
                  .replace("{time}", championDeal.pickupUntil)
              );
            }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}
          >
            <Recycle size={18} />
            {isRescued ? eco.rescuedBtn : eco.rescueBtn.replace("{price}", String(championDeal.rescuedPrice))}
          </button>
        )}
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

