import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  lightStatusBar?: boolean;
}

// Full-screen app shell. It used to draw a phone mockup (bezel, notch, fake
// status bar); now the app fills the real device screen and respects the
// device's own safe areas (notch, status bar, gesture bar).
export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="app-shell">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
};
export default PhoneFrame;
