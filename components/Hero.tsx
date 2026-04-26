"use client"

export function Hero() {
  function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0d0a0b", padding: "7rem 1.5rem 5rem" }}
    >
      {/* Rose glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(232,160,176,0.07) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">

        {/* Eyebrow */}
        <p
          className="hero-animate hero-delay-1 text-xs font-semibold tracking-[0.22em] uppercase"
          style={{ color: "#E8A0B0", marginBottom: "2rem" }}
        >
          Hamburg · Eppendorf · Seit 2020
        </p>

        {/* Headline */}
        <h1
          className="hero-animate hero-delay-2 font-light"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
          }}
        >
          Nägel die{" "}
          <span className="accent-shimmer italic">Geschichten</span>
          {" "}erzählen.
        </h1>

        {/* Divider */}
        <div
          className="hero-animate hero-delay-2"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(232,160,176,0.4)",
            marginBottom: "2rem",
          }}
        />

        {/* Subtext */}
        <p
          className="hero-animate hero-delay-3"
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            maxWidth: "500px",
            marginBottom: "2.5rem",
          }}
        >
          Premium Nail Studio in Hamburg-Eppendorf. Gel-Maniküre, Nail Art und Extensions –
          handgefertigt mit Liebe zum Detail und Leidenschaft für perfekte Ergebnisse.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ marginBottom: "3.5rem" }}
        >
          <button
            onClick={() => scrollTo("#kontakt")}
            className="rounded-full font-medium transition-all duration-200"
            style={{
              background: "#E8A0B0",
              color: "#0d0a0b",
              padding: "1rem 2.5rem",
              fontSize: "1rem",
              minWidth: "200px",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#F4C0CC"; e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#E8A0B0"; e.currentTarget.style.transform = "translateY(0)" }}
          >
            Termin buchen
          </button>
          <button
            onClick={() => scrollTo("#leistungen")}
            className="rounded-full font-medium transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.75)",
              padding: "1rem 2.5rem",
              fontSize: "1rem",
              minWidth: "200px",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.55)"; e.currentTarget.style.color = "#E8A0B0" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)" }}
          >
            Unsere Leistungen
          </button>
        </div>

        {/* Social proof */}
        <div
          className="hero-animate hero-delay-5 inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(232,160,176,0.18)" }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#E8A0B0">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>4.9</span>
            {" "}· 98 Google-Bewertungen
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#ueber-uns")}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.22)" }}>
          Scroll
        </span>
        <div
          className="scroll-dot relative w-5 h-8 rounded-full"
          style={{ border: "1px solid rgba(232,160,176,0.28)" }}
        />
      </div>
    </section>
  )
}
