import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Front-End Developer Portfolio",
  description: "Portfolio de um Desenvolvedor Front-End especializado em criar experiências digitais modernas.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
