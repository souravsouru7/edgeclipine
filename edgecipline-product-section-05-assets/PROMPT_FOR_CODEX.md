# Codex prompt — Edgecipline Section 05 with animation

Implement Section 05 of my existing Edgecipline mobile site after the origin section, using `reference/section-05-target.png` as the visual QA target. Inspect the current project and reuse its shared header, real menu, fonts, section structure and routes. The reference is a FLAT design screenshot, for comparison only: never render it as a hero image or page background.

Independent production layers:
- `background/electric-rock-clean-2160x3840.png`: dark rocky scenery with teal electrical fissures and amber bokeh. It contains no phone, steps or text.
- `phone/split-before-after-phone-transparent-4k.png`: isolated tilted phone with an illustrative screenshot-to-entry split. Position at roughly x=40–630,y=395–1335 in the 864×1536 art reference. The screen and central divider are baked into this concept phone; do not pretend it is an interactive before/after slider. The example AAPL values are artwork, not live data or proof that extraction is always accurate.
- `steps/upload-icon.svg`, `review-icon.svg`, `learn-icon.svg` each independent, with transparent 4x PNG alternatives. Use SVG within three real DOM step rows. `steps/gold-timeline.svg` is a separate connecting line and dots behind rows. Step text is live HTML.
- `effects/divider-glow-overlay.svg` is an optional independent glow accent to overlay the phone's existing central split. Align carefully with the phone; it can draw on entrance, but do not use it to obscure the underlying content.
- `ui/` has logo mark, menu and 05 progress rail. Reuse the shared header once. Show 05 /10 only if the actual site has ten chapters.

Exact live copy: kicker `DISCIPLINE OVER EMOTION`. H1 `ONE SCREENSHOT.` / `A CLEARER PICTURE.` with only `CLEARER` mint (keep the rest white, including `PICTURE.`). Right stage rows: `01 Upload` — `Add your trade screenshot.`; `02 Review` — `We capture the key details.`; `03 Learn` — `Keep it organized to see your patterns over time.` Small right label `THE PRODUCT`.

Reference placement on 864×1536: header x≈61,y≈31; kicker x≈62,y≈145; H1 x≈61,y≈216–346; side rail x≈780,y≈132. Phone enters x≈40,y≈395 and reaches bottom near 1329. Timeline starts around x≈636,y≈565 through 984. Step icons at centers (636,598), (636,780), (636,959); corresponding copy starts x≈695. At 360/390/430 CSS px, scale these proportions but maintain 44px touch targets and legible copy. At tablet width 768, give phone and steps their own columns rather than shrinking all text.

ANIMATION REQUIREMENTS (implement in code, not as a video):
1. On section entry, fade in background light over 500ms and reveal H1 with ~16px upward motion, 450ms; then bring phone up ~28px and from 0.92 to 1 scale over 650ms. Use an ease-out curve; do not loop this.
2. Draw or brighten the center divider using the independent SVG over ~650ms AFTER phone arrival. It is a visual scan cue only; the screen is a static concept composite. If the overlay alignment is unreliable, use a narrow CSS glow on the phone at the divider without covering text.
3. Reveal timeline steps in order as the user scrolls or as the section enters: Upload at 0ms, Review at +220ms, Learn at +440ms. Each icon gets a brief amber-to-mint halo and corresponding row moves up <=12px; light the connecting line progressively. Highlight only one row at a time. Avoid excessive pinning or scroll-jacking.
4. Let rock cracks pulse ONCE gently (brightness/opacity 0.85→1), then remain still. No constant flashing, autoplay audio or spinning phone.
5. Under `prefers-reduced-motion: reduce`, show all content immediately, remove transform/line-draw effects, and keep the steps readable.

Implement the heading and step copy as selectable semantic HTML, icons as decorative SVG, and the timeline as `aria-hidden`. Preserve keyboard navigation and working menu. No Download App button. If upload is not a live website action, these are explanatory steps rather than fake interactive controls; do not make dead buttons.

Run build/lint checks. Capture screenshots at 360, 390, 430 and 768 CSS px both on initial entry and after animation settles. Compare to the supplied reference; tune title line breaks, phone position, background crop, right timeline and overlap. Report any material mismatch. These art layers are reconstructed from one flattened concept; exact occluded pixels cannot be recovered.
