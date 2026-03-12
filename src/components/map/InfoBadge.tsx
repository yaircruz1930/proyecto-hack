// ══════════════════════════════════════════════
//  src/components/map/InfoBadge.tsx — Badge de estado inferior
// ══════════════════════════════════════════════

"use client";

import LiveDot from "@/components/ui/LiveDot";
import { useFilteredPOIs } from "@/hooks/useFilteredPOIs";

export default function InfoBadge() {
  const filteredPOIs = useFilteredPOIs();

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[999] bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-full px-5 py-2.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-xs text-gray-400 whitespace-nowrap max-md:bottom-[calc(0.75rem+env(safe-area-inset-bottom))] max-md:px-3.5 max-md:py-2 max-md:gap-2 max-md:text-[11px]">
      <LiveDot />
      <span className="max-md:hidden">Datos actualizados — ZMG Jalisco</span>
      <span className="md:hidden">ZMG Jalisco</span>
      <span className="text-gray-600">|</span>
      <span className="font-mono">{filteredPOIs.length} puntos</span>
    </div>
  );
}
