import React, { useState } from "react";
import { X, Mail, Lock, User as UserIcon, Eye, EyeOff } from "lucide-react";
import {
  authErrorText,
  googleEnabled,
  sendPasswordReset,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  updatePassword
} from "../account/account";

export type AuthMode = "signin" | "signup" | "reset" | "newPassword";

interface AuthScreenProps {
  language: "tr" | "en";
  initialMode?: AuthMode;
  // First run: "Misafir olarak devam et". Opened from Profile: a close button.
  firstRun: boolean;
  onClose: () => void;
}

const TEXT = {
  tr: {
    signinTitle: "Tekrar hoş geldin",
    signupTitle: "Hesap oluştur",
    resetTitle: "Şifreni sıfırla",
    newPwTitle: "Yeni şifre belirle",
    lead: "Giriş yaparsan modun ve sana özel önerilerin her telefonda seninle gelir.",
    resetLead: "E-postanı yaz, şifre sıfırlama bağlantısı gönderelim.",
    name: "Adın",
    email: "E-posta",
    password: "Şifre",
    newPassword: "Yeni şifre (en az 8 karakter)",
    signin: "Giriş yap",
    signup: "Hesap oluştur",
    sendReset: "Bağlantı gönder",
    savePw: "Şifreyi kaydet",
    google: "Google ile devam et",
    or: "ya da",
    forgot: "Şifremi unuttum",
    toSignup: "Hesabın yok mu? Hesap oluştur",
    toSignin: "Zaten hesabın var mı? Giriş yap",
    back: "Girişe dön",
    guest: "Misafir olarak devam et",
    guestNote: "Hesap olmadan da her şeyi kullanabilirsin. İstediğin zaman Profil'den giriş yapabilirsin.",
    confirmSent: "Neredeyse bitti! E-postana bir onay bağlantısı gönderdik. Bağlantıya tıkladıktan sonra buradan giriş yap.",
    resetSent: "Bağlantı gönderildi. E-postandaki bağlantıyla yeni şifreni belirleyebilirsin.",
    pwSaved: "Şifren güncellendi.",
    showPw: "Şifreyi göster",
    hidePw: "Şifreyi gizle",
    close: "Kapat",
    nameMissing: "Adını yaz.",
    pwShort: "Şifre en az 8 karakter olmalı.",
    terms: "Hesap oluşturarak; adın, e-postan ve uygulama ayarlarının hesabında saklanmasını kabul edersin. Hesabını istediğin zaman Profil > Hesabı sil ile silebilirsin."
  },
  en: {
    signinTitle: "Welcome back",
    signupTitle: "Create an account",
    resetTitle: "Reset your password",
    newPwTitle: "Set a new password",
    lead: "Sign in and your mode and picks follow you to any phone.",
    resetLead: "Enter your e-mail and we will send you a reset link.",
    name: "Your name",
    email: "E-mail",
    password: "Password",
    newPassword: "New password (8+ characters)",
    signin: "Sign in",
    signup: "Create account",
    sendReset: "Send link",
    savePw: "Save password",
    google: "Continue with Google",
    or: "or",
    forgot: "Forgot password",
    toSignup: "No account? Create one",
    toSignin: "Have an account? Sign in",
    back: "Back to sign in",
    guest: "Continue as guest",
    guestNote: "Everything works without an account. You can sign in from Profile any time.",
    confirmSent: "Almost done! We e-mailed you a confirmation link. Open it, then sign in here.",
    resetSent: "Link sent. Use the link in your e-mail to set a new password.",
    pwSaved: "Your password was updated.",
    showPw: "Show password",
    hidePw: "Hide password",
    close: "Close",
    nameMissing: "Enter your name.",
    pwShort: "The password needs at least 8 characters.",
    terms: "By creating an account you agree that your name, e-mail and app settings are stored with your account. Delete it any time in Profile > Delete account."
  }
};

const GoogleMark = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

const AuthScreen: React.FC<AuthScreenProps> = ({ language, initialMode = "signin", firstRun, onClose }) => {
  const t = TEXT[language];
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const switchMode = (m: AuthMode) => {
    setMode(m);
    setError(null);
    setInfo(null);
  };

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    setInfo(null);
    try {
      await fn();
    } catch (err) {
      const e = err as { message?: string };
      // The user closed Google's account picker: not an error worth showing.
      if (!/cancel/i.test(e?.message ?? "")) setError(authErrorText(err, language));
    } finally {
      setBusy(false);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signup") {
      if (!name.trim()) return setError(t.nameMissing);
      if (password.length < 8) return setError(t.pwShort);
      run(async () => {
        const { needsConfirmation } = await signUpWithEmail(name, email, password);
        if (needsConfirmation) {
          setMode("signin");
          setInfo(t.confirmSent);
        }
      });
    } else if (mode === "signin") {
      run(() => signInWithEmail(email, password));
    } else if (mode === "reset") {
      run(async () => {
        await sendPasswordReset(email);
        setInfo(t.resetSent);
      });
    } else {
      if (password.length < 8) return setError(t.pwShort);
      run(async () => {
        await updatePassword(password);
        setInfo(t.pwSaved);
        setTimeout(onClose, 1200);
      });
    }
  };

  const title = { signin: t.signinTitle, signup: t.signupTitle, reset: t.resetTitle, newPassword: t.newPwTitle }[mode];
  const showEmail = mode !== "newPassword";
  const showPassword = mode !== "reset";
  const showGoogle = googleEnabled() && (mode === "signin" || mode === "signup");

  return (
    <div className="auth-screen" role="dialog" aria-modal="true" aria-label={title}>
      <div className="auth-top">
        {!firstRun && (
          <button className="close-btn" onClick={onClose} aria-label={t.close}>
            <X size={22} />
          </button>
        )}
      </div>

      <div className="auth-body">
        <h2 className="auth-title">{title}</h2>
        <p className="auth-lead">{mode === "reset" ? t.resetLead : mode === "newPassword" ? "" : t.lead}</p>

        {showGoogle && (
          <>
            <button className="auth-google" disabled={busy} onClick={() => run(signInWithGoogle)}>
              <GoogleMark /> {t.google}
            </button>
            <div className="auth-or"><span>{t.or}</span></div>
          </>
        )}

        <form className="auth-form" onSubmit={submit} noValidate>
          {mode === "signup" && (
            <label className="auth-field">
              <span className="auth-label">{t.name}</span>
              <span className="auth-input-wrap">
                <UserIcon size={18} />
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={60} required />
              </span>
            </label>
          )}
          {showEmail && (
            <label className="auth-field">
              <span className="auth-label">{t.email}</span>
              <span className="auth-input-wrap">
                <Mail size={18} />
                <input type="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" autoCapitalize="none" required />
              </span>
            </label>
          )}
          {showPassword && (
            <label className="auth-field">
              <span className="auth-label">{mode === "newPassword" ? t.newPassword : t.password}</span>
              <span className="auth-input-wrap">
                <Lock size={18} />
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  minLength={8}
                  required
                />
                <button type="button" className="auth-eye" onClick={() => setShowPw((v) => !v)} aria-label={showPw ? t.hidePw : t.showPw}>
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>
          )}

          {error && <p className="auth-error" role="alert">{error}</p>}
          {info && <p className="auth-info" role="status">{info}</p>}

          <button type="submit" className="auth-submit" disabled={busy}>
            {{ signin: t.signin, signup: t.signup, reset: t.sendReset, newPassword: t.savePw }[mode]}
          </button>
        </form>

        <div className="auth-links">
          {mode === "signin" && (
            <>
              <button className="auth-link" onClick={() => switchMode("reset")}>{t.forgot}</button>
              <button className="auth-link strong" onClick={() => switchMode("signup")}>{t.toSignup}</button>
            </>
          )}
          {mode === "signup" && <button className="auth-link strong" onClick={() => switchMode("signin")}>{t.toSignin}</button>}
          {mode === "reset" && <button className="auth-link" onClick={() => switchMode("signin")}>{t.back}</button>}
        </div>

        {mode === "signup" && <p className="auth-terms">{t.terms}</p>}

        {firstRun && mode !== "newPassword" && (
          <div className="auth-guest">
            <button className="auth-guest-btn" onClick={onClose}>{t.guest}</button>
            <p>{t.guestNote}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
