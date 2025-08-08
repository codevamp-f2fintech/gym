import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Engross Fitness - Push Limits. Stay Engrossed.",
  description:
    "Transform your life at Engross Fitness. World-class equipment, expert trainers, and a community that pushes you to achieve your fitness goals.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
