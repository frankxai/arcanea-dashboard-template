import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arcanea Dashboard Template — Cosmic Analytics, Liquid Glass";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 15% 25%, rgba(0, 188, 212, 0.22), transparent 50%), radial-gradient(ellipse at 85% 75%, rgba(167, 139, 250, 0.20), transparent 50%), #09090b",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(0, 188, 212, 0.12)",
              border: "1px solid rgba(0, 188, 212, 0.35)",
              fontSize: 32,
              color: "#00bcd4",
            }}
          >
            ✦
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            Arcanea · Dashboard Template
          </div>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            background: "linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Cosmic analytics.
          <br />
          Liquid glass widgets.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginBottom: 56,
            lineHeight: 1.4,
            maxWidth: 980,
          }}
        >
          Premium dark dashboard template — 6 widgets, 6 motion primitives,
          Recharts. Fork freely.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            color: "#00bcd4",
            fontFamily: "monospace",
          }}
        >
          <span>Next.js 16</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Recharts</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Framer Motion</span>
          <span style={{ color: "#334155" }}>·</span>
          <span style={{ color: "#ffd700" }}>MIT</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
