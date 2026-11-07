// ==========================================
// SUSTAINABILITY LAYER (HASAT-13)
// Carbon footprint estimates + "Zero Waste" end-of-day surplus deals.
// Everything here is additive: existing modes keep working unchanged.
// ==========================================
import type { MenuItem, Persona } from "./mockFood";

export type CarbonGrade = "A" | "B" | "C" | "D" | "E";

export interface CarbonInfo {
  kg: number; // estimated kg CO2e per portion
  grade: CarbonGrade;
}

export interface SurplusDeal {
  discountPercent: number;
  portionsLeft: number;
  pickupUntil: string; // "HH:MM"
  rescuedPrice: number;
  foodKg: number; // food saved per portion
  co2Kg: number; // emissions that would be wasted if the portion were thrown away
}

export interface ImpactStats {
  meals: number;
  foodKg: number;
  co2Kg: number;
  moneySaved: number;
}

export const EMPTY_IMPACT: ImpactStats = { meals: 0, foodKg: 0, co2Kg: 0, moneySaved: 0 };

// Per-portion estimates derived from per-kg life-cycle averages
// (Poore & Nemecek, Science 2018: beef/lamb >> cheese > poultry/fish > eggs > plants).
const RED_MEAT_HEAVY = ["kebap", "kebab", "iskender", "döner", "beyti", "tandır", "kuzu", "testi", "hünkar", "burger", "kavurma", "beyran", "biftek", "steak", "ali nazik", "incik", "kuşbaşı", "et sote"];
const RED_MEAT_LIGHT = ["köfte", "kıyma", "lahmacun", "mantı", "karnıyarık", "tantuni", "pide", "kokoreç", "sucuk", "kumru", "sosis", "hamburger", "ciğer", "şırdan"];
const SEAFOOD = ["balık", "somon", "levrek", "çupra", "karides", "kalamar", "midye", "hamsi", "ton "];
const POULTRY = ["tavuk", "hindi", "chicken", "kanat"];
const DAIRY_EGG = ["peynir", "künefe", "sütlaç", "omlet", "menemen", "yumurta", "börek", "kumpir", "gözleme", "pizza", "baklava", "katmer", "cheesecake", "profiterol", "kek", "tost", "lor", "yoğurt", "kaşar", "dondurma", "waffle", "pancake"];

const has = (name: string, words: string[]) => words.some((w) => name.includes(w));

export const estimateCarbon = (item: MenuItem): CarbonInfo => {
  const name = `${item.nameTr} ${item.nameEn}`.toLowerCase();
  let kg: number;
  if (item.isVegan) kg = 0.4;
  // Poultry and seafood first, so "Tavuk Döner" is not counted as red meat.
  else if (has(name, POULTRY)) kg = 1.3;
  else if (has(name, SEAFOOD)) kg = 1.9;
  else if (has(name, RED_MEAT_HEAVY)) kg = 5.8;
  else if (has(name, RED_MEAT_LIGHT)) kg = 3.1;
  else if (has(name, DAIRY_EGG)) kg = 1.0;
  else kg = 0.6;

  // Larger portions emit more: scale lightly with calories around a 500 kcal reference.
  const scale = Math.min(Math.max(item.calories / 500, 0.7), 1.4);
  kg = Math.round(kg * scale * 10) / 10;

  let grade: CarbonGrade = "E";
  if (kg <= 0.6) grade = "A";
  else if (kg <= 1.2) grade = "B";
  else if (kg <= 2.2) grade = "C";
  else if (kg <= 4) grade = "D";
  return { kg, grade };
};

export const CARBON_GRADE_COLORS: Record<CarbonGrade, string> = {
  A: "#0A846B",
  B: "#4CA84A",
  C: "#C9A100",
  D: "#E07A00",
  E: "#C82200"
};

export const getAverageCarbon = (items: MenuItem[]): number => {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, it) => acc + estimateCarbon(it).kg, 0);
  return Math.round((sum / items.length) * 10) / 10;
};

// Deterministic hash so the same dish always gets the same deal.
const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

export const getSurplusDeal = (item: MenuItem): SurplusDeal | null => {
  const h = hash(item.id);
  // Roughly 40% of dishes have a leftover portion at the end of the day.
  if (h % 100 >= 40) return null;
  const discountPercent = [40, 45, 50, 55, 60][h % 5];
  const portionsLeft = 1 + ((h >>> 3) % 5);
  const pickupUntil = ["21:00", "21:30", "22:00", "22:30", "23:00"][(h >>> 6) % 5];
  const rescuedPrice = Math.round(item.price * (1 - discountPercent / 100));
  const foodKg = Math.round(Math.min(Math.max(item.calories / 1400, 0.25), 0.6) * 100) / 100;
  return {
    discountPercent,
    portionsLeft,
    pickupUntil,
    rescuedPrice,
    foodKg,
    co2Kg: estimateCarbon(item).kg
  };
};

export const getZeroWasteInsight = (item: MenuItem, language: "tr" | "en"): string => {
  const deal = getSurplusDeal(item);
  const { kg } = estimateCarbon(item);
  if (!deal) {
    return language === "tr"
      ? `Bu yemeğin bugün artan porsiyonu yok. Tahmini karbon ayak izi porsiyon başına ${kg} kg CO₂e.`
      : `No leftover portions of this dish today. Estimated footprint: ${kg} kg CO₂e per portion.`;
  }
  return language === "tr"
    ? `Bu porsiyon gün sonunda çöpe gitmek üzere. %${deal.discountPercent} indirimle kurtarırsan ${deal.foodKg} kg yemeği ve üretiminde harcanan ~${deal.co2Kg} kg CO₂e'yi israftan korursun.`
    : `This portion is about to be thrown away at closing time. Rescue it at ${deal.discountPercent}% off and you save ${deal.foodKg} kg of food and the ~${deal.co2Kg} kg CO₂e spent producing it.`;
};

const IMPACT_KEY = "sweepeat_impact_v1";

export const loadImpact = (): ImpactStats => {
  try {
    const raw = localStorage.getItem(IMPACT_KEY);
    if (!raw) return EMPTY_IMPACT;
    return { ...EMPTY_IMPACT, ...JSON.parse(raw) };
  } catch {
    return EMPTY_IMPACT;
  }
};

export const saveImpact = (stats: ImpactStats) => {
  try {
    localStorage.setItem(IMPACT_KEY, JSON.stringify(stats));
  } catch {
    // storage unavailable (private mode): keep the in-memory value only
  }
};

export const ecoText = {
  tr: {
    zeroWasteTitle: "Sıfır Atık Modu (Gün Sonu Kurtar)",
    zeroWasteDesc: "Restoranların gün sonunda artan porsiyonlarını indirimli göstererek gıda israfını önler.",
    zeroWasteLabel: "Sıfır Atık",
    surplusBadge: "GÜN SONU KURTAR",
    portionsLeft: "{n} porsiyon kaldı",
    pickupUntil: "son teslim {time}",
    carbonLabel: "Karbon",
    carbonToggleTitle: "Karbon Etiketleri",
    carbonToggleDesc: "Her yemekte tahmini karbon ayak izini (A–E) göster.",
    impactHeader: "Sürdürülebilirlik Etkin",
    impactMeals: "Kurtarılan porsiyon",
    impactFood: "Önlenen israf",
    impactCo2: "Korunan CO₂e",
    impactMoney: "Tasarruf",
    winnerEcoTitle: "Çevresel Etki",
    winnerEcoLine: "Tahmini karbon ayak izi: {kg} kg CO₂e (Not {grade}).",
    winnerEcoLower: "Ortalama bir yemekten {diff} kg daha düşük. 🌱",
    winnerEcoHigher: "Ortalama bir yemekten {diff} kg daha yüksek.",
    rescueBtn: "Porsiyonu Kurtar • {price} ₺",
    rescuedBtn: "Kurtarıldı! Teşekkürler 🌍",
    rescuedAlert: "{name} senin için ayrıldı! {restaurant} şubesinden teslim alabilirsin. Son teslim saati: {time}.",
    duelEcoHint: "Çevre dostu seçim",
    carbonNote: "*Karbon değerleri yaşam döngüsü ortalamalarından tahmin edilmiştir."
  },
  en: {
    zeroWasteTitle: "Zero Waste Mode (Rescue Leftovers)",
    zeroWasteDesc: "Shows restaurants' end-of-day leftover portions at a discount to prevent food waste.",
    zeroWasteLabel: "Zero Waste",
    surplusBadge: "RESCUE BEFORE CLOSING",
    portionsLeft: "{n} portions left",
    pickupUntil: "pick up by {time}",
    carbonLabel: "Carbon",
    carbonToggleTitle: "Carbon Labels",
    carbonToggleDesc: "Show the estimated carbon footprint (A–E) on every dish.",
    impactHeader: "Your Sustainability Impact",
    impactMeals: "Portions rescued",
    impactFood: "Waste prevented",
    impactCo2: "CO₂e saved",
    impactMoney: "Money saved",
    winnerEcoTitle: "Environmental Impact",
    winnerEcoLine: "Estimated footprint: {kg} kg CO₂e (Grade {grade}).",
    winnerEcoLower: "{diff} kg lower than an average dish. 🌱",
    winnerEcoHigher: "{diff} kg higher than an average dish.",
    rescueBtn: "Rescue Portion • ₺{price}",
    rescuedBtn: "Rescued! Thank you 🌍",
    rescuedAlert: "{name} is reserved for you! Pick it up from {restaurant} by {time}.",
    duelEcoHint: "Eco-friendly pick",
    carbonNote: "*Carbon values are estimated from life-cycle averages."
  }
};

// Insight text for any persona; zero_waste is generated from the deal data.
export const getPersonaInsight = (
  item: MenuItem,
  persona: Persona,
  language: "tr" | "en"
): string => {
  if (persona === "zero_waste") return getZeroWasteInsight(item, language);
  return item.aiInsights[language][persona];
};
