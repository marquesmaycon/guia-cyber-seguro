import "./globals.css"

import type { Metadata } from "next"
import { Geist_Mono, Poppins, Titillium_Web } from "next/font/google"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

import Providers from "./providers"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "500", "700"]
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
  title: "Guia Ciber Seguro",
  description: "Um guia completo para segurança cibernética."
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
        <Providers>
          <main>
            <div className="pt-header-height mx-auto mt-8 max-w-7xl space-y-12 px-2">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
