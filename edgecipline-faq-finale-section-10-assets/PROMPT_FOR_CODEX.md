# Codex prompt — Edgecipline final FAQ + waitlist (Section 10)

Build the final, mobile-first FAQ and waitlist section in my existing Edgecipline website. Use `reference/section-10-target.png` only to compare visual placement; never mount the flattened screenshot. Inspect the project first: use its actual brand font, route/navigation, FAQ content, current launch status, privacy/terms/contact URLs, demo media, and working waitlist API or form. Do not invent a launch date, FAQ answers, success count, legal URL, or fake submission.

## Visual layout at 864×1536 reference proportions

- Near-black background, clean image `background/finale-turquoise-trail-clean-2160x3840.png` beneath UI. The glowing teal river/amber wet rocks should fill the lower third; keep the upper part dark for text. The file is a separate atmosphere layer.
- Header at top: angular turquoise symbol with live `Edgecipline` wordmark, functional menu. At right a `10` progress rail and `/10` only when truthful to site structure; `THE ORIGIN` label only if the previous chapters actually use it.
- Eyebrow at around y150: short turquoise rule plus `FREQUENT QUESTIONS`, uppercase letter spacing.
- Three outlined dark FAQ rows from approximately y193 to 435, with 16px gaps. Questions exactly as the target: `What is Edgecipline?`, `How does screenshot import work?`, `When will the app launch?`. Use HTML `<details>/<summary>` or accessible buttons with `aria-expanded`, visible focus and live answer panels. Use `icons/faq-plus.svg` and `icons/faq-minus.svg`; the row SVG is a visual guide only. Source answers from the actual product, especially screenshot-import platform coverage and launch timing.
- A slim centered vertical turquoise beam runs down from FAQs into headline; use `effects/vertical-light-beam.svg`, clipped away from readable text. Main headline at x~100, y~575: `SEE THE / PATTERN. / CHANGE THE / NEXT TRADE.` Huge extra-bold tight white first two lines, vivid mint last two. On 390 CSS px aim around 42–49px depending on the real font metrics; preserve line breaks and leave comfortable side padding.
- Single waitlist form at y~895: rounded dark outlined email field joined to a bright turquoise pill `Join Waitlist`. Implement as real labeled `<form>` input type=email with autocomplete=email, required validation, pending state, duplicate-error handling and inline success/error messaging. Connect to the existing backend; do not show success unless the server confirms. On narrow 320–360px widths stack field and submit button if needed. The decorative form glow is `effects/form-border-glow.svg`; `ui/join-waitlist-button-visual.svg` is a reference skin only; use HTML for interaction.
- `Watch Demo` below, with independent warm amber play icon `icons/demo-play.svg` and white text/chevron. Open actual video or route if one exists. If no demo exists, remove/disable this CTA instead of using a dead link.
- Footer over the dark part of the rocky terrain: mark + `Edgecipline` on left; Privacy, Terms, Contact to the right as real working links. At 360px wrap into two lines if needed. The glow at the lower horizon can use `effects/horizon-flare.svg` sparingly.

## One-time motion and effects

Trigger when roughly 25% of this section is visible with IntersectionObserver; avoid scroll trapping. Render completed state immediately for `prefers-reduced-motion: reduce`.

1. Eyebrow and three FAQ rows fade upward 12–16px at 90ms intervals (~0–550ms).
2. Thin vertical beam draws downward over 500ms; use transform scaleY from top or an SVG path with stroke-dashoffset. Light pulse once where it meets the headline. Keep the beam behind text.
3. Headline lines rise 18px and reveal in order with 100ms stagger (~450–1050ms); no character-by-character flicker.
4. Waitlist form fades in and its border glows once (~1050–1400ms). On focus, strengthen the outline; on submit show pending, then an honest success or inline error from the real API. No repeated idle pulse.
5. As the bottom enters view, the river horizon has a restrained one-time sparkle, and the amber play icon warms briefly. Do not run a costly animated background indefinitely.
6. Each FAQ opens with a short height/opacity transition; rotate/swap plus into minus, closing other rows only if that matches the site's desired accordion behavior. Keyboard Enter/Space must work.

## Responsive QA

Verify screenshots at 360×800, 390×844, 430×932 and 768×1024. No clipped title, horizontal overflow, form overlap, inaccessible answer, or footer link beneath scenery. Keep readable 44px touch targets, field validation, focus indicators, sufficient contrast and reduced-motion behavior. Use SVG icons/effects at any scale, the PNG only for photographic backdrop, CSS/live text and real form controls for everything else. Compare final mobile screenshots to reference and report changed files, verified FAQ answer sources, actual waitlist endpoint, and any fidelity compromises. The source PNG was generated smaller and exported at 2160×3840, so do not claim native 4K image detail.
