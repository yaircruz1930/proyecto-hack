// ══════════════════════════════════════════════
//  src/hooks/useDashboardStats.ts — Estadísticas reactivas
// ══════════════════════════════════════════════

import { useMemo } from "react";
import { useMapState } from "@/contexts/MapContext";
import { useFilteredPOIs } from "./useFilteredPOIs";
import { ZONES_GEOJSON } from "@/data/zones.geojson";
import type { DashboardStats } from "@/types";

export function useDashboardStats(): DashboardStats {
  const { zones } = useMapState();
  const filteredPOIs = useFilteredPOIs();

  return useMemo(() => {
    const safeZones = ZONES_GEOJSON.features.filter(
      (f) => f.properties.level === "safe" && zones.safe
    ).length;

    const criticalZones = ZONES_GEOJSON.features.filter(
      (f) => f.properties.level === "critical" && zones.critical
    ).length;

    return {
      safeZones,
      criticalZones,
      visiblePOI: filteredPOIs.length,
      activeAlerts: criticalZones,
    };
  }, [zones, filteredPOIs]);
}
