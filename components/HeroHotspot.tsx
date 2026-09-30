import Link from "next/link";
import { boxToStyle, type HeroArtboard, type HeroHotspot as Hotspot, type HotspotShape } from "@/lib/heroArt";
import { cn } from "@/lib/utils";

const SHAPE: Record<HotspotShape, string> = {
  pill: "rounded-full",
  rect: "rounded-lg",
  card: "rounded-2xl",
};

const HOTSPOT_BASE =
  "absolute block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffb2] focus-visible:shadow-[0_0_0_4px_rgba(0,0,0,0.6)]";

interface HeroHotspotProps {
  art: HeroArtboard;
  hotspot: Hotspot;
}

export default function HeroHotspot({ art, hotspot }: HeroHotspotProps) {
  // Controls without a real destination are intentionally not rendered.
  if (!hotspot.href) return null;

  return (
    <Link
      href={hotspot.href}
      className={cn(HOTSPOT_BASE, SHAPE[hotspot.shape])}
      style={boxToStyle(art, hotspot.box)}
    >
      <span className="sr-only">{hotspot.label}</span>
    </Link>
  );
}
