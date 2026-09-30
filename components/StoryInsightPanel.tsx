import type { ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import SceneLayerPicture from "./SceneLayerPicture";

/**
 * Glass card from edgecipline-story-section-03-assets/insight/
 * blank-pattern-panel-transparent-4k.png (which already carries the waveform
 * icon, a rule and two placeholder bars). The source is wider (2.27:1) than
 * the comp's 304×230 card, so the derivatives were re-proportioned by growing
 * only its empty glass bands — icon, bars, divider and corners are undistorted.
 */
const PANEL: ArtLayer = {
  base: "/scenes/story/panel",
  width: 1920,
  height: 1452,
  widths: [320, 480, 640],
  sizes: "(min-width: 36rem) 13rem, 36vw",
};

interface StoryInsightPanelProps {
  className?: string;
}

// "Pattern noticed" card at the end of the trail. The title is live text; the
// progress nodes over the divider are decorative and make no performance claim.
export default function StoryInsightPanel({ className }: StoryInsightPanelProps) {
  return (
    <div className={cn("w-304 rotate-[2.5deg]", className)}>
      <SceneLayerPicture layer={PANEL} lazy className="block h-auto w-full" />
      <p className="absolute left-88 top-53 whitespace-nowrap text-[length:max(11px,calc(var(--spacing)*24))] font-semibold tracking-[-0.01em] text-white">
        Pattern noticed
      </p>
      <svg viewBox="0 0 304 230" aria-hidden="true" className="absolute inset-0 size-full">
        <path d="M32 179H96" stroke="#3CF2BF" strokeWidth={2} />
        <path d="M96 179H234" stroke="#6E7B7C" strokeWidth={1.5} />
        {[32, 162, 234].map((cx) => (
          <circle key={cx} cx={cx} cy={179} r={5.5} fill="#0B1414" stroke="#8A9696" strokeWidth={1.8} />
        ))}
        <circle cx={96} cy={179} r={6.5} fill="#0E2A24" stroke="#4DFFCB" strokeWidth={2.2} />
      </svg>
    </div>
  );
}
