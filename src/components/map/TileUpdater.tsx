// ══════════════════════════════════════════════
//  src/components/map/TileUpdater.tsx — Cambia tiles según tema
// ══════════════════════════════════════════════

"use client";

import { TileLayer } from "react-leaflet";
import { useMapState } from "@/contexts/MapContext";
<<<<<<< HEAD
import { MAP_BOUNDS_50KM, TILE_URLS, TILE_ATTRIBUTION } from "@/constants/map";
=======
import { TILE_URLS, TILE_ATTRIBUTION } from "@/constants/map";
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469

export default function TileUpdater() {
  const { isDarkTile } = useMapState();

  return (
    <TileLayer
      key={isDarkTile ? "dark" : "light"}
      url={isDarkTile ? TILE_URLS.dark : TILE_URLS.light}
      attribution={TILE_ATTRIBUTION}
<<<<<<< HEAD
      bounds={MAP_BOUNDS_50KM}
      noWrap={true}
=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
      maxZoom={19}
    />
  );
}
