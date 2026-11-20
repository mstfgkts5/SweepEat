// ==========================================
// Grup Masası: friends pick a dish together, each on their own phone.
//
// The host (Kaydırak Plus) opens a table and gets a 6-character code; friends join with
// the code (no account or Plus needed). Everyone swipes the same dishes, then the dishes
// with the most likes win. Server side: Supabase functions group_* (see the migration);
// each phone keeps a secret member token and checks the table every 2 seconds.
// ==========================================
import { supabase, WEB_APP_URL } from "../account/account";

export const GROUP_DISH_COUNT = 12;
export const GROUP_MAX_MEMBERS = 8;

export interface GroupMember {
  name: string;
  is_host: boolean;
  done: boolean;
  voted: number;
}

export interface GroupState {
  code: string;
  status: "lobby" | "voting" | "done";
  dish_ids: string[];
  city: string | null;
  me: { name: string; is_host: boolean; done: boolean };
  my_votes: string[];
  members: GroupMember[];
  results: { dish_id: string; likes: number }[] | null;
}

export interface GroupSession {
  code: string;
  token: string;
}

const SESSION_KEY = "kaydirak_group_v1";

// The open table survives closing the app (until it expires on the server).
export const loadGroupSession = (): GroupSession | null => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    return typeof s?.code === "string" && typeof s?.token === "string" ? s : null;
  } catch {
    return null;
  }
};

export const saveGroupSession = (s: GroupSession | null) => {
  try {
    if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // storage unavailable: the table is kept in memory only
  }
};

// Codes use letters and digits that cannot be confused (no O, 0, I, 1).
// Turkish keyboards give "ı"/"i"; uppercase in English rules, keep letters and digits.
export const normalizeCode = (raw: string): string =>
  raw
    .toLocaleUpperCase("en-US")
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6);

export const isValidCode = (code: string): boolean => /^[A-HJ-NP-Z2-9]{6}$/.test(code);

// Invite link: opens the web version (or the app's web view) with the code filled in,
// so a friend without the app can join from the browser.
export const inviteLink = (code: string, base: string = WEB_APP_URL): string =>
  `${base}${base.includes("?") ? "&" : "?"}masa=${encodeURIComponent(code)}`;

// The table code in a page address ("?masa=ABC234"), if there is a valid one.
export const readInviteCode = (search: string): string | null => {
  try {
    const raw = new URLSearchParams(search).get("masa");
    if (!raw) return null;
    const code = normalizeCode(raw);
    return isValidCode(code) ? code : null;
  } catch {
    return null;
  }
};

const call = async <T>(fn: string, args: Record<string, unknown>): Promise<T> => {
  const { data, error } = await supabase.rpc(fn, args);
  if (error) throw error;
  return data as T;
};

export const createGroup = (name: string, dishIds: string[], city: string) =>
  call<GroupSession>("group_create", { p_name: name.trim(), p_dish_ids: dishIds, p_city: city });

export const joinGroup = (code: string, name: string) =>
  call<GroupSession>("group_join", { p_code: code, p_name: name.trim() });

export const startGroup = (s: GroupSession) => call<void>("group_start", { p_code: s.code, p_token: s.token });

export const voteGroup = (s: GroupSession, dishId: string, liked: boolean) =>
  call<void>("group_vote", { p_code: s.code, p_token: s.token, p_dish_id: dishId, p_liked: liked });

export const endGroup = (s: GroupSession) => call<void>("group_end", { p_code: s.code, p_token: s.token });

export const fetchGroupState = (s: GroupSession) =>
  call<GroupState>("group_state", { p_code: s.code, p_token: s.token });

// Server error → what to tell the user.
export const groupErrorText = (err: unknown, language: "tr" | "en"): string => {
  const msg = ((err as { message?: string })?.message ?? "").toLowerCase();
  const tr = language === "tr";
  if (msg.includes("not_found")) return tr ? "Bu kodla açık bir masa yok. Kodu kontrol et." : "No open table with this code. Check the code.";
  if (msg.includes("already_started")) return tr ? "Bu masada oylama başladı, artık katılınamıyor." : "Voting has started at this table; it cannot be joined now.";
  if (msg.includes("table_full")) return tr ? `Masa dolu (en fazla ${GROUP_MAX_MEMBERS} kişi).` : `The table is full (max ${GROUP_MAX_MEMBERS}).`;
  if (msg.includes("need_two")) return tr ? "Başlatmak için en az 2 kişi gerekli." : "At least 2 people are needed to start.";
  if (msg.includes("bad_name")) return tr ? "Adını yaz (en fazla 30 karakter)." : "Enter your name (30 characters max).";
  if (msg.includes("not_member")) return tr ? "Bu masanın süresi doldu." : "This table has expired.";
  if (msg.includes("failed to fetch") || msg.includes("network")) return tr ? "İnternet bağlantısı yok gibi görünüyor." : "You seem to be offline.";
  return tr ? "Bir şeyler ters gitti. Tekrar dene." : "Something went wrong. Please try again.";
};

// The dishes for a new table: the top of the current mode's list, shuffled so every
// table is a little different. Pure apart from `random`, so it can be unit tested.
export const pickGroupDishes = <T extends { id: string }>(pool: T[], count = GROUP_DISH_COUNT, random = Math.random): T[] => {
  const top = pool.slice(0, Math.max(count * 2, count));
  const shuffled = [...top];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// Results with names: the winners are every dish tied for the most likes (at least one like).
export const groupWinners = (results: { dish_id: string; likes: number }[]): string[] => {
  const best = results.reduce((m, r) => Math.max(m, r.likes), 0);
  return best === 0 ? [] : results.filter((r) => r.likes === best).map((r) => r.dish_id);
};
