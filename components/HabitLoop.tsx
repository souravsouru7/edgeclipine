import type { ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import HabitLoopNodes from "./HabitLoopNodes";
import HabitPhoneScreen from "./HabitPhoneScreen";
import HabitRing from "./HabitRing";
import SceneLayerPicture from "./SceneLayerPicture";

/** Blank dark phone shell (alpha); the weekly reflection screen is live DOM on top. */
const PHONE: ArtLayer = {
  base: "/scenes/habits/phone",
  width: 2315,
  height: 3840,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 14.2rem, 40vw",
};

interface HabitLoopProps {
  className?: string;
}

// Ring → phone → badges group for Section 08. It is its own EntryScope target
// (`data-entry`), so the sequence plays once when the stage itself is in view.
// Box origin is artboard y=530; children use artboard x and (y − 530).
// 0ms phone rises 24px and turns 4° into its pose (800ms) · 600ms Notice ·
// 700–2800ms the four segments draw, each landing badge scales in with its
// label · the phone screen fills in alongside (HabitPhoneScreen). The shell's
// own art already leans like the comp's device, so it settles at just +2°.
export default function HabitLoop({ className }: HabitLoopProps) {
  return (
    <div data-entry="" className={cn("entry-group absolute inset-x-0 top-530 z-10 h-750", className)}>
      <HabitRing />

      <div className="entry-tilt absolute left-262 top-156 w-340 origin-bottom rotate-[2deg] [--entry-rise:24px] [--entry-turn:-4deg]">
        <SceneLayerPicture layer={PHONE} lazy className="block h-auto w-full" />
        <HabitPhoneScreen />
      </div>

      <HabitLoopNodes />
    </div>
  );
}
