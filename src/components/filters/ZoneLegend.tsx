// ══════════════════════════════════════════════
//  src/components/filters/ZoneLegend.tsx — Leyenda de zonas
// ══════════════════════════════════════════════

"use client";

import { useMapState } from "@/contexts/MapContext";
import type { SecurityLevel } from "@/types";
import { LEVEL_LABELS } from "@/constants/map";

const ZONE_CONFIG: {
  level: SecurityLevel;
  dotClass: string;
  sub: string;
}[] = [
  { level: "safe", dotClass: "bg-accent-green shadow-[0_0_8px_rgba(52,211,153,0.4)]", sub: "Baja incidencia delictiva" },
  { level: "caution", dotClass: "bg-accent-yellow shadow-[0_0_8px_rgba(251,191,36,0.4)]", sub: "Incidencia moderada" },
  { level: "critical", dotClass: "bg-accent-red shadow-[0_0_8px_rgba(248,113,113,0.4)]", sub: "Alta incidencia" },
];

export default function ZoneLegend() {
  const { zones, toggleZone } = useMapState();

  return (
    <div className="px-5 py-1.5">
      {ZONE_CONFIG.map(({ level, dotClass, sub }) => (
        <button
          key={level}
          onClick={() => toggleZone(level)}
          className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-brand-hover transition-all duration-300 mb-0.5 ${
            zones[level] ? "opacity-100" : "opacity-35"
          }`}
        >
          <span className={`w-3.5 h-3.5 rounded shrink-0 transition-all duration-300 ${dotClass} ${
            zones[level] ? "scale-100" : "scale-75 !shadow-none"
          }`} />
          <div className="text-left">
            <div className="text-[13px] transition-colors duration-200">{LEVEL_LABELS[level]}</div>
            <div className="text-[11px] text-gray-500">{sub}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
