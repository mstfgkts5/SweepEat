// Shared animation settings for the arena (see SlideCelebration.tsx and index.css).

// Total length of the champion slide (keep in sync with .slide-rider in index.css).
export const SLIDE_DURATION_MS = 1500;

// Length of the short slide when a dish wins a match (keep in sync with .slide-picked).
export const PICK_SLIDE_MS = 600;

// True when the user asked the system for less motion: animations are then skipped.
export const prefersReducedMotion = (): boolean => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};
