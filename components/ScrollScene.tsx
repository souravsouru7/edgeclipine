"use client";

import { useEffect, useRef, type ComponentProps, type RefObject } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Drives the mobile artwork from actual scroll progress. The DOM is complete by
 * default, so no JS and reduced-motion visitors always see the finished scene.
 * Direct style updates avoid React renders on every scroll frame.
 */
export function useScrollScene(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = Array.from(root.querySelectorAll<HTMLElement | SVGElement>(
      ".scene-reveal, .scene-fade, .scene-draw, [data-scroll-motion]",
    ));
    let frame = 0;

    const reset = () => {
      for (const node of nodes) {
        node.style.removeProperty("opacity");
        node.style.removeProperty("translate");
        node.style.removeProperty("scale");
        node.style.removeProperty("stroke-dasharray");
        node.style.removeProperty("stroke-dashoffset");
      }
    };

    const update = () => {
      frame = 0;
      if (getComputedStyle(root).display === "none") {
        reset();
        root.style.removeProperty("--chapter-progress");
        return;
      }

      const box = root.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (box.bottom < -viewport * 0.2 || box.top > viewport * 1.2) return;
      // A short 390px-wide artboard is only ~693px tall. This range lets its
      // sequence develop across the whole time it travels through the viewport.
      const progress = clamp((viewport * 0.82 - box.top) / (box.height + viewport * 0.64));
      root.style.setProperty("--chapter-progress", progress.toFixed(3));
      if (preference.matches) {
        reset();
        return;
      }
      const artboard = root.querySelector<HTMLElement>(".scene-artboard");
      const art = artboard?.getBoundingClientRect() ?? box;

      for (const node of nodes) {
        const bounds = node.getBoundingClientRect();
        const tall = bounds.height > art.height * 0.78;
        const y = clamp((bounds.top + Math.min(bounds.height, art.height * 0.2) * 0.5 - art.top) / art.height);
        const start = Number(node.getAttribute("data-scroll-start") ?? (tall ? 0.08 : 0.07 + y * 0.7));
        const end = Number(node.getAttribute("data-scroll-end") ?? (start + (node.classList.contains("scene-draw") ? 0.45 : 0.18)));
        const amount = clamp((progress - start) / Math.max(0.01, end - start));

        if (node.classList.contains("scene-draw")) {
          node.style.setProperty("stroke-dasharray", "1");
          node.style.setProperty("stroke-dashoffset", String(1 - amount));
        } else if (node.classList.contains("scene-reveal") || node.classList.contains("scene-fade")) {
          node.style.opacity = String(amount);
          if (node.classList.contains("scene-reveal")) {
            node.style.translate = `0 ${(1 - amount) * 18}px`;
          }
        }

        if (node.getAttribute("data-scroll-motion") === "drift") {
          node.style.translate = `0 ${(-8 * progress).toFixed(2)}px`;
        } else if (node.getAttribute("data-scroll-motion") === "depth") {
          node.style.scale = String(0.975 + amount * 0.025);
        }
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
      reset();
      root.style.removeProperty("--chapter-progress");
    };
  }, [ref]);
}

export function ScrollScene({ children, ...props }: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);
  useScrollScene(ref);
  return <section ref={ref} {...props}>{children}</section>;
}

export function ScrollSceneLayer({ children, ...props }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollScene(ref);
  return <div ref={ref} {...props}>{children}</div>;
}
