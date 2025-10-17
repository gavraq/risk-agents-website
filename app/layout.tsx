import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Agents - AI-Powered Risk Intelligence",
    description: "Built on Skills, Patterns, and 30 Years of CRO Expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
