import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Virtual Offices in India | GST & Company Registration",
  description: "Get a professional business address with documentation support for GST and company registration across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        <Navbar />
        <main className="flex min-h-screen flex-col pt-20">
          {children}
        </main>
        <Footer />
        {/* We will add the WhatsApp button in the next step */}
      </body>
    </html>
  );
}