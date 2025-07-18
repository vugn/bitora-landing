import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bitora - Coming Soon | The Future of Blockchain Payments",
  description:
    "Bitora Ecosystem is revolutionizing blockchain payments with cutting-edge technology and real-world solutions. Join the revolution.",
  keywords: "blockchain, cryptocurrency, payments, Web3, DeFi, Bitora",
  authors: [{ name: "Bitora Team" }],
  openGraph: {
    title: "Bitora - Coming Soon",
    description: "The future of blockchain meets real-world payments. Revolutionary ecosystem launching soon.",
    type: "website",
    url: "https://bitora.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitora - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitora - Coming Soon",
    description: "The future of blockchain meets real-world payments.",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
