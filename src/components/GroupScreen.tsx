import React, { useCallback, useEffect, useMemo, useState } from "react";
import { X, Users, Crown, Share2, Check, Trophy, Clock } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import SwipeDeck from "./SwipeDeck";
import {
  createGroup,
  endGroup,
  fetchGroupState,
  groupErrorText,
  groupWinners,
  isValidCode,
  joinGroup,
  loadGroupSession,
  normalizeCode,
  pickGroupDishes,
  saveGroupSession,
  startGroup,
  voteGroup,
  GROUP_DISH_COUNT,
  GROUP_MAX_MEMBERS,
  type GroupSession,
  type GroupState
} from "../group/group";

interface GroupScreenProps {
  language: "tr" | "en";
  isPlus: boolean;
  defaultName: string;
  // Dishes a new table is filled from (current mode, main dishes).
  dishPool: MenuItem[];
  // Every dish in the app, to turn the table's dish ids back into cards.
  allItems: MenuItem[];
  city: string;
  onOpenPlus: () => void;
  onClose: () => void;
  // "Restoranları gör" on the winning dish.
  onPickWinner: (item: MenuItem) => void;
}

const TEXT = {
  tr: {
    title: "Grup Masası",
    lead: "Arkadaşlarınla aynı yemekleri kendi telefonunuzdan kaydırın; en çok beğenilen yemek masanın seçimi olsun.",
    yourName: "Adın",
    open: "Masa aç",
    plusOnly: "Masa açmak Kaydırak Plus ile",
    or: "ya da bir masaya katıl",
    code: "Masa kodu",
    join: "Katıl",
    lobbyTitle: "Masa kodu",
    shareHint: "Arkadaşların Kaydırak'ta Grup Masası > Katıl'a bu kodu yazsın.",
    share: "Kodu paylaş",
    copied: "Kod kopyalandı",
    members: "Masadakiler",
    host: "masa sahibi",
    start: "Oylamayı başlat",
    needTwo: "Başlatmak için en az 2 kişi gerekli.",
    waitHost: "Masa sahibi başlatınca oylama başlayacak.",
    votingHint: "Herkes aynı yemekleri görüyor. Beğendiğini sağa, beğenmediğini sola kaydır.",
    left: "kaldı",
    waitingTitle: "Oyların kaydedildi",
    waitingText: "Diğerleri bitirince sonuçlar burada görünecek.",
    finished: "bitirdi",
    showResults: "Sonuçları şimdi göster",
    resultsTitle: "Masanın seçimi",
    noMatch: "Ortak bir favori çıkmadı. Yeni bir masa açıp tekrar deneyin.",
    likes: "kişi beğendi",
    restaurants: "Restoranları gör",
    newTable: "Yeni masa",
    leave: "Masadan çık",
    close: "Kapat",
    shareText: (code: string) => `Kaydırak'ta Grup Masası'na katıl! Uygulamada Grup Masası > Katıl'a şu kodu yaz: ${code}`
  },
  en: {
    title: "Group Table",
    lead: "Swipe the same dishes with friends, each on your own phone; the most liked dish is the table's pick.",
    yourName: "Your name",
    open: "Open a table",
    plusOnly: "Opening a table needs Kaydırak Plus",
    or: "or join a table",
    code: "Table code",
    join: "Join",
    lobbyTitle: "Table code",
    shareHint: "Friends type this code in Kaydırak under Group Table > Join.",
    share: "Share code",
    copied: "Code copied",
    members: "At the table",
    host: "host",
    start: "Start voting",
    needTwo: "At least 2 people are needed to start.",
    waitHost: "Voting starts when the host starts it.",
    votingHint: "Everyone sees the same dishes. Swipe right if you like it, left if not.",
    left: "left",
    waitingTitle: "Your votes are in",
    waitingText: "Results show up here when the others finish.",
    finished: "finished",
    showResults: "Show results now",
    resultsTitle: "The table's pick",
    noMatch: "No shared favourite this time. Open a new table and try again.",
    likes: "liked it",
    restaurants: "See restaurants",
    newTable: "New table",
    leave: "Leave table",
    close: "Close",
    shareText: (code: string) => `Join my Group Table on Kaydırak! In the app, go to Group Table > Join and type: ${code}`
  }
};

const GroupScreen: React.FC<GroupScreenProps> = ({
  language,
  isPlus,
  defaultName,
  dishPool,
  allItems,
  city,
  onOpenPlus,
  onClose,
  onPickWinner
}) => {
  const t = TEXT[language];
  const [session, setSession] = useState<GroupSession | null>(loadGroupSession);
  const [state, setState] = useState<GroupState | null>(null);
  const [name, setName] = useState(defaultName);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [sentVotes, setSentVotes] = useState<string[]>([]);

  const byId = useMemo(() => new Map(allItems.map((x) => [x.id, x])), [allItems]);

  const setActive = (s: GroupSession | null) => {
    saveGroupSession(s);
    setSession(s);
    setState(null);
    setSentVotes([]);
  };

  const refresh = useCallback(async () => {
    if (!session) return;
    try {
      setState(await fetchGroupState(session));
    } catch (err) {
      if (/not_member/.test((err as { message?: string })?.message ?? "")) {
        setActive(null);
        setError(groupErrorText(err, language));
      }
      // offline for a moment: keep the last state, try again on the next tick
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, language]);

  // Check the table every 2 seconds while one is open.
  useEffect(() => {
    if (!session) return;
    refresh();
    const timer = setInterval(refresh, 2000);
    return () => clearInterval(timer);
  }, [session, refresh]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (err) {
      setError(groupErrorText(err, language));
    } finally {
      setBusy(false);
    }
  };

  const open = () => {
    if (!isPlus) return onOpenPlus();
    run(async () => {
      const dishes = pickGroupDishes(dishPool, GROUP_DISH_COUNT).map((d) => d.id);
      setActive(await createGroup(name, dishes, city));
    });
  };

  const join = () => run(async () => setActive(await joinGroup(normalizeCode(code), name)));

  const share = async () => {
    if (!state) return;
    const text = t.shareText(state.code);
    try {
      if (navigator.share) {
        await navigator.share({ text });
        return;
      }
    } catch {
      return; // share sheet closed
    }
    try {
      await navigator.clipboard.writeText(state.code);
      setNote(t.copied);
      setTimeout(() => setNote(null), 2000);
    } catch {
      // nothing to do: the code is on screen
    }
  };

  const voted = new Set([...(state?.my_votes ?? []), ...sentVotes]);
  const remaining = (state?.dish_ids ?? []).filter((id) => !voted.has(id)).map((id) => byId.get(id)).filter((x): x is MenuItem => !!x);

  const onVote = (item: MenuItem, direction: "left" | "right") => {
    if (!session) return;
    setSentVotes((v) => [...v, item.id]);
    voteGroup(session, item.id, direction === "right").catch((err) => {
      setSentVotes((v) => v.filter((id) => id !== item.id));
      setError(groupErrorText(err, language));
    });
  };

  const header = (
    <div className="group-top">
      <h2 className="group-title">
        <Users size={22} /> {t.title}
      </h2>
      <button className="close-btn" onClick={onClose} aria-label={t.close}>
        <X size={22} />
      </button>
    </div>
  );

  let body: React.ReactNode;

  if (!session) {
    body = (
      <div className="group-body">
        <p className="group-lead">{t.lead}</p>
        <label className="auth-field">
          <span className="auth-label">{t.yourName}</span>
          <span className="auth-input-wrap">
            <input value={name} onChange={(e) => setName(e.target.value)} maxLength={30} autoComplete="given-name" />
          </span>
        </label>
        <button className="group-primary" disabled={busy || !name.trim()} onClick={open}>
          {!isPlus && <Crown size={18} />} {t.open}
        </button>
        {!isPlus && <p className="group-small">{t.plusOnly}</p>}
        <div className="auth-or"><span>{t.or}</span></div>
        <label className="auth-field">
          <span className="auth-label">{t.code}</span>
          <span className="auth-input-wrap">
            <input
              className="group-code-input"
              value={code}
              onChange={(e) => setCode(normalizeCode(e.target.value))}
              placeholder="ABC234"
              autoCapitalize="characters"
              autoComplete="off"
              inputMode="text"
              maxLength={6}
            />
          </span>
        </label>
        <button className="group-secondary" disabled={busy || !name.trim() || !isValidCode(code)} onClick={join}>
          {t.join}
        </button>
      </div>
    );
  } else if (!state) {
    body = <div className="group-body"><p className="group-small">…</p></div>;
  } else if (state.status === "lobby") {
    const isHost = state.me.is_host;
    body = (
      <div className="group-body">
        <span className="auth-label">{t.lobbyTitle}</span>
        <div className="group-code" aria-label={state.code.split("").join(" ")}>{state.code}</div>
        <p className="group-small">{t.shareHint}</p>
        <button className="group-secondary" onClick={share}>
          <Share2 size={18} /> {t.share}
        </button>
        {note && <p className="group-small" role="status">{note}</p>}
        <span className="auth-label">
          {t.members} ({state.members.length}/{GROUP_MAX_MEMBERS})
        </span>
        <ul className="group-members">
          {state.members.map((m, i) => (
            <li key={`${m.name}-${i}`}>
              <span className="group-avatar">{m.name.charAt(0).toLocaleUpperCase("tr")}</span>
              {m.name}
              {m.is_host && <span className="group-host">{t.host}</span>}
            </li>
          ))}
        </ul>
        {isHost ? (
          <>
            <button className="group-primary" disabled={busy || state.members.length < 2} onClick={() => run(() => startGroup(session).then(refresh))}>
              {t.start}
            </button>
            {state.members.length < 2 && <p className="group-small">{t.needTwo}</p>}
          </>
        ) : (
          <p className="group-wait"><Clock size={18} /> {t.waitHost}</p>
        )}
        <button className="auth-link" onClick={() => setActive(null)}>{t.leave}</button>
      </div>
    );
  } else if (state.status === "voting" && remaining.length > 0) {
    body = (
      <div className="group-body group-voting">
        <p className="group-small">
          {t.votingHint} · {remaining.length} {t.left}
        </p>
        <SwipeDeck
          items={remaining}
          onSwipe={onVote}
          onOpenInsight={() => undefined}
          showInsight={false}
          language={language}
          adsEnabled={false}
          isPlus={isPlus}
          onOpenPlus={onOpenPlus}
        />
      </div>
    );
  } else if (state.status === "voting") {
    const doneCount = state.members.filter((m) => m.done).length;
    body = (
      <div className="group-body">
        <div className="group-done-icon"><Check size={36} /></div>
        <h3 className="group-subtitle">{t.waitingTitle}</h3>
        <p className="group-small">{t.waitingText}</p>
        <ul className="group-members">
          {state.members.map((m, i) => (
            <li key={`${m.name}-${i}`}>
              <span className="group-avatar">{m.name.charAt(0).toLocaleUpperCase("tr")}</span>
              {m.name}
              <span className={`group-progress ${m.done ? "done" : ""}`}>
                {m.done ? t.finished : `${m.voted}/${state.dish_ids.length}`}
              </span>
            </li>
          ))}
        </ul>
        <p className="group-small">{doneCount}/{state.members.length} {t.finished}</p>
        {state.me.is_host && (
          <button className="group-secondary" disabled={busy} onClick={() => run(() => endGroup(session).then(refresh))}>
            {t.showResults}
          </button>
        )}
      </div>
    );
  } else {
    const results = state.results ?? [];
    const winners = groupWinners(results);
    const total = state.members.length;
    body = (
      <div className="group-body">
        <h3 className="group-subtitle"><Trophy size={22} /> {t.resultsTitle}</h3>
        {winners.length === 0 && <p className="group-small">{t.noMatch}</p>}
        <ul className="group-results">
          {results
            .filter((r) => r.likes > 0)
            .slice(0, 5)
            .map((r) => {
              const item = byId.get(r.dish_id);
              if (!item) return null;
              const win = winners.includes(r.dish_id);
              return (
                <li key={r.dish_id} className={win ? "win" : ""}>
                  <img src={item.imageUrl} alt="" />
                  <span className="group-result-text">
                    <strong>{language === "tr" ? item.nameTr : item.nameEn}</strong>
                    <span>{r.likes}/{total} {t.likes}</span>
                  </span>
                  {win && (
                    <button className="group-result-go" onClick={() => onPickWinner(item)}>
                      {t.restaurants}
                    </button>
                  )}
                </li>
              );
            })}
        </ul>
        <button className="group-secondary" onClick={() => setActive(null)}>{t.newTable}</button>
      </div>
    );
  }

  return (
    <div className="group-screen" role="dialog" aria-modal="true" aria-label={t.title}>
      {header}
      {error && <p className="auth-error group-error" role="alert">{error}</p>}
      {body}
    </div>
  );
};

export default GroupScreen;
