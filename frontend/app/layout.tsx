import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HOYAMU.NET - Sri Lanka's Digital Super Platform",
  description: "හොයන හැමදේම එකම තැන - Find everything in one place. Search classifieds, jobs, properties, vehicles, and business directories in Sri Lanka.",
  keywords: "sri lanka, classifieds, jobs, vehicles, properties, directory, marketplace, hoyamu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#222222]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
