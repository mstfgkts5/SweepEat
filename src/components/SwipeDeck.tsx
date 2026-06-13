import React, { useState, useRef, useEffect } from "react";
import { X, Heart, Sparkles, Star } from "lucide-react";
import type { MenuItem } from "../data/mockFood";
import { translations } from "../data/translations";

interface SwipeDeckProps {
  items: MenuItem[];
  onSwipe: (item: MenuItem, direction: "left" | "right") => void;
  onOpenInsight: (item: MenuItem) => void;
  language: "tr" | "en";
}

export const SwipeDeck: React.FC<SwipeDeckProps> = ({
  items,
  onSwipe,
  onOpenInsight,
  language
}) => {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [swipeOutcome, setSwipeOutcome] = useState<"left" | "right" | null>(null);

  const startPos = useRef({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const activeItem = currentIndex < items.length ? items[currentIndex] : null;
  const nextItem = currentIndex + 1 < items.length ? items[currentIndex + 1] : null;

  // Reset index if items change
  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (swipeOutcome) return;
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (swipeOutcome) return;
    setIsDragging(true);
    startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setDragOffset({ x: dx, y: dy });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startPos.current.x;
    const dy = e.touches[0].clientY - startPos.current.y;
    setDragOffset({ x: dx, y: dy });
  };



  const triggerSwipe = (direction: "left" | "right") => {
    if (!activeItem) return;
    setSwipeOutcome(direction);
    const endX = direction === "right" ? 500 : -500;
    
    // Animate off-screen
    setDragOffset({ x: endX, y: dragOffset.y / 2 });

    setTimeout(() => {
      onSwipe(activeItem, direction);
      setCurrentIndex((prev) => prev + 1);
      setDragOffset({ x: 0, y: 0 });
      setSwipeOutcome(null);
    }, 300);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const threshold = 100;
      if (dragOffset.x > threshold) {
        triggerSwipe("right");
      } else if (dragOffset.x < -threshold) {
        triggerSwipe("left");
      } else {
        setDragOffset({ x: 0, y: 0 });
      }
    };
    const handleGlobalTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const handleGlobalTouchEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const threshold = 100;
      if (dragOffset.x > threshold) {
        triggerSwipe("right");
      } else if (dragOffset.x < -threshold) {
        triggerSwipe("left");
      } else {
        setDragOffset({ x: 0, y: 0 });
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
      window.addEventListener("touchend", handleGlobalTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [isDragging, dragOffset]);

  if (!activeItem) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <Sparkles size={36} />
        </div>
        <h3 className="empty-state-title">{t.swipeEmpty}</h3>
        <p className="empty-state-desc">{t.swipeEmptySub}</p>
      </div>
    );
  }

  // Calculate card rotation based on drag distance
  const rotate = dragOffset.x * 0.08;
  const opacityLike = Math.min(Math.max(dragOffset.x / 100, 0), 1);
  const opacityNope = Math.min(Math.max(-dragOffset.x / 100, 0), 1);

  // Dynamic green/red swipe visual effects
  const dragPercentage = Math.min(Math.abs(dragOffset.x) / 150, 1);
  let glowShadow = "0 12px 30px rgba(0, 0, 0, 0.08)";
  let borderGlow = "1px solid rgba(229, 231, 235, 0.4)";
  let colorOverlayColor = "transparent";

  if (dragOffset.x > 0) {
    glowShadow = `0 12px 35px rgba(74, 222, 128, ${dragPercentage * 0.45})`;
    borderGlow = `${1 + dragPercentage}px solid rgba(74, 222, 128, ${dragPercentage})`;
    colorOverlayColor = `rgba(74, 222, 128, ${dragPercentage * 0.25})`;
  } else if (dragOffset.x < 0) {
    glowShadow = `0 12px 35px rgba(239, 68, 68, ${dragPercentage * 0.45})`;
    borderGlow = `${1 + dragPercentage}px solid rgba(239, 68, 68, ${dragPercentage})`;
    colorOverlayColor = `rgba(239, 68, 68, ${dragPercentage * 0.25})`;
  }

  const cardStyle: React.CSSProperties = {
    transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) rotate(${rotate}deg)`,
    transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    zIndex: 10,
    boxShadow: glowShadow,
    border: borderGlow
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="card-stack">
        {/* Next Card Preview */}
        {nextItem && (
          <div
            className="food-card"
            style={{
              transform: "scale(0.95) translateY(12px)",
              zIndex: 5,
              pointerEvents: "none",
              opacity: 0.9
            }}
          >
            <div className="card-image-container">
              <img src={nextItem.imageUrl} alt={language === "tr" ? nextItem.nameTr : nextItem.nameEn} className="card-image" />
              <div className="card-gradient-overlay" />
            </div>
            <div className="card-content-overlay">
              <div className="card-title-row">
                <span className="card-title">{language === "tr" ? nextItem.nameTr : nextItem.nameEn}</span>
                <span className="card-price">
                  {nextItem.currency}
                  {nextItem.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Active Top Card */}
        <div
          ref={cardRef}
          className="food-card"
          style={cardStyle}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Like/Nope visual badges */}
          <div className="card-swipe-badge like" style={{ opacity: opacityLike }}>
            {language === "tr" ? "BEĞENDİM" : "LIKE"}
          </div>
          <div className="card-swipe-badge nope" style={{ opacity: opacityNope }}>
            {language === "tr" ? "GEÇ" : "NOPE"}
          </div>

          <div className="card-image-container">
            <img src={activeItem.imageUrl} alt={language === "tr" ? activeItem.nameTr : activeItem.nameEn} className="card-image" />
            <div className="card-gradient-overlay" />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: colorOverlayColor,
                pointerEvents: "none",
                zIndex: 2,
                transition: "background-color 0.1s ease-out"
              }}
            />

            {/* Tags */}
            <span className="tag-pill">
              <Sparkles size={11} style={{ marginRight: "2px" }} />
              {language === "tr" ? activeItem.matchTagTr : activeItem.matchTagEn}
            </span>

            {activeItem.isSponsored && (
              <span className="sponsored-pill">{t.swipeSponsored}</span>
            )}
          </div>

          {/* AI Insight Button (Center-Bottom of the Image) */}
          <div className="ai-insight-btn-wrapper" onMouseDown={(e) => e.stopPropagation()} onClick={() => onOpenInsight(activeItem)}>
            <button className="ai-insight-btn">
              <Sparkles size={13} />
              {t.swipeAiInsight}
            </button>
          </div>

          {/* Details Overlay */}
          <div className="card-content-overlay">
            <div className="card-title-row">
              <span className="card-title">{language === "tr" ? activeItem.nameTr : activeItem.nameEn}</span>
              <span className="card-price">
                {activeItem.currency}
                {activeItem.price.toFixed(2)}
              </span>
            </div>

            <div className="card-subtitle-row">
              <div className="card-rating-container">
                <Star size={13} />
                <span>{activeItem.rating}</span>
                <span style={{ fontSize: "11px", opacity: 0.8 }}>({activeItem.reviewCount})</span>
              </div>
            </div>

            <div className="card-nutrients">
              <span className="nutrient-tag">{activeItem.calories} kcal</span>
              <span className="nutrient-tag">P: {activeItem.protein}g</span>
              <span className="nutrient-tag">C: {activeItem.carbs}g</span>
              <span className="nutrient-tag">F: {activeItem.fat}g</span>
            </div>

            {activeItem.isSponsored && activeItem.sponsorDiscount && (
              <div className="coupon-dialog" style={{ padding: "8px", marginTop: "4px" }}>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "var(--accent-orange)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  {t.swipeCouponUnlock}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Swipe Control Buttons */}
      <div className="swipe-controls">
        <button className="control-btn dislike" onClick={() => triggerSwipe("left")}>
          <X size={24} strokeWidth={3} />
        </button>
        <button className="control-btn like" onClick={() => triggerSwipe("right")}>
          <Heart size={24} strokeWidth={3} fill="white" />
        </button>
      </div>
    </div>
  );
};
export default SwipeDeck;

