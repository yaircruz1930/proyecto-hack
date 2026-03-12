// ══════════════════════════════════════════════
//  src/types/index.ts — Tipos globales del proyecto
// ══════════════════════════════════════════════

// ── Seguridad ──
export type SecurityLevel = "safe" | "caution" | "critical";

// ── Tipos de Punto de Interés ──
export type POIType =
  | "hospital"
  | "comisaria"
  | "justicia_mujer"
  | "punto_purpura"
  | "modulo_uni"
  | "totem_c5"
  | "sendero_seguro"
  | "refugio"
  | "cajero_seguro"
  | "farmacia_24h"
  | "estacionamiento_vigilado";

// ── Género del usuario ──
export type Gender = "mujer" | "hombre" | "otro" | "";

// ── Punto de Interés ──
export interface PointOfInterest {
  id: number;
  name: string;
  type: POIType;
  icon: string;
  lat: number;
  lng: number;
  level: SecurityLevel;
  description: string;
}

// ── Configuración de cada filtro ──
export interface FilterConfig {
  key: POIType;
  label: string;
  icon: string;
  color: string;
}

// ── Perfil de usuario ──
export interface UserProfile {
  id?: string;
  name: string;
  email?: string;
  age: number | null;
  gender: Gender;
}

// ── Estado de filtros activos ──
export type ActiveFilters = Record<POIType, boolean>;

// ── Estado de zonas visibles ──
export type ActiveZones = Record<SecurityLevel, boolean>;

// ── Propiedades de una zona GeoJSON ──
export interface ZoneProperties {
  name: string;
  level: SecurityLevel;
  rationale: string;
}

// ── Estilos de zona en el mapa ──
export interface ZoneStyle {
  color: string;
  fillColor: string;
  fillOpacity: number;
  weight: number;
}

// ── Stats del dashboard ──
export interface DashboardStats {
  safeZones: number;
  criticalZones: number;
  visiblePOI: number;
  activeAlerts: number;
}
