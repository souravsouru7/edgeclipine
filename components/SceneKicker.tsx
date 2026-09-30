import { cn } from "@/lib/utils";

interface SceneKickerProps {
  children: string;
  className?: string;
}

// "── DISCIPLINE OVER EMOTION" kicker at x=62 of a scene artboard. Tracking is
// "18 ref px per character minus the glyph advance" (DM Mono = 0.6em), so the
// line keeps the comp's width even when the font hits its 9px legibility floor.
export default function SceneKicker({ children, className }: SceneKickerProps) {
  return (
    <p
      className={cn(
        "absolute left-62 z-30 flex items-center gap-24 whitespace-nowrap font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light uppercase leading-none tracking-[calc(var(--spacing)*18-0.6em)] text-[#8f989d]",
        className,
      )}
    >
      <span aria-hidden="true" className="h-[1.5px] w-46 shrink-0 bg-[#27c890]" />
      {children}
    </p>
  );
}
