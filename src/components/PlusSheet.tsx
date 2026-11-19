import React, { useEffect, useState } from "react";
import { X, Crown, Check } from "lucide-react";
import { buyPlus, loadPlusPlans, managePlus, plusSupported, restorePlus, type PlusPlan } from "../plus/plus";

interface PlusSheetProps {
  language: "tr" | "en";
  isPlus: boolean;
  onPlusChange: (on: boolean) => void;
  onClose: () => void;
}

const TEXT = {
  tr: {
    title: "Kaydırak Plus",
    lead: "Yemekleri reklamsız kaydır.",
    perks: ["Kaydırma ekranında reklam kartı yok", "Kaydırak'ın geliştirilmesine destek olursun"],
    monthly: "Aylık",
    yearly: "Yıllık",
    perMonth: "/ ay",
    perYear: "/ yıl",
    loading: "Fiyatlar yükleniyor…",
    noPlans: "Kaydırak Plus şu an satın alınamıyor. Biraz sonra tekrar dene.",
    webOnly: "Kaydırak Plus, Google Play'deki Android uygulamasından satın alınabilir.",
    restore: "Satın alımları geri yükle",
    restored: "Kaydırak Plus geri yüklendi.",
    nothing: "Bu Google hesabında Kaydırak Plus bulunamadı.",
    failed: "Satın alma tamamlanmadı.",
    active: "Kaydırak Plus üyesisin. Teşekkürler!",
    manage: "Aboneliği yönet",
    legal: "Abonelik Google Play hesabından ücretlendirilir ve iptal edilene kadar her dönem yenilenir. İstediğin zaman Google Play > Abonelikler'den iptal edebilirsin."
  },
  en: {
    title: "Kaydırak Plus",
    lead: "Swipe dishes with no ads.",
    perks: ["No ad cards while swiping", "You support Kaydırak's development"],
    monthly: "Monthly",
    yearly: "Yearly",
    perMonth: "/ month",
    perYear: "/ year",
    loading: "Loading prices…",
    noPlans: "Kaydırak Plus cannot be bought right now. Try again a bit later.",
    webOnly: "Kaydırak Plus can be bought in the Android app on Google Play.",
    restore: "Restore purchases",
    restored: "Kaydırak Plus restored.",
    nothing: "No Kaydırak Plus found on this Google account.",
    failed: "The purchase was not completed.",
    active: "You are a Kaydırak Plus member. Thank you!",
    manage: "Manage subscription",
    legal: "Charged to your Google Play account and renewed every period until cancelled. Cancel any time in Google Play > Subscriptions."
  }
};

const PlusSheet: React.FC<PlusSheetProps> = ({ language, isPlus, onPlusChange, onClose }) => {
  const t = TEXT[language];
  const supported = plusSupported();
  const [plans, setPlans] = useState<PlusPlan[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (!supported || isPlus) return;
    let cancelled = false;
    loadPlusPlans()
      .then((p) => !cancelled && setPlans(p))
      .catch(() => !cancelled && setPlans([]));
    return () => {
      cancelled = true;
    };
  }, [supported, isPlus]);

  const buy = async (plan: PlusPlan) => {
    setBusy(true);
    setNote(null);
    try {
      const on = await buyPlus(plan);
      onPlusChange(on);
      if (!on) setNote(t.failed);
    } catch {
      // includes the user closing Google Play's sheet
      setNote(t.failed);
    } finally {
      setBusy(false);
    }
  };

  const restore = async () => {
    setBusy(true);
    setNote(null);
    const on = await restorePlus();
    onPlusChange(on);
    setNote(on ? t.restored : t.nothing);
    setBusy(false);
  };

  return (
    <>
      <div className="bottom-sheet-backdrop" onClick={onClose} />
      <div className="bottom-sheet plus-sheet" role="dialog" aria-modal="true" aria-label={t.title}>
        <div className="bottom-sheet-handle" onClick={onClose} />
        <div className="bottom-sheet-header">
          <h3 className="bottom-sheet-title plus-title">
            <Crown size={22} /> {t.title}
          </h3>
          <button className="close-btn" onClick={onClose} aria-label={language === "tr" ? "Kapat" : "Close"}>
            <X size={20} />
          </button>
        </div>

        <p className="plus-lead">{t.lead}</p>
        <ul className="plus-perks">
          {t.perks.map((perk) => (
            <li key={perk}>
              <Check size={16} /> {perk}
            </li>
          ))}
        </ul>

        {!supported && <p className="plus-note">{t.webOnly}</p>}

        {supported && isPlus && (
          <>
            <p className="plus-active">{t.active}</p>
            <button className="plus-secondary" onClick={() => managePlus().catch(() => undefined)}>
              {t.manage}
            </button>
          </>
        )}

        {supported && !isPlus && (
          <>
            {plans === null && <p className="plus-note">{t.loading}</p>}
            {plans !== null && plans.length === 0 && <p className="plus-note">{t.noPlans}</p>}
            <div className="plus-plans">
              {plans?.map((plan) => (
                <button key={plan.planId} className="plus-plan" disabled={busy} onClick={() => buy(plan)}>
                  <span className="plus-plan-name">{plan.planId === "yillik" ? t.yearly : t.monthly}</span>
                  <span className="plus-plan-price">
                    {plan.price} <small>{plan.planId === "yillik" ? t.perYear : t.perMonth}</small>
                  </span>
                </button>
              ))}
            </div>
            <button className="plus-secondary" disabled={busy} onClick={restore}>
              {t.restore}
            </button>
          </>
        )}

        {note && <p className="plus-note" role="status">{note}</p>}
        {supported && <p className="plus-legal">{t.legal}</p>}
      </div>
    </>
  );
};

export default PlusSheet;
