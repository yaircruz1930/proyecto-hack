// ══════════════════════════════════════════════
//  src/components/map/MapRender.tsx — Componente principal del mapa
//
//  IMPORTANTE: Este componente DEBE cargarse con
//  dynamic() y { ssr: false } porque Leaflet
//  necesita el objeto `window` del navegador.
// ══════════════════════════════════════════════

"use client";

import { MapContainer } from "react-leaflet";
import TileUpdater from "./TileUpdater";
import ZoneLayers from "./ZoneLayers";
import POIMarkers from "./POIMarkers";
import MapControls from "./MapControls";
import MapInvalidator from "./MapInvalidator";
import SearchBar from "./SearchBar";
import InfoBadge from "./InfoBadge";
import UserLocationMarker from "./UserLocationMarker";
import RouteLayer from "./RouteLayer";
import UNEMarkers from "./UNEMarkers";
import ShareSafeLocationButton from "./ShareSafeLocationButton";
import JudgesKPIBar from "@/components/stats/JudgesKPIBar";
import { GDL_CENTER, DEFAULT_ZOOM } from "@/constants/map";

import "leaflet/dist/leaflet.css";

export default function MapRender() {
  return (
    <div className="relative flex-1 h-full min-h-dvh min-h-screen">
      <SearchBar />
      <JudgesKPIBar />

      <MapContainer
        center={GDL_CENTER}
        zoom={DEFAULT_ZOOM}
        zoomControl={true}
        className="w-full h-full min-h-dvh min-h-screen z-0 touch-manipulation"
        style={{ background: "#0f1117" }}
      >
        <MapInvalidator />
        <TileUpdater />
        <ZoneLayers />
        <POIMarkers />
        <UNEMarkers />
        <UserLocationMarker />
        <RouteLayer />
        <MapControls />
      </MapContainer>

      <ShareSafeLocationButton />
      <InfoBadge />
    </div>
  );
}
