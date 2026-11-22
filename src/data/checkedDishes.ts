// ==========================================
// Restaurant–dish pairs from the older curated lists (realRestaurants.ts) that were checked
// on the web: the place exists and serves the dish. Only these make a place "known for" a
// dish ("Bu yemekle bilinir"); unchecked ones show as "serves this kind of food".
//
// Checked on 23 November 2026. Each entry: city, place name, the curated list's dish name,
// and where it was confirmed.
// ==========================================

export interface CheckedDish {
  city: string;
  place: string;
  dish: string; // name of the curated list (as in realRestaurants.ts)
  source: string; // URL that shows the dish at the place
}

export const CHECKED_DISHES: CheckedDish[] = [];

const norm = (s: string): string =>
  s
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const CHECKED = new Set(CHECKED_DISHES.map((c) => `${norm(c.city)}|${norm(c.place)}|${norm(c.dish)}`));

export const isDishChecked = (city: string, place: string, dish: string): boolean =>
  CHECKED.has(`${norm(city)}|${norm(place)}|${norm(dish)}`);
