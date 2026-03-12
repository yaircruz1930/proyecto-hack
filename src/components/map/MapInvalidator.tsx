// ══════════════════════════════════════════════
//  src/components/map/MapInvalidator.tsx
//  Fuerza a Leaflet a recalcular el tamaño del mapa
// ══════════════════════════════════════════════

"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapInvalidator() {
  const map = useMap();

  useEffect(() => {
    // Recalcular en múltiples momentos para cubrir
    // todos los escenarios de rendering
    const timers = [100, 300, 600, 1500].map((ms) =>
      setTimeout(() => map.invalidateSize(), ms)
    );

    const handleResize = () => map.invalidateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [map]);

  return null;
}
