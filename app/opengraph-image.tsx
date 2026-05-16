import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Edgeclipine — AI Trading Journal & Behavior Analysis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05080f",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(0,255,178,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,178,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content wrapper */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00ffb2",
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 14,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ffb2",
              }}
            >
              AI TRADING JOURNAL
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: 24,
              gap: 4,
            }}
          >
            <span>You don&apos;t need another strategy.</span>
            <span style={{ color: "#00ffb2" }}>You need a mirror.</span>
          </div>

          {/* Subtext */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#8b95aa",
              lineHeight: 1.6,
              maxWidth: 740,
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            Track behavior, not just P&amp;L. AI reveals the patterns sabotaging your consistency.
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(0,255,178,0.08)",
              border: "1px solid rgba(0,255,178,0.25)",
              borderRadius: 100,
              padding: "10px 22px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00ffb2",
                display: "flex",
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 600, color: "#e8edf5" }}>
              847+ traders on the waitlist · edgeclipine.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
