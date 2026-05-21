"use client";

import React, { useState } from "react";
import { 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  ArrowRight, 
  Building2, 
  Info,
  BadgePercent
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("annual");

  const tiers = [
    {
      name: "Business Presence",
      slug: "presence",
      estimate: "799",
      description: "Best for digital nomads and remote teams needing a professional front.",
      features: [
        "Prestigious Business Address",
        "Professional Mail Handling",
        "Instant Mail Digitization",
        "Receptionist Support",
        "Courier Management"
      ],
      notIncluded: [
        "GST Registration Documents",
        "Rent Agreement & NOC",
        "Meeting Room Credits"
      ]
    },
    {
      name: "GST Compliance",
      slug: "gst",
      estimate: "1,299",
      popular: true,
      description: "Complete documentation suite for new or existing GST registrations.",
      features: [
        "All Business Presence Features",
        "Notarized Rent Agreement",
        "NOC from Property Owner",
        "Latest Utility Bill Copies",
        "GST Inspection Support",
        "Physical Signage Display"
      ],
      notIncluded: [
        "Company Incorporation Support"
      ]
    },
    {
      name: "Enterprise Solutions",
      slug: "enterprise",
      estimate: "2,499",
      description: "Dedicated support for full company registration and audit compliance.",
      features: [
        "All GST Compliance Features",
        "MCA/ROC Documentation",
        "Dedicated Account Manager",
        "5 Hours Meeting Room / Mo",
        "Bulk Location Discounts",
        "Prime Directory Listing"
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- 1. HERO: THE LOGIC --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* FIX: Removed Framer Motion wrapper. Text is now guaranteed to be 100% visible instantly. */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Transparent, <span className="text-brand-primary">Outcome-Based</span> Pricing.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed italic-none">
              We don't believe in hidden fees. Our pricing is determined by your <span className="font-bold text-slate-900">Service Requirements</span> and the <span className="font-bold text-slate-900">Prestige Tier</span> of your chosen location.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. PRICING TIERS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.slug}
              className={cn(
                "relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col",
                tier.popular 
                  ? "border-brand-primary shadow-2xl shadow-brand-primary/10 bg-white z-10 scale-105" 
                  : "border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                  Most Requested
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Starts from</span>
                  <span className="text-4xl font-black text-slate-900 italic-none">₹{tier.estimate}</span>
                  <span className="text-slate-500 text-sm">/mo*</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1 uppercase font-bold tracking-wider">
                  <Info className="w-3 h-3" /> Varies by city & district
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-emerald" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-30">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-0.5 bg-slate-400" />
                    </div>
                    <span className="text-sm text-slate-400 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <PremiumButton 
                href="/contact" 
                variant={tier.popular ? "primary" : "secondary"} 
                className="w-full py-4"
              >
                Get {tier.name} Quote
              </PremiumButton>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. EXPLAINER: WHY PRICING VARIES --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight italic-none">How we calculate <br />your custom quote.</h2>
              <p className="text-slate-400 text-lg mb-10 italic-none leading-relaxed">
                We believe in fair value. Your final investment is a combination of two simple factors:
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location Tier</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Prime business districts (like BKC or Connaught Place) carry a higher demand and infrastructure cost than secondary hubs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Service Complexity</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Basic mailing requires less legal drafting than a full GST-compliant virtual office with on-site inspection support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
               <h3 className="text-2xl font-bold mb-6 italic-none">Estimate Generator</h3>
               <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 tracking-widest">Selected City</span>
                     <div className="flex justify-between items-center">
                        <span className="font-bold">Mumbai (BKC)</span>
                        <span className="text-xs text-brand-cyan">Premium Tier</span>
                     </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 tracking-widest">Service Requirement</span>
                     <div className="flex justify-between items-center">
                        <span className="font-bold">GST + Mailing</span>
                        <span className="text-xs text-brand-cyan">Standard Tier</span>
                     </div>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                     <div>
                        <p className="text-xs text-slate-400 mb-1">Estimated Range</p>
                        <p className="text-3xl font-black italic-none">₹1,499 - 1,899</p>
                     </div>
                     <p className="text-[10px] text-right text-slate-500 italic-none">Monthly, billed annually.<br />Excl. GST</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRUST & RISK REVERSAL --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <BadgePercent className="w-8 h-8 text-brand-primary" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Zero Hidden Fees</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic-none">What you see in your final quote is what you pay. No security deposits, no AMC.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <Zap className="w-8 h-8 text-brand-primary" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Instant Quote</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic-none">Our experts provide a precise quote for your specific location within 15 minutes.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <ShieldCheck className="w-8 h-8 text-brand-primary" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Compliance Guarantee</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic-none">If your GST registration is rejected due to our documentation, we refund your fee.</p>
          </div>
        </div>
      </section>

      {/* --- 5. PRICING FAQ --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 italic-none text-slate-900">Pricing FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "Why is Mumbai more expensive than Jaipur?", a: "Commercial real estate and maintenance costs in prime Mumbai districts are significantly higher, which is reflected in the premium tier pricing." },
              { q: "Is there a discount for multi-year bookings?", a: "Yes, we offer up to 25% discount on 2-year and 3-year commitments." },
              { q: "Do you offer a bulk discount for multiple cities?", a: "Absolutely. Our Corporate Plan is designed for companies needing addresses in 5 or more cities." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm">{faq.q}</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic-none">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
         <h2 className="text-3xl md:text-5xl font-bold mb-6 italic-none text-slate-900">Ready for your custom quote?</h2>
         <p className="text-slate-600 mb-10 max-w-xl mx-auto">Tell us which city you need, and we'll send you a detailed proposal in minutes.</p>
         <PremiumButton href="/contact" variant="primary" showArrow className="px-12 py-4">
           Get My Custom Quote
         </PremiumButton>
      </section>
    </div>
  );
}