"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Sparkles, Gem, Star, Hand } from "lucide-react"

const team = [
  {
    name: "Mia Kovač",
    role: "Inhaberin & Nail Art Expertin",
    spec: "Nail Art, Custom Designs, Beratung",
    years: "8 Jahre Erfahrung",
    icon: Star,
    gradient: "linear-gradient(160deg, #1a0a10 0%, #3d1028 55%, #120608 100%)",
  },
  {
    name: "Sophie Brauer",
    role: "Senior Nail Technician",
    spec: "Gel-Maniküre, Shellac, BIAB",
    years: "6 Jahre Erfahrung",
    icon: Sparkles,
    gradient: "linear-gradient(160deg, #180c14 0%, #2e1230 55%, #100810 100%)",
  },
  {
    name: "Lara Kim",
    role: "Nail Art Artist",
    spec: "Chrome Nails, Ombré, Premium Art",
    years: "5 Jahre Erfahrung",
    icon: Gem,
    gradient: "linear-gradient(160deg, #1c0a0e 0%, #3a0e18 55%, #130608 100%)",
  },
  {
    name: "Pia Neumann",
    role: "Junior Nail Technician",
    spec: "Maniküre, Pediküre, Nageldesign",
    years: "2 Jahre Erfahrung",
    icon: Hand,
    gradient: "linear-gradient(160deg, #160c18 0%, #280e30 55%, #0e0810 100%)",
  },
]

export function Team() {
  return (
    <section id="team" style={{ background: "#0d0a0b", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#E8A0B0", marginBottom: "1rem" }}
            >
              Unser Team
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Vier Hände. Eine Leidenschaft.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Team grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 80}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.3)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)" }}
              >
                {/* Photo placeholder */}
                <div className="relative w-full" style={{ height: "260px", background: member.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(232,160,176,0.15)",
                        border: "1px solid rgba(232,160,176,0.3)",
                      }}
                    >
                      <member.icon size={22} style={{ color: "#E8A0B0" }} strokeWidth={1.2} />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,10,11,0.7) 0%, transparent 55%)" }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)" }}>
                  <p className="font-semibold" style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{member.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#E8A0B0", marginBottom: "0.65rem" }}>{member.role}</p>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.85rem" }}
                  >
                    {member.spec}
                  </p>
                  <p
                    className="font-medium tracking-[0.08em] uppercase"
                    style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.22)" }}
                  >
                    {member.years}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
