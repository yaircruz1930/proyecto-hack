// ══════════════════════════════════════════════
//  src/contexts/MapContext.tsx — Estado del mapa y filtros
// ══════════════════════════════════════════════

"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import type {
  ActiveFilters,
  ActiveZones,
  POIType,
  SecurityLevel,
  PointOfInterest,
} from "@/types";
import { DEFAULT_FILTERS, DEFAULT_ZONES } from "@/constants/filters";
import { POI_DATA } from "@/data/poi";
import {
  getRoutePath,
  getTravelEstimates,
  type RouteEstimate,
} from "@/lib/routing";

interface MapContextValue {
  // Filtros de POI
  filters: ActiveFilters;
  toggleFilter: (key: POIType) => void;
  setAllFilters: (active: boolean) => void;

  // Zonas de seguridad
  zones: ActiveZones;
  toggleZone: (level: SecurityLevel) => void;

  // Buscador
  searchTerm: string;
  setSearchTerm: (term: string) => void;

  // Tema del mapa
  isDarkTile: boolean;
  toggleTheme: () => void;

  // Geolocalización
  userLocation: [number, number] | null;
  isLocating: boolean;
  locateUser: () => void;

  // Ruteo
  routeDestinationType: POIType;
  setRouteDestinationType: (type: POIType) => void;
  routeDestination: PointOfInterest | null;
  routePath: [number, number][];
  routeDistanceKm: number | null;
  routeDurationMin: number | null;
  routeCandidates: RouteEstimate[];
  isRouting: boolean;
  routingError: string | null;
  buildRouteToPOI: (poi: PointOfInterest) => Promise<void>;
  buildRouteToNearestByType: (type?: POIType) => Promise<void>;
  clearRoute: () => void;
}

const MapContext = createContext<MapContextValue | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);
  const [zones, setZones] = useState<ActiveZones>(DEFAULT_ZONES);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTile, setIsDarkTile] = useState(true);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [routeDestinationType, setRouteDestinationType] = useState<POIType>("hospital");
  const [routeDestination, setRouteDestination] =
    useState<PointOfInterest | null>(null);
  const [routePath, setRoutePath] = useState<[number, number][]>([]);
  const [routeDistanceKm, setRouteDistanceKm] = useState<number | null>(null);
  const [routeDurationMin, setRouteDurationMin] = useState<number | null>(null);
  const [routeCandidates, setRouteCandidates] = useState<RouteEstimate[]>([]);
  const [isRouting, setIsRouting] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const watchIdRef = useRef<number | null>(null);

  const toggleFilter = useCallback((key: POIType) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const setAllFilters = useCallback((active: boolean) => {
    setFilters((prev) => {
      const next = { ...prev };
      for (const k of Object.keys(next) as POIType[]) next[k] = active;
      return next;
    });
  }, []);

  const toggleZone = useCallback((level: SecurityLevel) => {
    setZones((prev) => ({ ...prev, [level]: !prev[level] }));
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTile((prev) => !prev);
  }, []);

  const locateUser = useCallback(() => {
    if (!navigator.geolocation) return;
    setIsLocating(true);

    // Limpiar watch anterior si existe
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        setIsLocating(false);
      },
      () => {
        setIsLocating(false);
      },
      { enableHighAccuracy: true, maximumAge: 10_000 }
    );
  }, []);

  const ensureCurrentLocation = useCallback(async (): Promise<[number, number]> => {
    if (userLocation) return userLocation;

    if (!navigator.geolocation) {
      throw new Error("Tu navegador no soporta geolocalizacion");
    }

    setIsLocating(true);

    return new Promise<[number, number]>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location: [number, number] = [
            pos.coords.latitude,
            pos.coords.longitude,
          ];
          setUserLocation(location);
          setIsLocating(false);
          resolve(location);
        },
        () => {
          setIsLocating(false);
          reject(new Error("No se pudo obtener tu ubicacion actual"));
        },
        {
          enableHighAccuracy: true,
          timeout: 10_000,
          maximumAge: 10_000,
        }
      );
    });
  }, [userLocation]);

  const clearRoute = useCallback(() => {
    setRouteDestination(null);
    setRoutePath([]);
    setRouteDistanceKm(null);
    setRouteDurationMin(null);
    setRouteCandidates([]);
    setRoutingError(null);
  }, []);

  const buildRouteFromCandidates = useCallback(
    async (
      target: PointOfInterest,
      candidates: PointOfInterest[]
    ): Promise<void> => {
      setIsRouting(true);
      setRoutingError(null);

      try {
        const origin = await ensureCurrentLocation();
        const estimates = await getTravelEstimates(origin, candidates);
        const orderedEstimates = [...estimates].sort(
          (a, b) => a.durationMin - b.durationMin
        );

        setRouteCandidates(orderedEstimates);

        const route = await getRoutePath(origin, [target.lat, target.lng]);

        setRouteDestination(target);
        setRoutePath(route.coordinates);
        setRouteDistanceKm(route.distanceKm);
        setRouteDurationMin(route.durationMin);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "No se pudo calcular la ruta";
        setRoutingError(message);
      } finally {
        setIsRouting(false);
      }
    },
    [ensureCurrentLocation]
  );

  const buildRouteToPOI = useCallback(
    async (poi: PointOfInterest): Promise<void> => {
      await buildRouteFromCandidates(poi, POI_DATA);
    },
    [buildRouteFromCandidates]
  );

  const buildRouteToNearestByType = useCallback(
    async (type?: POIType): Promise<void> => {
      const nextType = type ?? routeDestinationType;
      const candidates = POI_DATA.filter((poi) => poi.type === nextType);

      if (!candidates.length) {
        setRoutingError("No hay destinos disponibles para ese tipo");
        return;
      }

      setIsRouting(true);
      setRoutingError(null);

      try {
        const origin = await ensureCurrentLocation();
        const estimates = await getTravelEstimates(origin, candidates);
        const orderedEstimates = [...estimates].sort(
          (a, b) => a.durationMin - b.durationMin
        );

        setRouteCandidates(orderedEstimates);

        const best = orderedEstimates[0]?.poi;

        if (!best) {
          throw new Error("No se encontro un destino cercano");
        }

        const route = await getRoutePath(origin, [best.lat, best.lng]);

        setRouteDestinationType(nextType);
        setRouteDestination(best);
        setRoutePath(route.coordinates);
        setRouteDistanceKm(route.distanceKm);
        setRouteDurationMin(route.durationMin);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "No se pudo calcular la mejor ruta";
        setRoutingError(message);
      } finally {
        setIsRouting(false);
      }
    },
    [ensureCurrentLocation, routeDestinationType]
  );

  return (
    <MapContext.Provider
      value={{
        filters,
        toggleFilter,
        setAllFilters,
        zones,
        toggleZone,
        searchTerm,
        setSearchTerm,
        isDarkTile,
        toggleTheme,
        userLocation,
        isLocating,
        locateUser,
        routeDestinationType,
        setRouteDestinationType,
        routeDestination,
        routePath,
        routeDistanceKm,
        routeDurationMin,
        routeCandidates,
        isRouting,
        routingError,
        buildRouteToPOI,
        buildRouteToNearestByType,
        clearRoute,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapState(): MapContextValue {
  const ctx = useContext(MapContext);
  if (!ctx) {
    throw new Error("useMapState debe usarse dentro de <MapProvider>");
  }
  return ctx;
}
