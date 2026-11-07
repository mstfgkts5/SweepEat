import React, { useState, useMemo } from "react";
import { Trash2, Trophy, ArrowRight, User, Settings, Check, Sparkles, ShoppingCart, RefreshCw, Award, Leaf, Dumbbell, Flame, Wallet, Compass, MapPin, Star, Landmark, Recycle, Sprout } from "lucide-react";
import type { MenuItem, Persona } from "../data/mockFood";
import { translations } from "../data/translations";
import confetti from "canvas-confetti";
import { estimateCarbon, getSurplusDeal, CARBON_GRADE_COLORS, ecoText, EMPTY_IMPACT } from "../data/sustainability";
import type { ImpactStats } from "../data/sustainability";
import { getVerifiedRestaurant, RATING_CHECKED_AT } from "../data/verifiedRestaurants";
import { rankByRating, hasTrustedRating } from "../data/ranking";
import { REAL_RESTAURANTS_DB, FIT_ISTANBUL_RESTAURANTS, FIT_ANKARA_RESTAURANTS, FIT_IZMIR_RESTAURANTS, FIT_MERSIN_RESTAURANTS, FIT_ESKISEHIR_RESTAURANTS, FIT_ADANA_RESTAURANTS, CHEAT_ISTANBUL_RESTAURANTS, CHEAT_ANKARA_RESTAURANTS, CHEAT_IZMIR_RESTAURANTS, CHEAT_MERSIN_RESTAURANTS, CHEAT_GAZIANTEP_RESTAURANTS, CHEAT_ESKISEHIR_RESTAURANTS, CHEAT_ADANA_RESTAURANTS, ECONOMIC_ISTANBUL_RESTAURANTS, ECONOMIC_ANKARA_RESTAURANTS, ECONOMIC_IZMIR_RESTAURANTS, ECONOMIC_MERSIN_RESTAURANTS, ECONOMIC_ADANA_RESTAURANTS, ECONOMIC_GAZIANTEP_RESTAURANTS, ECONOMIC_ESKISEHIR_RESTAURANTS, GOURMET_ISTANBUL_RESTAURANTS, GOURMET_ANKARA_RESTAURANTS, GOURMET_IZMIR_RESTAURANTS, GOURMET_MERSIN_RESTAURANTS, GOURMET_GAZIANTEP_RESTAURANTS, GOURMET_ADANA_RESTAURANTS, GOURMET_ESKISEHIR_RESTAURANTS, VEGAN_ISTANBUL_RESTAURANTS, VEGAN_ANKARA_RESTAURANTS, VEGAN_IZMIR_RESTAURANTS, VEGAN_MERSIN_RESTAURANTS, VEGAN_GAZIANTEP_RESTAURANTS, VEGAN_ADANA_RESTAURANTS, VEGAN_ESKISEHIR_RESTAURANTS } from "../data/realRestaurants";
import type { RestaurantCategory, RealRestaurant } from "../data/realRestaurants";

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
        <div className="profile-avatar">S</div>
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
                backgroundColor: language === "en" ? "var(--accent-orange)" : "transparent",
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

  // Carbon comparison for the current duel (only rendered when labels are on)
  const carbonA = estimateCarbon(itemA);
  const carbonB = estimateCarbon(itemB);
  const renderDuelCarbon = (own: typeof carbonA, other: typeof carbonA) => {
    if (!showCarbon) return null;
    return (
      <div className="duel-carbon-row">
        <span className="carbon-grade-chip" style={{ backgroundColor: CARBON_GRADE_COLORS[own.grade] }}>{own.grade}</span>
        <span>{own.kg} kg CO₂e</span>
        {own.kg < other.kg && <span className="duel-eco-hint">🌱 {eco.duelEcoHint}</span>}
      </div>
    );
  };

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
            {renderDuelCarbon(carbonA, carbonB)}
          </div>
        </div>

        <div className="tournament-vs-circle">VS</div>

        {/* Item B */}
        <div className="duel-card" onClick={() => handleSelectWinner(itemB)}>
          <img src={itemB.imageUrl} alt={language === "tr" ? itemB.nameTr : itemB.nameEn} className="duel-card-img" />
          <div className="duel-card-info">
            <span className="duel-card-name">{language === "tr" ? itemB.nameTr : itemB.nameEn}</span>
            {renderDuelCarbon(carbonB, carbonA)}
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
  showCarbon?: boolean;
  averageCarbon?: number;
  zeroWaste?: boolean;
  onRescue?: (item: MenuItem) => void;
}

interface MockRestaurant {
  id: string;
  name: string;
  rating: number | null; // Google rating checked by hand; null = not checked
  reviewCount: number | null;
  area: string;
  comment: string;
  isFoodAvailable: boolean;
  address?: string;
  mapsUri?: string;
}

const getCategoryFromFoodName = (foodNameTr: string): RestaurantCategory => {
  const nameLower = foodNameTr.toLowerCase();
  if (nameLower.includes("burger")) return "burger";
  if (
    nameLower.includes("kebap") ||
    nameLower.includes("tandır") ||
    nameLower.includes("köfte") ||
    nameLower.includes("et ") ||
    nameLower.includes("döner") ||
    nameLower.includes("saray")
  ) return "kebab";
  if (
    nameLower.includes("salata") ||
    nameLower.includes("kinoa") ||
    nameLower.includes("avokado") ||
    nameLower.includes("bowl") ||
    nameLower.includes("vegan") ||
    nameLower.includes("sebze") ||
    nameLower.includes("acai")
  ) return "vegan";
  if (nameLower.includes("çorba")) return "soup";
  if (
    nameLower.includes("makarna") ||
    nameLower.includes("pasta") ||
    nameLower.includes("lazanya") ||
    nameLower.includes("pizza")
  ) return "pasta";
  if (
    nameLower.includes("tatlı") ||
    nameLower.includes("waffle") ||
    nameLower.includes("pancake") ||
    nameLower.includes("dondurma") ||
    nameLower.includes("cheesecake")
  ) return "dessert";
  return "general";
};

const isFoodAvailableInRestaurant = (
  foodNameTr: string,
  foodNameEn: string,
  rest: RealRestaurant
): boolean => {
  const cleanText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const restName = cleanText(rest.name);
  const commentTr = cleanText(rest.commentTr);
  const commentEn = cleanText(rest.commentEn);

  const getKeywords = (tr: string, _en: string) => {
    const trLower = tr.toLowerCase();
    if (trLower.includes("adana kebap")) return ["adana", "kebap"];
    if (trLower.includes("iskender")) return ["iskender", "döner", "doner"];
    if (trLower.includes("lahmacun")) return ["lahmacun"];
    if (trLower.includes("burger") || trLower.includes("hamburger")) return ["burger", "hamburger"];
    if (trLower.includes("pizza")) return ["pizza"];
    if (trLower.includes("makarna") || trLower.includes("fettuccine") || trLower.includes("lazanya")) return ["makarna", "pasta", "fettuccine", "lazanya"];
    if (trLower.includes("salata") || trLower.includes("kinoa")) return ["salata", "kase", "bowl", "salad"];
    if (trLower.includes("çorba")) return ["çorba", "corba", "beyran", "paça", "paca", "işkembe"];
    if (trLower.includes("somon") || trLower.includes("karides") || trLower.includes("balık")) return ["balık", "somon", "karides", "deniz", "fish", "shrimp", "seafood"];
    if (trLower.includes("tatlı") || trLower.includes("cheesecake") || trLower.includes("künefe") || trLower.includes("baklava") || trLower.includes("dondurma") || trLower.includes("mus") || trLower.includes("kerebiç")) {
      return ["tatlı", "baklava", "künefe", "kunefe", "dondurma", "cheesecake", "pastane", "mus", "mousse", "kerebiç", "şambali", "helva"];
    }
    if (trLower.includes("tavuk")) return ["tavuk", "chicken", "kanat", "wings"];
    if (trLower.includes("humus") || trLower.includes("falafel")) return ["humus", "falafel"];
    if (trLower.includes("sarma") || trLower.includes("dolma")) return ["sarma", "dolma", "yaprak"];
    if (trLower.includes("imam bayıldı") || trLower.includes("barbunya") || trLower.includes("sote") || trLower.includes("tencere") || trLower.includes("ev yemeği")) {
      return ["imam bayıldı", "barbunya", "pilaki", "ev yemeği", "tencere", "sote", "tandır"];
    }
    return trLower.split(" ");
  };

  const keywords = getKeywords(foodNameTr, foodNameEn);
  
  return keywords.some(keyword => {
    const kw = cleanText(keyword);
    if (kw.length <= 2) return false;
    return (
      restName.includes(kw) ||
      commentTr.includes(kw) ||
      commentEn.includes(kw)
    );
  });
};

const normalizeTurkish = (str: string): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/i̇/g, "i")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
};

const findCuratedRestaurants = (foodNameTr: string, city: string): RealRestaurant[] | null => {
  const normCity = normalizeTurkish(city);
  let dbList: Record<string, RealRestaurant[]>[] = [];
  if (normCity === "istanbul" || normCity === "istanbul ili") {
    dbList = [FIT_ISTANBUL_RESTAURANTS, CHEAT_ISTANBUL_RESTAURANTS, ECONOMIC_ISTANBUL_RESTAURANTS, GOURMET_ISTANBUL_RESTAURANTS, VEGAN_ISTANBUL_RESTAURANTS];
  } else if (normCity === "ankara" || normCity === "ankara ili") {
    dbList = [FIT_ANKARA_RESTAURANTS, CHEAT_ANKARA_RESTAURANTS, ECONOMIC_ANKARA_RESTAURANTS, GOURMET_ANKARA_RESTAURANTS, VEGAN_ANKARA_RESTAURANTS];
  } else if (normCity === "izmir" || normCity === "izmir ili") {
    dbList = [FIT_IZMIR_RESTAURANTS, CHEAT_IZMIR_RESTAURANTS, ECONOMIC_IZMIR_RESTAURANTS, GOURMET_IZMIR_RESTAURANTS, VEGAN_IZMIR_RESTAURANTS];
  } else if (normCity === "mersin" || normCity === "mersin ili") {
    dbList = [FIT_MERSIN_RESTAURANTS, CHEAT_MERSIN_RESTAURANTS, ECONOMIC_MERSIN_RESTAURANTS, GOURMET_MERSIN_RESTAURANTS, VEGAN_MERSIN_RESTAURANTS];
  } else if (normCity === "gaziantep" || normCity === "gaziantep ili") {
    dbList = [CHEAT_GAZIANTEP_RESTAURANTS, ECONOMIC_GAZIANTEP_RESTAURANTS, GOURMET_GAZIANTEP_RESTAURANTS, VEGAN_GAZIANTEP_RESTAURANTS];
  } else if (normCity === "eskisehir" || normCity === "eskisehir ili") {
    dbList = [FIT_ESKISEHIR_RESTAURANTS, CHEAT_ESKISEHIR_RESTAURANTS, ECONOMIC_ESKISEHIR_RESTAURANTS, GOURMET_ESKISEHIR_RESTAURANTS, VEGAN_ESKISEHIR_RESTAURANTS];
  } else if (normCity === "adana" || normCity === "adana ili") {
    dbList = [FIT_ADANA_RESTAURANTS, CHEAT_ADANA_RESTAURANTS, ECONOMIC_ADANA_RESTAURANTS, GOURMET_ADANA_RESTAURANTS, VEGAN_ADANA_RESTAURANTS];
  }

  if (dbList.length === 0) return null;

  const cleanName = foodNameTr.toLowerCase().trim();
  for (const db of dbList) {
    for (const key of Object.keys(db)) {
      const cleanKey = key.toLowerCase().trim();
      if (cleanName.includes(cleanKey) || cleanKey.includes(cleanName)) {
        return db[key];
      }
    }
  }
  return null;
};

// Only restaurants that really exist (found on OpenStreetMap) are shown, with
// their real address. Stars appear only where the Google rating was checked by hand.
const toVerifiedList = (pool: RealRestaurant[], city: string, language: "tr" | "en"): MockRestaurant[] => {
  const seen = new Set<string>();
  const verified = pool
    .filter((rest) => (seen.has(rest.name) ? false : (seen.add(rest.name), true)))
    .map((rest) => ({ rest, v: getVerifiedRestaurant(city, rest.name) }))
    .filter((x): x is { rest: RealRestaurant; v: NonNullable<typeof x.v> } => x.v !== null);

  // Trusted ratings first, best Bayesian score (rating weighed by review count) first;
  // the rest keep list order. See src/data/ranking.ts.
  const ranked = rankByRating(verified, (x) => ({ rating: x.v.rating, reviews: x.v.reviews }));

  return ranked.slice(0, 3).map(({ rest, v }, index) => ({
    id: `${index + 1}`,
    // "(Karaköy)" / "(Meze Reyonu)" hints come from the old list and can contradict the real address.
    name: rest.name.split("(")[0].trim(),
    // Stars only when enough reviews back them up
    rating: hasTrustedRating(v.rating, v.reviews) ? (v.rating as number) : null,
    reviewCount: hasTrustedRating(v.rating, v.reviews) ? (v.reviews as number) : null,
    area: v.district || rest.area,
    address: v.address,
    mapsUri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${rest.name.split("(")[0].trim()} ${v.address || v.district} ${city}`)}`,
    comment: language === "tr" ? rest.commentTr : rest.commentEn,
    isFoodAvailable: true
  }));
};

const generateTopRestaurants = (
  foodNameTr: string,
  foodNameEn: string,
  city: string,
  language: "tr" | "en"
): MockRestaurant[] => {
  const normCity = normalizeTurkish(city);
  const curated = findCuratedRestaurants(foodNameTr, city) || [];
  const fromCurated = toVerifiedList(curated, city, language);
  if (fromCurated.length >= 3) return fromCurated;

  // Top up from the city's general list (same food category) if the dish list had too few real places.
  const matchedCityKey = Object.keys(REAL_RESTAURANTS_DB).find((key) => normalizeTurkish(key) === normCity);
  if (!matchedCityKey) return fromCurated;
  const cityData = REAL_RESTAURANTS_DB[matchedCityKey];
  const category = getCategoryFromFoodName(foodNameTr);
  // Only places known to serve this dish; never pad the list with unrelated restaurants.
  const preferred = (cityData[category] || []).filter((rest) => isFoodAvailableInRestaurant(foodNameTr, foodNameEn, rest));
  return toVerifiedList([...curated, ...preferred], city, language);
};

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
    () => generateTopRestaurants(champion.nameTr, champion.nameEn, userCity, language),
    [champion, userCity, language]
  );
  const isLoadingRestaurants = false;

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
                    <span style={{ fontWeight: 700, color: lower ? "var(--emerald-green)" : "var(--accent-orange)" }}>
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
          {isLoadingRestaurants ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "150px", gap: "12px" }}>
              <RefreshCw size={24} className="spin-animation" style={{ color: "var(--accent-orange)" }} />
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
            <span className="restaurant-source-note">
              {language === "tr"
                ? `Adresler OpenStreetMap'ten doğrulandı. Yıldızlar: Google puanı, ${RATING_CHECKED_AT} elle kontrol.`
                : `Addresses verified on OpenStreetMap. Stars: Google rating, checked by hand ${RATING_CHECKED_AT}.`}
            </span>
            {restaurants.map((rest, idx) => (
              <div key={rest.id} className="winner-restaurant-card">
                <div className="restaurant-rank-badge">#{idx + 1}</div>
                <div className="restaurant-info-box">
                  <span className="restaurant-name-text">{rest.name}</span>
                  <div className="restaurant-meta-detail">
                    {rest.area && <span>{rest.area}</span>}
                    {rest.area && rest.rating !== null && <span>•</span>}
                    {rest.rating !== null ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#fbbf24" }}>
                        <Star size={11} fill="#fbbf24" style={{ color: "#fbbf24" }} />
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
                    const query = encodeURIComponent(`${rest.name} ${rest.area} ${userCity}`);
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
              confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 }, colors: ["#0A846B", "#4CA84A", "#EBF7F4"] });
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

