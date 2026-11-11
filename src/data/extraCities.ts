// ==========================================
// EXTRA CITIES: Diyarbakır and Kahramanmaraş.
//
// Real, well-known local restaurants with the address printed in the sources below.
// They were NOT checked against OpenStreetMap or Google (unlike verifiedRestaurants.ts),
// so no star rating is shown for them, and a place may have moved or closed since the
// source was written. `note` says what the source says the place is known for; it is a
// description, not a customer review.
//
// Sources (read November 2026):
//  - Diyarbakır: onlinebilet.com/bilgi/diyarbakir/diyarbakirda-ne-yenir-nerede-yenir
//                blog.biletall.com/diyarbakirda-ne-yenir-nerede-yenir-diyarbakirin-yoresel-lezzetleri
//                enuygun.com/bilgi/diyarbakir-da-ne-yenir
//  - Kahramanmaraş: marasmanset.com/foto-galeri/kahramanmarasta-hangi-yemek-nerede-yenir
//                   blog.obilet.com/kahramanmarasta-nerede-ne-yenir
// ==========================================
import type { RealRestaurant, RestaurantCategory } from "./realRestaurants";

interface LocalPlace {
  name: string;
  address: string;
  district: string;
  categories: RestaurantCategory[];
  note: [tr: string, en: string];
}

const PLACES: Record<string, LocalPlace[]> = {
  "Diyarbakır": [
    { name: "Selim Amca'nın Sofra Salonu", address: "Ali Emiri Caddesi No: 22/B, Yenişehir", district: "Yenişehir", categories: ["kebab", "general"], note: ["Kaburga dolması ve mumbar dolmasıyla bilinen, şehrin en tanınmış sofra salonu.", "The city's best-known dining hall, famous for kaburga dolması (stuffed lamb ribs) and mumbar dolma."] },
    { name: "Meşhur Kebapçı Hacı Halid", address: "Çiftehan Sokak No: 9", district: "Merkez", categories: ["kebab", "general"], note: ["Tarihi kebapçı; ciğer kebabı, içli köfte, duvaklı pilav ve dolma çeşitleriyle bilinir.", "A historic kebab house known for liver kebab, içli köfte, veiled pilaf and dolma."] },
    { name: "Dağkapı Ciğercisi Hüseyin'in Yeri", address: "Kıbrıs Caddesi, İskender Paşa Sokak 1. Çıkmaz No: 6, Dağkapı", district: "Dağkapı", categories: ["kebab", "general"], note: ["Diyarbakır usulü ciğer şiş kebabıyla bilinen ciğerci.", "A grill house known for Diyarbakır-style liver shish kebab (ciğer)."] },
    { name: "Ciğerci Remzi Usta", address: "Cami Nebi Mahallesi, Gazi Caddesi, Suakar Sokak No: 3, Sur", district: "Sur", categories: ["kebab", "general"], note: ["Suriçi'nde ciğer şiş kebabıyla bilinen ciğerci.", "A liver shish kebab (ciğer) specialist inside the old city walls."] },
    { name: "Umut Ciğercisi", address: "Lise Caddesi 4. Sokak, Yeşim Apartmanı altı, Yenişehir", district: "Yenişehir", categories: ["kebab", "general"], note: ["Soslu soğanla servis edilen ciğer şiş kebabıyla bilinir.", "Known for liver shish kebab (ciğer) served with dressed onions."] },
    { name: "Onur Ocakbaşı", address: "Dabanoğlu Mahallesi, Varol Sokak No: 6", district: "Dabanoğlu", categories: ["kebab", "general"], note: ["Ocakbaşında ciğer ve şiş kebap çeşitleri sunar.", "A grill house serving liver and shish kebab varieties."] },
    { name: "Doğan Sofra Salonu", address: "Yenihal Kavşağı, Doğan Apartmanı", district: "Yenihal", categories: ["general", "kebab"], note: ["Diyarbakır'ın yöresel yemekleri; kebap ve dolma çeşitleri.", "Regional Diyarbakır dishes, including kebab and dolma."] },
    { name: "Kahvaltıcı Edip", address: "Gazi Caddesi, Ulu Cami karşısı, Sur", district: "Sur", categories: ["general"], note: ["Ulu Cami'nin karşısında, Diyarbakır kahvaltısıyla bilinen kahvaltı salonu.", "A breakfast hall opposite the Great Mosque, known for the Diyarbakır breakfast spread (kahvaltı)."] },
    { name: "Mustafa'nın Kahvaltı Dünyası", address: "Gazi Caddesi, Tarihi Hasanpaşa Hanı 1. Kat No: 2, Sur", district: "Sur", categories: ["general"], note: ["Tarihi Hasanpaşa Hanı'nda serpme kahvaltı.", "A breakfast spread (kahvaltı) inside the historic Hasanpaşa Inn."] },
    { name: "Meşhur Kahvaltıcı Kadri", address: "Huzurevleri, Diclekent Bulvarı No: 86/B, Kayapınar", district: "Kayapınar", categories: ["general"], note: ["Kayapınar'da kahvaltı sofrasıyla bilinen mekân.", "A well-known breakfast (kahvaltı) place in Kayapınar."] },
    { name: "Paçacı Fazıl Usta", address: "Kayapınar Caddesi No: 96", district: "Kayapınar Cd.", categories: ["soup", "general"], note: ["Paça çorbası ve mumbar dolmasıyla bilinen çorbacı.", "A soup house known for paça çorbası (trotter soup) and mumbar dolma."] },
    { name: "Kadayıfçı Saim Usta", address: "Gazi Caddesi, Kılıçlı Pasajı No: 13/B, Sur", district: "Sur", categories: ["dessert"], note: ["Diyarbakır'ın burma kadayıf tatlısıyla bilinen tatlıcı.", "A dessert shop known for Diyarbakır's burma kadayıf (tatlı)."] },
    { name: "Meşhur Sıtkı Usta Kadayıf Künefe Salonu", address: "Lise Caddesi No: 7/B, Yenişehir", district: "Yenişehir", categories: ["dessert"], note: ["Kadayıf ve künefe tatlılarıyla bilinen salon.", "Known for kadayıf and künefe desserts (tatlı)."] },
    { name: "Levent Usta Künefe ve Kadayıf Salonu", address: "Akkoyunlu 3. Sokak, Ofis Gevran Caddesi", district: "Ofis", categories: ["dessert"], note: ["Künefe ve kadayıf tatlılarıyla bilinen salon.", "Known for künefe and kadayıf desserts (tatlı)."] }
  ],
  "Kahramanmaraş": [
    { name: "Yaşar Pastanesi", address: "İsmetpaşa Mahallesi, Trabzon Bulvarı No: 2/E, Dulkadiroğlu", district: "Dulkadiroğlu", categories: ["dessert"], note: ["Keçi sütlü Maraş dondurması ve tatlılarıyla bilinen tarihi pastane.", "A historic pastry shop (pastane) known for goat-milk Maraş ice cream (dondurma) and desserts."] },
    { name: "Gaymak Dondurma", address: "Gayberli Mahallesi, 28041. Sokak No: 8/A, Onikişubat", district: "Onikişubat", categories: ["dessert"], note: ["Maraş dondurmasıyla bilinen dondurmacı.", "An ice cream shop known for Maraş dondurma."] },
    { name: "Kervan Pastaneleri", address: "Yenişehir Mahallesi, Trabzon Bulvarı No: 44, Dulkadiroğlu", district: "Dulkadiroğlu", categories: ["dessert", "general"], note: ["Kahvaltı, hamur işleri ve tatlılarıyla bilinen pastane.", "A pastry shop (pastane) known for breakfast (kahvaltı), baked goods and desserts (tatlı)."] },
    { name: "Küçük Ev Paça Salonu", address: "Kurtuluş Mahallesi, Atatürk Bulvarı No: 22", district: "Kurtuluş Mah.", categories: ["soup", "general"], note: ["Maraş usulü kelle paça çorbasıyla bilinir.", "Known for Maraş-style kelle paça çorbası (head and trotter soup)."] },
    { name: "Menekşe Paça Salonu", address: "Serintepe Mahallesi, Mağralı Ökkeş Caddesi No: 50", district: "Serintepe Mah.", categories: ["soup"], note: ["Kelle paça çorbasıyla bilinen çorbacı.", "A soup house known for kelle paça çorbası."] },
    { name: "Maraş Kültür Evi (Kocabaş Konağı)", address: "Kayabaşı Mahallesi, Çiçekli Caddesi No: 9, Dulkadiroğlu", district: "Dulkadiroğlu", categories: ["soup", "general"], note: ["Tarihi konakta Maraş tarhana çorbası, ekşili dövme çorbası ve yöresel yemekler.", "Maraş tarhana çorbası, sour wheat soup and regional dishes in a historic mansion."] },
    { name: "Küçük Ev Et Lokantası", address: "İsmetpaşa Mahallesi, Borsa Caddesi No: 11", district: "İsmetpaşa Mah.", categories: ["kebab", "soup", "general"], note: ["Maraş kebabı, içli köfte ve ekşili dövme çorbasıyla bilinen et lokantası.", "A meat restaurant known for Maraş kebap, içli köfte and sour wheat çorba."] },
    { name: "Hacı Milcan Et Lokantası", address: "Menderes Mahallesi, Cumhuriyet Bulvarı No: 7", district: "Menderes Mah.", categories: ["kebab", "general"], note: ["Yoğurtlu kebap, paşa kebabı ve Ali Nazik kebabıyla bilinen et lokantası.", "A meat restaurant known for yogurt kebap, paşa kebabı and Ali Nazik kebab."] },
    { name: "Saray Kasabı", address: "Kurtuluş Mahallesi, Saraylı Caddesi, Dulkadiroğlu", district: "Dulkadiroğlu", categories: ["kebab", "general"], note: ["Fırınlı kasap; yoğurtlu kebap, teneke kebabı, eli böğründe ve kuzu pirzola.", "A butcher with an oven: yogurt kebap, tin-pan kebab, eli böğründe and lamb chops (pirzola)."] },
    { name: "İklim Mantı Evi", address: "İsmetpaşa Mahallesi, 36008. Sokak No: 5/1, Dulkadiroğlu", district: "Dulkadiroğlu", categories: ["general", "pasta"], note: ["Maraş usulü el açması mantı.", "Hand-made Maraş-style mantı (dumplings)."] },
    { name: "Mantı Evim", address: "Yenişehir Mahallesi, 74010. Sokak No: 1", district: "Yenişehir Mah.", categories: ["general", "pasta"], note: ["Maraş usulü mantı yapan ev tipi lokanta.", "A home-style place making Maraş-style mantı (dumplings)."] }
  ]
};

const ALL_CATEGORIES: RestaurantCategory[] = ["burger", "kebab", "vegan", "soup", "pasta", "dessert", "general"];

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
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Same shape as REAL_RESTAURANTS_DB, so the winner screen can use both the same way.
// rating / reviewCount are 0 because none was checked; the app shows no stars for these.
export const EXTRA_CITY_RESTAURANTS: Record<string, Record<RestaurantCategory, RealRestaurant[]>> = Object.fromEntries(
  Object.entries(PLACES).map(([city, places]) => [
    city,
    Object.fromEntries(
      ALL_CATEGORIES.map((category) => [
        category,
        places
          .filter((p) => p.categories.includes(category))
          .map((p): RealRestaurant => ({ name: p.name, rating: 0, reviewCount: 0, area: p.district, commentTr: p.note[0], commentEn: p.note[1] }))
      ])
    ) as Record<RestaurantCategory, RealRestaurant[]>
  ])
);

// rating / reviews stay undefined: nothing was checked, so no stars are shown.
export interface ExtraCityPlace {
  address: string;
  district: string;
  rating?: number;
  reviews?: number;
}

const ADDRESS_BY_KEY = new Map<string, ExtraCityPlace>();
for (const [city, places] of Object.entries(PLACES)) {
  for (const p of places) ADDRESS_BY_KEY.set(`${normalize(city)}|${normalize(p.name)}`, { address: p.address, district: p.district });
}

// Address of a place in the extra cities; null for any other city or name.
export const getExtraCityPlace = (city: string, name: string): ExtraCityPlace | null =>
  ADDRESS_BY_KEY.get(`${normalize(city)}|${normalize(name)}`) ?? null;
