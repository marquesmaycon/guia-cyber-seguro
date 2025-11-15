import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <main>
            <div className="max-w-7xl mx-auto space-y-12 px-2 pt-header-height mt-8">
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
