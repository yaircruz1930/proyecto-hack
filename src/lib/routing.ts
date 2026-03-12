import type { PointOfInterest } from "@/types";

const OSRM_BASE_URL = "https://router.project-osrm.org";
const FALLBACK_SPEED_KMH = 35;

export interface RouteEstimate {
  poi: PointOfInterest;
  distanceKm: number;
  durationMin: number;
  source: "osrm" | "estimated";
}

export interface RoutePathResult {
  coordinates: [number, number][];
  distanceKm: number;
  durationMin: number;
}

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const dLat = ((b[0] - a[0]) * Math.PI) / 180;
  const dLng = ((b[1] - a[1]) * Math.PI) / 180;
  const lat1 = (a[0] * Math.PI) / 180;
  const lat2 = (b[0] * Math.PI) / 180;

  const sinDlat = Math.sin(dLat / 2);
  const sinDlng = Math.sin(dLng / 2);

  const h =
    sinDlat * sinDlat + Math.cos(lat1) * Math.cos(lat2) * sinDlng * sinDlng;

  return 2 * R * Math.asin(Math.sqrt(h));
}

function estimateMinutesFromKm(distanceKm: number): number {
  return (distanceKm / FALLBACK_SPEED_KMH) * 60;
}

async function fetchWithTimeout(url: string, timeoutMs = 8000): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal, cache: "no-store" });
  } finally {
    clearTimeout(timeout);
  }
}

export async function getTravelEstimates(
  origin: [number, number],
  destinations: PointOfInterest[]
): Promise<RouteEstimate[]> {
  if (!destinations.length) return [];

  const fallback = destinations.map((poi) => {
    const distanceKm = haversineKm(origin, [poi.lat, poi.lng]);
    return {
      poi,
      distanceKm,
      durationMin: estimateMinutesFromKm(distanceKm),
      source: "estimated" as const,
    };
  });

  try {
    const coords = [
      `${origin[1]},${origin[0]}`,
      ...destinations.map((poi) => `${poi.lng},${poi.lat}`),
    ].join(";");

    const url = `${OSRM_BASE_URL}/table/v1/driving/${coords}?annotations=distance,duration&sources=0`;
    const response = await fetchWithTimeout(url);

    if (!response.ok) return fallback;

    const data = (await response.json()) as {
      distances?: Array<Array<number | null>>;
      durations?: Array<Array<number | null>>;
    };

    const distances = data.distances?.[0];
    const durations = data.durations?.[0];

    if (!distances || !durations) return fallback;

    return destinations.map((poi, index) => {
      const distanceMeters = distances[index + 1];
      const durationSeconds = durations[index + 1];

      if (distanceMeters === null || durationSeconds === null) {
        return fallback[index];
      }

      return {
        poi,
        distanceKm: distanceMeters / 1000,
        durationMin: durationSeconds / 60,
        source: "osrm" as const,
      };
    });
  } catch {
    return fallback;
  }
}

export async function getRoutePath(
  origin: [number, number],
  destination: [number, number]
): Promise<RoutePathResult> {
  const originCoord = `${origin[1]},${origin[0]}`;
  const destCoord = `${destination[1]},${destination[0]}`;
  const url = `${OSRM_BASE_URL}/route/v1/driving/${originCoord};${destCoord}?overview=full&geometries=geojson`;

  const response = await fetchWithTimeout(url);

  if (!response.ok) {
    throw new Error("No se pudo calcular la ruta");
  }

  const data = (await response.json()) as {
    routes?: Array<{
      distance: number;
      duration: number;
      geometry: { coordinates: [number, number][] };
    }>;
  };

  const firstRoute = data.routes?.[0];

  if (!firstRoute) {
    throw new Error("No se encontro una ruta disponible");
  }

  return {
    coordinates: firstRoute.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    distanceKm: firstRoute.distance / 1000,
    durationMin: firstRoute.duration / 60,
  };
}