// ══════════════════════════════════════════════
//  src/components/map/ZoneLayers.tsx — Capas GeoJSON de zonas
// ══════════════════════════════════════════════

"use client";

import { GeoJSON, Popup } from "react-leaflet";
import { useMapState } from "@/contexts/MapContext";
import { ZONES_GEOJSON } from "@/data/zones.geojson";
import { ZONE_STYLES, LEVEL_LABELS } from "@/constants/map";
import type { ZoneProperties } from "@/types";

export default function ZoneLayers() {
  const { zones } = useMapState();

  // Filtrar solo las zonas activas
  const visibleFeatures = ZONES_GEOJSON.features.filter(
    (f) => zones[f.properties.level]
  );

  const filteredGeoJSON = {
    ...ZONES_GEOJSON,
    features: visibleFeatures,
  };

  return (
    <GeoJSON
      // Key forzado para re-render al cambiar zonas activas
      key={JSON.stringify(zones)}
      data={filteredGeoJSON as GeoJSON.FeatureCollection}
      style={(feature) => {
        const props = feature?.properties as ZoneProperties;
        return ZONE_STYLES[props.level];
      }}
      onEachFeature={(feature, layer) => {
        const props = feature.properties as ZoneProperties;
        layer.bindPopup(
          `<div style="font-family:'DM Sans',sans-serif;max-width:280px">
            <div style="font-weight:700;font-size:14px;margin-bottom:4px">${props.name}</div>
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${ZONE_STYLES[props.level].color};margin-bottom:6px">
              ${LEVEL_LABELS[props.level]}
            </div>
            ${props.rationale ? `<div style="font-size:12px;color:#cbd5e1;line-height:1.4;border-top:1px solid #334155;padding-top:6px">${props.rationale}</div>` : ""}
          </div>`
        );
      }}
    />
  );
}
