// ==========================================
// The user's province: found from the device position when the app opens, remembered
// on the device, and used as the starting city for dishes and restaurants.
//
// Works offline: the GPS position is turned into a province with the province centres in
// provinces.ts; nothing is sent to a server.
// ==========================================
import { nearestProvince, findProvince } from "./provinces";

const CITY_KEY = "kaydirak_city_v1";
export const DEFAULT_CITY = "İstanbul";

export const loadSavedCity = (): string | null => {
  try {
    const saved = localStorage.getItem(CITY_KEY);
    return saved && findProvince(saved) ? findProvince(saved)!.name : null;
  } catch {
    return null;
  }
};

export const saveCity = (city: string) => {
  try {
    localStorage.setItem(CITY_KEY, city);
  } catch {
    // storage unavailable: the city is kept in memory only
  }
};

export type DetectResult =
  | { ok: true; city: string }
  | { ok: false; reason: "unsupported" | "denied" | "unavailable" | "outside" };

// Ask the device for its position and return the province it is in.
export const detectProvince = (timeoutMs = 10000): Promise<DetectResult> =>
  new Promise((resolve) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      resolve({ ok: false, reason: "unsupported" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const p = nearestProvince(pos.coords.latitude, pos.coords.longitude);
        resolve(p ? { ok: true, city: p.name } : { ok: false, reason: "outside" });
      },
      (err) => resolve({ ok: false, reason: err.code === err.PERMISSION_DENIED ? "denied" : "unavailable" }),
      // A province does not need GPS precision; a recent network position is enough.
      { enableHighAccuracy: false, timeout: timeoutMs, maximumAge: 30 * 60 * 1000 }
    );
  });
