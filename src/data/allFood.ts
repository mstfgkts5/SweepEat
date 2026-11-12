// The full menu the app shows.
//
// Dishes come from mockFood.ts (original set), moreFood.ts (expanded set) and
// popularFood.ts (popular dishes added so each mode has 50). Which dish appears in
// which mode, and in what order, is decided only by MODE_LISTS in modeLists.ts.
// A dish in no list, or whose photo file is missing from public/images, is not shown.
import { mockFoodItems } from "./mockFood";
import type { MenuItem, Persona } from "./mockFood";
import { extraFoodItems } from "./moreFood";
import { popularFoodItems } from "./popularFood";
import { MODE_LISTS, KEY_BY_ID, NAME_OVERRIDES } from "./modeLists";
import type { Mode } from "./modeLists";
import { localDishKeys } from "./localDishes";
import { dishTypeFor, isDessertType } from "./dishTypes";

// Key of a dish = its photo file name without ".jpg" (see modeLists.ts).
const keyOf = (item: MenuItem): string => {
  if (KEY_BY_ID[item.id]) return KEY_BY_ID[item.id];
  const m = item.imageUrl.match(/^\/images\/(.+)\.jpg$/);
  return m ? m[1] : item.id;
};

// Photos present at build time (injected by vite.config.ts).
const PHOTOS = new Set(typeof __DISH_IMAGES__ !== "undefined" ? __DISH_IMAGES__ : []);
const hasPhoto = (item: MenuItem): boolean =>
  !item.imageUrl.startsWith("/images/") || PHOTOS.has(item.imageUrl.slice("/images/".length));

// When two dishes share a key, the first source wins: popularFood.ts holds the
// corrected versions (e.g. the Çılbır photo used to be named "Yumurtalı Ispanak").
const byKey = new Map<string, MenuItem>();
for (const item of [...popularFoodItems, ...mockFoodItems, ...extraFoodItems]) {
  const key = keyOf(item);
  if (!byKey.has(key)) byKey.set(key, item);
}

// Rank of each dish inside each mode (0 = most preferred).
const RANK: Record<Mode, Map<string, number>> = Object.fromEntries(
  (Object.keys(MODE_LISTS) as Mode[]).map((mode) => [mode, new Map(MODE_LISTS[mode].map((key, i) => [key, i]))])
) as Record<Mode, Map<string, number>>;

// Original names: the curated restaurant lists are keyed by them.
const ORIGINAL_NAME = new Map<string, string>();

const KEY_BY_ITEM_ID = new Map<string, string>();

export const allFoodItems: MenuItem[] = [...byKey.entries()]
  .map(([key, item]) => {
    const modes = (Object.keys(MODE_LISTS) as Mode[]).filter((mode) => RANK[mode].has(key));
    ORIGINAL_NAME.set(item.id, item.nameTr);
    KEY_BY_ITEM_ID.set(item.id, key);
    // A dish with a web photo uses a local copy once public/images/<key>.jpg exists (works offline).
    const imageUrl = !item.imageUrl.startsWith("/images/") && PHOTOS.has(`${key}.jpg`) ? `/images/${key}.jpg` : item.imageUrl;
    const merged = { ...item, ...NAME_OVERRIDES[key], imageUrl, modes };
    return { ...merged, dishType: dishTypeFor(key, merged.category, merged.isVegan) };
  })
  .filter((item) => item.modes.length > 0 && hasPhoto(item));

// Order a list of dishes by how preferred they are in the given mode.
// Zero Waste has no list of its own; its order is left as is.
export const sortByModeRank = (items: MenuItem[], persona: Persona): MenuItem[] => {
  if (persona === "zero_waste") return items;
  const rank = RANK[persona];
  const pos = (item: MenuItem) => rank.get(KEY_BY_ITEM_ID.get(item.id) ?? "") ?? Number.MAX_SAFE_INTEGER;
  return [...items].sort((a, b) => pos(a) - pos(b));
};

// Name to look a dish up in the curated restaurant lists.
export const restaurantLookupName = (item: MenuItem): string => ORIGINAL_NAME.get(item.id) ?? item.nameTr;

// Tourist mode: the dishes the city (and its region) is known for, in local order.
// Taken from the whole menu, so a local dish shows even if it is not in the Tourist list.
export const LOCAL_FIRST_COUNT = 20;
export const pickLocalDishes = (pool: MenuItem[], city: string): MenuItem[] => {
  const byItemKey = new Map(pool.map((item) => [KEY_BY_ITEM_ID.get(item.id) ?? "", item]));
  return localDishKeys(city)
    .map((key) => byItemKey.get(key))
    .filter((item): item is MenuItem => item !== undefined)
    .slice(0, LOCAL_FIRST_COUNT);
};

// Desserts are shown separately (the "Tatlılar" button); everything else is a main dish.
export type Course = "main" | "dessert";
export const isDessert = (item: MenuItem): boolean => isDessertType(item.dishType);
export const filterByCourse = (items: MenuItem[], course: Course): MenuItem[] =>
  items.filter((item) => isDessert(item) === (course === "dessert"));
