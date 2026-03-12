"use client";

import { FILTER_CONFIG } from "@/constants/filters";
import { useMapState } from "@/contexts/MapContext";

function formatMinutes(value: number | null): string {
  if (value === null) return "--";
  return `${Math.round(value)} min`;
}

function formatDistance(value: number | null): string {
  if (value === null) return "--";
  return `${value.toFixed(2)} km`;
}

export default function RoutePlanner() {
  const {
    routeDestinationType,
    setRouteDestinationType,
    routeDestination,
    routeDistanceKm,
    routeDurationMin,
    routeCandidates,
    isRouting,
    routingError,
    buildRouteToNearestByType,
    clearRoute,
  } = useMapState();

  const topCandidates = routeCandidates.slice(0, 3);

  return (
    <div className="px-5 pb-3 pt-1.5 space-y-3">
      <div className="space-y-2">
        <label htmlFor="route-destination" className="text-[12px] text-gray-400">
          Tipo de destino
        </label>
        <select
          id="route-destination"
          value={routeDestinationType}
          onChange={(event) => setRouteDestinationType(event.target.value as typeof routeDestinationType)}
          className="w-full bg-brand-dark border border-brand-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60"
        >
          {FILTER_CONFIG.map((item) => (
            <option key={item.key} value={item.key}>
              {item.icon} {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            void buildRouteToNearestByType();
          }}
          className="px-3 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 transition-colors disabled:opacity-60"
          disabled={isRouting}
        >
          {isRouting ? "Calculando..." : "Ir al mas cercano"}
        </button>

        <button
          onClick={clearRoute}
          className="px-3 py-2 rounded-lg text-sm font-semibold bg-brand-dark border border-brand-border hover:bg-brand-hover transition-colors"
        >
          Limpiar ruta
        </button>
      </div>

      {routingError && (
        <div className="text-xs text-red-300 bg-red-900/20 border border-red-500/30 rounded-lg px-3 py-2">
          {routingError}
        </div>
      )}

      {routeDestination && (
        <div className="rounded-lg border border-brand-border bg-brand-dark/70 px-3 py-2.5 space-y-1.5">
          <div className="text-xs text-gray-400">Destino recomendado</div>
          <div className="text-sm font-semibold leading-snug">{routeDestination.name}</div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span>{formatDistance(routeDistanceKm)}</span>
            <span className="text-gray-600">|</span>
            <span>{formatMinutes(routeDurationMin)}</span>
          </div>
        </div>
      )}

      {!!topCandidates.length && (
        <div className="rounded-lg border border-brand-border bg-brand-dark/60 px-3 py-2.5">
          <div className="text-xs text-gray-400 mb-2">Estimaciones mas rapidas</div>
          <div className="space-y-1.5">
            {topCandidates.map((candidate) => (
              <div key={candidate.poi.id} className="text-xs flex items-center justify-between gap-2">
                <span className="truncate text-gray-200">{candidate.poi.name}</span>
                <span className="text-gray-400 whitespace-nowrap">
                  {candidate.distanceKm.toFixed(1)} km · {Math.round(candidate.durationMin)} min
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
