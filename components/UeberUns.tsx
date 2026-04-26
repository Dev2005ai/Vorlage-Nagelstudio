"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Award, Heart, Sparkles } from "lucide-react"

const usps = [
  {
    icon: Award,
    title: "Premium Produkte",
    desc: "Wir arbeiten ausschließlich mit hochwertigen Marken – für langanhaltende, gesunde und strahlend schöne Nägel.",
  },
  {
    icon: Heart,
    title: "Individuelle Beratung",
    desc: "Jeder Nagel ist eine Leinwand. Wir nehmen uns die Zeit, den perfekten Style für Sie zu entwickeln.",
  },
  {
    icon: Sparkles,
    title: "Hamburger Herz",
    desc: "Seit 2020 verwurzelt in Eppendorf – mit echtem Engagement für unsere Kundinnen und den Kiez.",
  },
]

export function UeberUns() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "#120e0f", padding: "9rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center" }}>

          {/* Text */}
          <AnimateOnScroll>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#E8A0B0", marginBottom: "1.25rem" }}
            >
              Über uns
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1.75rem",
              }}
            >
              Mehr als ein Nagelstudio –<br />
              <span className="italic" style={{ color: "#E8A0B0" }}>ein Ort zum Wohlfühlen.</span>
            </h2>

            {/* Divider */}
            <div style={{ width: "32px", height: "1px", background: "rgba(232,160,176,0.35)", marginBottom: "1.75rem" }} />

            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", marginBottom: "1.25rem" }}
            >
              NAILHAUS wurde 2020 von Mia Kovač mitten in Hamburg-Eppendorf gegründet –
              in einem der lebendigsten und schönsten Viertel der Stadt. Was als kleines Studio
              mit großem Herz begann, ist heute eine etablierte Adresse für alle, die ihre Nägel
              als persönlichen Ausdruck verstehen.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem" }}>
              Unser Anspruch: Jede Kundin verlässt uns mit einem Lächeln und Nägeln,
              die wirklich zu ihr passen. Von classic French bis zu aufwendigem Custom Nail Art –
              wir setzen Ihre Ideen mit Präzision und Kreativität um.
            </p>
          </AnimateOnScroll>

          {/* USP Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {usps.map((u, i) => (
              <AnimateOnScroll key={u.title} delay={i * 100}>
                <div
                  className="flex transition-all duration-300"
                  style={{
                    gap: "1.25rem",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(232,160,176,0.25)"
                    e.currentTarget.style.background = "rgba(232,160,176,0.05)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.75rem",
                      background: "rgba(232,160,176,0.12)",
                      border: "1px solid rgba(232,160,176,0.25)",
                    }}
                  >
                    <u.icon size={16} style={{ color: "#E8A0B0" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ marginBottom: "0.35rem" }}>{u.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{u.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
