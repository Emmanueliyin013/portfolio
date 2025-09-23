import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Emmanuel Sanchez Peralta - Software Developer",
  description:
    "Portfolio of Emmanuel Sanchez Peralta, a passionate software developer specializing in full-stack web development with React, Next.js, and modern technologies.",
  generator: "v0.app",
  keywords: ["Emmanuel Sanchez Peralta", "Software Developer", "Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Emmanuel Sanchez Peralta" }],
  openGraph: {
    title: "Emmanuel Sanchez Peralta - Software Developer",
    description: "Portfolio showcasing innovative software solutions and exceptional user experiences",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
