// ══════════════════════════════════════════════
//  src/components/ui/LiveDot.tsx
// ══════════════════════════════════════════════

"use client";

interface LiveDotProps {
  className?: string;
}

export default function LiveDot({ className = "" }: LiveDotProps) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full bg-accent-green animate-pulse-dot ${className}`}
    />
  );
}
