import React from "react";
import { UtensilsCrossed, CakeSlice } from "lucide-react";
import type { Course } from "../data/allFood";
import { translations } from "../data/translations";

interface CourseToggleProps {
  course: Course;
  onChange: (course: Course) => void;
  counts?: { main: number; dessert: number };
  language: "tr" | "en";
}

// Small "Ana Yemekler / Tatlılar" switch. Main dishes are the default;
// tapping "Ana Yemekler" again returns from the dessert list.
const CourseToggle: React.FC<CourseToggleProps> = ({ course, onChange, counts, language }) => {
  const t = translations[language];
  return (
    <div className="course-toggle" role="tablist" aria-label={`${t.courseMain} / ${t.courseDessert}`}>
      <button
        role="tab"
        aria-selected={course === "main"}
        className={`course-chip ${course === "main" ? "active" : ""}`}
        onClick={() => onChange("main")}
      >
        <UtensilsCrossed size={13} />
        {t.courseMain}
        {counts && <span className="course-count">{counts.main}</span>}
      </button>
      <button
        role="tab"
        aria-selected={course === "dessert"}
        className={`course-chip dessert ${course === "dessert" ? "active" : ""}`}
        onClick={() => onChange("dessert")}
      >
        <CakeSlice size={13} />
        {t.courseDessert}
        {counts && <span className="course-count">{counts.dessert}</span>}
      </button>
    </div>
  );
};

export default CourseToggle;
