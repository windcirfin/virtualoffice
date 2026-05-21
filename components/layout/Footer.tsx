"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ADDED for funnel detection
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have this utility

export function Footer() {
  const pathname = usePathname();
  
  // Detect if the user is on a PPC Landing Page
  const isFunnelPage = pathname?.startsWith('/lp');

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamically adjust grid columns: 2 cols for funnels, 4 cols for normal pages */}
        <div className={cn(
          "grid grid-cols-1 gap-12 mb-16",
          isFunnelPage ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-2 lg:grid-cols-4"
        )}>
          
          {/* Brand Column - ALWAYS VISIBLE */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                V
              </div>
              <span className="text-xl font-bold text-white">Virtual Address</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              India's most trusted network for premium virtual offices. 
              We simplify business presence with verified addresses and 
              comprehensive documentation support.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <ShieldCheck className="w-5 h-5" />
              Verified Partner Network
            </div>
          </div>

          {/* Solutions Column - HIDDEN ON FUNNEL PAGES */}
          {!isFunnelPage && (
            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/solutions/virtual-office" className="hover:text-white transition-colors">
                    Virtual Office Address
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/gst-registration" className="hover:text-white transition-colors">
                    GST Registration Support
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/mailing-address" className="hover:text-white transition-colors">
                    Business Mailing Address
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Popular Cities - HIDDEN ON FUNNEL PAGES */}
          {!isFunnelPage && (
            <div>
              <h4 className="text-white font-bold mb-6">Popular Cities</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/locations/bangalore" className="hover:text-white transition-colors">Bangalore</Link></li>
                <li><Link href="/locations/mumbai" className="hover:text-white transition-colors">Mumbai</Link></li>
                <li><Link href="/locations/delhi" className="hover:text-white transition-colors">Delhi</Link></li>
                <li><Link href="/locations/hyderabad" className="hover:text-white transition-colors">Hyderabad</Link></li>
                <li><Link href="/locations/chennai" className="hover:text-white transition-colors">Chennai</Link></li>
                <li><Link href="/locations/pune" className="hover:text-white transition-colors">Pune</Link></li>
              </ul>
            </div>
          )}

          {/* Contact Info - ALWAYS VISIBLE (Required for Google Ads Trust) */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Level 7, Prestige Shantiniketan, Whitefield, Bangalore, KA 560048</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 87440 41519</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support@virtualaddress.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - ALWAYS VISIBLE (Required for Google Ads Compliance) */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Virtual Address India. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
        
        {/* Mandatory Disclaimer for Trust - ALWAYS VISIBLE */}
        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5">
          <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest leading-relaxed">
            *Disclaimer: Virtual Address provides documentation support and physical address services. GST registration is subject to approval by the relevant government departments. We do not guarantee government approvals.
          </p>
        </div>
      </div>
    </footer>
  );
}