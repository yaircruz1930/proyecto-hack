"use client";

import { useMemo } from "react";
import { ShieldCheck, School, MapPinned } from "lucide-react";
import { useFilteredPOIs } from "@/hooks/useFilteredPOIs";
import { UNE_PLANTELES } from "@/data/une";
import { ZONES_GEOJSON } from "@/data/zones.geojson";

interface KPIItemProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  hint: string;
}

function KPIItem({ label, value, icon, hint }: KPIItemProps) {
  return (
    <div
      title={hint}
      className="rounded-lg border border-brand-border bg-brand-panel/86 px-2.5 py-1.5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
    >
      <div className="mb-0.5 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-gray-400 max-md:text-[9px]">
        {icon}
        <span>{label}</span>
      </div>
      <div className="font-mono text-lg font-bold leading-none text-gray-100 max-md:text-base">{value}</div>
    </div>
  );
}

export default function JudgesKPIBar() {
  const visiblePOIs = useFilteredPOIs();

  const kpis = useMemo(
    () => [
      {
        label: "Planteles UNE",
        value: UNE_PLANTELES.length,
        icon: <School size={12} className="text-accent-purple" />,
        hint: "Cobertura de planteles UNE integrados",
      },
      {
        label: "Puntos visibles",
        value: visiblePOIs.length,
        icon: <MapPinned size={12} className="text-accent-blue" />,
        hint: "POI de apoyo visibles según filtros activos",
      },
      {
        label: "Zonas analizadas",
        value: ZONES_GEOJSON.features.length,
        icon: <ShieldCheck size={12} className="text-accent-green" />,
        hint: "Polígonos de riesgo modelados en ZMG",
      },
    ],
    [visiblePOIs.length]
  );

  return (
    <div className="absolute top-16 left-1/2 z-[998] w-[min(680px,calc(100%-2.25rem))] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-300 max-md:top-14">
      <div className="grid grid-cols-3 gap-1.5">
        {kpis.map((item) => (
          <KPIItem
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
            hint={item.hint}
          />
        ))}
      </div>
    </div>
  );
}
