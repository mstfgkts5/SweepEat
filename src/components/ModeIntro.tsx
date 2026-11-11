import React, { useEffect, useState } from "react";
import { Dumbbell, Flame, Wallet, Compass, Leaf, Landmark, Recycle } from "lucide-react";
import type { Persona } from "../data/mockFood";
import { translations } from "../data/translations";
import { ecoText } from "../data/sustainability";

const DURATION_MS = 1800;
const FADE_MS = 250;

interface ModeIntroProps {
  persona: Persona;
  language: "tr" | "en";
  onDone: () => void;
}

// Circle fill + icon color per mode (brand palette)
const MODE_COLORS: Record<Persona, { bg: string; fg: string }> = {
  fit: { bg: "#2A9D8F", fg: "#ffffff" },
  cheat_day: { bg: "#E63946", fg: "#ffffff" },
  economic: { bg: "#E9C46A", fg: "#1D2D44" },
  gourmet: { bg: "#E63946", fg: "#ffffff" },
  vegan: { bg: "#2A9D8F", fg: "#ffffff" },
  tourist: { bg: "#E9C46A", fg: "#1D2D44" },
  zero_waste: { bg: "#2A9D8F", fg: "#ffffff" }
};

const ModeIntro: React.FC<ModeIntroProps> = ({ persona, language, onDone }) => {
  const t = translations[language];
  const eco = ecoText[language];
  const [leaving, setLeaving] = useState(false);

  // Auto-dismiss after a short moment; tapping skips ahead
  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), DURATION_MS - FADE_MS);
    const doneTimer = setTimeout(onDone, DURATION_MS);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persona]);

  const title: Record<Persona, string> = {
    fit: t.profileFitTitle,
    cheat_day: t.profileCheatTitle,
    economic: t.profileEconomicTitle,
    gourmet: t.profileGourmetTitle,
    vegan: t.profileVeganTitle,
    tourist: t.profileTouristTitle,
    zero_waste: eco.zeroWasteTitle
  };

  const desc: Record<Persona, string> = {
    fit: t.profileFitDesc,
    cheat_day: t.profileCheatDesc,
    economic: t.profileEconomicDesc,
    gourmet: t.profileGourmetDesc,
    vegan: t.profileVeganDesc,
    tourist: t.profileTouristDesc,
    zero_waste: eco.zeroWasteDesc
  };

  const icon: Record<Persona, React.ReactNode> = {
    fit: <Dumbbell size={54} />,
    cheat_day: <Flame size={54} />,
    economic: <Wallet size={54} />,
    gourmet: <Compass size={54} />,
    vegan: <Leaf size={54} />,
    tourist: <Landmark size={54} />,
    zero_waste: <Recycle size={54} />
  };

  const colors = MODE_COLORS[persona];

  return (
    <div className={`mode-intro ${leaving ? "leaving" : ""}`} onClick={onDone} role="status" aria-live="polite">
      <span className="mode-intro-label">{t.modeIntroLabel}</span>
      <div className="mode-intro-circle" style={{ backgroundColor: colors.bg, color: colors.fg }}>
        {icon[persona]}
      </div>
      <h2 className="mode-intro-title">{title[persona]}</h2>
      <p className="mode-intro-desc">{desc[persona]}</p>
      <div className="mode-intro-progress">
        <span style={{ backgroundColor: colors.bg, animationDuration: `${DURATION_MS - FADE_MS}ms` }} />
      </div>
    </div>
  );
};

export default ModeIntro;
