// ==========================================
// LOCAL DISHES for Tourist mode ("Yerel Lezzetler").
//
// In Tourist mode the first cards are the dishes the selected city is known for,
// then those of its surrounding region; after them comes the general Tourist list.
// Example: in Diyarbakır the deck starts with kaburga dolması and ciğer şiş, not kumpir.
//
// Keys are the same as in modeLists.ts (photo file name without ".jpg").
// A dish whose photo is missing is skipped automatically.
// Each list: the city's own dishes first, then nearby / same-region dishes.
// ==========================================

export const LOCAL_LISTS: Record<string, string[]> = {
  "İstanbul": [
    "balik-ekmek", "midye-dolma", "kokorec", "islak-hamburger", "kumpir",
    "simit", "hunkar-begendi", "kofte-piyaz", "midye-tava", "tavuk-gogsu-tatlisi",
    "kazandibi", "turk-lokumu", "tavuklu-nohutlu-pilav-eco", "iskender", "cerkez-tavugu",
    "hamsi-tava", "izgara-levrek", "su-boregi", "profiterol", "waffle"
  ],
  "Ankara": [
    "simit", "iskender", "etli-ekmek", "manti", "kuzu-tandir",
    "testi-kebabi", "keskek", "cig-borek", "tarhana-corbasi", "kuru-fasulye-pilav-eco",
    "gozleme-eco", "su-boregi", "kavurmali-pide", "yayla-corbasi", "kuzu-incik",
    "kelle-paca", "hunkar-begendi", "kofte-piyaz", "et-doner", "asure"
  ],
  "İzmir": [
    "boyoz", "tire-koftesi", "lokma", "midye-dolma", "cokertme-kebabi",
    "enginar", "izgara-cipura", "izgara-levrek", "ayvalik-tostu", "kalamar-tava",
    "karides-guvec", "yaprak-sarmasi", "imam-bayildi", "biber-dolmasi", "saksuka",
    "patlican-salatasi", "gozleme-eco", "sebzeli-guvec", "kabak-sandal", "piyaz"
  ],
  "Mersin": [
    "tantuni", "humus", "sikma-eco", "acili-ezme", "adana-kebap",
    "ciger-sis", "kunefe", "hatay-durum", "tepsi-kebabi", "muhammara-acuka",
    "babagannus", "icli-kofte", "falafel-durum", "lahmacun", "izgara-cipura",
    "kalamar-tava", "beyti-sarma", "cig-kofte-vegan", "baklava", "katmer"
  ],
  "Adana": [
    "adana-kebap", "ciger-sis", "sikma-eco", "acili-ezme", "tantuni",
    "humus", "kunefe", "hatay-durum", "tepsi-kebabi", "icli-kofte",
    "muhammara-acuka", "beyti-sarma", "lahmacun", "cig-kofte-vegan", "babagannus",
    "falafel-durum", "gavurdagi-salatasi", "katmer", "baklava", "ali-nazik-kebabi"
  ],
  "Gaziantep": [
    "beyran", "katmer", "baklava", "ali-nazik-kebabi", "fistikli-sarma",
    "sobiyet", "kuru-patlican-dolmasi", "lahmacun", "icli-kofte", "nohut-durum",
    "gavurdagi-salatasi", "ezogelin-corbasi", "muhammara-acuka", "yesil-mercimekli-bulgur-pilavi", "cig-kofte-vegan",
    "kaburga-dolmasi", "buryan-kebabi", "perde-pilavi", "kunefe", "adana-kebap"
  ],
  "Eskişehir": [
    "cig-borek", "iskender", "simit", "etli-ekmek", "manti",
    "kuzu-tandir", "keskek", "tarhana-corbasi", "su-boregi", "gozleme-eco",
    "kofte-piyaz", "et-doner", "kavurmali-pide", "kazandibi", "hunkar-begendi",
    "testi-kebabi", "yayla-corbasi", "kuru-fasulye-pilav-eco", "kelle-paca", "asure"
  ],
  "Diyarbakır": [
    "kaburga-dolmasi", "ciger-sis", "icli-kofte", "kelle-paca", "perde-pilavi",
    "buryan-kebabi", "kunefe", "lahmacun", "cig-kofte-vegan", "beyran",
    "kuru-patlican-dolmasi", "ali-nazik-kebabi", "baklava", "katmer", "fistikli-sarma",
    "sobiyet", "ezogelin-corbasi", "mercimek-corbasi-vegan", "kuzu-tandir", "adana-kebap"
  ],
  "Kahramanmaraş": [
    "maras-dondurmasi", "tarhana-corbasi", "icli-kofte", "manti", "kelle-paca",
    "ali-nazik-kebabi", "kuru-patlican-dolmasi", "lahmacun", "beyran", "katmer",
    "baklava", "fistikli-sarma", "sobiyet", "kunefe", "adana-kebap",
    "ciger-sis", "cig-kofte-vegan", "ezogelin-corbasi", "kaburga-dolmasi", "kuzu-tandir"
  ],
  // Regions without a city of their own in the picker (reached by automatic location)
  "Karadeniz": [
    "hamsi-tava", "hamsili-pilav", "kuymak", "kiymali-pide", "kavurmali-pide",
    "sucuklu-pide", "lahana-sarmasi", "keskek", "tarhana-corbasi", "manti",
    "etli-ekmek", "iskender", "kuzu-tandir", "su-boregi", "gozleme-eco",
    "kuru-fasulye-pilav-eco", "et-doner", "mercimek-corbasi-vegan", "kelle-paca", "firinda-sutlac"
  ],
  "Doğu Anadolu": [
    "cag-kebabi", "serpme-kahvalti", "kuzu-tandir", "kelle-paca", "keskek",
    "icli-kofte", "manti", "buryan-kebabi", "perde-pilavi", "kaburga-dolmasi",
    "ciger-sis", "beyran", "kuru-patlican-dolmasi", "lahmacun", "cig-kofte-vegan",
    "ezogelin-corbasi", "tarhana-corbasi", "simit", "et-doner", "kunefe"
  ]
};

// Every province -> the list that fits its cuisine best.
const PROVINCE_LIST: Record<string, string> = {
  // Marmara
  "İstanbul": "İstanbul", "Tekirdağ": "İstanbul", "Edirne": "İstanbul", "Kırklareli": "İstanbul",
  "Kocaeli": "İstanbul", "Sakarya": "İstanbul", "Yalova": "İstanbul", "Bursa": "İstanbul",
  "Balıkesir": "İzmir", "Çanakkale": "İzmir", "Bilecik": "Eskişehir",
  // Ege + western Mediterranean coast
  "İzmir": "İzmir", "Manisa": "İzmir", "Aydın": "İzmir", "Muğla": "İzmir", "Denizli": "İzmir",
  "Uşak": "İzmir", "Afyonkarahisar": "İzmir", "Antalya": "İzmir", "Isparta": "İzmir", "Burdur": "İzmir",
  "Kütahya": "Eskişehir", "Eskişehir": "Eskişehir",
  // İç Anadolu
  "Ankara": "Ankara", "Konya": "Ankara", "Karaman": "Ankara", "Aksaray": "Ankara", "Niğde": "Ankara",
  "Nevşehir": "Ankara", "Kırşehir": "Ankara", "Kırıkkale": "Ankara", "Kayseri": "Ankara",
  "Yozgat": "Ankara", "Sivas": "Ankara", "Çankırı": "Ankara",
  // Eastern Mediterranean
  "Mersin": "Mersin", "Adana": "Adana", "Osmaniye": "Adana", "Hatay": "Adana",
  // Güneydoğu
  "Gaziantep": "Gaziantep", "Kilis": "Gaziantep", "Şanlıurfa": "Gaziantep", "Adıyaman": "Gaziantep",
  "Kahramanmaraş": "Kahramanmaraş",
  "Diyarbakır": "Diyarbakır", "Mardin": "Diyarbakır", "Batman": "Diyarbakır", "Siirt": "Diyarbakır", "Şırnak": "Diyarbakır",
  // Karadeniz
  "Zonguldak": "Karadeniz", "Bartın": "Karadeniz", "Karabük": "Karadeniz", "Düzce": "Karadeniz",
  "Bolu": "Karadeniz", "Kastamonu": "Karadeniz", "Sinop": "Karadeniz", "Samsun": "Karadeniz",
  "Amasya": "Karadeniz", "Tokat": "Karadeniz", "Çorum": "Karadeniz", "Ordu": "Karadeniz",
  "Giresun": "Karadeniz", "Trabzon": "Karadeniz", "Rize": "Karadeniz", "Artvin": "Karadeniz",
  "Gümüşhane": "Karadeniz", "Bayburt": "Karadeniz",
  // Doğu Anadolu
  "Erzurum": "Doğu Anadolu", "Erzincan": "Doğu Anadolu", "Kars": "Doğu Anadolu", "Ardahan": "Doğu Anadolu",
  "Iğdır": "Doğu Anadolu", "Ağrı": "Doğu Anadolu", "Van": "Doğu Anadolu", "Muş": "Doğu Anadolu",
  "Bitlis": "Doğu Anadolu", "Hakkari": "Doğu Anadolu", "Bingöl": "Doğu Anadolu", "Tunceli": "Doğu Anadolu",
  "Elazığ": "Doğu Anadolu", "Malatya": "Doğu Anadolu"
};

const normalize = (s: string): string =>
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
    .replace(/[^a-z]/g, "");

const LIST_BY_PROVINCE = new Map(Object.entries(PROVINCE_LIST).map(([province, list]) => [normalize(province), list]));

// Local dish keys for a city, most typical first; empty if the city is unknown.
export const localDishKeys = (city: string): string[] => {
  const list = LIST_BY_PROVINCE.get(normalize(city));
  return list ? LOCAL_LISTS[list] : [];
};
