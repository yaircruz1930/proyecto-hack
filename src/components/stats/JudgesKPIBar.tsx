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
<<<<<<< HEAD
      className="rounded-lg border border-brand-border bg-brand-panel/90 px-2 py-1 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)] min-h-[50px]"
    >
      <div className="mb-0.5 flex items-center justify-center gap-1 text-[8px] uppercase tracking-wide text-[#a0a4b0] text-center max-md:text-[7px]">
        {icon}
        <span className="leading-none">{label}</span>
      </div>
      <div className="font-mono text-[13px] font-bold leading-none text-[#e8eaed] text-center max-md:text-[12px]">{value}</div>
=======
      className="rounded-lg border border-brand-border bg-brand-panel/86 px-2.5 py-1.5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
    >
      <div className="mb-0.5 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-gray-400 max-md:text-[9px]">
        {icon}
        <span>{label}</span>
      </div>
      <div className="font-mono text-lg font-bold leading-none text-gray-100 max-md:text-base">{value}</div>
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
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
<<<<<<< HEAD
        icon: <School size={10} className="text-accent-purple" />,
=======
        icon: <School size={12} className="text-accent-purple" />,
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
        hint: "Cobertura de planteles UNE integrados",
      },
      {
        label: "Puntos visibles",
        value: visiblePOIs.length,
<<<<<<< HEAD
        icon: <MapPinned size={10} className="text-accent-blue" />,
=======
        icon: <MapPinned size={12} className="text-accent-blue" />,
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
        hint: "POI de apoyo visibles según filtros activos",
      },
      {
        label: "Zonas analizadas",
        value: ZONES_GEOJSON.features.length,
<<<<<<< HEAD
        icon: <ShieldCheck size={10} className="text-accent-green" />,
=======
        icon: <ShieldCheck size={12} className="text-accent-green" />,
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
        hint: "Polígonos de riesgo modelados en ZMG",
      },
    ],
    [visiblePOIs.length]
  );

  return (
<<<<<<< HEAD
    <div className="absolute top-[4.6rem] left-1/2 z-[998] w-[min(560px,calc(100%-2.25rem))] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-300 max-md:top-[4.2rem]">
      <div className="grid grid-cols-3 gap-1.5 max-md:gap-1">
=======
    <div className="absolute top-16 left-1/2 z-[998] w-[min(680px,calc(100%-2.25rem))] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-300 max-md:top-14">
      <div className="grid grid-cols-3 gap-1.5">
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
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
