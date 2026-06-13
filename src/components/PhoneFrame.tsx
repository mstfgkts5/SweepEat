import React, { useState, useEffect } from "react";
import { Battery, Wifi, Signal } from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  lightStatusBar?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, lightStatusBar = false }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours().toString();
      let minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-simulator">
      {/* Notch */}
      <div className="phone-notch" />

      {/* Status Bar */}
      <div className={`phone-status-bar ${lightStatusBar ? "light-text" : "dark-text"}`}>
        <span className="status-time" style={{ marginLeft: "4px" }}>
          {time || "9:41"}
        </span>
        <div className="status-icons">
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <Battery size={16} strokeWidth={2.5} style={{ transform: "rotate(0deg)" }} />
        </div>
      </div>

      {/* Main Screen Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        {children}
      </div>

      {/* Home Indicator */}
      <div
        style={{
          height: "5px",
          width: "140px",
          backgroundColor: lightStatusBar ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.15)",
          borderRadius: "100px",
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 12
        }}
      />
    </div>
  );
};
export default PhoneFrame;
