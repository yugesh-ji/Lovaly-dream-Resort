import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lovaly Dream Resort | Stay, Dine & Relax",
  description: "Your Ultimate Getaway for Stay, Dine & Relax in Rohtas. Lovaly Dream Resort offers premium accommodations, fine dining, and event spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
