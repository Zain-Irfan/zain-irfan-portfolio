import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Laravel", "PHP", "React", "Next.js", "Shopify Apps", "MySQL"];

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background:
            "radial-gradient(circle at 30% 40%, #1e1b4b 0%, #0a0b10 60%)",
          color: "#e5e7eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#818cf8" }}>
            {"<ZI />"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 700,
              color: "#ffffff",
              marginTop: 24,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#8b93a7", marginTop: 4 }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#c7cbd6", marginTop: 28 }}>
            Laravel · Shopify Apps · React & Next.js
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  fontSize: 20,
                  padding: "8px 16px",
                  borderRadius: 10,
                  border: "1px solid #2e3240",
                  background: "rgba(129, 140, 248, 0.1)",
                  color: "#c7d2fe",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 340,
            height: 420,
            borderRadius: 32,
            overflow: "hidden",
            border: "4px solid #818cf8",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={340}
            height={453}
            style={{ objectFit: "cover", marginTop: -10 }}
          />
        </div>
      </div>
    ),
    size,
  );
}
