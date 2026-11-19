import React, { useState } from "react";
import { LogIn, LogOut, Trash2, UserRound, ChevronRight } from "lucide-react";

interface AccountSectionProps {
  language: "tr" | "en";
  account: { name: string; email: string } | null;
  onSignIn: () => void;
  onSignUp: () => void;
  onSignOut: () => Promise<void> | void;
  onDeleteAccount: () => Promise<void>;
}

const TEXT = {
  tr: {
    label: "Hesap",
    guestTitle: "Giriş yap ya da hesap oluştur",
    guestSub: "Modun ve sana özel önerilerin her telefonda seninle gelsin.",
    signIn: "Giriş yap",
    signUp: "Hesap oluştur",
    signOut: "Çıkış yap",
    del: "Hesabı sil",
    delTitle: "Hesabın silinsin mi?",
    delText: "Hesabın ve hesabında saklanan her şey (adın, e-postan, modun, son seçimlerin ve Sıfır Atık istatistiklerin) kalıcı olarak silinir. Bu işlem geri alınamaz. Kaydırak Plus aboneliğin varsa onu ayrıca Google Play > Abonelikler'den iptal etmelisin.",
    delConfirm: "Evet, hesabımı kalıcı olarak sil",
    cancel: "Vazgeç",
    deleting: "Siliniyor…",
    deleted: "Hesabın silindi.",
    delFailed: "Hesap silinemedi. İnternet bağlantını kontrol edip tekrar dene."
  },
  en: {
    label: "Account",
    guestTitle: "Sign in or create an account",
    guestSub: "Your mode and picks follow you to any phone.",
    signIn: "Sign in",
    signUp: "Create account",
    signOut: "Sign out",
    del: "Delete account",
    delTitle: "Delete your account?",
    delText: "Your account and everything stored with it (name, e-mail, mode, recent picks and Zero Waste stats) is deleted for good. This cannot be undone. If you have Kaydırak Plus, cancel it separately in Google Play > Subscriptions.",
    delConfirm: "Yes, delete my account for good",
    cancel: "Cancel",
    deleting: "Deleting…",
    deleted: "Your account was deleted.",
    delFailed: "The account could not be deleted. Check your connection and try again."
  }
};

const AccountSection: React.FC<AccountSectionProps> = ({ language, account, onSignIn, onSignUp, onSignOut, onDeleteAccount }) => {
  const t = TEXT[language];
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const doDelete = async () => {
    setBusy(true);
    setNote(null);
    try {
      await onDeleteAccount();
      setConfirming(false);
      setNote(t.deleted);
    } catch {
      setNote(t.delFailed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <span className="section-label">{t.label}</span>
      {!account ? (
        <div className="setting-card account-card">
          <div className="account-guest">
            <span className="setting-icon" style={{ color: "#1D2D44", backgroundColor: "#E8ECF2" }}>
              <UserRound size={18} />
            </span>
            <span className="account-guest-text">
              <span className="setting-title">{t.guestTitle}</span>
              <span className="account-sub">{t.guestSub}</span>
            </span>
          </div>
          <div className="account-actions">
            <button className="account-primary" onClick={onSignIn}>
              <LogIn size={16} /> {t.signIn}
            </button>
            <button className="account-secondary" onClick={onSignUp}>{t.signUp}</button>
          </div>
          {note && <p className="account-note" role="status">{note}</p>}
        </div>
      ) : (
        <div className="setting-card account-card">
          <div className="account-guest">
            <span className="account-avatar" aria-hidden="true">{(account.name || account.email).charAt(0).toLocaleUpperCase("tr")}</span>
            <span className="account-guest-text">
              <span className="setting-title">{account.name}</span>
              <span className="account-sub">{account.email}</span>
            </span>
          </div>
          <button className="account-row" onClick={() => onSignOut()}>
            <span><LogOut size={18} /> {t.signOut}</span>
            <ChevronRight size={18} color="var(--text-light)" />
          </button>
          <button className="account-row danger" onClick={() => setConfirming(true)}>
            <span><Trash2 size={18} /> {t.del}</span>
            <ChevronRight size={18} />
          </button>
          {note && <p className="account-note" role="status">{note}</p>}
        </div>
      )}

      {confirming && account && (
        <>
          <div className="bottom-sheet-backdrop account-delete-backdrop" onClick={() => !busy && setConfirming(false)} />
          <div className="bottom-sheet account-delete-sheet" role="alertdialog" aria-modal="true" aria-label={t.delTitle}>
            <div className="bottom-sheet-handle" />
            <h3 className="bottom-sheet-title">{t.delTitle}</h3>
            <p className="account-delete-text">{t.delText}</p>
            {note && <p className="account-note error" role="alert">{note}</p>}
            <button className="account-delete-confirm" disabled={busy} onClick={doDelete}>
              {busy ? t.deleting : t.delConfirm}
            </button>
            <button className="account-secondary wide" disabled={busy} onClick={() => setConfirming(false)}>{t.cancel}</button>
          </div>
        </>
      )}
    </>
  );
};

export default AccountSection;
