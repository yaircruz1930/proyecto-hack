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
<<<<<<< HEAD
import { useMapState } from "@/contexts/MapContext";
import {
  GDL_CENTER,
  DEFAULT_ZOOM,
  MAP_BOUNDS_50KM,
  MAP_MIN_ZOOM,
  MAP_MAX_ZOOM,
} from "@/constants/map";
=======
import { GDL_CENTER, DEFAULT_ZOOM } from "@/constants/map";
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469

import "leaflet/dist/leaflet.css";

export default function MapRender() {
<<<<<<< HEAD
  const { isDarkTile } = useMapState();

=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
  return (
    <div className="relative flex-1 h-full min-h-dvh min-h-screen">
      <SearchBar />
      <JudgesKPIBar />

      <MapContainer
        center={GDL_CENTER}
        zoom={DEFAULT_ZOOM}
<<<<<<< HEAD
        minZoom={MAP_MIN_ZOOM}
        maxZoom={MAP_MAX_ZOOM}
        maxBounds={MAP_BOUNDS_50KM}
        maxBoundsViscosity={1}
        zoomControl={true}
        className={`w-full h-full min-h-dvh min-h-screen z-0 touch-manipulation ${
          isDarkTile ? "" : "map-light-tone"
        }`}
        style={{ background: isDarkTile ? "#0f1117" : "#e5e7e6" }}
=======
        zoomControl={true}
        className="w-full h-full min-h-dvh min-h-screen z-0 touch-manipulation"
        style={{ background: "#0f1117" }}
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
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
