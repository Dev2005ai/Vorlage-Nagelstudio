import { AnimateOnScroll } from "./AnimateOnScroll"

const preise = [
  {
    kategorie: "Maniküre",
    items: [
      { name: "Klassische Maniküre",    preis: "ab 35 €" },
      { name: "Gel-Maniküre",           preis: "ab 55 €" },
      { name: "Shellac",                preis: "ab 45 €" },
      { name: "Babyboomer",             preis: "ab 60 €" },
      { name: "Russian Manicure",       preis: "ab 65 €" },
      { name: "Paraffin-Bad (Add-on)",  preis: "12 €" },
    ],
  },
  {
    kategorie: "Nail Art",
    items: [
      { name: "Basic Art (pro Nagel)",  preis: "ab 8 €" },
      { name: "Premium Design",         preis: "ab 15 €" },
      { name: "Custom Full Set",        preis: "auf Anfrage" },
      { name: "Chrome / Mirror",        preis: "ab 20 €" },
      { name: "Ombré Farbverlauf",      preis: "ab 18 €" },
    ],
  },
  {
    kategorie: "Extensions & Pediküre",
    items: [
      { name: "Gel-Verlängerung",       preis: "ab 75 €" },
      { name: "Acryl-Verlängerung",     preis: "ab 80 €" },
      { name: "BIAB Builder Gel",       preis: "ab 65 €" },
      { name: "Nagelreparatur",         preis: "ab 8 €" },
      { name: "Klassische Pediküre",    preis: "ab 45 €" },
      { name: "Gel-Pediküre",           preis: "ab 65 €" },
      { name: "Spa-Pediküre",           preis: "ab 75 €" },
    ],
  },
]

export function Preise() {
  return (
    <section id="preise" style={{ background: "#120e0f", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#E8A0B0", marginBottom: "1rem" }}
            >
              Preisliste
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Transparente Preise
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.38)" }}>
              Alle Preise inkl. MwSt. · Endpreis je nach Nagellänge und Aufwand
            </p>
          </div>
        </AnimateOnScroll>

        {/* Price tables */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1.5rem", alignItems: "start" }}
        >
          {preise.map((cat, i) => (
            <AnimateOnScroll key={cat.kategorie} delay={i * 100}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Category header */}
                <div
                  style={{
                    padding: "1.1rem 1.5rem",
                    borderBottom: "1px solid rgba(232,160,176,0.18)",
                    background: "rgba(232,160,176,0.05)",
                  }}
                >
                  <h3
                    className="font-light"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      color: "#E8A0B0",
                    }}
                  >
                    {cat.kategorie}
                  </h3>
                </div>

                {/* Items */}
                <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                  {cat.items.map((item, j) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                      style={{
                        padding: "0.75rem 0",
                        borderBottom: j < cat.items.length - 1
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.65)" }}>{item.name}</span>
                      <span className="font-medium" style={{ color: "#E8A0B0" }}>{item.preis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Hinweis */}
        <AnimateOnScroll delay={200}>
          <p className="text-center" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.28)", marginTop: "2.5rem" }}>
            Alle Preise sind Richtwerte. Ihr genaues Angebot erhalten Sie beim Beratungsgespräch im Salon.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
