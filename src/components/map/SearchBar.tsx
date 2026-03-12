// ══════════════════════════════════════════════
//  src/components/map/SearchBar.tsx — Barra de búsqueda
// ══════════════════════════════════════════════

"use client";

import { Search } from "lucide-react";
import { useMapState } from "@/contexts/MapContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useMapState();

  return (
<<<<<<< HEAD
    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-[999] w-[320px] max-w-[calc(100vw-400px)] max-md:left-16 max-md:right-3 max-md:translate-x-0 max-md:w-auto max-md:max-w-none max-md:top-[max(0.65rem,env(safe-area-inset-top))]">
      <Search
        size={13}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none"
=======
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[999] w-[360px] max-w-[calc(100vw-400px)] max-md:left-16 max-md:right-3 max-md:translate-x-0 max-md:w-auto max-md:max-w-none max-md:top-[max(0.75rem,env(safe-area-inset-top))]">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar dirección o punto de interés..."
<<<<<<< HEAD
        className="w-full h-9 max-md:h-8.5 pl-8.5 pr-3.5 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-full text-[12px] text-[#e8eaed] placeholder-[#6b7280] outline-none shadow-[0_4px_24px_rgba(0,0,0,0.4)] focus:border-accent-purple transition-colors"
=======
        className="w-full py-3 max-md:py-2.5 pl-11 pr-5 bg-brand-panel/90 backdrop-blur-md border border-brand-border rounded-full text-sm text-white placeholder-gray-500 outline-none shadow-[0_4px_24px_rgba(0,0,0,0.4)] focus:border-accent-purple transition-colors"
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
      />
    </div>
  );
}
