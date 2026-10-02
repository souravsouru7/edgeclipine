# Build the Edgecipline desktop mirror hero

You are editing my existing Edgecipline website. Implement the hero in `reference/approved-desktop-hero.png` using the **separate layers in this folder**. First inspect the app structure, existing navbar/logo, typography, colors, routing, waitlist flow, and demo behavior. Preserve and reuse the existing logo and navbar. This task is the hero only.

## The visual target

At a 1672 × 941 desktop viewport, recreate the reference's composition: near black cinematic architectural hall; large left aligned editorial copy with generous breathing room; huge smoked glass behavior mirror and reflected ghost traders occupying the right; an independent standing trader near its front; restrained emerald line work and floor reflection. Keep the left 45–48% reliably readable. The source image is a **visual QA reference only**. Never set it as the hero background, render it as an `<img>`, or crop it into the page.

The image layers were recreated from the visual reference, so their internal perspective is similar but not a pixel extraction. Tune position and scale by eye against the reference at 1440 × 810 and 1920 × 1080; preserve the composition at tablet widths.

## Use these assets as independent layers

1. `background/empty-hall-3840x2160.png`: full bleed base image. Use `cover`, focal position around 55% center. Add a CSS dark gradient over the left and a subtle bottom vignette. Keep this decorative layer behind all content.
2. `effects/floor-glow.svg`: low opacity wide light spill in the bottom right, behind the mirror and trader.
3. `mirror/behavior-mirror-transparent-2160h.png`: transparent mirror with ghost reflections, fingerprint, and charts. Anchor it on the right, approximately `right: -5%`, `top: -6%`, `height: 102%` at wide desktop. Use `width: auto`. Preserve its transparency. Tune so the frame does not cover the headline.
4. `effects/fingerprint-orbits.svg`: optional restrained traced highlight aligned to the mirror's central fingerprint. It must sit above the mirror at low opacity and should not appear as a second full fingerprint. Prefer a small crop or mask over the mirror's existing swirl.
5. `effects/decision-trace.svg`: optional emerald signal line across the right half, masked so it does not compete with the left text.
6. `foreground/standing-trader-transparent-2160h.png`: independent person in front of the mirror. Place near the lower right, approximately `right: 12%`, `bottom: 9%`, with `height: 52–60%` of the hero. Adjust to reproduce the reference's standing silhouette; use a subtle grounded shadow.
7. `ui/play.svg` and `ui/arrow-up-right.svg`: symbols inside real controls; SVG files can be inlined or loaded as icons. Set `currentColor` properly.

Create the eyebrow, headline, paragraph, CTAs, small FOMO/REVENGE/PLAN callouts, and `01 / THE MIRROR` as **HTML/CSS text**, so they remain crisp, selectable, accessible, and responsive. The interface and buttons must not be flattened into a bitmap. Use semantic `<section>`, `<h1>`, `<p>`, and actual `<a>`/`<button>` elements.

## Content and styling

- Eyebrow: `DISCIPLINE OVER EMOTION`
- Heading, four visual lines if needed: `THE MARKET MOVES.` / `YOUR PATTERNS` / `REPEAT.` Keep `REPEAT.` green. In the reference, the text is aggressively bold, uppercase, tightly tracked, and occupies most of the left half. Use the project's closest heavy sans font; use a real font file already in the project if available. Do not substitute a baked text image.
- Supporting copy: `See the habits behind every trade. Build the discipline to change the next one.`
- Primary CTA: `Join Waitlist` → reuse the existing waitlist flow. Secondary: `Watch Demo` → reuse the existing demo action; if none exists, provide a functional dialog shell and poster/placeholder rather than a dead button. Do not say the app is available to download.
- Callouts: `FOMO`, `REVENGE`, `PLAN` as quiet small labels with thin connectors near the right artwork. `01 / THE MIRROR` sits near the bottom edge.
- Palette: near black `#040A0A`, cool white `#F2F5F3`, muted copy `#8C9998`, green `#0DE4A7` to `#52F7B4`, hairline white at low opacity. Treat these as starting points and align to existing site tokens.
- The primary control should feel polished: green field, dark readable label, subtle inner highlight, 48px minimum hit area. Secondary is a glass/outline button with play icon. Keep focus states visible and maintain contrast.

## Responsive behavior

- Desktop (`>= 1100px`): approximately 46% content / 54% artwork. The full hero is at least the viewport height but can grow for very short viewports. Keep content above the art in stacking order.
- Tablet (`768–1099px`): reduce headline size with `clamp`, shift mirror and trader farther right, allow a moderate art overlap behind the copy only where the gradient keeps contrast. CTAs stay reachable.
- Phone (`< 768px`): do not shrink the desktop screenshot into a phone. Stack: existing navbar, eyebrow, headline, supporting copy, CTAs, then a cropped mirror/trader artwork stage with a strong bottom fade. Fit 360, 390, and 430px widths without horizontal scrolling. A single column with separate layers is required. The heading can use natural line breaks; do not clip any word. Keep artwork meaningful but subordinate to the CTA. Hide decorative callouts if they become noisy.

## Motion and effects

Use a short one-time entrance sequence after the page is interactive; do not delay rendering or insert a blocking preloader.

| Time | Element | Motion |
| --- | --- | --- |
| 0–550 ms | Eyebrow and headline | Per-line reveal upward by 12–20px with opacity; stagger about 90ms. No text scrambling. |
| 200–1050 ms | Mirror | Fade from 0 to 1 and translate 24px right to resting position, ease out. Reflections remain one image. |
| 450–1250 ms | Trader | Fade and rise 20px independently, finishing after the mirror. |
| 650–1600 ms | Fingerprint and trace SVG | Animate stroke dash offset once, then leave a low opacity resting state. Mask away excessive duplicated lines. |
| 900–1500 ms | Callouts and CTAs | Soft staggered opacity/translate entrance. |

After entry, allow only a very slow, subtle glow breathe (`opacity` roughly 0.18–0.3 over 5–7s) and an occasional trace pulse. Desktop pointer movement may add at most 1–2 degrees of mirror tilt and 6–10px of relative trader movement, smoothed with transforms and disabled on touch/coarse pointers. Pause offscreen effects. Do not use heavy continuously animated blur/filter, scroll hijacking, or a long page loader. Use `prefers-reduced-motion: reduce` to immediately show the final state with no parallax or loops. The underlying hero should remain readable if JavaScript fails.

## Implementation and acceptance

Implement in the project's existing stack. Keep asset references relative to the project public/static conventions. Use absolute layers inside an overflow-hidden artwork container, CSS custom properties for coordinates, and `object-fit: contain` for transparent subjects. Give decorative artwork empty alt text or `aria-hidden`, but label interactive controls. Do not alter the existing navbar/logo implementation, global site copy, or other sections.

Run the project's existing build/check. Capture or inspect the hero at 1440 × 810, 1920 × 1080, 768 × 1024, and 390 × 844. Compare the desktop screenshot with `reference/approved-desktop-hero.png`, fix text wrapping, layer alignment, masking, and z-index, then report what was implemented and any unavoidable visual differences. Avoid claiming pixel exactness: the provided separate art was recreated, not mathematically extracted from the reference.
