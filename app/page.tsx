"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Mail,
  Users,
  MessageCircle,
  Star
} from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { HomepageHero } from "@/components/hero/HomepageHero";
import { cities } from "@/data/cities";

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Lead Form + Main Hook) */}
      <HomepageHero />

      {/* 2. TRUST STRIP (Authority Logos) */}
      <section className="py-8 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Compliant with Indian Corporate Standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-xl">GST Ready</div>
            <div className="flex items-center gap-2 font-bold text-xl">MCA Compliant</div>
            <div className="flex items-center gap-2 font-bold text-xl">Startup India</div>
            <div className="flex items-center gap-2 font-bold text-xl">MSME Verified</div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (The "What") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive Virtual <br />Office Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to establish a professional presence in India without the overhead of a physical office.
          </p>
        </div>

        {/* STRIPPED FRAMER MOTION - Bulletproof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Business Address",
              desc: "Get a prestigious address in top business districts for your website, business cards, and correspondence.",
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              icon: FileText,
              title: "GST Registration",
              desc: "Complete documentation support including Rent Agreement and NOC required for GST application.",
              color: "text-indigo-600",
              bg: "bg-indigo-50"
            },
            {
              icon: Mail,
              title: "Mail Handling",
              desc: "Secure management of your business mail with daily notifications and optional scanning/forwarding.",
              color: "text-cyan-600",
              bg: "bg-cyan-50"
            }
          ].map((service, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group bg-white"
            >
              <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
              <Link href="/pricing" className="text-brand-primary font-bold text-sm inline-flex items-center gap-2">
                Explore Plan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "LINEAR" FEATURE GRID (The "Details") */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Why Smart Founders Choose <br />Virtual Address.</h2>
              <div className="space-y-8">
                {[
                  { title: "24-Hour Documentation", desc: "Receive your notarized agreements and utility bills within one business day.", icon: Zap },
                  { title: "Physical Verification Support", desc: "Our staff is present on-site to handle physical visits from GST inspectors.", icon: ShieldCheck },
                  { title: "Meeting Room Access", desc: "Book professional spaces on-demand for client meetings across all major cities.", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-indigo/20 rounded-[3rem] border border-white/10 p-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-4xl font-bold mb-2">50+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Locations</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-4xl font-bold mb-2">2k+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Active Users</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-4xl font-bold mb-2">15m</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Avg Response</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">100%</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">Transparent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS PREVIEW (The "Where") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Prime Locations Across India</h2>
            <p className="text-slate-600">Secure an address in the most prestigious business districts in the country.</p>
          </div>
          <PremiumButton href="/locations" variant="secondary" showArrow>
            View All Cities
          </PremiumButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cities.slice(0, 4).map((city, i) => (
            <Link key={i} href={`/locations/${city.slug}`} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden">
              <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                <p className="text-white/60 text-sm">Starting @ ₹{city.startingPrice}/mo</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS (The "Process") */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Onboard in Minutes</h2>
          <p className="text-slate-600">Our streamlined process is built for modern speed.</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Select Location", desc: "Browse and pick your city." },
            { step: "02", title: "Pick a Plan", desc: "Choose based on your needs." },
            { step: "03", title: "KYC Check", desc: "Upload ID and business proof." },
            { step: "04", title: "Get Documents", desc: "Docs ready within 24 hours." }
          ].map((item, i) => (
            <div key={i} className="text-center relative">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary font-bold text-xl">
                {item.step}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS (The "Proof") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">What our clients say about us.</h2>
            <div className="flex gap-1 text-brand-primary mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-slate-500 mb-8">Trusted by 12,000+ businesses across technology, consulting, and retail sectors.</p>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 mb-8">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-40" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-30" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10" alt="Startup Founder" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +2k
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Join <span className="font-bold text-slate-900">12,000+ founders</span> who trust us
              </p>
            </div>

            <PremiumButton href="/about" variant="secondary">Read Story</PremiumButton>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Rahul Sharma",
                role: "CEO, TechFlow",
                quote: "The documentation for our GST registration was prepared flawlessly. We got our registration in just 10 days.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Ananya Iyer",
                role: "Founder, GreenSpace",
                quote: "Best decision for my remote team. The mailing address is prestigious and the mail notification system is very prompt.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/30">
                <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary" alt={t.name} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 italic-none text-slate-900">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this address valid for GST registration?", a: "Yes, we provide the Rent Agreement, NOC, and Utility Bill required by the GST department." },
              { q: "Do I need to visit the office physically?", a: "No, all processes are 100% digital. However, we do support physical visits if required for verification." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="text-brand-primary font-bold text-sm">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic-none">Ready to take your business <br />to the next level?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">Establish your presence with India's most reliable virtual office network.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PremiumButton href="/contact" className="px-12 py-4">Get Started Now</PremiumButton>
              <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="px-12 py-4">
                Talk to Sales
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}