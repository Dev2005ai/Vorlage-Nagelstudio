import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "NAILHAUS – Nail Studio Hamburg-Eppendorf",
  description:
    "Premium Nagelstudio in Hamburg-Eppendorf. Gel-Maniküre, Nail Art, Extensions und mehr. Termin online buchen.",
  keywords: ["Nagelstudio Hamburg", "Gel Nägel Eppendorf", "Nail Art Hamburg", "Maniküre Hamburg", "NAILHAUS"],
  openGraph: {
    title: "NAILHAUS – Nail Studio Hamburg-Eppendorf",
    description: "Premium Nagelstudio in Hamburg-Eppendorf. Buchen Sie jetzt Ihren Termin.",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
