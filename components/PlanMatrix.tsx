import { PLAN_FEATURE_GROUPS, PLAN_TIERS } from "@/lib/plans";
import { cn } from "@/lib/utils";
import PlanAvailability from "./PlanAvailability";
import PlanColumnHighlight from "./PlanColumnHighlight";
import PlanFeatureIcon from "./PlanFeatureIcon";

// Rows rise 90ms apart after the panel; included checks light up top to
// bottom once the header is readable. Literal classes so Tailwind sees them.
const ROW_DELAY = ["[--entry-delay:90ms]", "[--entry-delay:180ms]", "[--entry-delay:270ms]"];
const CHECK_DELAY = ["[--entry-delay:600ms]", "[--entry-delay:750ms]", "[--entry-delay:900ms]"];

const ROW_CELL = "entry-reveal border-y border-white/[0.08] py-14 align-middle [--entry-rise:10px]";

interface PlanMatrixProps {
  className?: string;
}

// Glass comparison of the three real plans (lib/plans.ts, from the pricing
// page). A native table: plan columns and feature rows are <th> headers and
// every cell states "Included" / "Not included" for screen readers. Column
// widths (38.4% + 3 × 20.53%) are mirrored by PlanColumnHighlight.
export default function PlanMatrix({ className }: PlanMatrixProps) {
  return (
    <div
      className={cn(
        "entry-step relative rounded-[calc(var(--spacing)*30)] border border-white/10 bg-[#040a0b]/80 p-14 shadow-[0_calc(var(--spacing)*30)_calc(var(--spacing)*60)_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] [--entry-dur:500ms] [--entry-rise:16px]",
        className,
      )}
    >
      <PlanColumnHighlight part="fill" />
      <table className="relative w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-10 text-white">
        <caption className="sr-only">What each Edgecipline plan includes</caption>
        <colgroup>
          <col className="w-[38.4%]" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td />
            {PLAN_TIERS.map(({ id, name, price, term, featured }) => (
              <th key={id} scope="col" className="border-l border-white/[0.07] px-4 pt-20 pb-12 text-center align-bottom font-normal">
                <span className="block text-[length:max(10px,calc(var(--spacing)*23))] font-semibold leading-tight tracking-[-0.01em]">{name}</span>
                <span
                  className={cn(
                    "mt-8 block text-[length:max(12px,calc(var(--spacing)*30))] font-bold leading-none tracking-[-0.01em]",
                    featured ? "text-[#14f7d0] [text-shadow:0_0_calc(var(--spacing)*18)_rgba(20,247,208,0.4)]" : "text-[#eef1f1]",
                  )}
                >
                  {price}
                </span>
                <span className="mt-9 block font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*13))] uppercase leading-none tracking-[0.12em] text-[#9aa5a8]">
                  {term}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PLAN_FEATURE_GROUPS.map(({ icon, title, description, includedIn }, row) => (
            <tr key={title}>
              <th
                scope="row"
                className={cn(ROW_CELL, ROW_DELAY[row], "rounded-l-[calc(var(--spacing)*18)] border-l bg-[#0a1415]/75 pr-8 pl-16 text-left font-normal")}
              >
                <span className="flex items-start gap-14">
                  <PlanFeatureIcon name={icon} className="mt-2 size-44" />
                  <span>
                    <span className="block text-[length:max(10px,calc(var(--spacing)*20))] font-semibold leading-[1.2]">{title}</span>
                    <span className="mt-5 block text-[length:max(9px,calc(var(--spacing)*15))] leading-[1.3] text-[#9aa5a8]">{description}</span>
                  </span>
                </span>
              </th>
              {PLAN_TIERS.map(({ id, featured }, col) => (
                <td
                  key={id}
                  className={cn(
                    ROW_CELL,
                    ROW_DELAY[row],
                    "border-l text-center",
                    // The featured column stays translucent so its highlight shows through.
                    featured ? "bg-[#0a1415]/25" : "bg-[#0a1415]/75",
                    col === PLAN_TIERS.length - 1 && "rounded-r-[calc(var(--spacing)*18)] border-r",
                  )}
                >
                  <PlanAvailability included={includedIn.includes(id)} delay={CHECK_DELAY[row]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PlanColumnHighlight part="outline" />
    </div>
  );
}
