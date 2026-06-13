import { useState } from "react";
import { X, MapPin, Compass, Search } from "lucide-react";
import { translations } from "../data/translations";

interface LocationModalProps {
  currentCity: string;
  onSelectCity: (city: string) => void;
  onClose: () => void;
  language: "tr" | "en";
}

// Top 15 Gastronomic & Metropolitan Turkish Cities
const POPULAR_TURKISH_CITIES = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Adana",
  "Gaziantep",
  "Konya",
  "Trabzon",
  "Muğla",
  "Eskişehir",
  "Hatay",
  "Şanlıurfa",
  "Kayseri",
  "Mersin"
];

export default function LocationModal({
  currentCity,
  onSelectCity,
  onClose,
  language
}: LocationModalProps) {
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      setErrorMessage(
        language === "tr"
          ? "Tarayıcınız konum özelliğini desteklemiyor."
          : "Geolocation is not supported by your browser."
      );
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Fetch reverse geocode from OpenStreetMap's Nominatim (free, public API)
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            {
              headers: {
                "Accept-Language": language === "tr" ? "tr" : "en"
              }
            }
          );
          const data = await response.json();
          
          // Nominatim address hierarchy for Turkish provinces / cities
          const address = data.address || {};
          const city = address.province || address.city || address.town || address.state || "";
          
          if (city) {
            // Clean up common Turkish reverse-geocode suffixes
            const cleanCity = city
              .replace(" İli", "")
              .replace(" Province", "")
              .replace(" ili", "")
              .trim();
            
            onSelectCity(cleanCity);
            onClose();
          } else {
            setErrorMessage(
              language === "tr"
                ? "Konum bilgisi çözümlenemedi. Lütfen listeden seçin."
                : "Could not parse city. Please select from the list."
            );
          }
        } catch (err) {
          console.error("Geocoding error", err);
          setErrorMessage(
            language === "tr"
              ? "Konum sorgulama başarısız oldu. Lütfen listeden seçin."
              : "Failed to reverse geocode. Please select from the list."
          );
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        console.warn("Geolocation error", error);
        setIsLoading(false);
        setErrorMessage(
          language === "tr"
            ? "Konum izni reddedildi ya da konum alınamadı."
            : "Location permission denied or retrieval failed."
        );
      },
      { timeout: 8000 }
    );
  };

  const filteredCities = POPULAR_TURKISH_CITIES.filter((city) =>
    city.toLowerCase().replace(/i̇/g, "i").includes(searchQuery.toLowerCase().replace(/i̇/g, "i"))
  );

  return (
    <div className="bottom-sheet-backdrop" onClick={onClose} style={{ display: "flex", alignItems: "flex-end" }}>
      <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="bottom-sheet-handle" onClick={onClose} />
        
        <div className="bottom-sheet-header">
          <h3 className="bottom-sheet-title">{t.locationModalTitle}</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.4", margin: "-4px 0 4px 0" }}>
          {t.locationModalSub}
        </p>

        {/* Auto Detect Button */}
        <button
          className="action-btn"
          onClick={handleAutoDetect}
          disabled={isLoading}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            backgroundColor: isLoading ? "var(--text-light)" : "var(--primary-red)",
            boxShadow: isLoading ? "none" : "0 4px 12px var(--primary-red-glow)",
            padding: "12px",
            fontSize: "14px"
          }}
        >
          <Compass size={18} className={isLoading ? "spin-animation" : ""} />
          {isLoading ? t.locationModalLoading : t.locationModalAuto}
        </button>

        {errorMessage && (
          <p style={{ fontSize: "12px", color: "#ef4444", fontWeight: 600, textAlign: "center", margin: "4px 0" }}>
            {errorMessage}
          </p>
        )}

        {/* Search Box */}
        <div style={{ position: "relative", width: "100%", marginTop: "4px" }}>
          <Search
            size={16}
            style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }}
          />
          <input
            type="text"
            placeholder={t.locationSearchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px 10px 36px",
              borderRadius: "12px",
              border: "1px solid var(--border-color)",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "#f9fafb"
            }}
          />
        </div>

        {/* Custom manual search result fallback */}
        {searchQuery && !filteredCities.includes(searchQuery) && filteredCities.length === 0 && (
          <button
            onClick={() => {
              onSelectCity(searchQuery);
              onClose();
            }}
            style={{
              padding: "12px",
              backgroundColor: "var(--accent-orange-light)",
              border: "1px dashed var(--accent-orange)",
              borderRadius: "12px",
              color: "var(--accent-orange)",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <MapPin size={16} />
            {language === "tr" ? `"${searchQuery}" olarak belirle` : `Set as "${searchQuery}"`}
          </button>
        )}

        {/* Cities List */}
        <div style={{ maxHeight: "200px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2px", paddingRight: "4px" }}>
          {filteredCities.map((city) => {
            const isSelected = city === currentCity;
            return (
              <button
                key={city}
                onClick={() => {
                  onSelectCity(city);
                  onClose();
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: isSelected ? "var(--accent-orange-light)" : "transparent",
                  color: isSelected ? "var(--accent-orange)" : "var(--text-primary)",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s"
                }}
                className="city-list-item"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <MapPin size={14} style={{ opacity: isSelected ? 1 : 0.4 }} />
                  {city}
                </span>
                {isSelected && <span style={{ fontSize: "11px", fontWeight: 800 }}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
