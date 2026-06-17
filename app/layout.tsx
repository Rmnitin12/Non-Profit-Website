import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDonate from "@/components/FloatingDonate";
import CursorGlow from "@/components/CursorGlow";
import AmbientPlayer from "@/components/AmbientPlayer";
import NatureParticles from "@/components/NatureParticles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TSCSNC — Embracing Black Mental Health",
    template: "%s | TSCSNC",
  },
  description:
    "Twins Sisters Cumulative Supportive Networking Corporation — dedicated to embracing and uplifting Black mental health through community support, supportive groups, and wraparound services.",
  keywords: ["Black mental health", "mental health support", "community", "Oakland", "California", "non-profit"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-bg">
        <NatureParticles />
        <CursorGlow />
        <Navbar />
        <ViewTransition enter="page-enter" exit="page-exit">
          <main className="flex-1">{children}</main>
        </ViewTransition>
        <Footer />
        <FloatingDonate />
        <AmbientPlayer />
      </body>
    </html>
  );
}
