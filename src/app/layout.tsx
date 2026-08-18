import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Set Architect — La inteligencia que transforma tu biblioteca en sets perfectos",
  description:
    "Análisis armónico, curvas de energía e integración nativa con Rekordbox y Serato. Descarga Smart Set Architect para Windows.",
  keywords: ["DJ", "Rekordbox", "Serato", "mixing armónico", "rueda Camelot", "software DJ"],
  openGraph: {
    title: "Smart Set Architect — Inteligencia para DJs",
    description:
      "Análisis armónico, curvas de energía e integración nativa con Rekordbox y Serato.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}