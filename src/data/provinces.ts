// ==========================================
// The 81 provinces of Türkiye with the approximate coordinates of their centres.
// Used offline (no network needed) to turn a GPS position into a province, and to
// find the nearest city that has restaurant data.
// ==========================================

export interface Province {
  name: string;
  lat: number;
  lon: number;
}

export const PROVINCES: Province[] = [
  { name: "Adana", lat: 37.0, lon: 35.3213 },
  { name: "Adıyaman", lat: 37.7648, lon: 38.2786 },
  { name: "Afyonkarahisar", lat: 38.7507, lon: 30.5567 },
  { name: "Ağrı", lat: 39.7191, lon: 43.0503 },
  { name: "Aksaray", lat: 38.3687, lon: 34.0370 },
  { name: "Amasya", lat: 40.6499, lon: 35.8353 },
  { name: "Ankara", lat: 39.9334, lon: 32.8597 },
  { name: "Antalya", lat: 36.8969, lon: 30.7133 },
  { name: "Ardahan", lat: 41.1105, lon: 42.7022 },
  { name: "Artvin", lat: 41.1828, lon: 41.8183 },
  { name: "Aydın", lat: 37.8560, lon: 27.8416 },
  { name: "Balıkesir", lat: 39.6484, lon: 27.8826 },
  { name: "Bartın", lat: 41.6344, lon: 32.3375 },
  { name: "Batman", lat: 37.8812, lon: 41.1351 },
  { name: "Bayburt", lat: 40.2552, lon: 40.2249 },
  { name: "Bilecik", lat: 40.1451, lon: 29.9799 },
  { name: "Bingöl", lat: 38.8851, lon: 40.4983 },
  { name: "Bitlis", lat: 38.4006, lon: 42.1095 },
  { name: "Bolu", lat: 40.7350, lon: 31.6061 },
  { name: "Burdur", lat: 37.7203, lon: 30.2908 },
  { name: "Bursa", lat: 40.1826, lon: 29.0665 },
  { name: "Çanakkale", lat: 40.1553, lon: 26.4142 },
  { name: "Çankırı", lat: 40.6013, lon: 33.6134 },
  { name: "Çorum", lat: 40.5506, lon: 34.9556 },
  { name: "Denizli", lat: 37.7765, lon: 29.0864 },
  { name: "Diyarbakır", lat: 37.9144, lon: 40.2306 },
  { name: "Düzce", lat: 40.8438, lon: 31.1565 },
  { name: "Edirne", lat: 41.6818, lon: 26.5623 },
  { name: "Elazığ", lat: 38.6810, lon: 39.2264 },
  { name: "Erzincan", lat: 39.7500, lon: 39.5000 },
  { name: "Erzurum", lat: 39.9000, lon: 41.2700 },
  { name: "Eskişehir", lat: 39.7767, lon: 30.5206 },
  { name: "Gaziantep", lat: 37.0662, lon: 37.3833 },
  { name: "Giresun", lat: 40.9128, lon: 38.3895 },
  { name: "Gümüşhane", lat: 40.4386, lon: 39.5086 },
  { name: "Hakkari", lat: 37.5833, lon: 43.7333 },
  { name: "Hatay", lat: 36.4018, lon: 36.3498 },
  { name: "Iğdır", lat: 39.8880, lon: 44.0048 },
  { name: "Isparta", lat: 37.7648, lon: 30.5566 },
  { name: "İstanbul", lat: 41.0082, lon: 28.9784 },
  { name: "İzmir", lat: 38.4237, lon: 27.1428 },
  { name: "Kahramanmaraş", lat: 37.5858, lon: 36.9371 },
  { name: "Karabük", lat: 41.2061, lon: 32.6204 },
  { name: "Karaman", lat: 37.1759, lon: 33.2287 },
  { name: "Kars", lat: 40.6167, lon: 43.1000 },
  { name: "Kastamonu", lat: 41.3887, lon: 33.7827 },
  { name: "Kayseri", lat: 38.7312, lon: 35.4787 },
  { name: "Kilis", lat: 36.7184, lon: 37.1212 },
  { name: "Kırıkkale", lat: 39.8468, lon: 33.5153 },
  { name: "Kırklareli", lat: 41.7333, lon: 27.2167 },
  { name: "Kırşehir", lat: 39.1425, lon: 34.1709 },
  { name: "Kocaeli", lat: 40.8533, lon: 29.8815 },
  { name: "Konya", lat: 37.8667, lon: 32.4833 },
  { name: "Kütahya", lat: 39.4167, lon: 29.9833 },
  { name: "Malatya", lat: 38.3552, lon: 38.3095 },
  { name: "Manisa", lat: 38.6191, lon: 27.4289 },
  { name: "Mardin", lat: 37.3212, lon: 40.7245 },
  { name: "Mersin", lat: 36.8000, lon: 34.6333 },
  { name: "Muğla", lat: 37.2153, lon: 28.3636 },
  { name: "Muş", lat: 38.9462, lon: 41.7539 },
  { name: "Nevşehir", lat: 38.6939, lon: 34.6857 },
  { name: "Niğde", lat: 37.9667, lon: 34.6833 },
  { name: "Ordu", lat: 40.9839, lon: 37.8764 },
  { name: "Osmaniye", lat: 37.0742, lon: 36.2478 },
  { name: "Rize", lat: 41.0201, lon: 40.5234 },
  { name: "Sakarya", lat: 40.7569, lon: 30.3783 },
  { name: "Samsun", lat: 41.2928, lon: 36.3313 },
  { name: "Siirt", lat: 37.9333, lon: 41.9500 },
  { name: "Sinop", lat: 42.0231, lon: 35.1531 },
  { name: "Sivas", lat: 39.7477, lon: 37.0179 },
  { name: "Şanlıurfa", lat: 37.1591, lon: 38.7969 },
  { name: "Şırnak", lat: 37.4187, lon: 42.4918 },
  { name: "Tekirdağ", lat: 40.9833, lon: 27.5167 },
  { name: "Tokat", lat: 40.3167, lon: 36.5500 },
  { name: "Trabzon", lat: 41.0015, lon: 39.7178 },
  { name: "Tunceli", lat: 39.1079, lon: 39.5401 },
  { name: "Uşak", lat: 38.6823, lon: 29.4082 },
  { name: "Van", lat: 38.4891, lon: 43.4089 },
  { name: "Yalova", lat: 40.6500, lon: 29.2667 },
  { name: "Yozgat", lat: 39.8181, lon: 34.8147 },
  { name: "Zonguldak", lat: 41.4564, lon: 31.7987 }
];

// Cities that have restaurant data in the app (also the cities in the picker).
export const RESTAURANT_CITIES = [
  "İstanbul", "Ankara", "İzmir", "Mersin", "Gaziantep", "Eskişehir", "Adana", "Diyarbakır", "Kahramanmaraş"
];

const toRad = (d: number) => (d * Math.PI) / 180;

// Great-circle distance in km.
export const distanceKm = (aLat: number, aLon: number, bLat: number, bLon: number): number => {
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

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
    .replace(/[^a-z]/g, "");

const BY_NAME = new Map(PROVINCES.map((p) => [norm(p.name), p]));

// The province with this name (accent- and case-insensitive), if any.
export const findProvince = (name: string): Province | null => BY_NAME.get(norm(name)) ?? null;

// Province whose centre is closest to a GPS position. Positions far outside Türkiye
// (more than ~250 km from every centre) return null.
export const nearestProvince = (lat: number, lon: number): Province | null => {
  let best: Province | null = null;
  let bestKm = Infinity;
  for (const p of PROVINCES) {
    const km = distanceKm(lat, lon, p.lat, p.lon);
    if (km < bestKm) {
      bestKm = km;
      best = p;
    }
  }
  return bestKm <= 250 ? best : null;
};

// For restaurant suggestions: the city itself if it has data, otherwise the nearest one that does.
export const restaurantCityFor = (city: string): string => {
  const own = RESTAURANT_CITIES.find((c) => norm(c) === norm(city));
  if (own) return own;
  const p = findProvince(city);
  if (!p) return "İstanbul";
  let best = RESTAURANT_CITIES[0];
  let bestKm = Infinity;
  for (const c of RESTAURANT_CITIES) {
    const cp = findProvince(c)!;
    const km = distanceKm(p.lat, p.lon, cp.lat, cp.lon);
    if (km < bestKm) {
      bestKm = km;
      best = c;
    }
  }
  return best;
};
