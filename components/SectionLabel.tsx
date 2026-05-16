interface SectionLabelProps {
  chapter: string;
  label: string;
  center?: boolean;
}

export default function SectionLabel({ chapter, label, center }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-7 ${center ? "justify-center" : ""}`}>
      <div className="w-8 h-px bg-[rgba(0,255,178,0.3)] flex-shrink-0" />
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8b95aa]">
        {chapter} · {label}
      </span>
    </div>
  );
}
