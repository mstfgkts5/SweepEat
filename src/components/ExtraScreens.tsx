import React, { useState, useEffect } from "react";
import { Trash2, Trophy, ArrowRight, User, Settings, Check, Sparkles, ShoppingCart, RefreshCw, Award, Leaf, Dumbbell, Flame, Wallet, Compass, MapPin, Star } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import { translations } from "../data/translations";
import confetti from "canvas-confetti";
import { REAL_RESTAURANTS_DB, getFallbackRestaurants, FIT_ISTANBUL_RESTAURANTS, FIT_ANKARA_RESTAURANTS, FIT_IZMIR_RESTAURANTS, FIT_MERSIN_RESTAURANTS, FIT_ESKISEHIR_RESTAURANTS, FIT_ADANA_RESTAURANTS, CHEAT_ISTANBUL_RESTAURANTS, CHEAT_ANKARA_RESTAURANTS, CHEAT_IZMIR_RESTAURANTS, CHEAT_MERSIN_RESTAURANTS, CHEAT_GAZIANTEP_RESTAURANTS, CHEAT_ESKISEHIR_RESTAURANTS, CHEAT_ADANA_RESTAURANTS, ECONOMIC_ISTANBUL_RESTAURANTS, ECONOMIC_ANKARA_RESTAURANTS, ECONOMIC_IZMIR_RESTAURANTS, ECONOMIC_MERSIN_RESTAURANTS, ECONOMIC_ADANA_RESTAURANTS, ECONOMIC_GAZIANTEP_RESTAURANTS, ECONOMIC_ESKISEHIR_RESTAURANTS, GOURMET_ISTANBUL_RESTAURANTS, GOURMET_ANKARA_RESTAURANTS, GOURMET_IZMIR_RESTAURANTS, GOURMET_MERSIN_RESTAURANTS, GOURMET_GAZIANTEP_RESTAURANTS, GOURMET_ADANA_RESTAURANTS, GOURMET_ESKISEHIR_RESTAURANTS, VEGAN_ISTANBUL_RESTAURANTS, VEGAN_ANKARA_RESTAURANTS, VEGAN_IZMIR_RESTAURANTS, VEGAN_MERSIN_RESTAURANTS, VEGAN_GAZIANTEP_RESTAURANTS, VEGAN_ADANA_RESTAURANTS, VEGAN_ESKISEHIR_RESTAURANTS } from "../data/realRestaurants";
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
          </div>
        </div>

        <div className="tournament-vs-circle">VS</div>

        {/* Item B */}
        <div className="duel-card" onClick={() => handleSelectWinner(itemB)}>
          <img src={itemB.imageUrl} alt={language === "tr" ? itemB.nameTr : itemB.nameEn} className="duel-card-img" />
          <div className="duel-card-info">
            <span className="duel-card-name">{language === "tr" ? itemB.nameTr : itemB.nameEn}</span>
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
  comment: string;
  isFoodAvailable: boolean;
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

const getNominatimSearchQuery = (foodNameTr: string, city: string): string => {
  const trLower = foodNameTr.toLowerCase();
  let foodQuery = "";

  if (trLower.includes("adana kebap") || trLower.includes("urfa kebap")) {
    foodQuery = "kebap";
  } else if (trLower.includes("kuyu kebabı") || trLower.includes("tandır")) {
    foodQuery = "kuyu kebabı";
  } else if (trLower.includes("iskender") || trLower.includes("döner") || trLower.includes("doner")) {
    foodQuery = "döner";
  } else if (trLower.includes("lahmacun") || trLower.includes("pide")) {
    foodQuery = "pide lahmacun";
  } else if (trLower.includes("kebap") || trLower.includes("kebab") || trLower.includes("ciğer") || trLower.includes("ocakbaşı")) {
    foodQuery = "kebap";
  } else if (trLower.includes("burger") || trLower.includes("hamburger")) {
    foodQuery = "burger";
  } else if (trLower.includes("pizza")) {
    foodQuery = "pizza";
  } else if (trLower.includes("makarna") || trLower.includes("lazanya") || trLower.includes("pasta") || trLower.includes("fettuccine")) {
    foodQuery = "makarna";
  } else if (trLower.includes("çorba")) {
    foodQuery = "çorba";
  } else if (trLower.includes("balık") || trLower.includes("somon") || trLower.includes("karides") || trLower.includes("deniz ürünleri")) {
    foodQuery = "balık";
  } else if (trLower.includes("künefe") || trLower.includes("baklava") || trLower.includes("katmer")) {
    foodQuery = "baklava";
  } else if (trLower.includes("tatlı") || trLower.includes("waffle") || trLower.includes("dondurma") || trLower.includes("cheesecake")) {
    foodQuery = "tatlı";
  } else if (trLower.includes("tavuk")) {
    foodQuery = "tavuk";
  } else if (trLower.includes("salata") || trLower.includes("kinoa") || trLower.includes("diyet") || trLower.includes("sağlıklı")) {
    foodQuery = "salata";
  } else if (trLower.includes("ev yemeği") || trLower.includes("lokanta") || trLower.includes("sulu yemek")) {
    foodQuery = "lokanta";
  } else {
    foodQuery = foodNameTr.split(" (")[0].split("/")[0].trim();
  }

  return `${foodQuery} in ${city}`;
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

const isPlaceInCity = (item: any, city: string): boolean => {
  const searchCityClean = normalizeTurkish(city);
  if (!searchCityClean) return true;

  const address = item.address || {};
  const cityFields = [
    address.city,
    address.province,
    address.state,
    address.town,
    address.suburb,
    address.county,
    address.municipality,
    address.region
  ].map(val => val ? normalizeTurkish(val) : "");

  const parts = (item.display_name || "")
    .split(",")
    .slice(1)
    .map((p: string) => normalizeTurkish(p.trim()));

  const inCity = cityFields.some(field => field.includes(searchCityClean)) || 
                 parts.some((part: string) => part.includes(searchCityClean));
  
  return inCity;
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

const generateTopRestaurants = (
  foodNameTr: string,
  foodNameEn: string,
  city: string,
  language: "tr" | "en"
): MockRestaurant[] => {
  const normCity = normalizeTurkish(city);

  const curated = findCuratedRestaurants(foodNameTr, city);
  if (curated && curated.length > 0) {
    return curated.map((rest, index) => ({
      id: `${index + 1}`,
      name: rest.name,
      rating: rest.rating,
      reviewCount: rest.reviewCount,
      area: rest.area,
      comment: language === "tr" ? rest.commentTr : rest.commentEn,
      isFoodAvailable: true
    }));
  }

  const category = getCategoryFromFoodName(foodNameTr);
  let list: RealRestaurant[] = [];

  let matchedCityKey = "";
  for (const key of Object.keys(REAL_RESTAURANTS_DB)) {
    if (normalizeTurkish(key) === normCity) {
      matchedCityKey = key;
      break;
    }
  }

  if (matchedCityKey) {
    const cityData = REAL_RESTAURANTS_DB[matchedCityKey];
    const catItems = cityData[category] || [];
    list = [...catItems.filter(rest => isFoodAvailableInRestaurant(foodNameTr, foodNameEn, rest))];

    if (list.length < 5) {
      const allCategories: RestaurantCategory[] = ["general", "kebab", "burger", "pasta", "soup", "dessert", "vegan"];
      for (const cat of allCategories) {
        const otherItems = cityData[cat] || [];
        for (const item of otherItems) {
          if (list.length >= 5) break;
          if (!list.some(x => x.name.toLowerCase() === item.name.toLowerCase())) {
            list.push(item);
          }
        }
        if (list.length >= 5) break;
      }
    }
  }

  if (list.length < 5) {
    const fallbackChains = getFallbackRestaurants(category, city, language);
    for (const chain of fallbackChains) {
      if (list.length >= 5) break;
      if (!list.some(x => x.name.toLowerCase() === chain.name.toLowerCase())) {
        list.push(chain);
      }
    }
  }

  list.sort((a, b) => b.rating - a.rating);

  return list.slice(0, 3).map((rest, index) => ({
    id: `${index + 1}`,
    name: rest.name,
    rating: rest.rating,
    reviewCount: rest.reviewCount,
    area: rest.area,
    comment: language === "tr" ? rest.commentTr : rest.commentEn,
    isFoodAvailable: true
  }));
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
  const [restaurants, setRestaurants] = useState<MockRestaurant[]>([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchRealPlaces = async () => {
      setIsLoadingRestaurants(true);
      try {
        const curated = findCuratedRestaurants(champion.nameTr, userCity);
        if (curated && curated.length > 0) {
          const baseList = curated.map((rest, index) => ({
            id: `${index + 1}`,
            name: rest.name,
            rating: rest.rating,
            reviewCount: rest.reviewCount,
            area: rest.area,
            comment: language === "tr" ? rest.commentTr : rest.commentEn,
            isFoodAvailable: true
          }));
          if (active) {
            setRestaurants(baseList);
            setIsLoadingRestaurants(false);
          }
          return;
        }

        let osmList: any[] = [];
        let baseList: MockRestaurant[] = [];

        const query = getNominatimSearchQuery(champion.nameTr, userCity);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=tr&limit=40&addressdetails=1`;
        const response = await fetch(url, {
          headers: {
            "Accept-Language": language === "tr" ? "tr" : "en",
            "User-Agent": "SweepEatFoodApp/1.0"
          }
        });
        const data = await response.json();
        
        let tempOsm = Array.isArray(data) ? data : [];
        tempOsm = tempOsm.filter((item: any) => {
          const type = item.type || "";
          const cls = item.class || "";
          const isFood = cls === "amenity" && (type === "restaurant" || type === "cafe" || type === "fast_food" || type === "food" || type === "bar");
          return isFood && isPlaceInCity(item, userCity);
        });

        osmList = [...tempOsm];

        if (osmList.length + baseList.length < 3) {
          const category = getCategoryFromFoodName(champion.nameTr);
          let catTerm = "restaurant";
          if (category === "kebab") catTerm = "kebap";
          else if (category === "burger") catTerm = "burger";
          else if (category === "vegan") catTerm = "vegan";
          else if (category === "soup") catTerm = "çorba";
          else if (category === "pasta") catTerm = "makarna";
          else if (category === "dessert") catTerm = "tatlı";

          const backupQuery = `${catTerm} in ${userCity}`;
          const backupUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(backupQuery)}&countrycodes=tr&limit=40&addressdetails=1`;
          const backupResponse = await fetch(backupUrl, {
            headers: {
              "Accept-Language": language === "tr" ? "tr" : "en",
              "User-Agent": "SweepEatFoodApp/1.0"
            }
          });
          const backupData = await backupResponse.json();
          if (Array.isArray(backupData)) {
            backupData.forEach((item: any) => {
              const type = item.type || "";
              const cls = item.class || "";
              const isFood = cls === "amenity" && (type === "restaurant" || type === "cafe" || type === "fast_food" || type === "food" || type === "bar");
              if (
                isFood &&
                isPlaceInCity(item, userCity) &&
                !osmList.some(x => x.osm_id === item.osm_id || x.display_name === item.display_name)
              ) {
                osmList.push(item);
              }
            });
          }
        }

        if (osmList.length + baseList.length < 3) {
          const generalQuery = `restaurant in ${userCity}`;
          const generalUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(generalQuery)}&countrycodes=tr&limit=40&addressdetails=1`;
          const generalResponse = await fetch(generalUrl, {
            headers: {
              "Accept-Language": language === "tr" ? "tr" : "en",
              "User-Agent": "SweepEatFoodApp/1.0"
            }
          });
          const generalData = await generalResponse.json();
          if (Array.isArray(generalData)) {
            generalData.forEach((item: any) => {
              const type = item.type || "";
              const cls = item.class || "";
              const isFood = cls === "amenity" && (type === "restaurant" || type === "cafe" || type === "fast_food" || type === "food" || type === "bar");
              if (
                isFood &&
                isPlaceInCity(item, userCity) &&
                !osmList.some(x => x.osm_id === item.osm_id || x.display_name === item.display_name)
              ) {
                osmList.push(item);
              }
            });
          }
        }

        const mappedOsm: MockRestaurant[] = osmList.map((item: any, idx: number) => {
          let name = item.display_name.split(",")[0].trim();
          if (name.toLowerCase() === "restaurant" || !name) {
            name = item.display_name.split(",")[1]?.trim() || "Lezzet Durağı";
          }
          
          const parts = item.display_name.split(",");
          let area = parts[1]?.trim() || "Merkez";
          if (area.toLowerCase() === "turkey" || area.toLowerCase() === "türkiye") {
            area = "Merkez";
          }

          const seed = item.osm_id || idx;
          const rating = parseFloat((4.3 + (seed % 7) * 0.1).toFixed(1));
          const reviewCount = Math.floor(250 + (seed % 150) * 18 + (seed % 10));

          const commentTr = `Menüsündeki ${champion.nameTr} tek kelimeyle harika, Google yorumlarında da en yüksek puan alan yerlerden biri.`;
          const commentEn = `The ${champion.nameEn} on their menu is absolutely legendary, highly rated in Google reviews.`;

          return {
            id: `osm_${idx}`,
            name,
            rating,
            reviewCount,
            area,
            comment: language === "tr" ? commentTr : commentEn,
            isFoodAvailable: true
          };
        });

        let merged = [...baseList];
        mappedOsm.forEach(osmRest => {
          if (merged.length >= 3) return;
          if (!merged.some(m => m.name.toLowerCase() === osmRest.name.toLowerCase())) {
            merged.push(osmRest);
          }
        });

        if (merged.length < 3) {
          const offlineList = generateTopRestaurants(champion.nameTr, champion.nameEn, userCity, language);
          offlineList.forEach(off => {
            if (merged.length >= 3) return;
            if (!merged.some(m => m.name.toLowerCase() === off.name.toLowerCase())) {
              merged.push(off);
            }
          });
        }

        const finalThree = merged.slice(0, 3).map((item, idx) => ({
          ...item,
          id: `${idx + 1}`
        }));

        if (active) {
          setRestaurants(finalThree);
        }
      } catch (err) {
        console.error("Error fetching real restaurants:", err);
        if (active) {
          const offline = generateTopRestaurants(champion.nameTr, champion.nameEn, userCity, language);
          setRestaurants(offline);
        }
      } finally {
        if (active) {
          setIsLoadingRestaurants(false);
        }
      }
    };

    fetchRealPlaces();
    return () => {
      active = false;
    };
  }, [champion, userCity, language]);

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
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", padding: "20px 0" }}>{t.winnerNoRestaurants}</p>
          ) : (
            restaurants.map((rest, idx) => (
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
                    const query = encodeURIComponent(`${rest.name} ${userCity}`);
                    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
                    window.open(url, "_blank");
                  }}
                >
                  <MapPin size={11} />
                  <span>{t.winnerGoogleMapBtn}</span>
                </button>
              </div>
            ))
          )}
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

