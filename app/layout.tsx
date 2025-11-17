import "./globals.css"

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist_Mono, Poppins, Titillium_Web } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Guia Cyber Seguro: Segurança Digital Descomplicada para Todos",
  description:
    "Guia completo de Cibersegurança Acessível. Aprenda a evitar golpes de phishing, proteger dados pessoais, usar 2FA e fazer backup. Sua vida digital protegida."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} ${titilliumWeb.variable} ${geistMono.variable} font-poppins overflow-x-hidden antialiased`}
      >
        <main>
          <div className="mx-auto max-w-7xl px-2">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
