import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elite Education | Global Admissions & Strategic Counselling Partner",
  description:
    "We guide ambitious students toward premier global and national universities. Highly structured counselling, scholarship navigation, entrance exam coaching, and academic profiling.",
  keywords: "college admissions, study abroad, career counselling, university selection, scholarships, rank predictor",
  openGraph: {
    title: "Elite Education | Global Admissions & Strategic Counselling Partner",
    description: "Personalized admissions matching, scholarships, and academic counselling.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="bg-white text-slate-900 font-sans antialiased dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
