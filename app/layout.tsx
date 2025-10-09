import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "JoinEcoGrow - Where Gaming Meets Sustainability",
  description: "Revolutionary platform with 925+ features combining gaming with real environmental impact",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}