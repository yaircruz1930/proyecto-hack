// ══════════════════════════════════════════════
//  src/components/ui/SectionTitle.tsx
// ══════════════════════════════════════════════

interface SectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="px-5 pt-4 pb-2 font-display text-[10px] tracking-[2.5px] uppercase text-[#a0a4b0]">
      {children}
    </div>
  );
}
