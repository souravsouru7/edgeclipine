# Codex prompt — Edgecipline Section 04: The Origin

Build this as the next mobile section of my existing Edgecipline website, after Section 03. Target: `reference/section-04-target.png`. The image is a visual QA reference only. **Never use the entire screenshot as the rendered section or a CSS background.** Inspect the current site and reuse the working shared header, real menu, typography, and section conventions; do not duplicate sticky navigation.

Production layers:

1. `background/dark-origin-room-clean-2160x3840.png` supplies the empty cinematic dark room, turquoise window light, amber light, and diagonal foreground rock. It has no people, screen or typography.
2. `founders/two-founders-desk-transparent-4k.png` is the independent central silhouette/monitor/desk group. Reference group spans approximately x≈44–825, y≈547–865 on the 864×1536 concept. Its source is generated concept art, not a photograph of the actual founders. Present it as illustrative, and never imply it depicts their real identity.
3. `accents/emerald-rock-trace.svg` is a separate lower-right teal light path; align it on the same 864×1536 artwork coordinate system and optionally reveal with a short scroll draw. `accents/quote-waveform.svg`, `quote-mark.svg`, and `number-line-marker.svg` are independent repeatable graphics for the quote list.
4. `ui/` contains standalone Edgecipline mark, menu icon, and section 04 progress rail. The brand name must be live text alongside the icon; menu behavior must reuse the real site component. Show `04 /10` only if the page actually has that complete chapter sequence.

All title, kicker and quotes must be live semantic HTML, never baked into a PNG. Exact copy:

Kicker top: `DISCIPLINE OVER EMOTION`
Heading: `WE NEEDED TO` / `SEE OURSELVES` / `CLEARLY.` with only `CLEARLY.` mint.
Subkicker: `THE ORIGIN / 02 FOUNDERS`
Quote 01: `We kept changing strategies.`
Quote 02: `The pattern was our behavior.`
Quote 03: `So we built a way to see it.`
Side chapter label in artwork: `THE ORIGIN`.

At 864×1536 reference, top logo x≈61,y≈32; menu x≈774,y≈49; kicker x≈62,y≈145; H1 x≈62,y≈210–413; subkicker x≈62,y≈446. Founders scene sits x≈45–820,y≈548–866. Three quote groups begin near x≈62,y≈936, x≈62,y≈1116, x≈62,y≈1295, each with gold index/line, waveform and a separate large grey quote mark. Lower foreground rock fills the bottom and right. Use these as proportional visual guides, not fixed CSS pixels.

Build mobile-first at 360/390/430 CSS pixels. Avoid crowding the heading or having the diagonal rock mask quotes. Adapt the composition for 768px tablet. Reuse a heavy geometric heading face consistent with sections 01–03; maintain readable quote text and contrast. Implement a modest entry reveal: room light, founders group, then quotes 01→03 with scroll; users must scroll normally and `prefers-reduced-motion` must show content immediately. Keep text selectable and accessible, use decorative alt handling, make the menu keyboard accessible, and do not add Download App.

Run checks, capture 360/390/430/768 screenshots, and compare to the reference for heading breaks, scene placement, quote spacing and accent path. Tune and report material mismatches. The separated scene is reconstructed from a flattened reference, so exact obscured pixels are unavailable.
