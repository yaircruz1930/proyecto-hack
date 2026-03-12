// ══════════════════════════════════════════════
//  src/hooks/useFilteredPOIs.ts — POI filtrados (reactivo)
// ══════════════════════════════════════════════

import { useMemo } from "react";
import { useMapState } from "@/contexts/MapContext";
import { filterPOIs } from "@/lib/filtering";
import { POI_DATA } from "@/data/poi";

/**
 * Devuelve la lista de POIs filtrada según:
 * - Checkboxes activos
 * - Texto de búsqueda
 *
 * Se recalcula automáticamente cuando cambia cualquier dependencia.
 */
export function useFilteredPOIs() {
  const { filters, searchTerm } = useMapState();

  const filteredPOIs = useMemo(
    () => filterPOIs(POI_DATA, filters, null, searchTerm),
    [filters, searchTerm]
  );

  return filteredPOIs;
}
