// ==========================================
// Öğün: which main dishes fit breakfast, lunch or dinner.
//
// The user picks the meal when the app opens and after changing mode; the deck, the
// "Sana Özel" picks and Grup Masası then only use main dishes for that meal. Desserts
// ("Tatlılar") are not filtered by meal.
//
// Rules (editorial, by what people in Türkiye usually eat when):
//  - BREAKFAST: egg dishes, breakfast pastries and toasts, breakfast soups.
//  - BREAKFAST_ONLY: dishes that are hardly a lunch or dinner (serpme kahvaltı, simit...).
//  - NOT_DINNER: light breakfast-type dishes that are fine for lunch but not for dinner.
//  - Everything else is a lunch and a dinner dish.
// ==========================================
import type { MenuItem } from "./mockFood";
import { dishKeyOf, isDessert } from "./allFood";

export type Meal = "breakfast" | "lunch" | "dinner";
export const MEALS: Meal[] = ["breakfast", "lunch", "dinner"];

export const MEAL_LABELS: Record<"tr" | "en", Record<Meal, string>> = {
  tr: { breakfast: "Kahvaltı", lunch: "Öğle Yemeği", dinner: "Akşam Yemeği" },
  en: { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner" }
};

const BREAKFAST = new Set([
  "serpme-kahvalti", "menemen", "sahanda-yumurta", "yumurtali-ispanak", "lor-omlet", "sebzeli-omlet",
  "kuymak", "yulaf-lapasi", "chia-yogurt", "simit", "pogaca", "boyoz", "su-boregi", "gozleme-eco",
  "patatesli-gozleme", "sikma-eco", "yumurtali-ekmek", "salcali-tost", "ayvalik-tostu",
  "mercimek-corbasi-vegan", "kelle-paca",
  // added in the review of 19 November 2026 (Mustafa): breakfast in many cities
  "beyran", "ciger-sis", "tavuk-corbasi", "hellim-salata"
]);

const BREAKFAST_ONLY = new Set([
  "serpme-kahvalti", "kuymak", "yulaf-lapasi", "chia-yogurt", "simit", "pogaca", "boyoz", "yumurtali-ekmek"
]);

const NOT_DINNER = new Set([
  "menemen", "sahanda-yumurta", "yumurtali-ispanak", "lor-omlet", "sebzeli-omlet", "su-boregi",
  "gozleme-eco", "patatesli-gozleme", "sikma-eco", "salcali-tost", "ayvalik-tostu", "sosisli-sandvic-eco"
]);

// The meals a main dish fits (from its key, see modeLists.ts). Pure, so it can be tested.
export const mealsForKey = (key: string): Meal[] => {
  const meals: Meal[] = [];
  if (BREAKFAST.has(key)) meals.push("breakfast");
  if (!BREAKFAST_ONLY.has(key)) meals.push("lunch");
  if (!BREAKFAST_ONLY.has(key) && !NOT_DINNER.has(key)) meals.push("dinner");
  return meals;
};

// Desserts fit any meal; main dishes only their own meals.
export const fitsMeal = (item: MenuItem, meal: Meal): boolean =>
  isDessert(item) || mealsForKey(dishKeyOf(item)).includes(meal);

export const filterByMeal = (items: MenuItem[], meal: Meal): MenuItem[] => items.filter((item) => fitsMeal(item, meal));

// A sensible default from the clock: before 11:00 breakfast, before 16:00 lunch, else dinner.
export const mealForHour = (hour: number): Meal => (hour >= 5 && hour < 11 ? "breakfast" : hour >= 11 && hour < 16 ? "lunch" : "dinner");
