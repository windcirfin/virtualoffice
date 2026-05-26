import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Virtual Offices in India | Business Registration Support",
  description: "Get a professional business address with documentation support for business registration across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager - Head */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSTHQMBZ');
          `}
        </Script>

        {/* Google Analytics (keep if still needed, or remove if GTM handles this) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18177709746`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18177709746');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        {/* Google Tag Manager (noscript) - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSTHQMBZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <Navbar />
        <main className="flex min-h-screen flex-col pt-20">
          {children}
        </main>
        
        {/* GOVERNMENT DISCLAIMER - Appears on all pages */}
        <div className="bg-slate-100 border-t border-slate-200 py-3 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[10px] text-slate-500 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> We provide virtual office addresses and documentation support services. 
              We are not a government agency. Business registration, GST registration, and other regulatory approvals are subject to 
              verification and approval by respective government departments as per applicable laws. Results may vary based on 
              individual circumstances and departmental discretion.
            </p>
          </div>
        </div>
        
        <Footer />
        {/* We will add the WhatsApp button in the next step */}
      </body>
    </html>
  );
}