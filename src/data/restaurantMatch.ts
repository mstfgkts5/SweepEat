// ==========================================
// RESTAURANT SUGGESTIONS for a chosen dish in a city (5 per dish).
//
// Every suggestion is a real place with an address, from one of three sources:
//  - verifiedRestaurants.ts: places from realRestaurants.ts found on OpenStreetMap
//    (the only ones that may carry a Google star rating),
//  - extraCities.ts: Diyarbakır / Kahramanmaraş places from published guides,
//  - cityGuide.ts: places from published city guides (no rating).
// Nothing is invented: when a city has fewer than 5 places known for a dish, the list is
// topped up with places that serve that kind of food, then with other places of the city,
// and each suggestion says which of these it is (`match`).
// Tested by tests/restaurants.test.ts.
// ==========================================
import { REAL_RESTAURANTS_DB, FIT_ISTANBUL_RESTAURANTS, FIT_ANKARA_RESTAURANTS, FIT_IZMIR_RESTAURANTS, FIT_MERSIN_RESTAURANTS, FIT_ESKISEHIR_RESTAURANTS, FIT_ADANA_RESTAURANTS, CHEAT_ISTANBUL_RESTAURANTS, CHEAT_ANKARA_RESTAURANTS, CHEAT_IZMIR_RESTAURANTS, CHEAT_MERSIN_RESTAURANTS, CHEAT_GAZIANTEP_RESTAURANTS, CHEAT_ESKISEHIR_RESTAURANTS, CHEAT_ADANA_RESTAURANTS, ECONOMIC_ISTANBUL_RESTAURANTS, ECONOMIC_ANKARA_RESTAURANTS, ECONOMIC_IZMIR_RESTAURANTS, ECONOMIC_MERSIN_RESTAURANTS, ECONOMIC_ADANA_RESTAURANTS, ECONOMIC_GAZIANTEP_RESTAURANTS, ECONOMIC_ESKISEHIR_RESTAURANTS, GOURMET_ISTANBUL_RESTAURANTS, GOURMET_ANKARA_RESTAURANTS, GOURMET_IZMIR_RESTAURANTS, GOURMET_MERSIN_RESTAURANTS, GOURMET_GAZIANTEP_RESTAURANTS, GOURMET_ADANA_RESTAURANTS, GOURMET_ESKISEHIR_RESTAURANTS, VEGAN_ISTANBUL_RESTAURANTS, VEGAN_ANKARA_RESTAURANTS, VEGAN_IZMIR_RESTAURANTS, VEGAN_MERSIN_RESTAURANTS, VEGAN_GAZIANTEP_RESTAURANTS, VEGAN_ADANA_RESTAURANTS, VEGAN_ESKISEHIR_RESTAURANTS } from "./realRestaurants";
import type { RealRestaurant, RestaurantCategory } from "./realRestaurants";
import { EXTRA_CITY_RESTAURANTS, getExtraCityPlace } from "./extraCities";
import { getVerifiedRestaurant } from "./verifiedRestaurants";
import { hasTrustedRating, bayesianScore } from "./ranking";
import { GUIDE_PLACES } from "./cityGuide";
import type { PlaceKind } from "./cityGuide";
import type { DishType } from "./dishTypes";
import { restaurantCityFor, distanceKm } from "./provinces";
import { isDishChecked } from "./checkedDishes";
import placeCoords from "./placeCoords.json";

export const SUGGESTION_COUNT = 5;

// How well a suggested place fits the dish.
//  dish:    the place is known for this dish (curated list, or the dish named in its description)
//  kind:    the place serves this kind of food (e.g. a baklava shop for künefe)
//  general: another real place in the city, added so the list is never empty; check the menu
export type MatchLevel = "dish" | "kind" | "general";

export interface MockRestaurant {
  id: string;
  name: string;
  rating: number | null; // Google rating checked by hand; null = not checked
  reviewCount: number | null;
  area: string;
  comment: string;
  isFoodAvailable: boolean;
  match: MatchLevel;
  address?: string;
  mapsUri?: string;
  // Gündelik: straight-line distance from the user, when both positions are known.
  distanceKm?: number;
}

export interface DishQuery {
  key: string;          // menu key (photo file name)
  names: string[];      // shown name first, then older names (restaurantLookupNames)
  nameEn: string;
  dishType?: DishType;
  category: string;
}

const normalizeTurkish = (str: string): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/i̇/g, "i")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
};

const norm = (s: string): string =>
  normalizeTurkish(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// ---------- Places of a city (all sources merged) ----------

interface Place {
  name: string;
  address: string;
  district: string;
  kinds: Set<PlaceKind>;
  text: string;          // normalised name + all descriptions (for the kind of place)
  // Normalised name + descriptions from sources we trust for what a place is known for
  // (published city guides). Only this text makes a place "known for" a dish.
  knownText: string;
  comment: string;       // description shown to the user
  curatedFor: string[];  // normalised dish names of the curated lists the place is in
  rating?: number;
  reviews?: number;
  order: number;
}

const CATEGORY_KIND: Record<RestaurantCategory, PlaceKind[]> = {
  burger: ["fastfood"],
  kebab: ["kebap"],
  vegan: ["saglikli"],
  soup: ["corba"],
  pasta: ["italyan"],
  dessert: ["tatli"],
  general: []
};

// Words in a place's name or description that tell what kind of food it serves.
const KIND_WORDS: [PlaceKind, string[]][] = [
  ["kebap", ["kebap", "kebab", "ocakbasi", "ciger", "kofteci", "doner", "et lokanta", "kasap", "steak", "kaburga", "tandir", "beyti", "kuzu"]],
  ["tavuk", ["tavuk", "chicken", "kanat"]],
  ["balik", ["balik", "deniz urun", "seafood", "fish", "levrek", "cipura", "somon", "hamsi", "karides", "kalamar"]],
  ["ev", ["ev yemek", "esnaf", "lokanta", "zeytinyag", "tencere", "sulu yemek", "home"]],
  ["italyan", ["pizza", "pizzeria", "makarna", "italyan", "italian", "fettuccine", "lazanya", "spagetti", "penne", "napoliten"]],
  ["manti", ["manti"]],
  ["hamur", ["pide", "lahmacun", "borek", "gozleme", "simit", "pogaca", "firin", "ciborek", "cig borek", "sikma", "boyoz", "bakery"]],
  ["corba", ["corba", "paca", "iskembe", "beyran", "soup"]],
  ["kahvalti", ["kahvalti", "breakfast", "menemen", "serpme"]],
  ["tatli", ["tatli", "baklava", "kunefe", "kadayif", "pastane", "dondurma", "muhallebi", "sutlac", "katmer", "lokma", "helva", "dessert", "patisserie", "cheesecake", "profiterol", "kerebic", "sobiyet", "kazandibi", "tiramisu", "waffle"]],
  ["fastfood", ["burger", "hamburger", "tost", "bufe", "sandvic", "kumru", "fast food"]],
  ["sokak", ["kokorec", "midye", "tantuni", "balik ekmek", "cig kofte", "cigkofte", "kumpir", "durumcu"]],
  ["saglikli", ["vegan", "vejetaryen", "salata", "salad", "saglikli", "kinoa", "bowl", "glutensiz"]],
  ["meze", ["meze", "meyhane"]]
];

const startsWord = (text: string, word: string): boolean => (` ${text}`).includes(` ${word}`);

const kindsFromText = (text: string): PlaceKind[] =>
  KIND_WORDS.filter(([, words]) => words.some((w) => startsWord(text, w))).map(([kind]) => kind);

const CITY_KEYS: Record<string, string> = {
  istanbul: "ISTANBUL", ankara: "ANKARA", izmir: "IZMIR", mersin: "MERSIN",
  gaziantep: "GAZIANTEP", eskisehir: "ESKISEHIR", adana: "ADANA"
};

const CURATED_DBS: Record<string, Record<string, RealRestaurant[]>[]> = {
  ISTANBUL: [FIT_ISTANBUL_RESTAURANTS, CHEAT_ISTANBUL_RESTAURANTS, ECONOMIC_ISTANBUL_RESTAURANTS, GOURMET_ISTANBUL_RESTAURANTS, VEGAN_ISTANBUL_RESTAURANTS],
  ANKARA: [FIT_ANKARA_RESTAURANTS, CHEAT_ANKARA_RESTAURANTS, ECONOMIC_ANKARA_RESTAURANTS, GOURMET_ANKARA_RESTAURANTS, VEGAN_ANKARA_RESTAURANTS],
  IZMIR: [FIT_IZMIR_RESTAURANTS, CHEAT_IZMIR_RESTAURANTS, ECONOMIC_IZMIR_RESTAURANTS, GOURMET_IZMIR_RESTAURANTS, VEGAN_IZMIR_RESTAURANTS],
  MERSIN: [FIT_MERSIN_RESTAURANTS, CHEAT_MERSIN_RESTAURANTS, ECONOMIC_MERSIN_RESTAURANTS, GOURMET_MERSIN_RESTAURANTS, VEGAN_MERSIN_RESTAURANTS],
  GAZIANTEP: [CHEAT_GAZIANTEP_RESTAURANTS, ECONOMIC_GAZIANTEP_RESTAURANTS, GOURMET_GAZIANTEP_RESTAURANTS, VEGAN_GAZIANTEP_RESTAURANTS],
  ESKISEHIR: [FIT_ESKISEHIR_RESTAURANTS, CHEAT_ESKISEHIR_RESTAURANTS, ECONOMIC_ESKISEHIR_RESTAURANTS, GOURMET_ESKISEHIR_RESTAURANTS, VEGAN_ESKISEHIR_RESTAURANTS],
  ADANA: [FIT_ADANA_RESTAURANTS, CHEAT_ADANA_RESTAURANTS, ECONOMIC_ADANA_RESTAURANTS, GOURMET_ADANA_RESTAURANTS, VEGAN_ADANA_RESTAURANTS]
};

const placeCache = new Map<string, Place[]>();

// All real places of a city with an address, merged by name.
export const cityPlaces = (city: string): Place[] => {
  const cached = placeCache.get(city);
  if (cached) return cached;
  const byName = new Map<string, Place>();
  let order = 0;
  const upsert = (
    name: string,
    v: { address: string; district: string; rating?: number; reviews?: number },
    kinds: PlaceKind[],
    description: string,
    curatedFor?: string,
    trusted = false
  ) => {
    const cleanName = name.split("(")[0].trim();
    const key = norm(cleanName);
    let place = byName.get(key);
    if (!place) {
      place = {
        name: cleanName,
        address: v.address,
        district: v.district,
        kinds: new Set(),
        text: norm(cleanName),
        knownText: norm(cleanName),
        comment: description,
        curatedFor: [],
        rating: v.rating,
        reviews: v.reviews,
        order: order++
      };
      byName.set(key, place);
    }
    place.text += ` ${norm(`${name} ${description}`)}`;
    if (trusted) place.knownText += ` ${norm(`${name} ${description}`)}`;
    // Curated per-dish lists: the description talks about that one dish, so the kind of
    // place is taken from the dish name, not from the text.
    const described = curatedFor ? kindsFromText(norm(curatedFor)) : kindsFromText(norm(description));
    for (const k of [...kinds, ...kindsFromText(norm(name)), ...described]) place.kinds.add(k);
    // A curated per-dish list counts only where a check found the dish at that place
    // (checkedDishes.ts): the older lists were written without sources.
    if (curatedFor && isDishChecked(city, cleanName, curatedFor)) place.curatedFor.push(norm(curatedFor));
  };

  const verified = (name: string) => getVerifiedRestaurant(city, name) ?? getExtraCityPlace(city, name);

  // 1) realRestaurants.ts city lists (by category) and the curated per-dish lists
  const cityDb = { ...REAL_RESTAURANTS_DB, ...EXTRA_CITY_RESTAURANTS };
  const cityKey = Object.keys(cityDb).find((k) => norm(k) === norm(city));
  if (cityKey) {
    for (const [cat, list] of Object.entries(cityDb[cityKey]) as [RestaurantCategory, RealRestaurant[]][]) {
      for (const r of list) {
        const v = verified(r.name);
        if (v) upsert(r.name, v, CATEGORY_KIND[cat], r.commentTr);
      }
    }
  }
  const dbKey = CITY_KEYS[norm(city).replace(/ /g, "")];
  for (const db of dbKey ? CURATED_DBS[dbKey] : []) {
    for (const [dish, list] of Object.entries(db)) {
      for (const r of list) {
        const v = verified(r.name);
        if (v) upsert(r.name, v, [], r.commentTr, dish);
      }
    }
  }
  // 2) city guides
  const guideKey = Object.keys(GUIDE_PLACES).find((k) => norm(k) === norm(city));
  for (const g of guideKey ? GUIDE_PLACES[guideKey] : []) {
    upsert(g.name, { address: g.address, district: g.district }, g.kinds, g.known, undefined, true);
  }

  // The same shop is sometimes listed under a shorter and a longer name
  // ("Zekeriya Usta" / "Katmerci Zekeriya Usta"): keep one, with everything known about both.
  const all = [...byName.values()].sort((a, b) => a.order - b.order);
  const places: Place[] = [];
  for (const place of all) {
    const key = norm(place.name);
    const twin = places.find((p) => {
      const other = norm(p.name);
      const [short, long] = key.length <= other.length ? [key, other] : [other, key];
      return short.split(" ").length >= 2 && ` ${long} `.includes(` ${short} `);
    });
    if (!twin) {
      places.push(place);
      continue;
    }
    twin.text += ` ${place.text}`;
    twin.knownText += ` ${place.knownText}`;
    for (const k of place.kinds) twin.kinds.add(k);
    twin.curatedFor.push(...place.curatedFor);
    if (twin.rating == null && place.rating != null) {
      twin.rating = place.rating;
      twin.reviews = place.reviews;
    }
  }
  placeCache.set(city, places);
  return places;
};

// ---------- What a dish needs ----------

// Words too general to identify a dish on their own.
const STOP_WORDS = new Set([
  "izgara", "firinda", "firin", "usulu", "tabagi", "tabak", "menu", "sade", "pilav", "pilavi", "ekmek",
  "arasi", "sicak", "soguk", "yemegi", "yemek", "kizartmasi", "sosu", "soslu", "ile", "yesil", "kirmizi",
  "bol", "taze", "kasarli", "peynirli", "etli", "tavuklu", "sebzeli", "kiymali", "fistikli", "cevizli",
  "salatasi", "salata", "corbasi", "corba", "dolmasi", "tatlisi", "kebabi", "kebap", "durum", "durumu",
  "special", "mix", "karisik", "vegan", "fit", "light", "ev", "usul", "kuru", "zeytinyagli", "baharatli",
  "dilimleri", "yumurtali", "bulgur", "pirinc", "and", "the", "with", "tava", "sis"
]);

// Dish words that are short or generic but still name the dish well.
const KEY_WORDS: Record<string, string[]> = {
  "adana-kebap": ["adana"],
  "iskender": ["iskender"],
  "et-doner": ["doner"],
  "pilav-ustu-doner": ["doner"],
  "tavuk-doner-durum-eco": ["tavuk doner", "doner"],
  "tavuk-sis": ["tavuk sis"],
  "kuzu-sis": ["kuzu sis"],
  "ciger-sis": ["ciger"],
  "hamsi-tava": ["hamsi"],
  "hamsili-pilav": ["hamsi"],
  "balik-ekmek": ["balik ekmek", "uskumru ekmek", "ekmek arasi sardalya"],
  "midye-dolma": ["midye"],
  "midye-tava": ["midye"],
  "kalamar-tava": ["kalamar"],
  "karides-guvec": ["karides"],
  "izgara-levrek": ["levrek"],
  "izgara-cipura": ["cipura"],
  "izgara-somon": ["somon"],
  "kumpir": ["kumpir"],
  "kokorec": ["kokorec"],
  "tantuni": ["tantuni"],
  "lahmacun": ["lahmacun"],
  "lahmacun-corba-eco": ["lahmacun"],
  "kunefe": ["kunefe"],
  "katmer": ["katmer"],
  "baklava": ["baklava"],
  "fistikli-sarma": ["fistikli sarma", "baklava"],
  "sobiyet": ["sobiyet", "baklava"],
  "maras-dondurmasi": ["dondurma"],
  "su-boregi": ["su boregi", "borek"],
  "cig-borek": ["cig borek", "ciborek", "cibörek"],
  "kelle-paca": ["paca"],
  "beyran": ["beyran"],
  "kaburga-dolmasi": ["kaburga"],
  "manti": ["manti"],
  "pizza": ["pizza"],
  "hamburger": ["burger"],
  "islak-hamburger": ["islak hamburger", "islak burger"],
  "vegan-burger": ["vegan burger", "burger"],
  "menemen": ["menemen"],
  "serpme-kahvalti": ["serpme"],
  "kuymak": ["kuymak", "muhlama"],
  "simit": ["simit"],
  "boyoz": ["boyoz"],
  "kazandibi": ["kazandibi"],
  "tavuk-gogsu-tatlisi": ["tavukgogsu", "tavuk gogsu"],
  "firinda-sutlac": ["sutlac"],
  "profiterol": ["profiterol"],
  "tiramisu": ["tiramisu"],
  "san-sebastian": ["san sebastian", "cheesecake"],
  "trilece": ["trilece"],
  "tulumba": ["tulumba", "burma"],
  "lokma": ["lokma"],
  "waffle": ["waffle"],
  "magnolia": ["magnolia"],
  "humus": ["humus"],
  "falafel-durum": ["falafel"],
  "icli-kofte": ["icli kofte"],
  "cig-kofte-vegan": ["cig kofte", "cigkofte"],
  "tire-koftesi": ["tire kofte"],
  "kofte-piyaz": ["kofte piyaz", "piyaz"],
  "izgara-kofte": ["izgara kofte", "kofteci", "kofte salonu"],
  "islama-kofte": ["islama"],
  "cizbiz-kofte": ["cizbiz"],
  "ekmek-arasi-kofte-eco": ["kofte ekmek", "ekmek arasi kofte", "kofteci"],
  "ali-nazik-kebabi": ["ali nazik"],
  "beyti-sarma": ["beyti"],
  "cag-kebabi": ["cag kebab"],
  "kuzu-tandir": ["tandir"],
  "testi-kebabi": ["testi kebab"],
  "hatay-durum": ["tavuk durum"],
  "sikma-eco": ["sikma"],
  "gozleme-eco": ["gozleme"],
  "patatesli-gozleme": ["gozleme"],
  "ayvalik-tostu": ["tost"],
  "salcali-tost": ["tost"],
  "kavurmali-pide": ["pide"],
  "kiymali-pide": ["pide"],
  "sucuklu-pide": ["pide"],
  "etli-ekmek": ["etli ekmek"],
  "keskek": ["keskek"],
  "tarhana-corbasi": ["tarhana"],
  "mercimek-corbasi-vegan": ["mercimek corba"],
  "ezogelin-corbasi": ["ezogelin"],
  "yayla-corbasi": ["yayla"],
  "domates-corbasi": ["domates corba"],
  "tavuk-corbasi": ["tavuk suyu", "tavuk corba"],
  "perde-pilavi": ["perde pilav"],
  "buryan-kebabi": ["buryan"],
  "kuru-patlican-dolmasi": ["kuru patlican", "kuru dolma"],
  "yaprak-sarmasi": ["yaprak sarma", "zeytinyagli sarma"],
  "lahana-sarmasi": ["lahana sarma", "karalahana"],
  "biber-dolmasi": ["biber dolma"],
  "hunkar-begendi": ["hunkar"],
  "karniyarik": ["karniyarik"],
  "imam-bayildi": ["imam bayildi"],
  "kuru-fasulye-pilav-eco": ["kuru fasulye"],
  "cerkez-tavugu": ["cerkez"],
  "acili-ezme": ["ezme"],
  "saksuka": ["saksuka"],
  "babagannus": ["babagannus"],
  "muhammara-acuka": ["muhammara", "acuka"],
  "patlican-salatasi": ["patlican salata", "koz patlican"],
  "gavurdagi-salatasi": ["gavurdagi"],
  "coban-salata": ["coban"],
  "kisir": ["kisir"],
  "mercimek-koftesi": ["mercimek kofte"],
  "tavuk-kanat-cheat": ["kanat"],
  "citir-tavuk": ["citir tavuk", "tavuk kizart", "fried chicken"],
  "tavuk-gogsu": ["tavuk gogsu izgara", "izgara tavuk"],
  "tavuk-pirzola": ["tavuk pirzola"],
  "firinda-tavuk": ["firin tavuk", "firinda tavuk"],
  "kuzu-pirzola": ["pirzola"],
  "izgara-bonfile": ["bonfile", "steak", "antrikot"],
  "kuzu-incik": ["incik"],
  "tepsi-kebabi": ["tepsi kebab"],
  "cokertme-kebabi": ["cokertme"],
  "patates-kizartmasi": ["patates kizartma", "patates", "fast food"],
  "sosisli-sandvic-eco": ["sosis"],
  // 23 Nov 2026: dishes whose own name words are too general on their own
  "izgara-sebze": ["izgara sebze", "sebze izgara"],
  "sebze-corbasi": ["sebze corba"],
  "sebzeli-makarna": ["sebzeli makarna"],
  "kiymali-makarna": ["kiymali makarna"],
  "bulgur-pilavi": ["bulgur pilav"],
  "yesil-mercimekli-bulgur-pilavi": ["mercimekli bulgur"],
  "firinda-baharatli-patates-dilimleri": ["elma dilim", "baharatli patates", "patates dilim"],
  "patates-salatasi": ["patates salata"],
  "kabak-tatlisi": ["kabak tatli"],
  "ton-balikli-salata": ["ton balik"],
  "tavuklu-nohutlu-pilav-eco": ["nohutlu pilav", "pilav ustu", "pilavci"],
  "akdeniz-salatasi": ["akdeniz salata", "mevsim salata"],
  "islak-kek": ["islak kek", "aglayan pasta"],
  "taze-fasulye": ["taze fasulye"],
  "sebzeli-guvec": ["sebze guvec", "sebzeli guvec"]
};

// Kinds of place for each dish type: first those that clearly serve it, then close ones.
const TYPE_KINDS: Record<DishType, [PlaceKind[], PlaceKind[]]> = {
  et: [["kebap"], ["ev", "meze"]],
  tavuk: [["tavuk", "kebap"], ["ev", "fastfood", "sokak"]],
  balik: [["balik"], ["meze"]],
  sebze: [["ev", "saglikli", "meze"], ["kebap", "kahvalti"]],
  makarna: [["italyan"], ["manti", "ev"]],
  hamur_isi: [["hamur"], ["kahvalti", "kebap"]],
  corba: [["corba", "ev"], ["kahvalti", "kebap"]],
  kahvalti: [["kahvalti"], ["hamur", "tatli"]],
  tatli: [["tatli"], ["kahvalti"]],
  fast_food: [["fastfood"], ["sokak", "italyan"]]
};

// Dishes that are mostly sold by a different kind of place than their type suggests.
const KEY_KINDS: Record<string, [PlaceKind[], PlaceKind[]]> = {
  "manti": [["manti"], ["ev", "hamur"]],
  "pizza": [["italyan"], ["fastfood", "hamur"]],
  "kokorec": [["sokak"], ["fastfood"]],
  "midye-dolma": [["balik"], ["meze", "sokak"]],
  "midye-tava": [["balik"], ["meze", "sokak"]],
  "balik-ekmek": [["balik"], ["sokak", "meze"]],
  "tantuni": [["sokak"], ["kebap", "fastfood"]],
  "cig-kofte-vegan": [["sokak"], ["kebap", "saglikli"]],
  "kumpir": [["sokak", "fastfood"], ["kahvalti"]],
  "falafel-durum": [["saglikli", "sokak"], ["meze", "fastfood"]],
  "humus": [["meze", "saglikli"], ["kebap", "ev"]],
  "lahmacun": [["hamur", "kebap"], ["sokak"]],
  "lahmacun-corba-eco": [["hamur", "kebap"], ["corba"]],
  "etli-ekmek": [["hamur"], ["kebap"]],
  "icli-kofte": [["kebap", "ev"], ["meze"]],
  "kelle-paca": [["corba"], ["ev", "kebap"]],
  "beyran": [["corba"], ["kebap", "kahvalti"]],
  "simit": [["hamur", "kahvalti"], ["tatli"]],
  "ayvalik-tostu": [["fastfood", "kahvalti"], ["hamur"]],
  "salcali-tost": [["fastfood", "kahvalti"], ["hamur"]],
  "sikma-eco": [["hamur", "kahvalti"], ["sokak"]],
  "cerkez-tavugu": [["meze", "ev"], ["tavuk"]],
  "katmer": [["tatli"], ["kahvalti", "hamur"]],
  "chia-yogurt": [["saglikli", "kahvalti"], ["tatli"]],
  "yulaf-lapasi": [["saglikli", "kahvalti"], ["tatli"]],
  "meyve-tabagi": [["tatli", "saglikli"], ["kahvalti"]]
};

const tokensOf = (name: string): string[] =>
  norm(name)
    .split(" ")
    .filter((w) => w.length >= 4 && !STOP_WORDS.has(w));

const stem = (w: string): string => (w.length > 6 ? w.slice(0, w.length - 2) : w);

// Ways to name the dish, each a list of words that must ALL be in the place's text: the
// hand-picked phrases when there are, otherwise each name's distinctive words together
// ("Bolonez Soslu Makarna" -> bolonez + makar), so a place that only says "makarna" is not
// "known for" Bolonez (it stays "serves this kind of food; check the menu").
// Reviewed 23 Nov 2026: single ingredient words ("tavuk", "dolma", "şiş", "dürüm") made
// places look known for dishes they do not serve.
const dishKeywords = (q: DishQuery): string[][] => {
  const picked = KEY_WORDS[q.key];
  if (picked) return picked.map((w) => [norm(w)]);
  return q.names
    .map((n) => tokensOf(n).map((t) => norm(stem(t))).filter((w) => w.length >= 3))
    .filter((ws) => ws.length > 0);
};

const hasWord = startsWord;

// "tatlısı" is a stop word for search, but it tells "Tavuk Göğsü" (grill) from
// "Tavuk Göğsü Tatlısı" (pudding), so it is kept here.
const wordSet = (name: string): string =>
  [...new Set([...tokensOf(name).map(stem), ...(norm(name).includes("tatli") ? ["tatli"] : [])])].sort().join(" ");
const sameWords = (a: string, b: string): boolean => {
  const wa = wordSet(a);
  return wa !== "" && wa === wordSet(b);
};

// Phrases that look like a dish word but are another dish: a "çiğ köfteci" is no köfte grill.
const NOT_THIS_DISH: Record<string, string[]> = {
  "izgara-kofte": ["cig kofte", "mercimek kofte", "icli kofte"],
  "ekmek-arasi-kofte-eco": ["cig kofte", "mercimek kofte", "icli kofte"],
  "kofte-piyaz": ["cig kofte", "mercimek kofte"]
};
const withoutOtherDishes = (text: string, key: string): string =>
  (NOT_THIS_DISH[key] ?? []).reduce((t, phrase) => t.replace(new RegExp(`(^| )${phrase}\\S*`, "g"), " "), text);
const namesDish = (text: string, ways: string[][]): boolean => ways.some((ws) => ws.every((w) => hasWord(text, w)));

// For the "general" top-up: sit-down restaurants first for a main dish, sweet shops for a dessert.
const MEAL_KINDS: PlaceKind[] = ["ev", "kebap", "meze", "balik", "italyan", "manti", "corba", "hamur"];
const SWEET_KINDS: PlaceKind[] = ["tatli", "kahvalti"];

// ---------- The suggestions ----------

const LEVEL_RANK: Record<MatchLevel, number> = { dish: 0, kind: 1, general: 2 };

export interface Suggestion {
  place: Place;
  match: MatchLevel;
}

// Every place of the city, best match for the dish first.
const rankPlaces = (q: DishQuery, city: string): Suggestion[] => {
  const places = cityPlaces(city);
  const words = dishKeywords(q);
  const [primary, secondary] = KEY_KINDS[q.key] ?? TYPE_KINDS[q.dishType ?? "et"];

  const scored = places.map((place) => {
    // A curated list names the dish when it has the same distinctive words as one of the
    // dish's names (so a "Mercimek Köftesi" list does not make a place known for
    // "Izgara Köfte", nor a "çorba" list for "Çorba + Lahmacun Menü").
    const curated = place.curatedFor.some((d) => q.names.some((n) => norm(n) === d || sameWords(n, d)));
    const named = namesDish(withoutOtherDishes(place.knownText, q.key), words);
    const kindRank = primary.some((k) => place.kinds.has(k)) ? 0 : secondary.some((k) => place.kinds.has(k)) ? 1 : 2;
    const fallbackKinds = q.dishType === "tatli" ? SWEET_KINDS : MEAL_KINDS;
    const fallbackRank = fallbackKinds.some((k) => place.kinds.has(k)) ? 0 : 1;
    // A place found by a dish word must also serve a fitting kind of food, so "Tavuk Göğsü"
    // (a milk pudding) does not match a chicken grill.
    const match: MatchLevel = curated || (named && kindRank < 2) ? "dish" : kindRank < 2 ? "kind" : "general";
    const trusted = hasTrustedRating(place.rating, place.reviews);
    return {
      place,
      match,
      score: [
        LEVEL_RANK[match],
        curated ? 0 : 1,
        kindRank,
        fallbackRank,
        trusted ? -bayesianScore(place.rating as number, place.reviews as number) : 0,
        place.order
      ]
    };
  });

  scored.sort((a, b) => {
    for (let i = 0; i < a.score.length; i++) if (a.score[i] !== b.score[i]) return a.score[i] - b.score[i];
    return 0;
  });
  return scored.map(({ place, match }) => ({ place, match }));
};

// The places to suggest for a dish in a city (no UI text): at most `count`, best first.
export const suggestPlaces = (q: DishQuery, city: string, count: number = SUGGESTION_COUNT): Suggestion[] =>
  rankPlaces(q, city).slice(0, count);

// ---------- Near the user (Gündelik mode) ----------

// Map positions of the places, from OpenStreetMap (tools/geocode-places.mts).
const COORDS = placeCoords as unknown as Record<string, [number, number, string]>;
export const placePosition = (city: string, name: string): { lat: number; lon: number } | null => {
  const c = COORDS[`${city}|${name}`];
  return c ? { lat: c[0], lon: c[1] } : null;
};

// Search circles around the user, smallest first. The first circle with enough places that
// serve the dish (or this kind of food) is used, so suggestions stay as close as possible.
export const NEAR_RADII_KM = [1, 2, 3, 5, 8, 12, 20];

export interface NearSuggestion extends Suggestion {
  distanceKm: number;
}

// Places that serve the dish or this kind of food, closest first, inside the smallest
// circle that has `count` of them. Empty when no such place has a known position near the
// user (then the normal city-wide list is used).
export const suggestNearby = (
  q: DishQuery,
  city: string,
  pos: { lat: number; lon: number },
  count: number = SUGGESTION_COUNT
): NearSuggestion[] => {
  const candidates = rankPlaces(q, city)
    .filter((s) => s.match !== "general")
    .map((s) => {
      const p = placePosition(city, s.place.name);
      return p ? { ...s, distanceKm: distanceKm(pos.lat, pos.lon, p.lat, p.lon) } : null;
    })
    .filter((s): s is NearSuggestion => s !== null)
    .sort((a, b) => a.distanceKm - b.distanceKm);
  const radius = NEAR_RADII_KM.find((r) => candidates.filter((c) => c.distanceKm <= r).length >= count);
  const inside = candidates.filter((c) => c.distanceKm <= (radius ?? NEAR_RADII_KM[NEAR_RADII_KM.length - 1]));
  return inside.slice(0, count);
};

const MATCH_NOTE: Record<MatchLevel, { tr: string; en: string }> = {
  dish: { tr: "", en: "" },
  kind: { tr: "Bu tür yemekler sunuyor; menüyü kontrol edin.", en: "Serves this kind of food; check the menu." },
  general: { tr: "Şehirdeki genel öneri; bu yemeği menüsünde aramayı unutmayın.", en: "A general pick in the city; check the menu for this dish." }
};

export const generateTopRestaurants = (
  q: DishQuery,
  userCity: string,
  language: "tr" | "en",
  near: { lat: number; lon: number } | null = null
): MockRestaurant[] => {
  const city = restaurantCityFor(userCity);
  const nearby = near ? suggestNearby(q, city, near) : [];
  const list: (Suggestion & { distanceKm?: number })[] = nearby.length > 0 ? nearby : suggestPlaces(q, city);
  return list.map(({ place, match, distanceKm: km }, index) => {
    const trusted = hasTrustedRating(place.rating, place.reviews);
    const note = MATCH_NOTE[match][language];
    return {
      id: `${index + 1}`,
      name: place.name,
      rating: trusted ? (place.rating as number) : null,
      reviewCount: trusted ? (place.reviews as number) : null,
      area: place.district,
      address: place.address,
      mapsUri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address || place.district} ${city}`)}`,
      comment: note ? `${place.comment} ${note}`.trim() : place.comment,
      isFoodAvailable: match === "dish",
      match,
      ...(km !== undefined ? { distanceKm: Math.round(km * 10) / 10 } : {})
    };
  });
};
