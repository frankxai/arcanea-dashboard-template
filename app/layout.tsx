import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/lib/motion";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Arcanea Dashboard Template — Cosmic Analytics, Liquid Glass",
  description:
    "Premium dark dashboard template with liquid glass widgets, cosmic gradients, and 6 motion primitives. Next.js 16 + Recharts + Motion for React. MIT.",
  openGraph: {
    title: "Arcanea Dashboard Template",
    description: "Cosmic analytics dashboard · 6 widgets · MIT · Fork freely",
    type: "website",
    siteName: "Arcanea",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcanea Dashboard Template",
    description: "Cosmic analytics · liquid glass · MIT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#09090b] text-white antialiased"><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
