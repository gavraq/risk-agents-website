import type { Metadata } from "next";
import { League_Spartan, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Risk Agents - AI-Powered Risk Intelligence Platform",
  description: "100+ AI Skills that combine into patterns that evolve. Replace 50+ standard reports with natural language queries. Built on 30 years of CRO expertise.",
  keywords: ["risk management", "AI", "artificial intelligence", "banking", "credit risk", "market risk", "operational risk"],
  authors: [{ name: "Gavin Slater" }],
  openGraph: {
    title: "Risk Agents - AI-Powered Risk Intelligence",
    description: "Built on Skills, Patterns, and 30 Years of CRO Expertise",
    url: "https://www.risk-agents.com",
    siteName: "Risk Agents",
    type: "website",
    images: [
      {
        url: "/images/RiskAgentsLogo.png",
        width: 1200,
        height: 630,
        alt: "Risk Agents - Expanding the boundaries of your vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Agents - AI-Powered Risk Intelligence",
    description: "Built on Skills, Patterns, and 30 Years of CRO Expertise",
    images: ["/images/RiskAgentsLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
