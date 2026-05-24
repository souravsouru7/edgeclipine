import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 md:px-9 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Edgecipline logo" width={26} height={26} className="object-contain" />
          <span className="font-semibold text-sm text-white/70 tracking-tight">Edgecipline</span>
        </div>
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#8b95aa]">
          © 2026 Edgecipline Technologies
        </span>
        <span className="font-mono text-[11px] tracking-[0.06em] text-white/40">
          Past performance ≠ future results. Trading involves risk.
        </span>
      </div>
    </footer>
  );
}
