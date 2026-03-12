// ══════════════════════════════════════════════
//  src/components/stats/StatsGrid.tsx — Panel de estadísticas
// ══════════════════════════════════════════════

"use client";

import { useRef, useEffect, useState } from "react";
import { useDashboardStats } from "@/hooks/useDashboardStats";

interface StatCardProps {
  value: number;
  label: string;
  colorClass: string;
}

function StatCard({ value, label, colorClass }: StatCardProps) {
  const prevValue = useRef(value);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (value !== prevValue.current) {
      setPop(true);
      const t = setTimeout(() => setPop(false), 350);
      prevValue.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="bg-brand-card rounded-xl p-3.5 hover:bg-brand-hover transition-colors duration-200">
      <div className={`font-mono text-[22px] font-bold mb-0.5 transition-transform ${colorClass} ${pop ? "animate-count-pop" : ""}`}>
        {value}
      </div>
      <div className="text-[11px] text-gray-500">{label}</div>
    </div>
  );
}

export default function StatsGrid() {
  const stats = useDashboardStats();

  return (
    <div className="px-5 py-2 pb-5">
      <div className="grid grid-cols-2 gap-2">
        <StatCard value={stats.safeZones} label="Zonas seguras" colorClass="text-accent-green" />
        <StatCard value={stats.criticalZones} label="Zonas críticas" colorClass="text-accent-red" />
        <StatCard value={stats.visiblePOI} label="POI visibles" colorClass="text-accent-blue" />
        <StatCard value={stats.activeAlerts} label="Alertas activas" colorClass="text-accent-yellow" />
      </div>
    </div>
  );
}
