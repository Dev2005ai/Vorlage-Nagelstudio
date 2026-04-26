"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./AnimateOnScroll"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

const infoItems = [
  { icon: MapPin, label: "Adresse",        value: "Eppendorfer Landstraße 82\n20249 Hamburg-Eppendorf" },
  { icon: Phone,  label: "Telefon",        value: "+49 40 46 89 73 20" },
  { icon: Mail,   label: "E-Mail",         value: "hallo@nailhaus.de" },
  { icon: Clock,  label: "Öffnungszeiten", value: "Mo–Fr: 10:00–19:00\nSa: 09:00–17:00\nSo: geschlossen" },
]

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "0.75rem",
  padding: "0.8rem 1rem",
  width: "100%",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
}

export function Kontakt() {
  const [form, setForm] = useState({ name: "", email: "", datum: "", nachricht: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Bitte Namen eingeben."
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Bitte gültige E-Mail eingeben."
    if (!form.nachricht.trim()) e.nachricht = "Bitte eine Nachricht eingeben."
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSuccess(true)
    setForm({ name: "", email: "", datum: "", nachricht: "" })
    setTimeout(() => setSuccess(false), 8000)
  }

  return (
    <section id="kontakt" style={{ background: "#120e0f", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#E8A0B0", marginBottom: "1rem" }}
            >
              Kontakt
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Termin vereinbaren
            </h2>
          </div>
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "4rem", alignItems: "start" }}
        >

          {/* Form */}
          <AnimateOnScroll>
            {success ? (
              <div
                className="flex flex-col items-center justify-center text-center"
                style={{
                  padding: "4rem 2rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(232,160,176,0.3)",
                  background: "rgba(232,160,176,0.04)",
                }}
              >
                <CheckCircle size={40} style={{ color: "#E8A0B0", marginBottom: "1rem" }} strokeWidth={1.2} />
                <h3 className="font-semibold" style={{ marginBottom: "0.5rem" }}>Anfrage gesendet!</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)" }}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <input
                    style={{ ...inputBase, borderColor: errors.name ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)" }}
                    placeholder="Ihr Name *"
                    value={form.name}
                    onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })) }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.5)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.name ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.name && <p style={{ fontSize: "0.75rem", color: "rgba(220,80,80,0.9)", marginTop: "0.3rem" }}>{errors.name}</p>}
                </div>

                <div>
                  <input
                    style={{ ...inputBase, borderColor: errors.email ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)" }}
                    type="email"
                    placeholder="Ihre E-Mail *"
                    value={form.email}
                    onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: "" })) }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.5)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.email ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.email && <p style={{ fontSize: "0.75rem", color: "rgba(220,80,80,0.9)", marginTop: "0.3rem" }}>{errors.email}</p>}
                </div>

                <div>
                  <input
                    style={inputBase}
                    type="date"
                    value={form.datum}
                    onChange={e => setForm(p => ({ ...p, datum: e.target.value }))}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.5)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)" }}
                  />
                </div>

                <div>
                  <textarea
                    style={{
                      ...inputBase,
                      resize: "none",
                      height: "140px",
                      borderColor: errors.nachricht ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)",
                    }}
                    placeholder="Ihre Nachricht (Leistung, Wünsche …) *"
                    value={form.nachricht}
                    onChange={e => { setForm(p => ({ ...p, nachricht: e.target.value })); setErrors(p => ({ ...p, nachricht: "" })) }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(232,160,176,0.5)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = errors.nachricht ? "rgba(220,60,60,0.6)" : "rgba(255,255,255,0.1)" }}
                  />
                  {errors.nachricht && <p style={{ fontSize: "0.75rem", color: "rgba(220,80,80,0.9)", marginTop: "0.3rem" }}>{errors.nachricht}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "0.9rem",
                    borderRadius: "9999px",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    background: loading ? "rgba(232,160,176,0.5)" : "#E8A0B0",
                    color: "#0d0a0b",
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "none",
                    transition: "background 0.2s",
                    marginTop: "0.25rem",
                    fontFamily: "inherit",
                  }}
                >
                  {loading ? "Wird gesendet …" : "Anfrage senden"}
                </button>
              </form>
            )}
          </AnimateOnScroll>

          {/* Info block */}
          <AnimateOnScroll delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {infoItems.map(item => (
                <div key={item.label} className="flex" style={{ gap: "1.25rem" }}>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.75rem",
                      background: "rgba(232,160,176,0.1)",
                      border: "1px solid rgba(232,160,176,0.2)",
                      marginTop: "2px",
                    }}
                  >
                    <item.icon size={15} style={{ color: "#E8A0B0" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-wider uppercase"
                      style={{ color: "rgba(255,255,255,0.32)", marginBottom: "0.4rem" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="leading-relaxed whitespace-pre-line"
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: "170px",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, #180e14 0%, #221420 50%, #120a10 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  marginTop: "0.5rem",
                }}
              >
                <div className="text-center">
                  <MapPin
                    size={22}
                    style={{ color: "#E8A0B0", margin: "0 auto", marginBottom: "0.5rem" }}
                    strokeWidth={1.5}
                  />
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
                    Eppendorfer Landstraße 82 · Hamburg
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
