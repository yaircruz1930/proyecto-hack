// ══════════════════════════════════════════════
//  src/lib/filtering.ts — Lógica de filtrado de POI
//
//  AQUÍ ES DONDE TÚ PROGRAMAS TU LÓGICA.
//  Esta función está separada para que sea fácil
//  de testear con unit tests independientemente
//  de los componentes React.
// ══════════════════════════════════════════════

import type { PointOfInterest, ActiveFilters, UserProfile } from "@/types";

/**
 * Filtra los puntos de interés basándose en:
 * 1. Filtros activos (checkboxes)
 * 2. Perfil del usuario (edad, género)
 * 3. Texto de búsqueda
 *
 * @param pois       - Lista completa de POI
 * @param filters    - Estado de los checkboxes
 * @param user       - Perfil del usuario (null = invitado)
 * @param searchTerm - Texto del buscador
 * @returns POI filtrados listos para renderizar
 */
export function filterPOIs(
  pois: PointOfInterest[],
  filters: ActiveFilters,
  user: UserProfile | null,
  searchTerm: string = ""
): PointOfInterest[] {
  return pois.filter((poi) => {
    // ─── PASO 1: Filtro por checkbox ───
    if (!filters[poi.type]) return false;

    // ─── PASO 2: Filtro por perfil de usuario ───
    if (user) {
      const { age, gender } = user;

      // Módulos universitarios: solo visibles para menores de 35
      if (poi.type === "modulo_uni" && age && age > 35) {
        return false;
      }

      // ╔══════════════════════════════════════════╗
      // ║  AGREGA TU LÓGICA PERSONALIZADA AQUÍ:   ║
      // ║                                          ║
      // ║  Ejemplo: Priorizar Puntos Púrpura y     ║
      // ║  Centros de Justicia para mujeres.       ║
      // ║                                          ║
      // ║  if (gender === "hombre" &&              ║
      // ║      poi.type === "punto_purpura") {     ║
      // ║    return false;                         ║
      // ║  }                                       ║
      // ║                                          ║
      // ╚══════════════════════════════════════════╝
    }

    // ─── PASO 3: Filtro por texto de búsqueda ───
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchesName = poi.name.toLowerCase().includes(q);
      const matchesType = poi.type.toLowerCase().includes(q);
      const matchesDesc = poi.description.toLowerCase().includes(q);
      if (!matchesName && !matchesType && !matchesDesc) return false;
    }

    return true;
  });
}
