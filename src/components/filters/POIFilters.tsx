// ══════════════════════════════════════════════
//  src/components/filters/POIFilters.tsx — Checkboxes de filtro
// ══════════════════════════════════════════════

"use client";

import { useMapState } from "@/contexts/MapContext";
import { FILTER_CONFIG } from "@/constants/filters";
import { POI_DATA } from "@/data/poi";
import { Check } from "lucide-react";

export default function POIFilters() {
  const { filters, toggleFilter, setAllFilters } = useMapState();

  const allActive = FILTER_CONFIG.every(({ key }) => filters[key]);
  const noneActive = FILTER_CONFIG.every(({ key }) => !filters[key]);

  return (
    <div className="px-5 py-1.5">
      {/* Seleccionar todo / Deseleccionar todo */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setAllFilters(true)}
          disabled={allActive}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-lg border transition-all duration-200 ${
            allActive
              ? "border-brand-border text-gray-600 cursor-default opacity-50"
              : "border-accent-purple/40 text-accent-purple hover:bg-accent-purple/10"
          }`}
        >
          Seleccionar todos
        </button>
        <button
          onClick={() => setAllFilters(false)}
          disabled={noneActive}
          className={`flex-1 text-[11px] font-medium py-1.5 rounded-lg border transition-all duration-200 ${
            noneActive
              ? "border-brand-border text-gray-600 cursor-default opacity-50"
              : "border-red-500/40 text-red-400 hover:bg-red-500/10"
          }`}
        >
          Deseleccionar todos
        </button>
      </div>

      {FILTER_CONFIG.map(({ key, label, icon }) => {
        const count = POI_DATA.filter((p) => p.type === key).length;
        const active = filters[key];

        return (
          <button
            key={key}
            onClick={() => toggleFilter(key)}
            className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg hover:bg-brand-hover transition-all duration-200 mb-0.5 ${
              active ? "" : "opacity-50"
            }`}
          >
            {/* Checkbox */}
            <div
              className={`w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                active
                  ? "border-accent-purple bg-accent-purple scale-100"
                  : "border-brand-border scale-90"
              }`}
            >
              <Check
                size={11}
                className={`text-white transition-all duration-200 ${
                  active ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                strokeWidth={3}
              />
            </div>

            {/* Icono */}
            <span className={`text-base shrink-0 transition-transform duration-200 ${active ? "scale-100" : "scale-90"}`}>{icon}</span>

            {/* Label */}
            <span className="text-[13px] flex-1 text-left transition-colors duration-200">{label}</span>

            {/* Count badge */}
            <span className="font-mono text-[11px] text-gray-500 bg-brand-dark px-1.5 py-0.5 rounded-md">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
