// ══════════════════════════════════════════════
//  src/components/ui/SectionTitle.tsx
// ══════════════════════════════════════════════

interface SectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
<<<<<<< HEAD
    <div className="px-5 pt-4 pb-2 font-display text-[10px] tracking-[2.5px] uppercase text-[#a0a4b0]">
=======
    <div className="px-5 pt-4 pb-2 font-mono text-[10px] tracking-[2.5px] uppercase text-gray-500">
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
      {children}
    </div>
  );
}
