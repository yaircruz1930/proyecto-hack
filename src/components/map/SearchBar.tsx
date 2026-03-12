// ══════════════════════════════════════════════
//  src/components/map/SearchBar.tsx — Barra de búsqueda
// ══════════════════════════════════════════════

"use client";

import { Search } from "lucide-react";
import { useMapState } from "@/contexts/MapContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useMapState();

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[999] w-[360px] max-w-[calc(100vw-400px)] max-md:left-16 max-md:right-3 max-md:translate-x-0 max-md:w-auto max-md:max-w-none max-md:top-[max(0.75rem,env(safe-area-inset-top))]">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar dirección o punto de interés..."
        className="w-full py-3 max-md:py-2.5 pl-11 pr-5 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-full text-sm text-white placeholder-gray-500 outline-none shadow-[0_4px_24px_rgba(0,0,0,0.4)] focus:border-accent-purple transition-colors"
      />
    </div>
  );
}
