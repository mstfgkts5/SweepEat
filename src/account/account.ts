// ==========================================
// Kaydırak accounts (Supabase): e-mail + password and Google sign-in, optional.
// Signed-in users get their mode, language, city, recent picks and zero-waste stats on
// any phone. Guests keep using the app exactly as before.
//
// The URL and publishable key below are public by design (they ship inside every app);
// the database only lets each user read and write their own row (row level security).
// Account deletion runs on the server (Edge Function "delete-account").
// ==========================================
import { createClient, type Session, type User } from "@supabase/supabase-js";
import { Capacitor } from "@capacitor/core";

export const SUPABASE_URL = "https://wsaeqfrdeifjzkyyvker.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_w26X1GU8LBzdO1CESHCToA_E6-v0ReI";

// Google Cloud > APIs & Services > Credentials > OAuth client "Web application"
// (ends with .apps.googleusercontent.com). Empty = the Google button is hidden.
export const GOOGLE_WEB_CLIENT_ID = "";

// Where e-mail links (confirm address, reset password) and web Google sign-in return to.
export const WEB_APP_URL = "https://mstfgkts5.github.io/SweepEat/";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: !Capacitor.isNativePlatform(),
    flowType: "implicit"
  }
});

export type { Session, User };

export const googleEnabled = (): boolean => GOOGLE_WEB_CLIENT_ID !== "";

export const displayNameOf = (user: User | null): string => {
  if (!user) return "";
  const m = user.user_metadata ?? {};
  return (m.full_name || m.name || m.display_name || user.email?.split("@")[0] || "").toString();
};

// ---------- messages ----------
// Supabase error codes → short Turkish/English text the user can act on.
export const authErrorText = (err: unknown, language: "tr" | "en"): string => {
  const e = (err ?? {}) as { code?: string; message?: string; status?: number };
  const code = e.code ?? "";
  const msg = (e.message ?? "").toLowerCase();
  const tr = language === "tr";
  if (code === "invalid_credentials" || msg.includes("invalid login"))
    return tr ? "E-posta ya da şifre hatalı." : "Wrong e-mail or password.";
  if (code === "email_not_confirmed" || msg.includes("not confirmed"))
    return tr ? "Önce e-postana gelen onay bağlantısına tıkla." : "Open the confirmation link we e-mailed you first.";
  if (code === "user_already_exists" || code === "email_exists" || msg.includes("already registered"))
    return tr ? "Bu e-postayla zaten bir hesap var. Giriş yapmayı dene." : "An account with this e-mail already exists. Try signing in.";
  if (code === "weak_password" || msg.includes("password should"))
    return tr ? "Şifre en az 8 karakter olmalı." : "The password needs at least 8 characters.";
  if (code === "validation_failed" || msg.includes("invalid email") || code === "email_address_invalid")
    return tr ? "Geçerli bir e-posta adresi yaz." : "Enter a valid e-mail address.";
  if (code.startsWith("over_") || e.status === 429)
    return tr ? "Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar dene." : "Too many attempts. Try again in a few minutes.";
  if (msg.includes("failed to fetch") || msg.includes("network"))
    return tr ? "İnternet bağlantısı yok gibi görünüyor." : "You seem to be offline.";
  return tr ? "Bir şeyler ters gitti. Tekrar dene." : "Something went wrong. Please try again.";
};

// ---------- sign in / up ----------
export const signUpWithEmail = async (name: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: { data: { display_name: name.trim() }, emailRedirectTo: WEB_APP_URL }
  });
  if (error) throw error;
  // No session = the project asks for e-mail confirmation first.
  return { needsConfirmation: !data.session };
};

export const signInWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
  if (error) throw error;
};

export const sendPasswordReset = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: WEB_APP_URL });
  if (error) throw error;
};

export const updatePassword = async (password: string) => {
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw error;
};

let googleReady: Promise<void> | null = null;

// App: Google's own account picker on the phone, then Supabase checks Google's ID token.
// Web: Supabase's Google page, which returns to the web app signed in.
export const signInWithGoogle = async () => {
  if (!Capacitor.isNativePlatform()) {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: WEB_APP_URL } });
    if (error) throw error;
    return;
  }
  const { SocialLogin } = await import("@capgo/capacitor-social-login");
  if (!googleReady) {
    // Only Google's ID token is needed (Supabase checks it), so skip the extra access-token step.
    googleReady = SocialLogin.initialize({
      google: { webClientId: GOOGLE_WEB_CLIENT_ID, mode: "online", skipAuthOnlyAuthorizationAfterSignIn: true }
    });
  }
  await googleReady;
  // No custom scopes: on the stock Capacitor activity Google rejects any scopes list (email and profile are included).
  const res = await SocialLogin.login({ provider: "google", options: {} });
  const idToken = (res.result as { idToken?: string | null }).idToken;
  if (!idToken) throw new Error("google_no_token");
  const { error } = await supabase.auth.signInWithIdToken({ provider: "google", token: idToken });
  if (error) throw error;
};

export const signOut = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      const { SocialLogin } = await import("@capgo/capacitor-social-login");
      await SocialLogin.logout({ provider: "google" });
    } catch {
      // not signed in with Google
    }
  }
  await supabase.auth.signOut();
};

// Deletes the account and everything stored with it on the server. Cannot be undone.
export const deleteAccount = async () => {
  const { error } = await supabase.functions.invoke("delete-account", { method: "POST" });
  if (error) throw error;
  await supabase.auth.signOut({ scope: "local" });
};

// ---------- synced settings ----------
export interface SyncedState {
  display_name?: string | null;
  persona?: string | null;
  language?: "tr" | "en" | null;
  city?: string | null;
  recent_selections?: string[];
  impact?: Record<string, unknown>;
}

export const loadRemoteState = async (userId: string): Promise<SyncedState | null> => {
  const { data, error } = await supabase.from("user_state").select("*").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  return data as SyncedState | null;
};

export const saveRemoteState = async (userId: string, state: SyncedState) => {
  const { error } = await supabase
    .from("user_state")
    .upsert({ user_id: userId, ...state, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
  if (error) throw error;
};

// Recent picks from this phone and from the account, newest last, no duplicates.
// Pure, so it can be unit tested.
export const mergeRecent = (remote: string[], local: string[], limit = 20): string[] => {
  const out: string[] = [];
  for (const id of [...remote, ...local]) {
    const i = out.indexOf(id);
    if (i !== -1) out.splice(i, 1);
    out.push(id);
  }
  return out.slice(-limit);
};

// ---------- first-run question ----------
const AUTH_PROMPT_KEY = "kaydirak_auth_prompt_done_v1";

export const isAuthPromptDone = (): boolean => {
  try {
    return localStorage.getItem(AUTH_PROMPT_KEY) === "1";
  } catch {
    return true;
  }
};

export const markAuthPromptDone = () => {
  try {
    localStorage.setItem(AUTH_PROMPT_KEY, "1");
  } catch {
    // storage unavailable: the question may show again next time
  }
};
