import { useState, useEffect } from "react";
import { Compass, Heart, User, MapPin, Sparkles } from "lucide-react";
import PhoneFrame from "./components/PhoneFrame";
import SwipeDeck from "./components/SwipeDeck";
import AiInsightModal from "./components/AiInsightModal";
import LocationModal from "./components/LocationModal";
import { LikedScreen, ProfileScreen, TournamentScreen, WinnerScreen } from "./components/ExtraScreens";
import { mockFoodItems } from "./data/mockFood";
import type { MenuItem } from "./data/mockFood";
import { translations } from "./data/translations";

type TabType = "explore" | "liked" | "profile";

export default function App() {
  // Navigation & Flows
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("explore");
  const [isTournamentActive, setIsTournamentActive] = useState(false);
  const [tournamentChampion, setTournamentChampion] = useState<{ item: MenuItem; commentary: string } | null>(null);

  // Localization
  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const t = translations[language];

  // Data pools
  const [foodPool, setFoodPool] = useState<MenuItem[]>(mockFoodItems);
  const [likedPool, setLikedPool] = useState<MenuItem[]>([]);
  const [swipedIds, setSwipedIds] = useState<string[]>([]);
  const [activePersona, setActivePersona] = useState<"fit" | "cheat_day" | "economic" | "gourmet" | "vegan">("gourmet");

  // Selected item for AI Modal
  const [selectedInsightItem, setSelectedInsightItem] = useState<MenuItem | null>(null);

  // Geolocation & Location Search
  const [userCity, setUserCity] = useState<string>("İstanbul");
  const [showLocationModal, setShowLocationModal] = useState<boolean>(false);

  // Splash Screen Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSwipe = (item: MenuItem, direction: "left" | "right") => {
    // Keep track of all swiped IDs in this session to prevent showing them again
    setSwipedIds((prev) => [...prev, item.id]);

    if (direction === "right") {
      setLikedPool((prev) => {
        // Prevent duplicates
        if (prev.find((x) => x.id === item.id)) return prev;
        return [...prev, item];
      });
    }
  };

  const handleRemoveLiked = (item: MenuItem) => {
    setLikedPool((prev) => prev.filter((x) => x.id !== item.id));
  };

  const handleRestartExplore = () => {
    setLikedPool([]);
    setSwipedIds([]);
    setFoodPool([...mockFoodItems].sort(() => Math.random() - 0.5));
    setActiveTab("explore");
  };

  const getFilteredPool = () => {
    const unswiped = foodPool.filter((x) => !swipedIds.includes(x.id));
    switch (activePersona) {
      case "vegan":
        return unswiped.filter((x) => x.isVegan);
      case "fit":
        return unswiped.filter((x) => x.isHealthy || x.calories < 600);
      case "economic":
        return unswiped.filter((x) => x.price <= 150.00);
      case "gourmet":
        return unswiped.filter((x) => x.rating >= 4.7);
      case "cheat_day":
      default:
        return unswiped;
    }
  };

  const renderActiveContent = () => {
    if (isTournamentActive) {
      return (
        <TournamentScreen
          likedPool={likedPool}
          language={language}
          onCancel={() => setIsTournamentActive(false)}
          onFinish={(champ) => {
            setTournamentChampion({ item: champ, commentary: "" });
            setIsTournamentActive(false);
          }}
        />
      );
    }

    if (tournamentChampion) {
      return (
        <WinnerScreen
          champion={tournamentChampion.item}
          commentary={tournamentChampion.item.aiInsights[language][activePersona]}
          language={language}
          userCity={userCity}
          onRestart={() => {
            setTournamentChampion(null);
            handleRestartExplore();
          }}
        />
      );
    }

    switch (activeTab) {
      case "explore":
        return (
          <div className="deck-container">
            <SwipeDeck
              items={getFilteredPool()}
              onSwipe={handleSwipe}
              onOpenInsight={(item) => setSelectedInsightItem(item)}
              language={language}
            />
          </div>
        );
      case "liked":
        return (
          <LikedScreen
            likedPool={likedPool}
            onRemove={handleRemoveLiked}
            onStartTournament={() => setIsTournamentActive(true)}
            language={language}
          />
        );
      case "profile":
        return (
          <ProfileScreen
            activePersona={activePersona}
            onChangePersona={(p) => setActivePersona(p)}
            language={language}
            setLanguage={setLanguage}
          />
        );
      default:
        return null;
    }
  };

  // Status bar styling
  const isSplashActive = showSplash;

  return (
    <>
      {/* Visual Background Decors */}
      <div className="page-bg-decor" />

      {/* Simulator Wrapper */}
      <PhoneFrame lightStatusBar={isSplashActive}>
        {/* SPLASH SCREEN */}
        {showSplash && (
          <div className="splash-screen">
            <div className="splash-logo-container">
              <div className="splash-logo-circle">
                {/* SVG representing Noodle fork bridge/smile */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 50 C20 70, 80 70, 80 50" stroke="white" strokeWidth="8" strokeLinecap="round" />
                  <path d="M35 55 C40 62, 60 62, 65 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="25" x2="30" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="20" x2="50" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" />
                  <line x1="70" y1="25" x2="70" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
              <h1 className="splash-logo-text">SweepEat</h1>
              <span className="splash-subtitle">{t.splashSubtitle}</span>
            </div>
            <div className="splash-footer">
              <Sparkles size={14} style={{ color: "var(--accent-orange)" }} />
              <span>{t.splashPowered}</span>
            </div>
          </div>
        )}

        {/* HEADER BAR (only visible outside splash and full tournament/winner phases) */}
        {!showSplash && !isTournamentActive && !tournamentChampion && (
          <header className="app-header">
            <div className="location-badge" onClick={() => setShowLocationModal(true)}>
              <MapPin size={16} />
              <span>{userCity}</span>
            </div>
            <h1 className="brand-title">SweepEat</h1>
            <button className="header-action-btn" onClick={() => setActiveTab("profile")}>
              <User size={16} />
            </button>
          </header>
        )}

        {/* MAIN BODY AREA */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {renderActiveContent()}
        </div>

        {/* BOTTOM TAB NAV (only visible outside splash and full tournament/winner phases) */}
        {!showSplash && !isTournamentActive && !tournamentChampion && (
          <nav className="bottom-nav">
            <button
              className={`nav-item ${activeTab === "explore" ? "active" : ""}`}
              onClick={() => setActiveTab("explore")}
            >
              <div className="nav-icon-wrapper">
                <Compass size={22} />
              </div>
              <span>{t.tabExplore}</span>
            </button>

            <button
              className={`nav-item ${activeTab === "liked" ? "active" : ""}`}
              onClick={() => setActiveTab("liked")}
            >
              <div className="nav-icon-wrapper" style={{ position: "relative" }}>
                <Heart size={22} />
                {likedPool.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "8px",
                      backgroundColor: "var(--primary-red)",
                      color: "#ffffff",
                      borderRadius: "50%",
                      width: "16px",
                      height: "16px",
                      fontSize: "9px",
                      fontWeight: 800,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {likedPool.length}
                  </span>
                )}
              </div>
              <span>{t.tabLiked}</span>
            </button>

            <button
              className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <div className="nav-icon-wrapper">
                <User size={22} />
              </div>
              <span>{t.tabProfile}</span>
            </button>
          </nav>
        )}

        {/* AI INSIGHT BOTTOM SHEET MODAL */}
        {!showSplash && selectedInsightItem && (
          <AiInsightModal
            item={selectedInsightItem}
            onClose={() => setSelectedInsightItem(null)}
            activePersona={activePersona}
            onChangePersona={(p) => setActivePersona(p)}
            language={language}
          />
        )}

        {/* LOCATION SELECTOR MODAL */}
        {!showSplash && showLocationModal && (
          <LocationModal
            currentCity={userCity}
            onSelectCity={(city) => setUserCity(city)}
            onClose={() => setShowLocationModal(false)}
            language={language}
          />
        )}
      </PhoneFrame>
    </>
  );
}

