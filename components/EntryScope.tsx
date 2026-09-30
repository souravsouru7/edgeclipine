"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import { useScrollScene } from "./ScrollScene";

// A <section> that drives one-shot, CSS-timed entrance animations (see the
// `.entry-*` rules in globals.css). On mount it marks itself and every
// descendant carrying `data-entry` as "armed" (hidden start state), then
// "entered" once a substantial part is visible. The section's decorative
// paths and phone depth also follow scroll progress through useScrollScene.
//
// Content is only hidden once this script has armed it: without JS, or under
// prefers-reduced-motion, the attributes stay empty and everything renders in
// its final state immediately.
export default function EntryScope({ children, ...props }: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);
  useScrollScene(ref);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [root, ...root.querySelectorAll<HTMLElement>("[data-entry]")];
    for (const t of targets) t.dataset.entry = "armed";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.entry = "entered";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.35 },
    );
    for (const t of targets) io.observe(t);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} data-entry="" {...props}>
      {children}
    </section>
  );
}
