# Codex prompt — Edgecipline Section 03: The chart is not the whole story

In my existing Edgecipline website, implement this as mobile **Section 03**, after the “THE LOOP IS THE PROBLEM.” section. The visual target is `reference/section-03-target.png`. Use that file for screenshot comparison only; never render the full reference screenshot as a website image or background. Reuse the existing header, navigation, type system and section shell; avoid duplicating a sticky header.

Build from these independent layers:

1. `background/graphite-rubble-clean-2160x3840.png` fills the section at the reference 864:1536 composition. It has only atmosphere/rocks and no mirror/UI.
2. `mirror/cracked-trading-mirror-transparent-4k.png` is a separate image layered above rock at approximate reference bounds x=28–516, y=454–976. The mirror contains abstract candlesticks, but no FOMO/Revenge/Moved stop labels.
3. Render three real DOM behavior tags over the mirror: `FOMO`, `Revenge`, `Moved stop`. The `tags/` SVGs and high-density PNGs show their visual styles; use CSS and separate vector icons while keeping labels live, readable and selectable. Reference centers around (330,592), (280,717), (320,823). Avoid relying on the PNG text for screen readers or layout.
4. `trail/chart-to-insight-glow.svg` is an independent full-canvas glowing orange-to-mint path with nodes from the mirror to panel. Position with the same reference coordinate system, behind the panel. Animate a restrained line draw on entry/scroll; honor reduced motion.
5. `insight/blank-pattern-panel-transparent-4k.png` is a separate blank glass panel at approximate x=516–820, y=1010–1240. Overlay real HTML title `Pattern noticed` and optional decorative short bars/nodes with CSS/SVG. The UI should communicate that the product notices behavioral patterns, not make a fake financial performance claim.
6. `ui/` includes the standalone brand mark, menu icon and section 03 rail. Reuse the site's existing working nav; only show `03 /10` if the actual 10-section sequence exists. Do not add a Download App CTA.

Copy is live semantic HTML. Kicker: `DISCIPLINE OVER EMOTION`. H1 line 1 `THE CHART ISN’T`; line 2 `THE WHOLE STORY.` with `STORY.` in mint. Supporting copy: `The decisions around a trade` / `matter too.` The original artwork has the small side label `THE LOOP`; retain this only if it is part of a consistent real chapter navigation, otherwise avoid a misleading label.

Reference at 864×1536: header mark x≈60,y≈30; menu x≈774,y≈48; kicker x≈62,y≈145; H1 x≈61,y≈198 and width≈686 through y≈343; body x≈63,y≈370. Rock/mirror visual begins y≈450; panel begins y≈1010. Treat these as proportional artwork coordinates, not fixed mobile CSS pixels. Preserve legible text/controls at 360/390/430px widths, and make a considered tablet layout at 768px. Carefully control z-index, contrast and overflow. Use accessible heading structure, decorative image alt handling, working menu and no motion trap.

Inspect the existing project, implement, run checks, then compare browser screenshots at 360/390/430/768 widths to `reference/section-03-target.png`. Tune font weight, line breaks, mirror scale, tag placement, trail, and panel. Report any material deviation. Assets were reconstructed from a flattened concept; hidden pixels and original font details cannot be recovered mathematically.
