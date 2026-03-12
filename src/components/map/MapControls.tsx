// ══════════════════════════════════════════════
//  src/components/map/MapControls.tsx — Botones de control
// ══════════════════════════════════════════════

"use client";

import { useRef, useEffect } from "react";
import { Crosshair, Sun, Moon, Thermometer, LocateFixed, Loader2 } from "lucide-react";
import { useMap } from "react-leaflet";
import { useMapState } from "@/contexts/MapContext";
import { clampToMapBounds, GDL_CENTER, DEFAULT_ZOOM } from "@/constants/map";

export default function MapControls() {
  const map = useMap();
  const { isDarkTile, toggleTheme, userLocation, isLocating, locateUser } = useMapState();
  const SHOW_HEATMAP_ICON = false;

  const handleCenter = () => {
    map.flyTo(GDL_CENTER, DEFAULT_ZOOM, { duration: 1 });
  };

  const handleLocate = () => {
    if (userLocation) {
      map.flyTo(clampToMapBounds(userLocation), 16, { duration: 1 });
    } else {
      locateUser();
    }
  };

  // Volar a la ubicación cuando se obtiene por primera vez
  const prevLocation = useRef(userLocation);
  useEffect(() => {
    if (userLocation && !prevLocation.current) {
      map.flyTo(clampToMapBounds(userLocation), 16, { duration: 1 });
    }
    prevLocation.current = userLocation;
  }, [userLocation, map]);

  return (
    <div className="absolute top-4 right-4 z-[999] flex flex-col gap-2 max-md:top-auto max-md:bottom-24 max-md:right-3">
      <button
        onClick={handleCenter}
        title="Centrar mapa"
        className="w-11 h-11 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-xl text-white flex items-center justify-center hover:bg-brand-hover hover:border-accent-purple transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95"
      >
        <Crosshair size={18} />
      </button>

      <button
        onClick={handleLocate}
        title="Mi ubicación"
        className={`w-11 h-11 bg-brand-panel/90 backdrop-blur-md border rounded-xl text-white flex items-center justify-center hover:bg-brand-hover hover:border-accent-purple transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95 ${
          userLocation ? "border-blue-500" : "border-brand-border"
        }`}
      >
        {isLocating ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <LocateFixed size={18} />
        )}
      </button>

      <button
        onClick={toggleTheme}
        title="Cambiar tema"
        className="w-11 h-11 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-xl text-white flex items-center justify-center hover:bg-brand-hover hover:border-accent-purple transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95"
      >
        {isDarkTile ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {SHOW_HEATMAP_ICON && (
        <button
          title="Capa de calor (próximamente)"
          className="w-11 h-11 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-xl text-white flex items-center justify-center hover:bg-brand-hover hover:border-accent-purple transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] opacity-50"
        >
          <Thermometer size={18} />
        </button>
      )}
    </div>
  );
}
