"use client";

import { useEffect } from "react";
import { Polyline, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useMapState } from "@/contexts/MapContext";

export default function RouteLayer() {
  const map = useMap();
  const { routePath, routeDestination, routeDistanceKm, routeDurationMin } = useMapState();

  useEffect(() => {
    if (routePath.length < 2) return;

    const bounds = L.latLngBounds(routePath.map(([lat, lng]) => L.latLng(lat, lng)));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
  }, [routePath, map]);

  if (!routePath.length || !routeDestination) return null;

  const lastPoint = routePath[routePath.length - 1];

  return (
    <>
      <Polyline
        positions={routePath}
        pathOptions={{
          color: "#60a5fa",
          weight: 6,
          opacity: 0.85,
          lineCap: "round",
          lineJoin: "round",
        }}
      />

      <CircleMarker
        center={lastPoint}
        radius={9}
        pathOptions={{
          color: "#ffffff",
          weight: 2,
          fillColor: "#2563eb",
          fillOpacity: 1,
        }}
      >
        <Popup>
          <div style={{ fontFamily: "'DM Sans', sans-serif", minWidth: 170 }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{routeDestination.name}</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Distancia: {routeDistanceKm ? `${routeDistanceKm.toFixed(2)} km` : "--"}
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>
              Tiempo estimado: {routeDurationMin ? `${Math.round(routeDurationMin)} min` : "--"}
            </div>
          </div>
        </Popup>
      </CircleMarker>
    </>
  );
}
