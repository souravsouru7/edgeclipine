import { sceneDisplay, sceneMono } from "@/lib/sceneFonts";
import { ARTBOARD_SIZES, SCENE_CYAN_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import EntryScope from "./EntryScope";
import FinaleFaq from "./FinaleFaq";
import FinaleFooter from "./FinaleFooter";
import FinaleWaitlistForm from "./FinaleWaitlistForm";
import SceneLayerPicture from "./SceneLayerPicture";

/** Dark sky over wet rocks with a turquoise river and amber trails (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/finale/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

const HEADLINE_LINE = "entry-step block [--entry-dur:450ms] [--entry-rise:18px]";

// Section 10 on phones/tablets (below lg): FAQ + "See the pattern. Change the
// next trade." + waitlist. Unlike the fixed artboards of 02–09 it is laid out
// in flow, so opening an answer can grow it: the box keeps the 864-unit
// coordinates (--spacing = 1 unit) and at least the 864×1536 ratio, and the
// backdrop is pinned to the bottom so the rocks stay under the form/footer.
// Entrance: FAQ rows 90ms apart · 450ms beam draws down (500ms) and pulses
// where it meets the headline · headline lines 100ms apart · 1050ms form, one
// border glow. The footer and the horizon sparkle trigger on their own.
export default function FinaleSection() {
  return (
    <EntryScope id="the-questions" aria-labelledby="finale-title" className={cn("lg:hidden", sceneDisplay.variable, sceneMono.variable)}>
      <div className="relative overflow-clip">
        <div aria-hidden="true" className="absolute inset-0 hidden opacity-40 md:block">
          <SceneLayerPicture layer={BACKGROUND} lazy className="size-full scale-110 object-cover blur-2xl" />
        </div>

        <div className="@container relative mx-auto flex aspect-[864/1536] w-full max-w-xl flex-col [--spacing:calc(100cqw/864)]">
          {/* Pinned to the bottom, then lowered by what the three 44px FAQ targets add over
              the comp's 70-unit rows (0 on tablets), so the river keeps its place under the content. */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-[min(0px,calc(var(--spacing)*210-132px))] h-1536 md:mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <SceneLayerPicture layer={BACKGROUND} lazy className="entry-title absolute inset-0 size-full object-cover [--entry-delay:200ms] [--entry-dur:700ms] [--entry-rise:0px]" />
            <div className="absolute inset-x-0 top-0 h-760 bg-linear-to-b from-background from-25% to-transparent" />
            {/* horizon-flare.svg: one restrained sparkle when the river comes into view. */}
            <div data-entry="" className="entry-group absolute left-432 top-1089 size-40 -translate-1/2">
              <svg viewBox="0 0 512 256" className="entry-glint absolute top-1/2 left-1/2 w-360 -translate-1/2 opacity-0 [--entry-delay:150ms]" fill="none">
                <defs>
                  <radialGradient id="finale-flare">
                    <stop stopColor="#E6FFFE" />
                    <stop offset=".07" stopColor="#B5FFF5" />
                    <stop offset=".25" stopColor="#00FFE0" stopOpacity=".7" />
                    <stop offset="1" stopColor="#00FFE0" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="256" cy="128" rx="246" ry="70" fill="url(#finale-flare)" />
                <path d="M256 10v236M10 128h492" stroke="#79FFEF" strokeWidth={1.5} strokeOpacity={0.6} />
              </svg>
            </div>
          </div>

          {/* Pinned to the section, not the lowered backdrop: keeps the footer row on dark ground. */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-300 bg-linear-to-b from-transparent via-background/85 via-55% to-background" />


          <div className="relative z-20 flex flex-1 flex-col pt-132">
            <div data-entry="" className="entry-group">
              <FinaleFaq />

              {/* vertical-light-beam.svg as two scaled strokes, drawn top → down behind the headline. */}
              <div aria-hidden="true" className="relative h-104">
                <span className="entry-grow absolute top-8 left-432 h-92 w-14 -translate-x-1/2 origin-top bg-linear-to-b from-transparent via-[#00F3DC]/20 via-65% to-[#75FFF1] opacity-80 blur-[calc(var(--spacing)*6)] [--entry-delay:450ms] [--entry-dur:500ms]" />
                <span className="entry-grow absolute top-8 left-432 h-92 w-[max(1px,calc(var(--spacing)*2.5))] -translate-x-1/2 origin-top bg-linear-to-b from-transparent via-[#00F3DC]/35 via-65% to-[#b5fff5] [--entry-delay:450ms] [--entry-dur:500ms]" />
                <span className="entry-glint absolute top-100 left-432 size-64 -translate-1/2 rounded-full bg-[radial-gradient(circle,rgba(190,255,247,0.9),rgba(0,243,220,0.3)_40%,transparent_70%)] opacity-0 [--entry-delay:950ms]" />
              </div>

              {/* Line spans animate separately; the {" "} keep the heading's text "See the pattern. Change the next trade." */}
              <h2
                id="finale-title"
                className={cn(
                  SCENE_DISPLAY_TYPE,
                  "relative ml-100 text-[length:calc(var(--spacing)*84)] leading-[0.845] tracking-[-0.03em]! [font-variation-settings:'wdth'_117]",
                )}
              >
                <span className={cn(HEADLINE_LINE, "[--entry-delay:450ms]")}>See the</span>{" "}
                <span className={cn(HEADLINE_LINE, "[--entry-delay:550ms]")}>pattern.</span>{" "}
                <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:650ms]")}>Change the</span>{" "}
                <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:750ms]")}>next trade.</span>
              </h2>

              <FinaleWaitlistForm className="entry-step mt-38 ml-97 w-669 [--entry-delay:1050ms] [--entry-rise:12px]" />
            </div>

            <FinaleFooter className="mt-26 flex-1" />
          </div>
        </div>
      </div>
    </EntryScope>
  );
}
