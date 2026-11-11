// ==========================================
// DISH TYPES ("yemek türü")
//
// Every dish gets one type: et, tavuk, balık, sebze, makarna, hamur işi, çorba,
// kahvaltılık, tatlı or fast food. The type is used by the recommendation
// algorithm (recommend.ts) and to split desserts from main dishes.
//
// Keys are the same as in modeLists.ts (photo file name without ".jpg").
// A dish missing from this table gets its type from its category (see dishTypeFor).
// ==========================================

export type DishType =
  | "et"
  | "tavuk"
  | "balik"
  | "sebze"
  | "makarna"
  | "hamur_isi"
  | "corba"
  | "kahvalti"
  | "tatli"
  | "fast_food";

export const DISH_TYPES: DishType[] = [
  "et", "tavuk", "balik", "sebze", "makarna", "hamur_isi", "corba", "kahvalti", "tatli", "fast_food"
];

export const DISH_TYPE_LABELS: Record<"tr" | "en", Record<DishType, string>> = {
  tr: {
    et: "Et", tavuk: "Tavuk", balik: "Balık", sebze: "Sebze", makarna: "Makarna",
    hamur_isi: "Hamur İşi", corba: "Çorba", kahvalti: "Kahvaltılık", tatli: "Tatlı", fast_food: "Fast Food"
  },
  en: {
    et: "Meat", tavuk: "Chicken", balik: "Fish", sebze: "Vegetable", makarna: "Pasta",
    hamur_isi: "Pastry", corba: "Soup", kahvalti: "Breakfast", tatli: "Dessert", fast_food: "Fast Food"
  }
};

const TYPE_BY_KEY: Record<string, DishType> = {
  // Et (kırmızı et, kebap, köfte, sakatat)
  "adana-kebap": "et", "ali-nazik-kebabi": "et", "beyti-sarma": "et", "buryan-kebabi": "et",
  "cag-kebabi": "et", "ciger-sis": "et", "cizbiz-kofte": "et", "cokertme-kebabi": "et",
  "ekmek-arasi-kofte-eco": "et", "et-doner": "et", "hunkar-begendi": "et", "icli-kofte": "et",
  "iskender": "et", "islama-kofte": "et", "izgara-bonfile": "et", "izgara-kofte": "et",
  "kofte-piyaz": "et", "kokorec": "et", "kuzu-incik": "et", "kuzu-pirzola": "et",
  "kuzu-sis": "et", "kuzu-tandir": "et", "pilav-ustu-doner": "et", "tantuni": "et",
  "tepsi-kebabi": "et", "testi-kebabi": "et", "tire-koftesi": "et", "kaburga-dolmasi": "et",
  "kuzu-kapama": "et", "karniyarik": "et", "patates-oturtma-eco": "et", "turlu": "et",
  "keskek": "et", "perde-pilavi": "et",

  // Tavuk
  "hatay-durum": "tavuk", "tavuk-doner-durum-eco": "tavuk", "tavuk-gogsu": "tavuk",
  "tavuk-kanat-cheat": "tavuk", "tavuk-pirzola": "tavuk", "tavuk-sis": "tavuk",
  "citir-tavuk": "tavuk", "firinda-tavuk": "tavuk", "tavuklu-nohutlu-pilav-eco": "tavuk",
  "cerkez-tavugu": "tavuk", "tavuklu-sezar-salata": "tavuk",

  // Balık ve deniz ürünleri
  "balik-ekmek": "balik", "hamsi-tava": "balik", "hamsili-pilav": "balik",
  "izgara-cipura": "balik", "izgara-levrek": "balik", "izgara-somon": "balik",
  "kalamar-tava": "balik", "karides-guvec": "balik", "midye-dolma": "balik",
  "midye-tava": "balik", "ton-balikli-salata": "balik",

  // Sebze, zeytinyağlı, baklagil, salata, meze
  "barbunya-pilaki": "sebze", "bezelye": "sebze", "bulgur-pilavi": "sebze", "enginar": "sebze",
  "firinda-baharatli-patates-dilimleri": "sebze", "humus": "sebze", "imam-bayildi": "sebze",
  "kabak-sandal": "sebze", "karnabahar": "sebze", "kuru-fasulye-pilav-eco": "sebze",
  "mantarli-sote": "sebze", "mercimek-koftesi": "sebze", "misir": "sebze", "mucver": "sebze",
  "muhammara-acuka": "sebze", "nohut-yemegi": "sebze", "patlican-salatasi": "sebze",
  "piyaz": "sebze", "saksuka": "sebze", "sebzeli-guvec": "sebze", "taze-fasulye": "sebze",
  "yaprak-sarmasi": "sebze", "yesil-mercimekli-bulgur-pilavi": "sebze", "acili-ezme": "sebze",
  "babagannus": "sebze", "biber-dolmasi": "sebze", "coban-salata": "sebze", "fava": "sebze",
  "gavurdagi-salatasi": "sebze", "hellim-salata": "sebze", "izgara-sebze": "sebze",
  "lahana-sarmasi": "sebze", "patates-salatasi": "sebze", "akdeniz-salatasi": "sebze",
  "falafel-durum": "sebze", "kisir": "sebze", "cacik": "sebze", "cig-kofte-vegan": "sebze",
  "kuru-patlican-dolmasi": "sebze",

  // Makarna, mantı, pizza
  "kiymali-makarna": "makarna", "manti": "makarna", "pizza": "makarna",
  "sebzeli-makarna": "makarna", "soslu-makarna": "makarna",

  // Hamur işi (pide, börek, gözleme, lahmacun...)
  "boyoz": "hamur_isi", "cig-borek": "hamur_isi", "etli-ekmek": "hamur_isi",
  "gozleme-eco": "hamur_isi", "kavurmali-pide": "hamur_isi", "kiymali-pide": "hamur_isi",
  "lahmacun-corba-eco": "hamur_isi", "pacanga-boregi": "hamur_isi",
  "patatesli-gozleme": "hamur_isi", "pogaca": "hamur_isi", "sikma-eco": "hamur_isi",
  "simit": "hamur_isi", "sucuklu-pide": "hamur_isi", "su-boregi": "hamur_isi",
  "lahmacun": "hamur_isi",

  // Çorba
  "domates-corbasi": "corba", "ezogelin-corbasi": "corba", "mercimek-corbasi-vegan": "corba",
  "sebze-corbasi": "corba", "tarhana-corbasi": "corba", "yayla-corbasi": "corba",
  "tavuk-corbasi": "corba", "kelle-paca": "corba", "beyran": "corba",

  // Kahvaltılık
  "chia-yogurt": "kahvalti", "kuymak": "kahvalti", "lor-omlet": "kahvalti",
  "menemen": "kahvalti", "sahanda-yumurta": "kahvalti", "sebzeli-omlet": "kahvalti",
  "serpme-kahvalti": "kahvalti", "yulaf-lapasi": "kahvalti", "yumurtali-ekmek": "kahvalti",
  "yumurtali-ispanak": "kahvalti",

  // Fast food / sokak lezzeti
  "hamburger": "fast_food", "islak-hamburger": "fast_food", "vegan-burger": "fast_food",
  "ayvalik-tostu": "fast_food", "kumpir": "fast_food", "patates-kizartmasi": "fast_food",
  "salcali-tost": "fast_food", "sosisli-sandvic-eco": "fast_food",

  // Tatlı
  "asure": "tatli", "baklava": "tatli", "ekmek-kadayifi": "tatli", "firinda-sutlac": "tatli",
  "fistikli-sarma": "tatli", "islak-kek": "tatli", "kabak-tatlisi": "tatli", "katmer": "tatli",
  "kazandibi": "tatli", "kunefe": "tatli", "lokma": "tatli", "magnolia": "tatli",
  "maras-dondurmasi": "tatli", "meyve-tabagi": "tatli", "profiterol": "tatli", "revani": "tatli",
  "san-sebastian": "tatli", "sobiyet": "tatli", "tahin-helvasi": "tatli",
  "tavuk-gogsu-tatlisi": "tatli", "tiramisu": "tatli", "trilece": "tatli", "tulumba": "tatli",
  "turk-lokumu": "tatli", "waffle": "tatli"
};

// Fallback for a dish that is not in the table (e.g. a newly added one).
const TYPE_BY_CATEGORY: Record<string, DishType> = {
  dessert: "tatli",
  kebab: "et",
  flatbread: "hamur_isi",
  pasta: "makarna",
  soup: "corba",
  burger: "fast_food",
  vegan: "sebze",
  meze: "sebze"
};

export const dishTypeFor = (key: string, category: string, isVegan: boolean): DishType =>
  TYPE_BY_KEY[key] ?? TYPE_BY_CATEGORY[category] ?? (isVegan ? "sebze" : "et");

export const isDessertType = (type: DishType | undefined): boolean => type === "tatli";
