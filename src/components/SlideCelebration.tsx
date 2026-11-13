import React, { useEffect, useRef } from "react";
import type { MenuItem } from "../data/mockFood";
import { SLIDE_DURATION_MS } from "../data/motion";

interface SlideCelebrationProps {
  item: MenuItem;
  language: "tr" | "en";
  onLanded: () => void;
}

// The champion slides down a "kaydırak" (the slide in the app logo) and lands.
// Tap anywhere to skip.
const SlideCelebration: React.FC<SlideCelebrationProps> = ({ item, language, onLanded }) => {
  const done = useRef(false);
  const land = () => {
    if (done.current) return;
    done.current = true;
    onLanded();
  };

  useEffect(() => {
    const timer = setTimeout(land, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
    // land is stable for the life of the overlay
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const name = language === "tr" ? item.nameTr : item.nameEn;
  return (
    <div className="slide-celebration" onClick={land} role="presentation">
      <div className="slide-stage">
        <svg className="slide-svg" viewBox="0 0 300 400" aria-hidden="true">
          {/* ladder */}
          <g className="slide-ladder">
            <line x1="38" y1="70" x2="38" y2="360" />
            <line x1="70" y1="70" x2="70" y2="360" />
            {[100, 140, 180, 220, 260, 300, 340].map((y) => (
              <line key={y} x1="38" y1={y} x2="70" y2={y} />
            ))}
          </g>
          {/* platform */}
          <rect className="slide-platform" x="30" y="58" width="78" height="14" rx="7" />
          {/* chute */}
          <path className="slide-chute" d="M 92 70 C 180 80 150 250 262 330" />
          <path className="slide-chute-stripe" d="M 92 70 C 180 80 150 250 262 330" />
          <ellipse className="slide-ground" cx="262" cy="352" rx="34" ry="7" />
        </svg>
        <div className="slide-rider">
          <img src={item.imageUrl} alt={name} />
        </div>
      </div>
      <span className="slide-caption">{name}</span>
    </div>
  );
};

export default SlideCelebration;
