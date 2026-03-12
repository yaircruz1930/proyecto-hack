// ══════════════════════════════════════════════
//  src/components/sidebar/Sidebar.tsx — Barra lateral completa
// ══════════════════════════════════════════════

"use client";

import ZoneLegend from "@/components/filters/ZoneLegend";
import POIFilters from "@/components/filters/POIFilters";
import RoutePlanner from "@/components/filters/RoutePlanner";
import StatsGrid from "@/components/stats/StatsGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import LiveDot from "@/components/ui/LiveDot";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        w-[340px] min-w-[340px] bg-brand-panel border-r border-brand-border
        flex flex-col overflow-y-auto z-[1000] transition-transform duration-300
        max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:w-[85vw] max-md:min-w-0 max-md:max-w-[340px] max-md:z-[1100]
        ${isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
      `}
    >
      {/* Brand */}
      <div className="px-5 pt-5 pb-4 border-b border-brand-border safe-top">
        <div className="flex items-center justify-between">
<<<<<<< HEAD
          <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight">
            <LiveDot />
            EDUNEX
=======
          <div className="flex items-center gap-2.5 font-mono text-xl font-bold tracking-tight">
            <LiveDot />
            SafeMap GDL
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
          </div>
          {/* Botón cerrar solo en móvil */}
          <button
            onClick={onClose}
<<<<<<< HEAD
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#a0a4b0] hover:text-white hover:bg-brand-hover transition-colors active:scale-95"
=======
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-hover transition-colors active:scale-95"
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>
<<<<<<< HEAD
        <div className="text-[11px] text-[#a0a4b0] mt-1 tracking-[2px] uppercase">
=======
        <div className="text-[11px] text-gray-500 mt-1 tracking-[2px] uppercase">
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
          Zona Metropolitana de Guadalajara
        </div>
      </div>

      {/* Zones */}
      <SectionTitle>Zonas de Seguridad</SectionTitle>
      <ZoneLegend />

      {/* POI Filters */}
      <SectionTitle>Puntos de Interés</SectionTitle>
      <POIFilters />

      {/* Routing */}
      <SectionTitle>Navegación</SectionTitle>
      <RoutePlanner />

      {/* Stats */}
      <SectionTitle>Resumen</SectionTitle>
      <StatsGrid />

      {/* Safe area bottom spacer en móvil */}
      <div className="md:hidden safe-bottom" />
    </aside>
  );
}
