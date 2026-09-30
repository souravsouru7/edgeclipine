import { cn } from "@/lib/utils";

// Box of the featured (Professional, second) plan column inside PlanMatrix:
// the panel has 14-unit padding, the table's first column is 38.4% and each
// plan column 20.53%, so the column starts at 58.93% of the table. The box
// reaches 5 units past the column on each side and nearly the panel's height.
const COLUMN_BOX =
  "absolute top-5 bottom-5 left-[calc(var(--spacing)*9_+_(100%_-_var(--spacing)*28)*0.5893)] w-[calc((100%_-_var(--spacing)*28)*0.2053_+_var(--spacing)*10)] rounded-[calc(var(--spacing)*26)]";

// Ring = the box's padding band (content-box excluded from the mask).
const RING =
  "absolute inset-0 rounded-[inherit] bg-[linear-gradient(165deg,#00F6CE,#10FFE4_55%,#FFAC32)] [mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [mask-clip:content-box,border-box] [mask-composite:exclude]";

interface PlanColumnHighlightProps {
  /** "fill" sits under the table; "outline" sits over it. */
  part: "fill" | "outline";
}

// pro-border-glow.svg reproduced responsively in CSS: a mint light edge that
// turns amber toward the lower right. The outline is revealed clockwise once
// (.entry-sweep, 400–950ms) and then gives one halo pulse; the glow is a
// static blur on a wrapper (filters run before masks), so nothing blurs while
// it animates. The fill carries topographic-contours.svg.
export default function PlanColumnHighlight({ part }: PlanColumnHighlightProps) {
  if (part === "fill") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          COLUMN_BOX,
          "bg-[url(/scenes/pricing/contours.svg),linear-gradient(to_bottom,rgba(0,246,206,0.11),rgba(0,246,206,0.035)_50%,rgba(255,172,50,0.06))] [background-position:40%_0,0_0] [background-repeat:repeat-y,no-repeat] [background-size:260%_auto,100%_100%]",
        )}
      />
    );
  }

  return (
    <div aria-hidden="true" className={cn(COLUMN_BOX, "pointer-events-none")}>
      <span className="entry-glint absolute inset-0 rounded-[inherit] opacity-0 shadow-[0_0_calc(var(--spacing)*34)_calc(var(--spacing)*4)_rgba(0,246,206,0.4)] [--entry-delay:950ms]" />
      <div className="entry-sweep absolute -inset-24 [--entry-delay:400ms] [mask-image:conic-gradient(#000_var(--entry-sweep),transparent_0)]">
        <div className="absolute inset-24 rounded-[calc(var(--spacing)*26)] opacity-70 blur-[calc(var(--spacing)*7)]">
          <span className={cn(RING, "p-[calc(var(--spacing)*7)]")} />
        </div>
        <div className="absolute inset-24 rounded-[calc(var(--spacing)*26)]">
          <span className={cn(RING, "p-[max(1.5px,calc(var(--spacing)*2.5))]")} />
        </div>
      </div>
    </div>
  );
}
