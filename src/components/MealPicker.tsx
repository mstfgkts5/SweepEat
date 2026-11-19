import React from "react";
import { Coffee, Sun, Moon } from "lucide-react";
import { MEALS, MEAL_LABELS, mealForHour, type Meal } from "../data/meals";

interface MealPickerProps {
  language: "tr" | "en";
  // Name of the active mode, shown in the question.
  modeName: string;
  current: Meal | null;
  onPick: (meal: Meal) => void;
}

export const MEAL_ICONS: Record<Meal, React.ReactNode> = {
  breakfast: <Coffee size={22} />,
  lunch: <Sun size={22} />,
  dinner: <Moon size={22} />
};

const HINT: Record<"tr" | "en", Record<Meal, string>> = {
  tr: { breakfast: "Yumurta, börek, kahvaltı tabakları", lunch: "Gün ortası için doyurucu yemekler", dinner: "Akşamın ana yemekleri" },
  en: { breakfast: "Eggs, pastries, breakfast plates", lunch: "Filling midday dishes", dinner: "Main dishes for the evening" }
};

// "Hangi öğün?" — asked when the app opens and after picking a mode.
const MealPicker: React.FC<MealPickerProps> = ({ language, modeName, current, onPick }) => {
  const tr = language === "tr";
  const suggested = current ?? mealForHour(new Date().getHours());
  return (
    <div className="meal-picker" role="dialog" aria-modal="true" aria-label={tr ? "Hangi öğün?" : "Which meal?"}>
      <div className="meal-picker-card">
        <span className="meal-picker-mode">{modeName}</span>
        <h2 className="meal-picker-title">{tr ? "Hangi öğün için bakıyorsun?" : "Which meal are you looking for?"}</h2>
        <div className="meal-picker-options">
          {MEALS.map((meal) => (
            <button
              key={meal}
              className={`meal-option ${meal === suggested ? "suggested" : ""}`}
              onClick={() => onPick(meal)}
            >
              <span className="meal-option-icon">{MEAL_ICONS[meal]}</span>
              <span className="meal-option-text">
                <strong>{MEAL_LABELS[language][meal]}</strong>
                <span>{HINT[language][meal]}</span>
              </span>
              {meal === suggested && !current && <span className="meal-option-now">{tr ? "şu an" : "now"}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPicker;
