# Codex prompt — Edgecipline Section 02: The Loop

Implement the second mobile section shown by `reference/section-02-target.png` in my existing Edgecipline website, immediately after Section 01. This is the **THE LOOP IS THE PROBLEM.** scene. Inspect the project and reuse its real shared header/nav, typography, section transitions and waitlist routing. The reference screenshot is only for visual comparison; NEVER render it as an image or section background.

Use independent layers:
- `background/four-terraces-clean-2160x3840.png`: dark graphite terrain with four ledges. At the 864×1536 artwork reference ratio, keep it aligned as a full section backdrop. Use `background-size: cover` or a separately positioned `<img>`, no distortion.
- Four alpha PNGs in `stages/`: first emerald crystal/rush, second amber fractured slabs/rule break, third smoking ember cloud/regret, fourth broken glowing ring/repeat. Position these independently along the ledges near reference centers (x≈300,y≈565), (x≈345,y≈815), (x≈350,y≈1055), (x≈360,y≈1310). Respect full transparent asset bounds when sizing. Their exact source pixels were reconstructed from the flattening, so tune with browser screenshots.
- `path/emerald-loop-route.svg`: an independent full-canvas neon ribbon that winds around the four stages. It can be revealed on scroll via SVG stroke-dashoffset or another restrained animation. Use `path/gold-callout-leaders.svg` as a separate full-canvas leader-line layer. Ensure labels never sit underneath the ribbon or sculptures.
- `ui/` has reusable brand/menu art and section 02 progress rail. The website's shared header should render once. If the actual site has ten numbered chapters, show `02 /10`; otherwise use a truthful section marker without false progress.

All typography and content must remain selectable HTML, never baked into image assets. Exact copy and order:

Kicker: `DISCIPLINE OVER EMOTION`
Heading: `THE LOOP IS` then `THE PROBLEM.` — only `LOOP` in emerald; the terminal period is emerald.
Intro: `A good strategy cannot save` / `an unchecked decision.`
01 — `The rush` — `You see an opportunity` / `and feel the urge to act.`
02 — `The rule break` — `You ignore your plan` / `and take the trade` / `anyway.`
03 — `The regret` — `It doesn’t go as planned` / `and emotions take over.`
04 — `The repeat` — `You find yourself` / `back at the start.`

Reference geometry in 864×1536 coordinates: mark+wordmark near x=60,y=30; menu near x=774,y=48; kicker x=61,y=145; heading x=61,y=198 through y=344; intro x=62,y=369. Scene begins y≈445. Stage labels start near x=542,y=516; x=580,y=782; x=580,y=1064; x=580,y=1293. The right rail is near x=779,y=128. These are alignment guides, not fixed CSS pixels. Use a very heavy geometric heading font similar to section 01; tighten line-height and adapt without clipping at 360, 390, 430 and 768 CSS pixel widths.

Scroll behavior: as section 02 enters, reveal heading and first sculpture; while scrolling through this scene, draw the emerald route, reveal each sculpture and corresponding copy in order 01→04 with small rise/fade. Keep labels readable and available without animation; support `prefers-reduced-motion`. The user must be able to scroll normally and not get trapped in a long pinned scene. Do not add Download App. Keep menu functional, use semantic headings/list structure, and verify contrast and touch targets.

Run the site's checks and compare actual 360/390/430/768 mobile/tablet screenshots with the supplied reference. Fine tune positioning and scaling until the visual hierarchy matches. Report any unresolved mismatch. This is a layered reconstruction, so unseen pixels cannot be recovered exactly from the flat reference.
