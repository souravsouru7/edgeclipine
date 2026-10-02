import { LOOP_BACKGROUND, LOOP_STAGES } from "@/lib/loopScene";
import { SCENE_ACCENT_TEXT, SCENE_DISPLAY_SIZE, SCENE_DISPLAY_TYPE } from "@/lib/scene";
import { cn } from "@/lib/utils";
import LoopLeaders from "./LoopLeaders";
import LoopRoute from "./LoopRoute";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";
import { ScrollScene } from "./ScrollScene";

// Section 02 on phones/tablets (below lg): "The loop is the problem."
// Layers, bottom to top: terraces, emerald route, four sculptures, gold
// leaders, live copy. ScrollScene coordinates route drawing and stage reveals
// across the short artboard's full viewport travel. Reduced motion and no JS
// render the final scene immediately.
export default function LoopSection() {
  return (
    <ScrollScene id="the-loop" aria-labelledby="loop-title" className="lg:hidden">
      <SceneArtboard background={LOOP_BACKGROUND} lazy>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <LoopRoute className="absolute inset-0 z-10 size-full" />
        {LOOP_STAGES.map((stage, index) => (
          <SceneLayerPicture
            key={stage.number}
            layer={stage.art}
            lazy
            scrollStart={0.23 + index * 0.15}
            scrollEnd={0.4 + index * 0.15}
            scrollMotion="depth"
            className={cn("scene-reveal absolute z-20 h-auto", stage.artClassName)}
          />
        ))}
        <LoopLeaders className="absolute inset-0 z-20 size-full" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="02" className="scene-reveal" />
        <SceneKicker className="scene-reveal top-141">Edgecipline</SceneKicker>

        <h2 id="loop-title" className={cn(SCENE_DISPLAY_TYPE, SCENE_DISPLAY_SIZE, "scene-reveal absolute left-62 top-197 z-30 tracking-[-0.02em]! [font-variation-settings:'wdth'_104]")}>
          The <span className={SCENE_ACCENT_TEXT}>loop</span> is
          <br />
          The problem<span className={SCENE_ACCENT_TEXT}>.</span>
        </h2>

        <p className="scene-reveal absolute left-62 top-362 z-30 text-[length:max(12px,calc(var(--spacing)*28))] leading-[1.18] text-[#8a9097]">
          A good strategy cannot save
          <br />
          an unchecked decision.
        </p>

        <ol className="absolute inset-0 z-30 list-none">
          {LOOP_STAGES.map((stage, index) => (
            <li
              key={stage.number}
              data-scroll-start={0.25 + index * 0.15}
              data-scroll-end={0.43 + index * 0.15}
              className={cn("scene-reveal absolute whitespace-nowrap", stage.labelClassName)}
            >
              <span
                aria-hidden="true"
                className="block font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*18))] leading-none tracking-[0.08em] text-[#f2c45a]"
              >
                {stage.number}
              </span>
              <h3 className="mt-10 text-[length:max(13px,calc(var(--spacing)*30))] font-bold! leading-[1.1] tracking-[-0.01em]! text-white">
                {stage.title}
              </h3>
              <p className="mt-4 text-[length:max(10px,calc(var(--spacing)*20.5))] leading-[1.2] text-[#9aa1a8]">
                {stage.lines.map((line, i) => (
                  <span key={line} className="block">
                    {line}
                    {i < stage.lines.length - 1 && " "}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </SceneArtboard>
    </ScrollScene>
  );
}
