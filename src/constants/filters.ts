// ══════════════════════════════════════════════
//  src/constants/filters.ts — Config de filtros POI
// ══════════════════════════════════════════════

import type { FilterConfig, ActiveFilters, ActiveZones } from "@/types";

export const FILTER_CONFIG: FilterConfig[] = [
  { key: "hospital",       label: "Hospitales",              icon: "🏥", color: "accent-green"  },
  { key: "comisaria",      label: "Comisarías",              icon: "🚔", color: "accent-blue"   },
  { key: "justicia_mujer", label: "Centro Justicia Mujeres", icon: "⚖️", color: "accent-purple" },
  { key: "punto_purpura",  label: "Puntos Púrpura",          icon: "🟣", color: "accent-pink"   },
  { key: "modulo_uni",     label: "Módulos Universitarios",  icon: "🎓", color: "accent-yellow" },
  { key: "totem_c5",       label: "Tótems C5",               icon: "🆘", color: "accent-red"    },
  { key: "sendero_seguro", label: "Senderos Seguros",        icon: "🛤️", color: "accent-green"  },
  { key: "refugio",        label: "Refugios / Albergues",   icon: "🏠", color: "accent-purple" },
  { key: "cajero_seguro",  label: "Cajeros Seguros",        icon: "🏧", color: "accent-blue"   },
  { key: "farmacia_24h",   label: "Farmacias 24h",          icon: "💊", color: "accent-green"  },
  { key: "estacionamiento_vigilado", label: "Estacionamientos Vigilados", icon: "🅿️", color: "accent-yellow" },
];

// Estado inicial: todos los filtros activos
export const DEFAULT_FILTERS: ActiveFilters = {
  hospital: true,
  comisaria: true,
  justicia_mujer: true,
  punto_purpura: true,
  modulo_uni: true,
  totem_c5: true,
  sendero_seguro: true,
  refugio: true,
  cajero_seguro: true,
  farmacia_24h: true,
  estacionamiento_vigilado: true,
};

// Estado inicial: todas las zonas visibles
export const DEFAULT_ZONES: ActiveZones = {
  safe: true,
  caution: true,
  critical: true,
};
