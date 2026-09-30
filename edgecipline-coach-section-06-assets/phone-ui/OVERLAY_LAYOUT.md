# Blank phone overlay coordinate guide

The cutout phone is cropped from a 873×1530 source bounding box, then proportionally upscaled to 3840px tall. Create one overlay container with exactly the same rendered width and height as the phone image. Its coordinate system is 873×1530 (the route SVG already uses it). The phone has perspective baked into its pixels. The UI overlay needs a subtle matching CSS transform/clip and responsive tuning; do not render this guide as art.

Approximate locations inside that phone overlay:
- Yesterday label: x≈380, y≈310; amber node (340,353)
- Today label: x≈665, y≈648; teal node (698,690)
- Coaching text block: x≈285, y≈800, max width≈490
- Review control: x≈265,y≈1135,w≈188,h≈85
- Set a rule control: x≈478,y≈1135,w≈230,h≈85

All text and buttons must be HTML, not generated into the phone PNG. Review and Set a rule are illustrative app controls in a marketing page; either open a real supported flow or mark the mockup as decorative (no dead click targets). Compare with the reference at mobile widths to tune perspective.
