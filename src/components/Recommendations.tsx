import React from "react";
import { Sparkles } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import { translations } from "../data/translations";

interface RecommendationsProps {
  items: MenuItem[];
  subtitle: string;
  language: "tr" | "en";
  onOpen: (item: MenuItem) => void;
}

// "Sana Özel Öneriler": a horizontal strip of suggested dishes; tap one for details.
const Recommendations: React.FC<RecommendationsProps> = ({ items, subtitle, language, onOpen }) => {
  const t = translations[language];
  if (items.length === 0) return null;
  return (
    <section className="reco-section">
      <div className="reco-head">
        <Sparkles size={16} />
        <span className="reco-title">{t.recoTitle}</span>
      </div>
      <p className="reco-subtitle">{subtitle}</p>
      <div className="reco-strip">
        {items.map((item) => {
          const name = language === "tr" ? item.nameTr : item.nameEn;
          return (
            <button key={item.id} className="reco-card" onClick={() => onOpen(item)}>
              <img src={item.imageUrl} alt={name} className="reco-img" />
              <span className="reco-name">{name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Recommendations;
