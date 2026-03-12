// ══════════════════════════════════════════════
//  src/components/map/UNEMarkers.tsx — Marcadores permanentes UNE
//
//  Capa siempre visible — no afectada por filtros.
// ══════════════════════════════════════════════

"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { UNE_PLANTELES } from "@/data/une";

<<<<<<< HEAD
const UNE_ICON_SRC = "/icons/poi/une_plantel.svg";

=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
const UNE_ICON = L.divIcon({
  html: `
    <div style="
      width:36px;height:36px;
<<<<<<< HEAD
      background:#B91818;
      border:2px solid #e15b5b;
      border-radius:10px;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 0 12px rgba(185,24,24,0.5),0 4px 12px rgba(0,0,0,0.4);
      cursor:pointer;
      animation:poiScaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    ">
      <img
        src="${UNE_ICON_SRC}"
        alt="UNE"
        style="width:20px;height:20px;display:block;"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <span style="display:none;align-items:center;justify-content:center;font-size:17px;line-height:1;">🏫</span>
    </div>
=======
      background:#7C3AED;
      border:2px solid #a78bfa;
      border-radius:10px;
      display:flex;align-items:center;justify-content:center;
      font-size:17px;
      box-shadow:0 0 12px rgba(124,58,237,0.55),0 4px 12px rgba(0,0,0,0.4);
      cursor:pointer;
      animation:poiScaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    ">🏫</div>
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
  `,
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -22],
});

export default function UNEMarkers() {
  return (
    <>
      {UNE_PLANTELES.map((plantel) => (
        <Marker
          key={plantel.id}
          position={[plantel.lat, plantel.lng]}
          icon={UNE_ICON}
          zIndexOffset={1000}
        >
          <Popup>
            <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: 240 }}>
              <div style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 4,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}>
                <span style={{
<<<<<<< HEAD
                  background: "#B91818",
=======
                  background: "#7C3AED",
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: 4,
                  letterSpacing: 1,
                }}>UNE</span>
                {plantel.name}
              </div>
              <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.4, marginBottom: 4 }}>
                📍 {plantel.address}
              </div>
              {plantel.phone && (
<<<<<<< HEAD
                <div style={{ fontSize: 12, color: "#e15b5b" }}>
=======
                <div style={{ fontSize: 12, color: "#a78bfa" }}>
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
                  📞 {plantel.phone}
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
