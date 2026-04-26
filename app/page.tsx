import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { UeberUns } from "@/components/UeberUns"
import { Leistungen } from "@/components/Leistungen"
import { Team } from "@/components/Team"
import { Galerie } from "@/components/Galerie"
import { Preise } from "@/components/Preise"
import { Bewertungen } from "@/components/Bewertungen"
import { Kontakt } from "@/components/Kontakt"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UeberUns />
        <Leistungen />
        <Team />
        <Galerie />
        <Preise />
        <Bewertungen />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
