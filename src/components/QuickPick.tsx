import { X, Zap, RefreshCw } from "lucide-react";
import type { MenuItem } from "../data/mockFood";

// "Hızlı karar": no swiping, three suggestions at once. Tapping one goes straight to the
// winner screen (restaurants, directions), like an arena champion.
interface QuickPickProps {
  items: MenuItem[];
  language: "tr" | "en";
  onPick: (item: MenuItem) => void;
  onShuffle: () => void;
  canShuffle: boolean;
  onClose: () => void;
}

export default function QuickPick({ items, language, onPick, onShuffle, canShuffle, onClose }: QuickPickProps) {
  const tr = language === "tr";
  return (
    <div className="bottom-sheet-backdrop" onClick={onClose} style={{ display: "flex", alignItems: "flex-end" }}>
      <div className="bottom-sheet quick-pick-sheet" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="bottom-sheet-handle" onClick={onClose} />
        <div className="bottom-sheet-header">
          <h3 className="bottom-sheet-title quick-pick-title">
            <Zap size={18} /> {tr ? "Hızlı Karar" : "Quick Pick"}
          </h3>
          <button className="close-btn" onClick={onClose} aria-label={tr ? "Kapat" : "Close"}>
            <X size={20} />
          </button>
        </div>
        <p className="quick-pick-lead">
          {tr
            ? "Kaydırmaya vaktin yoksa: seçtiğin moda ve son seçimlerine göre 3 öneri. Birine dokun, restoranları gör."
            : "No time to swipe? Three picks for your mode and recent choices. Tap one to see restaurants."}
        </p>
        {items.length === 0 ? (
          <p className="quick-pick-lead">{tr ? "Bu modda gösterecek yemek kalmadı." : "No dishes left in this mode."}</p>
        ) : (
          <ul className="quick-pick-list">
            {items.map((item, i) => (
              <li key={item.id}>
                <button className="quick-pick-item" onClick={() => onPick(item)}>
                  <span className="quick-pick-rank">{i + 1}</span>
                  <img src={item.imageUrl} alt="" loading="lazy" />
                  <span className="quick-pick-text">
                    <strong>{tr ? item.nameTr : item.nameEn}</strong>
                    <span>{tr ? item.matchTagTr : item.matchTagEn}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {canShuffle && (
          <button className="quick-pick-shuffle" onClick={onShuffle}>
            <RefreshCw size={15} /> {tr ? "Başka 3 öneri" : "Three other picks"}
          </button>
        )}
      </div>
    </div>
  );
}
