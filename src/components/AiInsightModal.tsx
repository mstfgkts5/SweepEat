import React from "react";
import { X, Dumbbell, Flame, Wallet, Compass, Sparkles, Leaf } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import { translations } from "../data/translations";

interface AiInsightModalProps {
  item: MenuItem;
  onClose: () => void;
  activePersona: "fit" | "cheat_day" | "economic" | "gourmet" | "vegan";
  onChangePersona: (persona: "fit" | "cheat_day" | "economic" | "gourmet" | "vegan") => void;
  language: "tr" | "en";
}

export const AiInsightModal: React.FC<AiInsightModalProps> = ({
  item,
  onClose,
  activePersona,
  onChangePersona,
  language
}) => {
  const t = translations[language];

  const getPersonaLabel = (key: string) => {
    if (language === "tr") {
      switch (key) {
        case "fit":
          return "Fit & Diyet";
        case "cheat_day":
          return "Cheat Day";
        case "economic":
          return "Ekonomik";
        case "gourmet":
          return "Gurme";
        case "vegan":
          return "Vegan";
        default:
          return "";
      }
    } else {
      switch (key) {
        case "fit":
          return "Fit & Diet";
        case "cheat_day":
          return "Cheat Day";
        case "economic":
          return "Economic";
        case "gourmet":
          return "Gourmet";
        case "vegan":
          return "Vegan";
        default:
          return "";
      }
    }
  };

  const getPersonaIcon = (key: string) => {
    switch (key) {
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
        return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="bottom-sheet-backdrop" onClick={onClose} />

      {/* Bottom Sheet */}
      <div className="bottom-sheet">
        <div className="bottom-sheet-handle" onClick={onClose} />

        <div className="bottom-sheet-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <h3 className="bottom-sheet-title">{language === "tr" ? item.nameTr : item.nameEn}</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Persona Selector Tabs */}
        <div className="persona-selector">
          {(["fit", "cheat_day", "economic", "gourmet", "vegan"] as const).map((persona) => (
            <button
              key={persona}
              className={`persona-tab ${activePersona === persona ? "active" : ""}`}
              onClick={() => onChangePersona(persona)}
            >
              {getPersonaIcon(persona)}
              <span>{getPersonaLabel(persona)}</span>
            </button>
          ))}
        </div>

        {/* AI Insight Box */}
        <div className="ai-explanation-box">
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", fontWeight: 800, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            <Sparkles size={13} />
            <span>{t.insightReferee} - {getPersonaLabel(activePersona)}</span>
          </div>
          <p className="ai-commentary">
            "{item.aiInsights[language][activePersona]}"
          </p>
        </div>

        {/* Nutrition Facts */}
        <div>
          <span className="section-label">{t.insightNutrients}</span>
          <div className="macros-grid">
            <div className="macro-card">
              <span className="macro-value">{item.calories}</span>
              <span className="macro-label">KCAL</span>
            </div>
            <div className="macro-card">
              <span className="macro-value">{item.protein}g</span>
              <span className="macro-label">{t.insightProtein}</span>
            </div>
            <div className="macro-card">
              <span className="macro-value">{item.carbs}g</span>
              <span className="macro-label">{t.insightCarbs}</span>
            </div>
            <div className="macro-card">
              <span className="macro-value">{item.fat}g</span>
              <span className="macro-label">{t.insightFat}</span>
            </div>
          </div>
          <div style={{ fontSize: "10px", color: "var(--text-light)", textAlign: "center", marginTop: "12px", fontStyle: "italic" }}>
            {language === "tr"
              ? "*Standart yerel tarif hazırlama standartlarına göre tahmin edilmiştir."
              : "*Estimated based on standard local recipe preparation standards."}
          </div>
        </div>
      </div>
    </>
  );
};
export default AiInsightModal;

