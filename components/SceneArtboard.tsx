import type { ReactNode } from "react";
import { sceneDisplay, sceneMono } from "@/lib/sceneFonts";
import type { ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import SceneLayerPicture from "./SceneLayerPicture";

interface SceneArtboardProps {
  background: ArtLayer;
  children: ReactNode;
  className?: string;
  /** Extra classes for the 864×1536 artboard itself. */
  artboardClassName?: string;
  backgroundClassName?: string;
  priority?: boolean;
  lazy?: boolean;
}

// The 864×1536 reference artboard shared by the mobile scenes. It fills the
// width on phones and is centred at max-w-xl on tablets, where a blurred copy
// of the background fills the sides. Inside it `--spacing` is one reference
// pixel (see lib/scene.ts), so children position with artwork coordinates.
// overflow-clip, not overflow-hidden: a hidden box is a scroll container and
// would capture the scroll-driven view() timelines of the scenes.
export default function SceneArtboard({
  background,
  children,
  className,
  artboardClassName,
  backgroundClassName,
  priority,
  lazy,
}: SceneArtboardProps) {
  return (
    <div className={cn("relative overflow-clip", sceneDisplay.variable, sceneMono.variable, className)}>
      <div aria-hidden="true" className="absolute inset-0 hidden opacity-40 md:block">
        <SceneLayerPicture layer={background} lazy={lazy} className="size-full scale-110 object-cover blur-2xl" />
      </div>

      <div
        className={cn(
          "scene-artboard @container relative mx-auto aspect-[864/1536] w-full max-w-xl overflow-clip [--spacing:calc(100cqw/864)]",
          artboardClassName,
        )}
      >
        <SceneLayerPicture
          layer={background}
          priority={priority}
          lazy={lazy}
          className={cn(
            "absolute inset-0 size-full object-cover md:mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
            backgroundClassName,
          )}
        />
        {children}
      </div>
    </div>
  );
}
