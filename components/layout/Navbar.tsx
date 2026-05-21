"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  MapPin,
  Building2,
  MessageCircle,
  Home,
  CreditCard,
  PhoneCall
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isFunnelPage = pathname?.startsWith("/lp");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Locations", href: "/locations" },
    { name: "Plans", href: "/pricing" },
    { name: "Registration Process", href: "/how-it-works" },
    { name: "Infrastructure", href: "/about" },
  ];

  // ==========================================
  // 1. PPC FUNNEL NAVBAR (100% Distraction Free)
  // ==========================================
  if (isFunnelPage) {
    return (
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center relative z-10">
              <img src="/logo.svg" alt="VirtualSpace Logo" className="h-11 w-auto object-contain" />
            </Link>

            <div className="flex items-center gap-6 relative z-10">
              <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Verified Secure Infrastructure
              </div>
              <a
                href="https://wa.me/918744041519"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full font-bold text-sm border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp for Instant Quote</span>
                <span className="sm:hidden">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // ==========================================
  // 2. STANDARD WEBSITE NAVBAR
  // ==========================================
  return (
    <>
      {/* -------------------------------------------
          DESKTOP ONLY: Top Trust Bar & Main Header 
          ------------------------------------------- */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-white/5 h-9 hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase text-slate-400">
            <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> APOB/PPOB Supportive Locations</div>
            <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> 20+ Operational Cities</div>
            <div className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-blue-400" /> Verification-Ready Infrastructure</div>
          </div>
          <a href="tel:+918744041519" className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors">
            +91 87440 41519
          </a>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-[60] hidden lg:block transition-all duration-300",
          isScrolled
            ? "top-9 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm"
            : "top-9 bg-white/80 backdrop-blur-md" 
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="VirtualSpace Logo" className="h-11 w-auto object-contain" />
            </Link>

            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/918744041519" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                WhatsApp
              </a>
              <PremiumButton href="/contact" variant="primary" className="px-6 py-2.5">
                Check Availability
              </PremiumButton>
            </div>
          </div>
        </div>
      </header>


      {/* -------------------------------------------
          MOBILE ONLY: Clean Top Header + Bottom App Bar 
          ------------------------------------------- */}
      
      {/* Mobile Top Header (Just Logo & Call CTA) */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200",
        isScrolled ? "shadow-sm" : ""
      )}>
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/">
            <img src="/logo.svg" alt="VirtualSpace Logo" className="h-9 w-auto object-contain" />
          </Link>
          <a href="tel:+918744041519" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold active:scale-95 transition-transform">
            <PhoneCall className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>
      </header>

      {/* Mobile Bottom App Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          
          <Link href="/" className={cn(
            "flex flex-col items-center justify-center w-full h-full gap-1 active:scale-95 transition-all",
            pathname === "/" ? "text-blue-600" : "text-slate-500"
          )}>
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold">Home</span>
          </Link>

          <Link href="/locations" className={cn(
            "flex flex-col items-center justify-center w-full h-full gap-1 active:scale-95 transition-all",
            pathname === "/locations" ? "text-blue-600" : "text-slate-500"
          )}>
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] font-bold">Locations</span>
          </Link>

          <Link href="/pricing" className={cn(
            "flex flex-col items-center justify-center w-full h-full gap-1 active:scale-95 transition-all",
            pathname === "/pricing" ? "text-blue-600" : "text-slate-500"
          )}>
            <CreditCard className="w-5 h-5" />
            <span className="text-[10px] font-bold">Plans</span>
          </Link>

          <a href="https://wa.me/918744041519" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full gap-1 text-emerald-600 active:scale-95 transition-all">
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-bold">WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
}