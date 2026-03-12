// ══════════════════════════════════════════════
//  src/components/map/TileUpdater.tsx — Cambia tiles según tema
// ══════════════════════════════════════════════

"use client";

import { TileLayer } from "react-leaflet";
import { useMapState } from "@/contexts/MapContext";
import { MAP_BOUNDS_50KM, TILE_URLS, TILE_ATTRIBUTION } from "@/constants/map";

export default function TileUpdater() {
  const { isDarkTile } = useMapState();

  return (
    <TileLayer
      key={isDarkTile ? "dark" : "light"}
      url={isDarkTile ? TILE_URLS.dark : TILE_URLS.light}
      attribution={TILE_ATTRIBUTION}
      bounds={MAP_BOUNDS_50KM}
      noWrap={true}
      maxZoom={19}
    />
  );
}
