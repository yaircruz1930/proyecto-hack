// ══════════════════════════════════════════════
//  src/components/map/POIMarkers.tsx — Marcadores de POI
// ══════════════════════════════════════════════

"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useFilteredPOIs } from "@/hooks/useFilteredPOIs";
import { LEVEL_COLORS } from "@/constants/map";
import { useMapState } from "@/contexts/MapContext";

/**
 * Crea un icono Leaflet personalizado con emoji
 */
function createPOIIcon(emoji: string): L.DivIcon {
  return L.divIcon({
    html: `
      <div style="
        width:34px;height:34px;
        background:#181a22;
        border:2px solid #2a2d3a;
        border-radius:10px;
        display:flex;align-items:center;justify-content:center;
        font-size:16px;
        box-shadow:0 4px 12px rgba(0,0,0,0.4);
        cursor:pointer;
        animation:poiScaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
      ">${emoji}</div>
    `,
    className: "",
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
}

export default function POIMarkers() {
  const filteredPOIs = useFilteredPOIs();
  const { buildRouteToPOI, isRouting } = useMapState();

  return (
    <>
      {filteredPOIs.map((poi) => (
        <Marker
          key={poi.id}
          position={[poi.lat, poi.lng]}
          icon={createPOIIcon(poi.icon)}
        >
          <Popup>
            <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                {poi.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: LEVEL_COLORS[poi.level],
                    display: "inline-block",
                  }}
                />
                {poi.type.replace(/_/g, " ")}
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>
                {poi.description}
              </div>
              <button
                type="button"
                onClick={() => {
                  void buildRouteToPOI(poi);
                }}
                style={{
                  marginTop: 10,
                  width: "100%",
                  fontSize: 12,
                  fontWeight: 700,
                  borderRadius: 8,
                  border: "1px solid #353a4b",
                  background: "#1b1f2b",
                  color: "#d7deff",
                  padding: "8px 10px",
                  cursor: "pointer",
                }}
              >
                {isRouting ? "Calculando ruta..." : "Ruta mas rapida"}
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
