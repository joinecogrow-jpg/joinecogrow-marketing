import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JoinEcoGrow - Where Gaming Meets Sustainability",
  description: "Revolutionary platform with 925+ features",
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
