// ==========================================
// MODE LISTS: the 50 dishes each mode shows, most-preferred first.
//
// This file is the single place that decides which dish appears in which mode.
// The `modes` written on a dish in mockFood.ts / moreFood.ts is ignored; a dish that is
// in none of these lists is not shown in the app at all.
//
// A dish is referred to by its key: the photo file name without ".jpg"
// (public/images/<key>.jpg). Two older dishes use a web photo and have a fixed key below.
// ("yumurtali-ispanak" is the Çılbır photo and "turlu" the Etli Türlü photo.)
//
// How the lists were chosen (November 2026): dishes most people in Türkiye order and
// eat, not regional niche items. Grounding:
//  - Yemeksepeti 2025 order summary: döner first, then burger, pizza and kebab;
//    lahmacun and mercimek çorbası lead in İstanbul, simit in market orders.
//    https://www.dha.com.tr/gundem/yemeksepeti-2025-siparis-ozetini-acikladi-2787626
//  - Areda Survey street-food poll (2023, 1,100 people): kokoreç, döner, simit.
//    https://indigodergisi.com/2023/02/anket-turkiyenin-en-cok-sevilen-sokak-lezzetleri/
//  - Areda Piar soup poll (January 2024, 1,100 people): kelle paça, mercimek, işkembe,
//    tarhana, yayla, domates, ezogelin, tavuk.
//    https://www.haberturk.com/iste-turk-halkinin-hem-en-sevdigi-hem-de-asla-yemem-dedigi-corba-3658738
// Divisive or niche dishes (deniz börülcesi, kereviz, pırasa, bakla, bamya, şırdan,
// zerde, kinoa...) were removed. Ranking inside a list is editorial judgement.
// ==========================================
import type { MenuItem } from "./mockFood";

export type Mode = MenuItem["modes"][number];

// Dishes whose photo is a web URL, so the photo file name cannot be their key.
export const KEY_BY_ID: Record<string, string> = {
  fit_4: "izgara-somon",
  cheat_32: "hamburger"
};

export const MODE_LISTS: Record<Mode, string[]> = {
  fit: [
    "tavuk-gogsu", "tavuk-sis", "izgara-kofte", "izgara-somon", "mercimek-corbasi-vegan",
    "coban-salata", "tavuklu-sezar-salata", "ton-balikli-salata", "izgara-levrek", "izgara-cipura",
    "menemen", "lor-omlet", "sahanda-yumurta", "yumurtali-ispanak", "sebzeli-omlet",
    "yayla-corbasi", "tavuk-corbasi", "ezogelin-corbasi", "cacik", "taze-fasulye",
    "firinda-tavuk", "enginar", "lahana-sarmasi", "izgara-bonfile", "tavuk-pirzola",
    "kuzu-sis", "mercimek-koftesi", "kisir", "piyaz", "gavurdagi-salatasi",
    "hellim-salata", "akdeniz-salatasi", "patlican-salatasi", "kabak-sandal", "mucver",
    "turlu", "sebzeli-guvec", "nohut-yemegi", "bezelye", "biber-dolmasi",
    "yaprak-sarmasi", "barbunya-pilaki", "humus", "domates-corbasi", "tarhana-corbasi",
    "yesil-mercimekli-bulgur-pilavi", "mantarli-sote", "chia-yogurt", "yulaf-lapasi", "izgara-sebze"
  ],
  cheat_day: [
    "hamburger", "et-doner", "lahmacun", "pizza", "iskender",
    "adana-kebap", "baklava", "kunefe", "kokorec", "tavuk-doner-durum-eco",
    "manti", "kumpir", "tantuni", "sucuklu-pide", "kavurmali-pide",
    "kiymali-pide", "etli-ekmek", "beyti-sarma", "cig-borek", "su-boregi",
    "midye-dolma", "midye-tava", "islak-hamburger", "cizbiz-kofte", "ekmek-arasi-kofte-eco",
    "tavuk-kanat-cheat", "citir-tavuk", "patates-kizartmasi", "san-sebastian", "waffle",
    "profiterol", "islak-kek", "tulumba", "lokma", "kazandibi",
    "firinda-sutlac", "maras-dondurmasi", "sobiyet", "fistikli-sarma", "ekmek-kadayifi",
    "revani", "trilece", "tiramisu", "magnolia", "kuzu-tandir",
    "kuzu-sis", "ciger-sis", "icli-kofte", "kuymak", "hatay-durum"
  ],
  economic: [
    "tavuk-doner-durum-eco", "simit", "lahmacun", "mercimek-corbasi-vegan", "kuru-fasulye-pilav-eco",
    "tavuklu-nohutlu-pilav-eco", "cig-kofte-vegan", "ekmek-arasi-kofte-eco", "menemen", "gozleme-eco",
    "salcali-tost", "ayvalik-tostu", "pogaca", "su-boregi", "pilav-ustu-doner",
    "soslu-makarna", "kiymali-makarna", "lahmacun-corba-eco", "ezogelin-corbasi", "tarhana-corbasi",
    "domates-corbasi", "yayla-corbasi", "tavuk-corbasi", "sosisli-sandvic-eco", "islak-hamburger",
    "patates-oturtma-eco", "nohut-yemegi", "turlu", "bezelye", "taze-fasulye",
    "biber-dolmasi", "lahana-sarmasi", "balik-ekmek", "kumpir", "midye-dolma",
    "tantuni", "kokorec", "cig-borek", "boyoz", "sikma-eco",
    "yumurtali-ekmek", "lor-omlet", "sahanda-yumurta", "coban-salata", "cacik",
    "kisir", "mercimek-koftesi", "misir", "patates-kizartmasi", "lokma"
  ],
  gourmet: [
    "cag-kebabi", "hunkar-begendi", "ali-nazik-kebabi", "kuzu-tandir", "kuzu-incik",
    "buryan-kebabi", "beyran", "kaburga-dolmasi", "testi-kebabi", "tepsi-kebabi",
    "iskender", "icli-kofte", "kuzu-sis", "ciger-sis", "beyti-sarma",
    "adana-kebap", "cokertme-kebabi", "kuzu-pirzola", "izgara-bonfile", "kuzu-kapama",
    "perde-pilavi", "keskek", "etli-ekmek", "kuymak", "hamsili-pilav",
    "izgara-levrek", "izgara-cipura", "izgara-somon", "karides-guvec", "kalamar-tava",
    "manti", "tire-koftesi", "islama-kofte", "kuru-patlican-dolmasi", "yaprak-sarmasi",
    "imam-bayildi", "karniyarik", "humus", "muhammara-acuka", "hellim-salata",
    "cerkez-tavugu", "pacanga-boregi", "kelle-paca", "baklava", "kunefe",
    "katmer", "fistikli-sarma", "sobiyet", "kazandibi", "tavuk-gogsu-tatlisi"
  ],
  vegan: [
    "cig-kofte-vegan", "mercimek-corbasi-vegan", "yaprak-sarmasi", "kuru-fasulye-pilav-eco", "kisir",
    "mercimek-koftesi", "boyoz", "patates-kizartmasi", "imam-bayildi", "humus",
    "falafel-durum", "taze-fasulye", "barbunya-pilaki", "biber-dolmasi", "lahana-sarmasi",
    "nohut-yemegi", "bulgur-pilavi", "karnabahar", "ezogelin-corbasi", "domates-corbasi",
    "coban-salata", "gavurdagi-salatasi", "acili-ezme", "saksuka", "muhammara-acuka",
    "babagannus", "patlican-salatasi", "patates-salatasi", "firinda-baharatli-patates-dilimleri", "simit",
    "patatesli-gozleme", "fava", "misir", "mantarli-sote", "yesil-mercimekli-bulgur-pilavi",
    "bezelye", "sebzeli-guvec", "izgara-sebze", "sebzeli-makarna", "sebze-corbasi",
    "vegan-burger", "kuru-patlican-dolmasi", "enginar", "akdeniz-salatasi", "lokma",
    "kabak-tatlisi", "asure", "tahin-helvasi", "turk-lokumu", "meyve-tabagi"
  ],
  tourist: [
    "et-doner", "adana-kebap", "iskender", "baklava", "lahmacun",
    "kunefe", "manti", "simit", "serpme-kahvalti", "menemen",
    "sucuklu-pide", "kofte-piyaz", "balik-ekmek", "midye-dolma", "kumpir",
    "kokorec", "gozleme-eco", "su-boregi", "testi-kebabi", "hunkar-begendi",
    "ali-nazik-kebabi", "cag-kebabi", "kuzu-tandir", "tantuni", "cig-kofte-vegan",
    "icli-kofte", "yaprak-sarmasi", "imam-bayildi", "karniyarik", "kuru-fasulye-pilav-eco",
    "mercimek-corbasi-vegan", "beyran", "islak-hamburger", "etli-ekmek", "kuymak",
    "hamsi-tava", "izgara-cipura", "maras-dondurmasi", "turk-lokumu", "firinda-sutlac",
    "kazandibi", "tavuk-gogsu-tatlisi", "lokma", "katmer", "kaburga-dolmasi",
    "ciger-sis", "tepsi-kebabi", "boyoz", "cig-borek", "misir"
  ]
};

// Names corrected so each name says exactly what its photo shows
// (the old names often listed two dishes for one photo).
export const NAME_OVERRIDES: Record<string, { nameTr: string; nameEn: string; isVegan?: boolean }> = {
  "adana-kebap": { nameTr: "Adana Kebap", nameEn: "Adana Kebab" },
  "baklava": { nameTr: "Fıstıklı Baklava", nameEn: "Pistachio Baklava" },
  "kunefe": { nameTr: "Künefe", nameEn: "Künefe" },
  "ayvalik-tostu": { nameTr: "Ayvalık Tostu", nameEn: "Ayvalık Toast" },
  "san-sebastian": { nameTr: "San Sebastian Cheesecake", nameEn: "San Sebastian Cheesecake" },
  "islak-kek": { nameTr: "Islak Kek", nameEn: "Wet Chocolate Cake" },
  "hatay-durum": { nameTr: "Hatay Usulü Tavuk Dürüm", nameEn: "Hatay-Style Chicken Wrap" },
  "midye-tava": { nameTr: "Midye Tava", nameEn: "Fried Mussels" },
  "cizbiz-kofte": { nameTr: "Köfte ve Patates Kızartması", nameEn: "Meatballs & Fries" },
  "ekmek-arasi-kofte-eco": { nameTr: "Köfte Ekmek", nameEn: "Meatball Sandwich" },
  "lahmacun-corba-eco": { nameTr: "Çorba + Lahmacun Menü", nameEn: "Soup & Lahmacun Combo" },
  "menemen": { nameTr: "Menemen", nameEn: "Menemen" },
  "patates-oturtma-eco": { nameTr: "Patates Oturtma", nameEn: "Potato & Minced Meat Bake" },
  "kuru-fasulye-pilav-eco": { nameTr: "Kuru Fasulye Pilav", nameEn: "White Beans & Rice" },
  "tarhana-corbasi": { nameTr: "Tarhana Çorbası", nameEn: "Tarhana Soup" },
  "yumurtali-ekmek": { nameTr: "Yumurtalı Ekmek", nameEn: "Turkish French Toast" },
  "salcali-tost": { nameTr: "Karışık Tost", nameEn: "Mixed Toast" },
  "kuzu-incik": { nameTr: "Kuzu İncik", nameEn: "Lamb Shank" },
  "piyaz": { nameTr: "Piyaz", nameEn: "White Bean Salad (Piyaz)" },
  "tavuk-corbasi": { nameTr: "Tavuk Suyu Çorbası", nameEn: "Chicken Soup" },
  "chia-yogurt": { nameTr: "Meyveli Yoğurt Kasesi", nameEn: "Yogurt Bowl with Fruit" },
  "akdeniz-salatasi": { nameTr: "Mevsim Salata", nameEn: "Seasonal Green Salad" },
  "firinda-baharatli-patates-dilimleri": { nameTr: "Fırında Baharatlı Patates", nameEn: "Oven-Roasted Spiced Potatoes" },
  "et-doner": { nameTr: "Et Döner", nameEn: "Beef Döner" },
  "firinda-tavuk": { nameTr: "Fırın Tavuk", nameEn: "Roast Chicken" },
  "lor-omlet": { nameTr: "Peynirli Omlet", nameEn: "Cheese Omelette" },
  "kuymak": { nameTr: "Kuymak (Mıhlama)", nameEn: "Kuymak (Cheese Fondue)" },
  "hamburger": { nameTr: "Hamburger", nameEn: "Hamburger" },
  "magnolia": { nameTr: "Magnolia", nameEn: "Magnolia Pudding" },
  "pilav-ustu-doner": { nameTr: "Pilav Üstü Döner", nameEn: "Döner over Rice" },
  // The photo shows minced meat in the sauce, so it is not the vegan "Soslu Makarna" it was labelled as
  "soslu-makarna": { nameTr: "Bolonez Soslu Makarna", nameEn: "Pasta Bolognese", isVegan: false }
};
