import { AnimateOnScroll } from "./AnimateOnScroll"

const bewertungen = [
  {
    name: "Leonie H.",
    datum: "März 2025",
    text: "Absolute Lieblingsadresse! Mia hat genau verstanden, was ich wollte – das Ergebnis war atemberaubend. Meine Nägel sehen traumhaft aus und halten ewig. Nie wieder woanders!",
  },
  {
    name: "Tim R.",
    datum: "Februar 2025",
    text: "Meine Frau ist absoluter Fan von NAILHAUS. Jedes Mal wenn sie zurückkommt, sind ihre Nägel ein kleines Kunstwerk. Das Team ist super freundlich und professionell.",
  },
  {
    name: "Melissa A.",
    datum: "Januar 2025",
    text: "Nail Art auf absolutem Spitzenniveau. Lara hat mein Custom Design perfekt umgesetzt – besser als ich es mir vorgestellt hatte. Sehr kreativ und unglaublich präzise.",
  },
  {
    name: "Yuki S.",
    datum: "Dezember 2024",
    text: "Sehr entspannte Atmosphäre, super Beratung und das Ergebnis spricht für sich. Sophie hat meinen Gel-Nails genau den Look gegeben, den ich mir gewünscht hatte.",
  },
]

function Stars() {
  return (
    <div className="flex" style={{ gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#E8A0B0">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

export function Bewertungen() {
  return (
    <section style={{ background: "#0d0a0b", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#E8A0B0", marginBottom: "1rem" }}
            >
              Bewertungen
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Was unsere Kundinnen sagen
            </h2>
            <div className="flex items-center justify-center" style={{ gap: "0.6rem" }}>
              <Stars />
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>4.9</span>
                {" "}· 98 Bewertungen auf Google
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "1.5rem" }}
        >
          {bewertungen.map((b, i) => (
            <AnimateOnScroll key={b.name} delay={i * 80}>
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <Stars />
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.62)",
                    marginTop: "1.1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{b.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{b.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{b.datum}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
