"use client";

import React from "react";
import {
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  SearchCheck,
  ShieldAlert,
  Building2,
  HelpCircle,
  Star,
  Scale,
  Clock3,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Zap,
  Users,
  Award,
  Calendar,
  Clock,
  ArrowRight,
  Info,
  MessageCircle
} from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { PremiumButton } from "@/components/ui/PremiumButton";
import TrustInfrastructureBar from "@/app/lp/TrustInfrastructureBar";
import GSTRejectionSection from "@/app/lp/GSTRejectionSection";
import UseCasesSection from "@/app/lp/UseCasesSection";
import BusinessRegistrationHub from "@/app/lp/BusinessRegistrationHub";
import InfrastructureCapabilities from "@/app/lp/InfrastructureCapabilities";
import { ClientGallery } from "@/components/sections/ClientGallery";

export default function HighTrustGSTFunnel() {
  // ============================================================
  // PHASE 4: GOOGLE AI WHATSAPP CONVERSION TRACKING
  // ============================================================
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18177709746/-mbyCLPNprEcELKt59tD', // Using your verified label
        'event_callback': () => {
          console.log('GST-Ready WhatsApp Conversion Tracked!');
        }
      });
    }
  };
  // ============================================================

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      {/* 1. TOP TRUST STRIP + URGENCY BANNER */}
      <div className="bg-slate-900 py-2.5 px-4 text-center">
        <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.25em]">
          Operational Excellence: All addresses verified for 2026 Compliance Standards
        </p>
      </div>

      {/* URGENCY BANNER - Limited Availability */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800">
          <AlertCircle className="w-3 h-3" />
          <span>⚠️ Limited addresses available in BKC, Gurgaon, and Bangalore - 12 slots remaining this quarter</span>
          <Clock className="w-3 h-3" />
        </div>
      </div>

      {/* 3. HERO SECTION WITH AVATARS & SOCIAL PROOF */}
      <section className="relative pt-16 pb-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30 -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Location 1: Removed motion.div wrapper from left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-wider mb-8">
              GST Registration Support
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter italic-none">
              Your Address, <br />
              <span className="text-blue-600">Verification-Ready.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed italic-none">
              Reduce the risk of GST rejections. Secure a premium business address with a **Compliance-Focused Documentation Suite** and on-site coordination support.
            </p>

            {/* AVATAR SECTION - Added Social Proof */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 mb-8">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-40"
                  alt="GST Success Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-30"
                  alt="GST Success Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20"
                  alt="GST Success Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10"
                  alt="GST Success Client"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +500
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">500+ successful GST registrations</span> completed using our addresses
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                  <span className="text-[10px] text-slate-500 ml-1">4.9/5 from 312 reviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Notarized Agreements", "Owner NOC", "Utility Bill"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">98% Document Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">24hr Document Delivery</span>
              </div>
            </div>
          </div>

          {/* Location 2: Removed motion.div wrapper from right column (form) */}
          <div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              {/* Scarcity Badge on Form */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Free Document Audit Worth ₹999
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight italic-none mt-4">Request GST Package</h3>
              <p className="text-sm text-slate-500 mb-8 italic-none">Documents generally shared in 24 business hours.</p>
              <LeadForm />

              {/* Risk Reversal */}
              <div className="mt-6 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[10px] text-blue-700 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3 h-3" />
                  No-obligation quote • Documents reviewed before payment
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
                <Clock3 className="w-4 h-4 text-blue-600" /> High-Priority Response
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustInfrastructureBar />

      {/* TESTIMONIALS SECTION - Moved before comparison for social proof flow */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic-none tracking-tight">Real GST Success Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Join 500+ businesses that successfully registered for GST using our addresses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Sharma",
              role: "Founder, CloudSaaS India",
              quote: "Got my GST registration in 12 days flat. The documentation was perfect - no queries from the department.",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
              rating: 5
            },
            {
              name: "Neha Verma",
              role: "Director, NexaConsult",
              quote: "The physical verification support was seamless. Their team coordinated everything with the GST inspector.",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
              rating: 5
            },
            {
              name: "Rajesh K.",
              role: "Owner, TradeLink",
              quote: "Worth every rupee. Saved me from the nightmare of address rejection. Highly recommended!",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
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

        {/* Success Metrics Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          {[
            { icon: TrendingUp, label: "Success Rate", value: "98%", desc: "Document approval" },
            { icon: Clock3, label: "Avg Timeline", value: "12 Days", desc: "GST registration" },
            { icon: Users, label: "Happy Clients", value: "500+", desc: "Across India" },
            { icon: Award, label: "Trust Score", value: "4.9/5", desc: "Verified reviews" }
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

      {/* --- STRATEGIC PRICING QUALIFIER --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200" id="pricing-qualifier">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-widest mb-6">
              No Predatory Pricing • No Hidden Fees
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight italic-none">
              Transparent Pricing for <br />Serious Businesses.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed italic-none">
              We've seen the ₹499/mo ads. They charge you extra for NOCs, mail handling, and compliance letters. Our pricing is fully-loaded, honest, and designed to satisfy your actual compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Location 3: CARD 1 - The Honest Standard (₹999) - Removed motion.div */}
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 italic-none">Standard Operations</h3>
              <p className="text-sm text-slate-500 mb-8 italic-none">Straightforward, fully-loaded virtual address for immediate compliance.</p>

              <div className="mb-8">
                <p className="text-5xl font-black text-slate-900 italic-none">₹999<span className="text-lg text-slate-500 font-normal">/mo</span></p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">Billed Annually • Zero Hidden Fees</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  "Verified Premium Address",
                  "GST & MCA Documentation (NOC Included)",
                  "Unlimited Digital Mail Forwarding",
                  "On-site Inspection Support",
                  "Cancel with 30-days notice"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <PremiumButton href="/contact?plan=standard" variant="secondary" className="w-full py-4 text-center justify-center">
                Get Started
              </PremiumButton>
            </div>

            {/* Location 4: CARD 2 - The Hook (First Year Free) - Removed motion.div */}
            <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-blue-500 shadow-2xl shadow-blue-900/20 flex flex-col relative overflow-hidden">
              {/* Eligibility Badge */}
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-5 py-2 uppercase tracking-widest rounded-bl-2xl">
                Application Required
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 italic-none">Long-Term Builder Subsidy</h3>
              <p className="text-sm text-slate-400 mb-8 italic-none">For founders and enterprises planning to scale over the next 3-4 years.</p>

              <div className="mb-8">
                <p className="text-5xl font-black text-white italic-none">1st Year <span className="text-blue-400">₹0</span></p>
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Subject to eligibility & term length
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  "Everything in Standard Operations",
                  "Price locked against inflation for 4 years",
                  "Dedicated Enterprise Account Manager",
                  "Priority Boardroom Access Credits",
                  "Free Multi-City Expansion Strategy"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <PremiumButton href="/contact?plan=subsidy" variant="primary" className="w-full py-4 text-center justify-center group">
                Check Eligibility <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </PremiumButton>
            </div>

          </div>

          {/* The Logical Explanation (Anti-Clickbait Mechanic) */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Who qualifies for the 1st Year Free?</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic-none">
              This subsidy is exclusively allocated for <strong className="text-slate-900">businesses committing to a 4-year operational presence</strong> and is further limited to <strong className="text-slate-900">select compliance-verified hubs</strong> where we are currently onboarding partners. We invest in the upfront paperwork, betting on your long-term growth. If you prefer agility without a long-term agreement, our transparent <strong className="text-slate-900">₹999/mo plan</strong> offers the exact same documentation suite with no commitment.
            </p>
          </div>
        </div>
      </section>

      <ClientGallery />

      {/* 4. THE COMPARISON LOGIC */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 italic-none tracking-tight text-slate-900">Practical Business Choice.</h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Compare the true cost of traditional leasing vs. our virtual infrastructure</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 opacity-60 grayscale">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-slate-400">Traditional Lease</h4>
              <ul className="space-y-4">
                {["Significant Monthly Rent", "6-Month Security Deposit", "Electricity & Maintenance", "Long Lock-in Periods"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase">
                    <ShieldAlert className="w-4 h-4" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-2xl font-bold text-slate-900">₹50,000+<span className="text-xs font-normal text-slate-500">/month</span></p>
                <p className="text-[10px] text-slate-400 mt-1">+ ₹3L security deposit</p>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border-2 border-blue-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-widest">Recommended</div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-blue-600">Virtual Infrastructure</h4>
              <ul className="space-y-4">
                {["Starts @ ₹999/Month", "Zero Security Deposit", "Inclusive Maintenance", "Flexible Plan Tiers"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-xs text-slate-900 font-black uppercase">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-3xl font-black text-blue-600">₹999<span className="text-sm font-normal text-slate-500">/month</span></p>
                <p className="text-[10px] text-emerald-600 mt-1 font-bold">✓ Save ₹4.8L+ annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOCUMENTATION GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: FileCheck, t: "Rent Agreement", d: "Notarized commercial lease as per government norms." },
                { icon: ShieldCheck, t: "Owner's NOC", d: "Formal No Objection Certificate for business use." },
                { icon: Building2, t: "Utility Bill", d: "Recent address proof from property owner." },
                { icon: SearchCheck, t: "Signage Proof", d: "Physical board display photo for address verification." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <item.icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 mb-2 italic-none">{item.t}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic-none tracking-tight">Compliance-Focused <br />Paperwork.</h2>
            <p className="text-lg text-slate-600 mb-8 italic-none">
              We avoid generic templates. Every document is audited by our internal compliance team to ensure it meets the state-specific requirements for your business registration.
            </p>
            <div className="flex items-center gap-4 py-6 border-y border-slate-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Designed for MCA & GST Standards</p>
            </div>
            {/* Added Guarantee Badge */}
            <div className="mt-6 flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-xs font-bold">100% document compliance guarantee or we revise for free</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSPECTION SUPPORT (Solving the Secret Fear) */}
      <section className="py-24 bg-slate-950 text-white rounded-[3.5rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic-none tracking-tight">On-Site Verification Support</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16 italic-none">
            Our partner locations are operational commercial environments designed to support departmental visits and audits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Building Signage", d: "Your brand name listed in the lobby or building directory." },
              { t: "Ready Records", d: "Maintenance of basic on-site records for verification visits." },
              { t: "Reception Desk", d: "On-site staff to greet visitors and coordinate with inspectors." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <SearchCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic-none">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GSTRejectionSection />
      <UseCasesSection />
      <BusinessRegistrationHub />
      <InfrastructureCapabilities />

      {/* 7. FAQ (Handling Objections Professionally) */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 italic-none tracking-tight">Common Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Is this suitable for GST registration?", a: "Our addresses are commonly used for GST registration along with supporting documentation. Final approval remains subject to departmental verification as per government norms." },
            { q: "How fast do I get the documents?", a: "Once KYC is completed and approved, documents are typically shared via email within 24 business hours." },
            { q: "What is your support for physical visits?", a: "Our support team coordinates with the partner location to assist during official verification visits at the registered address." },
            { q: "What happens if my GST application gets rejected?", a: "We'll work with you to understand the rejection reason and provide revised documentation if needed. Our success rate is 98% for first-time approvals." }
          ].map((item, i) => (
            <div key={i} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold mb-3 flex items-center gap-3 text-slate-900">
                <HelpCircle className="w-4 h-4 text-blue-600" /> {item.q}
              </h4>
              <p className="text-sm text-slate-500 italic-none leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA WITH URGENCY */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6">
          {/* Scarcity Timer */}
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-8">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Only 12 premium addresses left this quarter</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 italic-none tracking-tighter">Secure Your GST-Ready Address.</h2>
          <p className="text-slate-600 mb-10 text-lg italic-none max-w-xl mx-auto">
            Join 500+ businesses that successfully registered for GST. Get your compliance documents in 24 hours.
          </p>

          {/* Money-back Guarantee */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <p className="text-sm font-bold text-slate-700">100% Document Compliance Guarantee</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <PremiumButton href="/contact" variant="primary" className="px-14 py-5 text-lg shadow-xl shadow-blue-500/20 group">
              Get GST-Ready Documents
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>

            {/* WhatsApp for Free Audit Button with Tracking */}
            <a
              href="https://wa.me/918744041519?text=Hi,%20I%20need%20a%20GST-ready%20virtual%20office%20and%20want%20a%20free%20document%20audit."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-10 py-5 rounded-full font-bold shadow-xl hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600" />
              WhatsApp for Free Audit
            </a>
          </div>

          <p className="text-[10px] text-slate-400 mt-8">No obligation • Free consultation • Documents reviewed before payment</p>
        </div>
      </section>
    </div>
  );
}