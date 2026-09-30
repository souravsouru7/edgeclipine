# Paste this into Codex in my existing Edgecipline website project

Build the mobile-first Section 08, **Small Changes. Stronger Habits.**, based on `reference/section-08-target.png`. Inspect my existing framework, tokens, navigation, and the previous section. Implement in that architecture. The screenshot is a visual target only: never use it as a background or a flattened page. Use the separate production assets in this ZIP. Keep heading, supporting copy, four labels, brand text, progress, phone screen content, and all controls as actual HTML/CSS/UI, accessible and responsive.

## Copy and composition

- Brand header: mint angular symbol, “Edgecipline”, working menu button. Use the current site's actual navigation behavior.
- Eyebrow: `DISCIPLINE OVER EMOTION` with wide tracked lettering and a short mint rule.
- Huge tightly spaced all-caps headline broken as `SMALL / CHANGES. / STRONGER / HABITS.`; first two lines warm white, last two bright mint/cyan. On 390 px mobile, inset ~27 px, headline roughly 53–62 px depending on the actual heavy display face, line-height .88–.96, tracking about -.04em. Scale with clamp and preserve readable lines on 360/430 px. Use the project's installed bold font, not image text.
- Subheading, narrow spaced uppercase: `A CLEARER PROCESS FOR A CALMER, / MORE CONSISTENT YOU.`
- Scene below: use `background/amber-rock-valley-clean-2160x3840.png` as background with a deep black top fade. Place the separate transparent phone shell in front, slightly rotated counterclockwise. Overlay an independently positioned weekly-reflection HTML interface in the screen area. `phone-ui/weekly-reflection-screen-editable.svg` is a layout guide. Recreate `Weekly Reflection`, M T W T F S S with three completed mint dots and Friday amber, `Where did you break your plan?`, an editable prompt field, and the outlined `Review my week` button. Respect device perspective with a transform on the screen layer; tune it visually against the actual phone shell. Keep the phone treatment illustrative while the form/control remains genuinely operable if the product flow exists; otherwise link the button to an existing relevant feature or use a clearly disabled state, never fake a click outcome.
- Surround the device with a large ellipse using `loop/habit-cycle-four-segments.svg`, behind the phone, with separate `nodes/notice-node.svg`, `pause-node.svg`, `review-node.svg`, `repeat-node.svg` on top. Clockwise centers in the 864×1536 target grid: Notice (431,649), Pause (758,897), Review (430,1157), Repeat (112,901). In the reference the ring glows amber at Notice/Repeat and turquoise at Pause/Review. Place live uppercase labels near each badge. Keep it visually balanced as the phone and stage scale fluidly.
- Shared chapter rail `08` and `/10` on right if the site really implements ten chapters; otherwise use honest progress. `THE ORIGIN` only if that matches the site's chapter taxonomy.
- Do not add Download App. Do not import the flattened reference in the implementation.

## Motion sequence

Use IntersectionObserver or the project's existing motion library. Fire once as this section reaches about 30% of viewport; honor `prefers-reduced-motion: reduce`. Avoid scroll-jacking and continuous spinning.

1. Eyebrow and headline reveal upward, four staggered lines (0–480 ms, opacity and translateY 18→0).
2. Scene fades in over 700 ms; phone rises 24 px and rotates from about -9° to its settled tilt (roughly -5°), 800 ms ease-out. Keep a static phone in reduced motion.
3. Draw four ring segments sequentially with `stroke-dasharray`/`stroke-dashoffset`: Notice→Pause, Pause→Review, Review→Repeat, Repeat→Notice. ~450 ms each; pause 100 ms between. IDs are in the SVG, but for controllable animation inline its markup or recreate those paths in component SVG. Maintain their colors.
4. Each corresponding node scales .85→1 and fades in just after its segment finishes; label appears 100 ms later. Notice, Pause, Review, Repeat in that order. Optional small warm/cool glow pulse at activation, maximum one pulse per node.
5. Week dots illuminate left to right once; amber Friday appears last. The question and field fade up after the loop's second node, and the `Review my week` control gets one subtle mint border pulse. Stop all motion after the sequence. On mobile, use transform/opacity for performance; no large blur animation.
6. Reduced motion: immediate complete state with no path drawing, pulses, device transform animation, or stagger.

## Responsive and quality gate

Mobile is primary: compare at 360×800, 390×844, and 430×932. Use a fixed-ratio stage beneath the title but let the page grow vertically; crop the rocky scenery, never the phone or four nodes. Ensure labels and phone do not collide and no horizontal overflow. At 768 px, widen the stage and maintain the composition. The scene image should be lazily decoded if below the fold. Use PNG for photographic layers, SVG for crisp scalable linework/icons, and CSS/live elements for text and buttons. Preserve accessible contrast and keyboard focus. Inspect screenshots at the three mobile widths against `reference/section-08-target.png`, and adjust spacing, crop, phone angle, node positions, and typography until close. Report implemented files and any fidelity limits from the independently generated image layers.
