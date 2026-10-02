import { ARTBOARD_SIZES, SCENE_CYAN_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import EntryScope from "./EntryScope";
import PlanMatrix from "./PlanMatrix";
import PlanWaitlistCta from "./PlanWaitlistCta";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";

/** Wet obsidian valley with an amber-to-teal light trail (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/pricing/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

const HEADLINE_LINE = "entry-title block [--entry-dur:450ms] [--entry-rise:16px]";

// Section 09 on phones/tablets (below lg): "Invest in your discipline."
// Replaces the desktop PricingSection on small screens, with the real plans.
// Entrance (EntryScope): kicker, then three headline lines rise 16px 100ms
// apart, then the valley fades in. The matrix + CTA group has its own trigger.
// Copy deviates from the comp where the comp was untrue: "Same tools" (plans
// differ), two invented tiers (the site has three), "/10" and "THE ORIGIN".
export default function PlansSection() {
  return (
    <EntryScope id="the-pricing" aria-labelledby="pricing-scene-title" className="lg:hidden">
      <SceneArtboard
        background={BACKGROUND}
        lazy
        backgroundClassName="entry-title [--entry-delay:250ms] [--entry-dur:700ms] [--entry-rise:0px]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-640 bg-linear-to-b from-background from-45% to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="09" className="entry-title [--entry-delay:200ms]" />
        <SceneKicker className="entry-title top-141 [--entry-delay:0ms]">Edgecipline</SceneKicker>

        {/* Line spans animate separately; the {" "} keep the heading's text "Invest in your discipline." */}
        <h2
          id="pricing-scene-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "absolute left-62 top-196 z-30 text-[length:calc(var(--spacing)*84)] leading-[0.82] tracking-[-0.03em]! [font-variation-settings:'wdth'_125]",
          )}
        >
          <span className={cn(HEADLINE_LINE, "[--entry-delay:100ms]")}>Invest in</span>{" "}
          <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:200ms]")}>your</span>{" "}
          <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:300ms]")}>discipline.</span>
        </h2>

        <p className="entry-title absolute left-62 top-424 z-30 whitespace-nowrap font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light uppercase leading-[calc(var(--spacing)*27)] tracking-[calc(var(--spacing)*14.6-0.6em)] text-[#b3b8ba] [--entry-delay:400ms]">
          Every plan starts with your trades.
          <br />
          Choose the plan that fits your next step.
        </p>

        <div data-entry="" className="entry-group absolute inset-x-44 top-522 z-30">
          <PlanMatrix />
          <PlanWaitlistCta className="mt-48" />
        </div>
      </SceneArtboard>
    </EntryScope>
  );
}
