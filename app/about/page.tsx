"use client";

import React from "react";
import { 
  ShieldCheck, 
  Target, 
  Users2, 
  Globe2, 
  Building2, 
  Award,
  Lock,
  SearchCheck
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Compliance First",
      desc: "We don't just provide addresses; we provide legal security. Every location in our network is vetted for GST and MCA compliance."
    },
    {
      icon: SearchCheck,
      title: "Physical Verification",
      desc: "Unlike digital-only platforms, we maintain a physical presence. Our staff is on-site to handle inspections and mail."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      desc: "Your business correspondence is sacred. We use encrypted notification systems to ensure your mail reaches only you."
    },
    {
      icon: Users2,
      title: "Human Expertise",
      desc: "Real experts, not just bots. Our support team understands the nuances of Indian corporate law and documentation."
    }
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Location 1: Removed motion.div wrapper */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              The Infrastructure for <br />
              <span className="text-brand-primary">Modern Indian Business.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Virtual Address was founded on a simple premise: professional business presence shouldn't be a luxury. We are building the most reliable network of virtual offices to help founders launch, scale, and thrive across India.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
      </section>

      {/* --- OUR STORY / MISSION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/5 rounded-[3rem] blur-2xl"></div>
            <img 
              src="/images/hero/documentation.webp" 
              alt="Our Mission" 
              className="relative rounded-[2.5rem] border border-slate-200 shadow-2xl z-10 aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-emerald/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">12,00+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Trusted Companies</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic-none">
              Why we started <br />Virtual Address.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                In 2021, we noticed a recurring problem: thousands of brilliant startups were being held back by the high costs of commercial real estate and the "red tape" of GST registration.
              </p>
              <p>
                A physical office lease in a prime district like BKC or HSR Layout could cost upwards of ₹2 Lakhs per month—an impossible barrier for a new founder. 
              </p>
              <p className="font-medium text-slate-900">
                We decided to change that. By aggregating premium commercial spaces and layering them with deep legal compliance, we created a way for any business to have a 5-star address for less than the cost of a daily coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic-none">Our Core Principles</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">These values drive every decision we make, from which locations we partner with to how we handle your mail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location 2: Removed motion.div and animation props */}
            {values.map((value, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 italic-none">Real People. Real Offices.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed italic-none">
              Virtual Address isn't just a website. We operate a massive network of partner-owned and leased properties across India. When a GST inspector visits, they don't see a "virtual" space—they see a professional corporate environment with your business's signage and records ready for inspection.
            </p>
            <div className="space-y-4">
              {[
                "Direct Lease Agreements",
                "On-site Receptionist Support",
                "Audit-Ready Documentation",
                "Instant Mail Digitization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/20 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-brand-emerald" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="/images/offices/reception.webp" alt="Office 1" className="rounded-2xl shadow-lg aspect-square object-cover" />
            <img src="/images/offices/meeting-room.webp" alt="Office 2" className="rounded-2xl shadow-lg mt-8 aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 md:p-20 shadow-sm relative overflow-hidden">
             <Globe2 className="w-16 h-16 text-brand-primary/20 absolute -top-4 -right-4" />
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 italic-none">Ready to partner with us?</h2>
             <p className="text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
               Experience the most reliable virtual office infrastructure in India. Establish your business address today.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PremiumButton href="/locations" variant="primary" className="px-12">
                  Explore Locations
                </PremiumButton>
                <PremiumButton href="/contact" variant="secondary" className="px-12">
                  Contact Sales
                </PremiumButton>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}