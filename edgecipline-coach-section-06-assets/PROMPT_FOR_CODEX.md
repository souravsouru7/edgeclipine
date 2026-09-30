# Codex prompt — Edgecipline Section 06 with separate phone UI and motion

Implement the attached **“A COACH FOR THE MOMENT AFTER.”** mobile section as Section 06 after the product screenshot section. The reference is `reference/section-06-target.png`, strictly a comparison image. Never render it as the website section/background. Inspect the existing repo and reuse the shared header, actual menu behavior, fonts, section framework, and routes.

Build these independent layers:

1. `background/amber-teal-rock-clean-2160x3840.png`: empty atmospheric rocks and amber reflections, no UI/phone/text.
2. `phone/blank-coach-phone-transparent-4k.png`: angled complete physical phone with quiet mountain/contour screen, but no copy, route, or buttons. Position approximately x=204–754,y=489–1264 in the 864×1536 reference. It has alpha outside its silhouette.
3. One overlay container exactly aligned and scaled with the phone. See `phone-ui/OVERLAY_LAYOUT.md` for its 873×1530 coordinate system. Put `phone-ui/yesterday-to-today-route.svg` in that overlay, clipped to the phone screen. Render `YESTERDAY` and `TODAY` as real text at the respective nodes. Render message as live HTML: `You traded outside your plan yesterday.` and a muted `What changed?`
4. Build two separate visible controls inside the phone overlay: amber `Review` with `controls/review-icon.svg`, mint `Set a rule` with `controls/set-rule-icon.svg`. The transparent PNG previews show the pill treatments, but labels must be live HTML. Because this is a marketing illustration, buttons should only be interactive if the actual product flow is available on the site; otherwise expose the mockup as decorative, with no misleading dead buttons.
5. Use `ui/` standalone brand mark, menu icon, and section 06 rail. Reuse one actual shared site header. Show `06 /10` only if ten chapters exist.

Outside-phone live copy: kicker `DISCIPLINE OVER EMOTION`. H1 in three lines: `A COACH` / `FOR THE` / `MOMENT AFTER.` Last line mint. Subkicker: `THE ORIGIN / 06 COACHINS` appears in the generated reference, but that final word is an image-text artifact. Replace it with meaningful truthful copy, e.g. `THE COACH / THE MOMENT AFTER`, unless the site's approved brand copy specifies otherwise. The tiny side label reads `THE ORIGIN` in reference; only use if real chapter navigation calls this section that. Do not repeat garbled generated text.

Reference 864×1536 placement: header x≈62,y≈31; menu x≈773,y≈48; kicker x≈61,y≈145; H1 x≈60,y≈210–418; subkicker x≈61,y≈447. Phone occupies lower center; amber rocks brighten from x≈0,y≈730; teal rocks on right. Preserve negative space and readable heading at 360/390/430px, then adapt at 768px tablet rather than stretching the reference bitmap.

MOTION IMPLEMENTATION:
1. On entering section, background light rises 0.75→1 opacity over ~600ms and heading staggers in by line, translateY(14px)→0, 420ms with 90ms offsets.
2. Phone emerges upward 26px and scale 0.96→1 over ~700ms after heading; no continuous bobbing.
3. On scroll progress across this section, animate the SVG path from amber `YESTERDAY` node to teal `TODAY` node using stroke-dasharray/offset. Total path draw ~850ms; glow follows. Then reveal the coaching message and two buttons with short 100–150ms stagger. This visually explains reflection after a trade, rather than implying live data analysis.
4. Give the amber node one soft pulse when the line starts and teal node one when it completes. Keep each pulse short and nonrepeating. The lower amber rock can briefly brighten; no flashing, autoplay audio, scroll lock, or giant parallax.
5. With `prefers-reduced-motion: reduce`, show the full state immediately and remove transforms, pulses and line draw. Content and screen controls remain legible.

Implement text semantically and keep it selectable. Use one H2 for this in-page section if the page already has an H1. Decorative artwork should have appropriate alt/aria behavior; any real controls need 44px touch targets and keyboard focus. No Download App. Run build/lint and capture mobile 360/390/430px and tablet 768px screenshots before/after settling. Compare against `reference/section-06-target.png` for composition, type, device overlay alignment and overflow. Report meaningful mismatches. This is a layered reconstruction of a flattened design, not a promise of pixel-identical obscured pixels.
