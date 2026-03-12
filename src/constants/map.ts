// ══════════════════════════════════════════════
//  src/constants/map.ts — Configuración del mapa
// ══════════════════════════════════════════════

import type { ZoneStyle, SecurityLevel } from "@/types";

// Centro de Guadalajara
export const GDL_CENTER: [number, number] = [20.676, -103.347];
export const DEFAULT_ZOOM = 13;

// Tiles de CartoDB
export const TILE_URLS = {
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
} as const;

export const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>';

// Estilos por nivel de seguridad
export const ZONE_STYLES: Record<SecurityLevel, ZoneStyle> = {
  safe: {
    color: "#34d399",
    fillColor: "#34d399",
    fillOpacity: 0.15,
    weight: 2,
  },
  caution: {
    color: "#fbbf24",
    fillColor: "#fbbf24",
    fillOpacity: 0.15,
    weight: 2,
  },
  critical: {
    color: "#f87171",
    fillColor: "#f87171",
    fillOpacity: 0.18,
    weight: 2,
  },
};

// Colores para popups según nivel
export const LEVEL_COLORS: Record<SecurityLevel, string> = {
  safe: "#34d399",
  caution: "#fbbf24",
  critical: "#f87171",
};

// Labels legibles para el usuario
export const LEVEL_LABELS: Record<SecurityLevel, string> = {
  safe: "Zona Segura",
  caution: "Zona de Precaución",
  critical: "Zona Crítica",
};
