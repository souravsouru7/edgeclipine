// Section 02 "The loop is the problem" (components/LoopSection.tsx).
// Geometry is in 864×1536 reference pixels (see lib/scene.ts); Tailwind class
// strings live here so each stage's sculpture, leader and label stay together.
// Sculpture boxes were tuned against edgecipline-loop-section-02-assets/
// reference/section-02-target.png.

import { ARTBOARD_SIZES, type ArtLayer } from "./scene";

const DIR = "/scenes/loop";
const STAGE_WIDTHS = [240, 400, 640];
const STAGE_SIZES = "(min-width: 36rem) 13.5rem, 37vw";

/** Dark graphite terrain with four ledges, full 864×1536 canvas (2160×3840 source). */
export const LOOP_BACKGROUND: ArtLayer = {
  base: `${DIR}/bg`,
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

export interface LoopStage {
  number: string;
  title: string;
  /** Description, one entry per intended line. */
  lines: string[];
  art: ArtLayer;
  /** Sculpture position/size (left, top, width) in reference px. */
  artClassName: string;
  /** Label block position (top of the numeral). */
  labelClassName: string;
  /** Gold leader line from the sculpture to the label: x0 → x1 at y. */
  leader: { x0: number; x1: number; y: number };
}

export const LOOP_STAGES: LoopStage[] = [
  {
    number: "01",
    title: "The rush",
    lines: ["You see an opportunity", "and feel the urge to act."],
    art: { base: `${DIR}/stage-01`, width: 3840, height: 2297, widths: STAGE_WIDTHS, sizes: STAGE_SIZES },
    artClassName: "left-152 top-452 w-316",
    labelClassName: "left-542 top-512",
    leader: { x0: 398, x1: 510, y: 530 },
  },
  {
    number: "02",
    title: "The rule break",
    lines: ["You ignore your plan", "and take the trade", "anyway."],
    art: { base: `${DIR}/stage-02`, width: 3840, height: 2667, widths: STAGE_WIDTHS, sizes: STAGE_SIZES },
    artClassName: "left-202 top-725 w-281",
    labelClassName: "left-580 top-780",
    leader: { x0: 420, x1: 550, y: 794 },
  },
  {
    number: "03",
    title: "The regret",
    lines: ["It doesn’t go as planned", "and emotions take over."],
    art: { base: `${DIR}/stage-03`, width: 3840, height: 3121, widths: STAGE_WIDTHS, sizes: STAGE_SIZES },
    artClassName: "left-194 top-973 w-272",
    labelClassName: "left-580 top-1062",
    leader: { x0: 416, x1: 550, y: 1076 },
  },
  {
    number: "04",
    title: "The repeat",
    lines: ["You find yourself", "back at the start."],
    art: { base: `${DIR}/stage-04`, width: 3840, height: 2404, widths: STAGE_WIDTHS, sizes: STAGE_SIZES },
    artClassName: "left-187 top-1223 w-304",
    labelClassName: "left-580 top-1292",
    leader: { x0: 427, x1: 550, y: 1306 },
  },
];

