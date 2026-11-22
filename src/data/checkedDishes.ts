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

export const CHECKED_DISHES: CheckedDish[] = [
  { city: "İstanbul", place: "Çiya Sofrası", dish: "İçli Köfte", source: "https://katieparla.com/ciya-sofrasi/" },
  { city: "İstanbul", place: "Tarihi Sultanahmet Köftecisi", dish: "Kuru Fasulye Piyazı", source: "https://www.migros.com.tr/yemek/tarihi-sultanahmet-koftecisi-1920-umraniye-serifali-mah-st-18e33" },
  { city: "İstanbul", place: "Meşhur Filibe Köftecisi", dish: "Kuru Fasulye Piyazı", source: "https://www.turkeysforlife.com/2017/11/meshur-filibe-koftecisi-istanbul.html" },
  { city: "İstanbul", place: "Pandeli Restaurant", dish: "Hünkar Beğendi", source: "https://guide.michelin.com/tr/tr/istanbul-province/istanbul/restaurant/pandeli" },
  { city: "İstanbul", place: "Köfteci Arnavut", dish: "Izgara Köfte (Bol Yeşillikle)", source: "https://www.timeout.com/istanbul/restaurants/koefteci-arnavut" },
  { city: "Ankara", place: "Kıtır", dish: "Kumpir", source: "https://wanderlog.com/place/details/1261497/k%C4%B1t%C4%B1r" },
  { city: "Ankara", place: "Trilye Restoran", dish: "Izgara Somon / Levrek", source: "https://nz.trip.com/restaurant/trkiye/ankara/detail/trilye-restaurant-490732" },
  { city: "Ankara", place: "Düveroğlu", dish: "Adana / Urfa Kebap Dürüm", source: "https://wanderlog.com/place/details/1162747" },
  { city: "Ankara", place: "Düveroğlu", dish: "Gaziantep Katmeri / Baklava", source: "https://wanderlog.com/place/details/1162747" },
  { city: "Ankara", place: "Düveroğlu", dish: "Mercimek Çorbası + Kıymalı Pide / Lahmacun", source: "https://wanderlog.com/place/details/1162747" },
  { city: "İzmir", place: "Yaşam Vegan Cafe", dish: "Falafel Dürüm", source: "https://www.arrivalguides.com/en/Travelguide/IZMIR/cafes/yasam-vegan-cafe-127072" },
  { city: "İzmir", place: "Çorbacı İsmet Usta", dish: "Mercimek Çorbası", source: "https://wanderlog.com/place/details/3265313/ismet-usta" },
  { city: "Eskişehir", place: "Walker's Coffee House", dish: "Sufle / San Sebastian Cheesecake", source: "https://wanderlog.com/list/geoCategory/292176/best-coffee-shops-and-best-cafes-in-eskisehir-province" },
  { city: "Eskişehir", place: "Doyuran Kahvaltı Salonu", dish: "Lor Peynirli Omlet / Menemen", source: "https://wanderlog.com/place/details/2697685" },
  { city: "Eskişehir", place: "Doyuran Kahvaltı Salonu", dish: "Yumurta Kapama / Ekmek Banmalık Menemen", source: "https://wanderlog.com/place/details/2697685" },
  { city: "Adana", place: "Cihangir Kebap & Kaburga", dish: "Adana / Urfa Kebap Dürüm", source: "https://wanderlog.com/place/details/3096397" },
  { city: "İstanbul", place: "Dürümcü Emmi", dish: "Adana / Urfa Kebap Dürüm", source: "https://www.firmasec.com/firma/mdbmdb-durumcu-emmi" },
  { city: "İstanbul", place: "Beyti Restaurant", dish: "Beyti Sarma", source: "https://guide.michelin.com/tr/tr/istanbul-province/istanbul/restaurant/beyti" },
  { city: "İstanbul", place: "Sayla Mantı", dish: "Mantı", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Bodrum Mantı & Cafe", dish: "Mantı", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Reks Kokoreç", dish: "Kokoreç", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Patatos", dish: "Kumpir", source: "https://yandex.com.tr/maps/org/patatos/1108085697/" },
  { city: "İstanbul", place: "Karaköy Güllüoğlu", dish: "Gaziantep Katmeri / Baklava", source: "https://spottedbylocals.com/istanbul/gulluoglu-karakoy" },
  { city: "İstanbul", place: "Hafız Mustafa 1864", dish: "Gaziantep Katmeri / Baklava", source: "https://wanderlog.com/place/details/398318" },
  { city: "İstanbul", place: "Sabırtaşı Restoran", dish: "İçli Köfte", source: "https://tasteatlas.com/sabirtasi-restoran/icli-kofte" },
  { city: "İstanbul", place: "Şampiyon Kokoreç", dish: "Midye Tava ve Sosu", source: "https://tasteatlas.com/sampiyon-kokorec/midye-tava" },
  { city: "İstanbul", place: "İnci Pastanesi", dish: "Profiterol", source: "https://www.timeout.com/istanbul/restaurants/inci-pastanesi" },
  { city: "İzmir", place: "Mantı Dünyası", dish: "Mantı", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İzmir", place: "Kokoreççi Baki Usta", dish: "Kokoreç", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "Mersin", place: "Merkez Kokoreç", dish: "Kokoreç", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "Gaziantep", place: "Ciğerci Mustafa", dish: "Adana / Urfa Kebap Dürüm", source: "https://wanderlog.com/place/details/3121441" },
  { city: "Gaziantep", place: "İmam Çağdaş", dish: "Ali Nazik Kebabı", source: "https://wanderlog.com/place/details/1877193" },
  { city: "Gaziantep", place: "Yesemek Gaziantep Mutfağı", dish: "İçli Köfte", source: "https://www.flypgs.com/blog/gaziantep-mutfagi/" },
  { city: "Gaziantep", place: "Zeki İnal", dish: "Gaziantep Katmeri / Baklava", source: "https://themadtraveler.com/blog/gaziantep-baklava-zeki-inal" },
  { city: "Gaziantep", place: "Katmerci Zekeriya Usta", dish: "Gaziantep Katmeri / Baklava", source: "https://www.bizevdeyokuz.com/antep-ne-yenir-nerede-yenir/" },
  { city: "Eskişehir", place: "Şampiyon Kokoreç", dish: "Kokoreç", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Tarihi Unkapanı Pilavcısı", dish: "Tavuklu Nohutlu Pilav", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Baruthane Pilavcısı", dish: "Tavuklu Nohutlu Pilav", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Meşhur Tahtakale Pilavcısı", dish: "Tavuklu Nohutlu Pilav", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Halil Lahmacun", dish: "Mercimek Çorbası + Kıymalı Pide / Lahmacun", source: "https://intravel.net/istanbul/restaurants-cafes/halil-lahmacun" },
  { city: "İstanbul", place: "Çakmak Kahvaltı Salonu", dish: "Yumurta Kapama / Ekmek Banmalık Menemen", source: "https://www.timeout.com/istanbul/tr/restoranlar/cakmak-kahvalti-salonu" },
  { city: "İstanbul", place: "Barış Büfe", dish: "Salçalı Ekmek / Tost", source: "https://www.timeout.com/istanbul/tr/restoranlar/baris-buefe" },
  { city: "Ankara", place: "Oses Çiğ Köfte", dish: "Çiğ Köfte", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "Eskişehir", place: "Oses Çiğ Köfte", dish: "Çiğ Köfte", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "İstanbul", place: "Sur Ocakbaşı", dish: "Büryan Kebabı", source: "https://www-lonelyplanet-com-57e2.imagizer.com/turkey/istanbul/bazaar-district/restaurants/sur-ocakbasi/a/poi-eat/1250661/1324697" },
  { city: "İstanbul", place: "Nizam Pide & Sütlaç Salonu", dish: "Fırında Sütlaç", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "Mersin", place: "Erzurum Cağ Kebabı", dish: "Cağ Kebabı", source: "mekânın adı + OpenStreetMap kaydı" },
  { city: "Gaziantep", place: "Metanet Lokantası", dish: "Beyran Çorbası", source: "https://www.bizevdeyokuz.com/antep-ne-yenir-nerede-yenir/" },
  { city: "İstanbul", place: "Komagene", dish: "Çiğ Köfte", source: "mekânın adı + OpenStreetMap kaydı" },
  // 23 November 2026, second pass: food-delivery menus (Migros Yemek, Trendyol Go Yemek)
  { city: "İstanbul", place: "Hafız Mustafa 1864", dish: "Zerde", source: "https://tgoyemek.com/restoranlar/290302" },
  { city: "İzmir", place: "Ohannes Burger", dish: "Hamburger Menü", source: "https://tgoyemek.com/restoranlar/169706" },
  { city: "İstanbul", place: "Oses Çiğ Köfte", dish: "Çiğ Köfte Dürüm", source: "https://www.migros.com.tr/yemek/oses-cig-kofte-basaksehir-2-kisim-mah-st-273eb" },
  { city: "Ankara", place: "Oses Çiğ Köfte", dish: "Çiğ Köfte Dürüm", source: "https://www.migros.com.tr/yemek/oses-cig-kofte-basaksehir-2-kisim-mah-st-273eb" },
  { city: "Eskişehir", place: "Oses Çiğ Köfte", dish: "Çiğ Köfte Dürüm", source: "https://www.migros.com.tr/yemek/oses-cig-kofte-basaksehir-2-kisim-mah-st-273eb" },
  { city: "İzmir", place: "Köfteci Remzi", dish: "Kuru Fasulye Piyazı", source: "https://www.migros.com.tr/yemek/kofteci-remzi-bostanli-karsiyaka-mah-st-1ec03" },
  { city: "İzmir", place: "Kırçiçeği", dish: "Mercimek Çorbası + Kıymalı Pide / Lahmacun", source: "https://www.migros.com.tr/yemek/kircicegi-konak-alsancak-mah-st-1b224" },
  { city: "İstanbul", place: "Dürümcü Emmi", dish: "Beyran Çorbası", source: "https://www.migros.com.tr/yemek/durumcu-emmi-kadikoy-hasanpasa-mah-st-3239d" },
  { city: "Ankara", place: "Düveroğlu", dish: "Ali Nazik Kebabı", source: "https://www.neredenekadarayenir.com/2021/10/duveroglu-pide-kebap-bilkent-ankara-menu-fiyat.html" },
  { city: "İstanbul", place: "Tahin", dish: "Falafel Dürüm", source: "https://www.migros.com.tr/yemek/tahin-kadikoy-caddebostan-mah-st-3013d" },
];

// Pairs from the older lists that a full menu (on a food-delivery platform or a published menu)
// shows the place does NOT serve: that list entry is dropped, so the place is not suggested for
// that dish at all, not even as "serves this kind of food".
export const REFUTED_DISHES: CheckedDish[] = [
  { city: "Ankara", place: "Konyalı Hacı Usta", dish: "Zeytinyağlı Enginar", source: "https://www.migros.com.tr/yemek/konyali-haci-usta-etimesgut-istasyon-mah-st-1af9b" },
  { city: "Ankara", place: "Konyalı Hacı Usta", dish: "Kuru Patlıcan Dolması", source: "https://www.migros.com.tr/yemek/konyali-haci-usta-etimesgut-istasyon-mah-st-1af9b" },
  { city: "Ankara", place: "Konyalı Hacı Usta", dish: "İmam Bayıldı", source: "https://www.migros.com.tr/yemek/konyali-haci-usta-etimesgut-istasyon-mah-st-1af9b" },
  { city: "Ankara", place: "Konyalı Hacı Usta", dish: "Yeşil Mercimekli Bulgur Pilavı", source: "https://www.migros.com.tr/yemek/konyali-haci-usta-etimesgut-istasyon-mah-st-1af9b" },
  { city: "İstanbul", place: "Saray Muhallebicisi", dish: "Fırında Kabak Sandal", source: "https://www.migros.com.tr/yemek/saray-muhallebicisi-1935-sisli-esentepe-mah-st-1fb1a" },
  { city: "İstanbul", place: "Saray Muhallebicisi", dish: "Zerde", source: "https://www.migros.com.tr/yemek/saray-muhallebicisi-1935-sisli-esentepe-mah-st-1fb1a" },
  { city: "İstanbul", place: "Tarihi Sultanahmet Köftecisi", dish: "Cızbız Köfte ve Patates Kızartması", source: "https://www.migros.com.tr/yemek/tarihi-sultanahmet-koftecisi-1920-umraniye-serifali-mah-st-18e33" },
  { city: "İstanbul", place: "Cookshop", dish: "Islak Kek / Ağlayan Pasta", source: "https://www.migros.com.tr/yemek/cookshop-besiktas-etiler-mah-st-30a8a" },
  { city: "Gaziantep", place: "İmam Çağdaş", dish: "Beyti Sarma", source: "https://nekadarayenir.tumblr.com/post/189672993967/imam-%C3%A7a%C4%9Fda%C5%9F-gaziantep-men%C3%BC-fiyat-listesi/amp" },
  { city: "Gaziantep", place: "İmam Çağdaş", dish: "İçli Köfte", source: "https://nekadarayenir.tumblr.com/post/189672993967/imam-%C3%A7a%C4%9Fda%C5%9F-gaziantep-men%C3%BC-fiyat-listesi/amp" },
  { city: "Gaziantep", place: "İmam Çağdaş", dish: "Kuru Patlıcan Dolması", source: "https://nekadarayenir.tumblr.com/post/189672993967/imam-%C3%A7a%C4%9Fda%C5%9F-gaziantep-men%C3%BC-fiyat-listesi/amp" },
  { city: "Gaziantep", place: "İmam Çağdaş", dish: "Humus", source: "https://nekadarayenir.tumblr.com/post/189672993967/imam-%C3%A7a%C4%9Fda%C5%9F-gaziantep-men%C3%BC-fiyat-listesi/amp" },
  { city: "İstanbul", place: "Bodrum Mantı & Cafe", dish: "Cevizli Mantı", source: "https://www.migros.com.tr/yemek/bodrum-manti-cafe-kadikoy-caddebostan-mah-st-26605" },
  { city: "İzmir", place: "Kırçiçeği", dish: "Mantı", source: "https://www.migros.com.tr/yemek/kircicegi-konak-alsancak-mah-st-1b224" },
  { city: "İzmir", place: "Kırçiçeği", dish: "Kavurmalı Kaşarlı Pide", source: "https://www.migros.com.tr/yemek/kircicegi-konak-alsancak-mah-st-1b224" },
  { city: "İzmir", place: "Kırçiçeği", dish: "Cevizli Mantı", source: "https://www.migros.com.tr/yemek/kircicegi-konak-alsancak-mah-st-1b224" },
  { city: "İzmir", place: "Kırçiçeği", dish: "Kavrulmuş Çorbalık Erişte", source: "https://www.migros.com.tr/yemek/kircicegi-konak-alsancak-mah-st-1b224" },
  { city: "İzmir", place: "Sevinç Pastanesi", dish: "Muhammara / Acuka", source: "https://tgoyemek.com/restoranlar/100886" },
];

// Places from the older lists that a source shows as permanently closed: never suggested.
export const CLOSED_PLACES: { city: string; place: string; source: string }[] = [
  { city: "İstanbul", place: "Gezi İstanbul", source: "https://wanderlog.com/place/details/398468/gezi-istanbul-la-brasserie" }
];

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

const CLOSED = new Set(CLOSED_PLACES.map((c) => `${norm(c.city)}|${norm(c.place)}`));

export const isPlaceClosed = (city: string, place: string): boolean => CLOSED.has(`${norm(city)}|${norm(place)}`);

const REFUTED = new Set(REFUTED_DISHES.map((c) => `${norm(c.city)}|${norm(c.place)}|${norm(c.dish)}`));

export const isDishRefuted = (city: string, place: string, dish: string): boolean =>
  REFUTED.has(`${norm(city)}|${norm(place)}|${norm(dish)}`);

export const isDishChecked = (city: string, place: string, dish: string): boolean =>
  CHECKED.has(`${norm(city)}|${norm(place)}|${norm(dish)}`);
