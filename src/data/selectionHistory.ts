// The user's last dish selections (right swipe or arena champion), newest last.
// Kept in localStorage so recommendations survive closing the app.
import { pushRecent, RECENT_LIMIT } from "./recommend";

const RECENT_KEY = "kaydirak_recent_selections_v1";

export const loadRecentSelections = (): string[] => {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string").slice(-RECENT_LIMIT) : [];
  } catch {
    return [];
  }
};

export const saveRecentSelections = (ids: string[]) => {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(ids.slice(-RECENT_LIMIT)));
  } catch {
    // storage unavailable (private mode): keep the in-memory value only
  }
};

// Add one selection and save; returns the new list.
export const addRecentSelection = (recent: string[], id: string): string[] => {
  const next = pushRecent(recent, id);
  saveRecentSelections(next);
  return next;
};
