import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

import Providers from "./providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gradient antialiased`}>
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
