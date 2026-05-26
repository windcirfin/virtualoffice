import React from "react";
import {
  Zap,
  Rocket,
  CreditCard,
  Clock,
  Star,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Laptop,
  Globe,
  Plus,
  Clock3,
  BadgeCheck,
  Building2,
  Users,
  Award,
  Calendar,
  ArrowRight,
  AlertCircle,
  FileCheck,
  MessageCircle
} from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { PremiumButton } from "@/components/ui/PremiumButton";
import BusinessRegistrationHub from "@/app/lp/BusinessRegistrationHub";
import InfrastructureCapabilities from "@/app/lp/InfrastructureCapabilities";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function HighTrustFounderFunnel() {
  // WhatsApp click handler with Google Ads conversion tracking
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Fire the Google Ads conversion tracker
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18177709746/-mbyCLPNprEcELKt59tD',
        'event_callback': () => {
          console.log('WhatsApp Conversion Tracked!');
        }
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      {/* Top Trust Strip */}
      <div className="bg-slate-900 py-2.5 px-4 text-center">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">
          Trusted by 2,000+ Startups • Rated 4.9/5 on Trustpilot
        </p>
      </div>

      {/* 2. HERO: LEAN STARTUP HOOK with Enhanced Social Proof */}
      <section className="pt-16 pb-24 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30 -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Location 1: Removed motion.div wrapper from left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
              Built for Modern Startups
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[0.95] tracking-tighter italic-none">
              Launch Lean. <br />
              <span className="text-blue-600">Keep Your Equity.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed italic-none">
              Stop burning seed capital on physical office overhead. Establish a 5-star business presence with full legal documentation for **₹999/mo.**
            </p>

            {/* Enhanced Avatar Section with Stats */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 mb-8">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-40"
                  alt="Founder"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-30"
                  alt="Founder"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20"
                  alt="Founder"
                />
                <img
                  src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10"
                  alt="Founder"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +1.2k
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">1,200+ founders</span> already launched with us
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                  <span className="text-[10px] text-slate-500 ml-1">4.9/5 from 800+ reviews</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Startup India Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">24hr Document Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Location 2: Removed motion.div wrapper from right column (form) */}
          <div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              {/* Freebie Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                🎁 Free Logo & Consultation
              </div>
              <div className="text-center mb-8 mt-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Plans Starting From</p>
                <p className="text-5xl font-black text-slate-900 italic-none">₹999<span className="text-lg font-normal text-slate-500">/mo</span></p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1">✓ No security deposit • Cancel anytime</p>
              </div>
              <LeadForm />

              {/* Risk Reversal */}
              <div className="mt-6 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[10px] text-blue-700 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <FileCheck className="w-3 h-3" />
                  Free document review • Zero-obligation quote • Cancel within 7 days for full refund
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
                <Clock3 className="w-4 h-4 text-blue-600" /> Documents ready in 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Testimonials - Added for Social Proof */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic-none tracking-tight">Loved by 1,200+ Founders</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Real stories from founders who launched lean and stayed focused on growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Mehta",
              role: "Founder, ShopEase",
              quote: "Got our registration and bank account opened within 2 weeks. Saved ₹4L in first year vs traditional office.",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
              rating: 5
            },
            {
              name: "Rahul Sharma",
              role: "Co-founder, CloudSaaS",
              quote: "The BKC address gave us instant credibility with enterprise clients. Best ₹999 we spend every month.",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
              rating: 5
            },
            {
              name: "Anjali Nair",
              role: "CEO, GreenLabs",
              quote: "Mail forwarding is seamless. I run my business remotely without worrying about missing important letters.",
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
              rating: 5
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-slate-600 italic mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" alt={t.name} />
                <div>
                  <h5 className="font-bold text-sm text-slate-900">{t.name}</h5>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          {[
            { icon: Users, label: "Happy Founders", value: "1,200+", desc: "Across India" },
            { icon: Clock3, label: "Avg Setup Time", value: "24h", desc: "Documents delivered" },
            { icon: TrendingDown, label: "Cost Saved", value: "₹4L+", desc: "Per year vs traditional office" },
            { icon: Building2, label: "Prime Locations", value: "50+", desc: "Across 20+ cities" }
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-black text-slate-900">{metric.value}</p>
              <p className="text-xs font-bold text-slate-700">{metric.label}</p>
              <p className="text-[10px] text-slate-500">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COST REDUCTION LOGIC */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 italic-none tracking-tight">Smart Founders Stay Lean.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingDown, title: "90% Lower Overhead", desc: "Redirect office rent into product development and growth marketing." },
              { icon: Laptop, title: "Remote-First Infrastructure", desc: "Build a global team while maintaining a prestigious Indian HQ." },
              { icon: Globe, title: "Nationwide Scale", desc: "Establish presence in Mumbai, Bangalore, or Delhi in minutes." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-600">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl mb-4 italic-none">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic-none">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR TIMELINE */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 italic-none tracking-tight">Your Office, <br />Launch-Ready in 24h.</h2>
            <div className="space-y-10">
              {[
                { s: "Step 01", t: "Select Your District", d: "Choose from 50+ premium areas like HSR Layout, BKC, or Cyber City." },
                { s: "Step 02", t: "Submit Digital KYC", d: "Securely upload your business details via our encrypted portal." },
                { s: "Step 03", t: "Receive Documentation", d: "Get your notarized agreement and NOC within one business day." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-[10px] font-black text-blue-600 uppercase shrink-0 pt-2">{step.s}</div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 tracking-tight">{step.t}</h4>
                    <p className="text-slate-500 text-sm italic-none">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Money-back Guarantee */}
            <div className="mt-10 flex items-center gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <p className="text-xs font-bold text-slate-700">7-day money-back guarantee if documents don't meet your requirements</p>
            </div>
          </div>
          <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
            <img src="/images/offices/reception.webp" alt="Premium Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent flex items-end p-10">
              <div className="text-white">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current text-blue-400" />)}
                </div>
                <p className="italic text-xl font-medium leading-relaxed mb-6">"Our professional address in BKC helped us build immediate trust with enterprise clients. It's the most efficient investment we've made."</p>
                <p className="font-bold text-sm uppercase tracking-widest text-blue-400">— Rohan V. • Founder of NexaHealth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STARTUP KIT (No-Brainer) */}
      <section className="py-24 bg-slate-950 text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic-none tracking-tight">The Complete Startup Kit.</h2>
            <p className="text-slate-400 italic-none">Professional infrastructure designed for operational readiness.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Verified Address", d: "A-Grade business towers for websites & bank accounts." },
              { t: "Mailroom Services", d: "Instant digitization and daily WhatsApp notifications." },
              { t: "Legal Documentation", d: "Notarized Agreement & NOC for business filings." },
              { t: "Secure Courier Handling", d: "Professional management of sensitive business mail." },
              { t: "Physical Signage", d: "Brand board listing in the building lobby directory." },
              { t: "Member Boardrooms", d: "Preferred access to professional meeting spaces." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group">
                <BadgeCheck className="w-7 h-7 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold mb-2 text-lg italic-none">{item.t}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed italic-none">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (Foundational Trust) */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 italic-none tracking-tight">Founder Inquiries</h2>
        <div className="space-y-4">
          {[
            { q: "Is this valid for E-commerce platforms?", a: "Yes. Our addresses are used by hundreds of e-commerce founders as their official business address for marketplace onboarding." },
            { q: "What is the minimum lock-in period?", a: "We offer maximum flexibility. While annual plans offer the best value, we have options for shorter operational requirements." },
            { q: "How is my business mail handled?", a: "Mail is received at your registered hub, scanned in a secure environment, and uploaded to your portal with instant notifications." },
            { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. You can change your plan or location anytime with 30 days' notice. No penalty fees." }
          ].map((faq, i) => (
            <div key={i} className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold mb-3 text-sm text-slate-900">{faq.q}</h4>
              <p className="text-sm text-slate-500 leading-relaxed italic-none">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <BusinessRegistrationHub />
      <InfrastructureCapabilities />

      {/* 7. FINAL ACTION */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic-none tracking-tighter">Ready to Launch Lean?</h2>
          <p className="text-slate-600 mb-10 text-lg italic-none max-w-xl mx-auto">
            Join 1,200+ founders who built their business presence on the smart foundation.
          </p>

          {/* Guarantee Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <p className="text-sm font-bold text-slate-700">7-day money-back guarantee • No lock-in • Cancel anytime</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <PremiumButton href="/contact" variant="primary" className="px-14 py-5 text-lg shadow-xl shadow-blue-500/20 group">
              Claim Your Address
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>

            {/* WhatsApp Founder Support Button - With Conversion Tracking */}
            <WhatsAppButton
              href="https://wa.me/918744041519?text=Hi,%20I%20want%20to%20check%20my%20eligibility%20for%20the%20Founder%20Subsidy%20(1st%20Year%20Free)."
              className="flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-emerald-500/20 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Founder Support</span>
            </WhatsAppButton>
          </div>
          <p className="text-[10px] text-slate-400 mt-8">No credit card required • Free document review • Response within 2 hours</p>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
          Virtual Address • Premium Business Infrastructure • Mumbai • Bangalore • Delhi
        </p>
      </footer>
    </div>
  );
}