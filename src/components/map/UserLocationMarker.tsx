// ══════════════════════════════════════════════
//  src/components/map/UserLocationMarker.tsx — Marcador de ubicación del usuario
// ══════════════════════════════════════════════

"use client";

import { CircleMarker, Popup } from "react-leaflet";
import { useMapState } from "@/contexts/MapContext";

export default function UserLocationMarker() {
  const { userLocation } = useMapState();

  if (!userLocation) return null;

  return (
    <>
      {/* Pulso exterior */}
      <CircleMarker
        center={userLocation}
        radius={18}
        pathOptions={{
          color: "transparent",
          fillColor: "#3b82f6",
          fillOpacity: 0.15,
        }}
      />
      {/* Punto interior */}
      <CircleMarker
        center={userLocation}
        radius={7}
        pathOptions={{
          color: "#fff",
          weight: 2,
          fillColor: "#3b82f6",
          fillOpacity: 1,
        }}
      >
        <Popup>
          <span className="text-sm font-medium">Tu ubicación</span>
        </Popup>
      </CircleMarker>
    </>
  );
}
