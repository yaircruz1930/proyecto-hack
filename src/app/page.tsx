// ══════════════════════════════════════════════
//  src/app/page.tsx — Página principal
// ══════════════════════════════════════════════

"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/sidebar/Sidebar";
import SplashScreen from "@/components/ui/SplashScreen";
import { Menu } from "lucide-react";

// CRÍTICO: Leaflet necesita `window`, así que se carga
// dinámicamente desactivando SSR.
const MapRender = dynamic(() => import("@/components/map/MapRender"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-brand-dark">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-accent-purple border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm text-gray-500">Cargando mapa...</p>
      </div>
    </div>
  ),
});

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const handleSplashFinished = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onFinished={handleSplashFinished} />}
      <div className="flex h-dvh h-screen overflow-hidden">
      {/* Mobile toggle — safe area top */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-[max(0.75rem,env(safe-area-inset-top))] left-3 z-[1200] w-11 h-11 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-xl text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
        aria-label="Abrir menú"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Overlay para cerrar sidebar en mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[1050] backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      {/* Map */}
      <MapRender />
    </div>
    </>
  );
}
