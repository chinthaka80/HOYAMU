import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const notoSinhala = Noto_Sans_Sinhala({
  weight: ["400", "700"],
  subsets: ["sinhala"],
  variable: "--font-sinhala",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "HOYAMU.NET - Sri Lanka's Digital Super Platform",
  description: "හොයන හැමදේම එකම තැන - Find everything in one place. Search classifieds, jobs, properties, vehicles, and business directories in Sri Lanka.",
  keywords: "sri lanka, classifieds, jobs, vehicles, properties, directory, marketplace, hoyamu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HOYAMU.NET - Sri Lanka's Digital Super Platform",
    description: "හොයන හැමදේම එකම තැන - Find everything in one place. Search classifieds, jobs, properties, vehicles, and business directories in Sri Lanka.",
    url: "https://hoyamu.net",
    siteName: "HOYAMU.NET",
    locale: "en-LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOYAMU.NET - Sri Lanka's Digital Super Platform",
    description: "හොයන හැමදේම එකම තැන - Find everything in one place.",
  },
};

import Providers from "@/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${notoSinhala.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#222222]">
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
