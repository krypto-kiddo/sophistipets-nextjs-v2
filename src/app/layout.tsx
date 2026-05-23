import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sophistipets — Care. Comfort. Quality for Your Pets.",
  description:
    "Kolkata's only full-service pet care centre. Advanced clinical care, 24×7 emergency care, expert grooming, and 500+ premium products in Bhowanipore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <AnnouncementBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}