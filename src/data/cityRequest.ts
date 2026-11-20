// ==========================================
// "Şehrimi iste": provinces without our own restaurant list.
// The request is counted on the server (Supabase function request_city, no user data);
// the phone remembers which cities it already asked for so the button is pressed once.
// ==========================================
import { supabase } from "../account/account";

const KEY = "kaydirak_city_requests_v1";

export const loadRequestedCities = (): string[] => {
  try {
    const raw = localStorage.getItem(KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
};

export const hasRequestedCity = (city: string): boolean => loadRequestedCities().includes(city);

const rememberRequest = (city: string) => {
  try {
    const list = loadRequestedCities();
    if (!list.includes(city)) localStorage.setItem(KEY, JSON.stringify([...list, city].slice(-20)));
  } catch {
    // storage unavailable: the button may show again next time
  }
};

// Resolves true when the request reached the server.
export const requestCity = async (city: string): Promise<boolean> => {
  try {
    const { error } = await supabase.rpc("request_city", { p_city: city });
    if (error) return false;
    rememberRequest(city);
    return true;
  } catch {
    return false;
  }
};
