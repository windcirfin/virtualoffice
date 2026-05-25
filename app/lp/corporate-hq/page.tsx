import React from "react";
import {
  Building2,
  Globe,
  ShieldCheck,
  UserCheck,
  ChevronRight,
  Lock,
  Search,
  Briefcase,
  Layers,
  Map,
  BadgeCheck,
  FileText,
  Star,
  TrendingUp,
  Calendar,
  ArrowRight,
  Clock,
  Award,
  Users,
  CheckCircle2,
  Info,
  MessageCircle
} from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { PremiumButton } from "@/components/ui/PremiumButton";
import BusinessRegistrationHub from "@/app/lp/BusinessRegistrationHub";
import InfrastructureCapabilities from "@/app/lp/InfrastructureCapabilities";

export default function HighTrustCorporateFunnel() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-600 selection:text-white">

      {/* Top Trust Strip + Limited Availability */}
      <div className="bg-slate-900 border-b border-blue-500/20 py-2.5 px-4 text-center">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">
          Trusted by 50+ Enterprises • ISO 27001 Certified Infrastructure
        </p>
      </div>

      {/* Scarcity Banner - subtle but effective for enterprise */}
      <div className="bg-blue-950/40 border-b border-blue-500/20 py-2 px-4 text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-cyan-400">
          <Calendar className="w-3 h-3" />
          <span>Enterprise-grade locations currently available across 6 major metros — premium inventory limited</span>
        </div>
      </div>

      {/* 2. THE GROUNDED HERO with Social Proof */}
      <section className="relative pt-16 pb-32 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Location 1: Removed motion.div wrapper from left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.15em] mb-8">
              National Footprint Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tighter italic-none">
              Enterprise Scale. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Zero CapEx.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed italic-none max-w-xl">
              Establish compliant regional offices and corporate headquarters across India's premier commercial districts. We provide the infrastructure; you focus on expansion.
            </p>

            {/* Avatar Section - Enterprise Trust */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 mb-8">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover relative z-40"
                  alt="Enterprise Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover relative z-30"
                  alt="Enterprise Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover relative z-20"
                  alt="Enterprise Client"
                />
                <img
                  src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces"
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover relative z-10"
                  alt="Enterprise Client"
                />
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +50
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-300">
                  <span className="font-bold text-white">50+ enterprises</span> including Fortune 500s and unicorns
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                  <span className="text-[10px] text-slate-500 ml-1">4.8/5 from 120+ corporate reviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-12">
              {["BKC, Mumbai", "Cyber City, Gurgaon", "UB City, Bangalore"].map((loc) => (
                <div key={loc} className="flex items-center gap-2 text-sm font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  {loc}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">24/7 Enterprise Support</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">GDPR & DPDP Ready</span>
              </div>
            </div>
          </div>

          {/* Location 2: Removed motion.div wrapper from right column (form) */}
          <div>
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative border border-white/10 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              {/* Free Strategy Session Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Complimentary Strategy Call
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight italic-none mt-4">Corporate Inquiry</h3>
              <p className="text-slate-400 mb-8 italic-none text-sm">Our enterprise team will respond with a multi-city proposal within 4 business hours.</p>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6">
                <LeadForm />
              </div>

              {/* Risk Reversal */}
              <div className="mt-4 p-3 bg-blue-950/40 rounded-xl border border-blue-500/20">
                <p className="text-[10px] text-cyan-400 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3 h-3" />
                  Non-binding consultation • Custom SLA options • NDAs available
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
                <Lock className="w-4 h-4 text-cyan-500" /> B2B Client Data Protected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials - Added for social proof */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic-none tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">How enterprises are scaling across India with zero capital expenditure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Sanjeev Mehta",
              role: "CFO, NeoBank India",
              quote: "Deployed regional offices in 6 cities within 2 weeks. The consolidated invoicing and compliance support saved our legal team countless hours.",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
              company: "Fortune 500"
            },
            {
              name: "Anjali Krishnan",
              role: "Head of Operations, CloudScale",
              quote: "Their on-site verification support and professional front desk make us look established without the overhead. A game-changer for our expansion.",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
              company: "Unicorn Startup"
            }
          ].map((t, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-slate-300 italic mb-6 text-md">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500" alt={t.name} />
                <div>
                  <h5 className="font-bold text-white">{t.name}</h5>
                  <p className="text-xs text-cyan-400">{t.role}</p>
                  <p className="text-[10px] text-slate-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 rounded-2xl p-8 border border-white/10">
          {[
            { icon: Building2, label: "Corporate Locations", value: "50+", desc: "Across 20+ cities" },
            { icon: Users, label: "Enterprise Clients", value: "50+", desc: "Including Fortune 500s" },
            { icon: Clock, label: "Avg Deployment", value: "48h", desc: "From contract to operational" },
            { icon: TrendingUp, label: "Cost Savings", value: "85%", desc: "Vs traditional leasing" }
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <metric.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-2xl font-black text-white">{metric.value}</p>
              <p className="text-xs font-bold text-cyan-400">{metric.label}</p>
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
              The Long-Term Builder Subsidy is exclusively available to <strong className="text-slate-900">corporate entities deploying multi-city regional offices</strong> and is limited to <strong className="text-slate-900">premium commercial parks</strong> where we have active enterprise inventory. If you are expanding across 3+ cities, we'd be happy to discuss eligibility. For single-city deployments, our transparent <strong className="text-slate-900">₹999/mo plan</strong> offers the exact same enterprise infrastructure with zero long-term lock-ins.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL REALITY SECTION */}
      <section className="py-32 border-y border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 italic-none tracking-tight">Managed Corporate Ecosystems.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic-none leading-relaxed">
              We bridge the gap between digital flexibility and strict Indian regulatory requirements by providing professionally managed physical hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, title: "Verification Supportive", desc: "Our locations are managed to assist with departmental compliance checks, bank verifications, and MCA requirements." },
              { icon: Lock, title: "Secure Correspondence", desc: "Strict operational protocols for receiving, logging, and digitizing sensitive corporate and legal mail." },
              { icon: UserCheck, title: "Professional Front Desk", desc: "Trained administrative personnel to handle daily reception duties and coordinate during official premise visits." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                <item.icon className="w-10 h-10 text-blue-500 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4 italic-none">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed italic-none text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPANSION & ACCOUNT MANAGEMENT */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <img src="/images/hero/hero-bg.webp" alt="Corporate Building" className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10" />
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">Sample Infrastructure</p>
              <h4 className="text-lg font-bold text-white italic-none">Premium Commercial Park, Mumbai</h4>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic-none tracking-tight">National Scale. <br />Streamlined Operations.</h2>
            <p className="text-slate-400 text-lg mb-10 italic-none leading-relaxed">
              Expand into 20+ states with a single vendor relationship. We simplify your multi-city infrastructure by removing the headache of fragmented local brokers.
            </p>
            <div className="space-y-5">
              {[
                "Consolidated Monthly Invoicing",
                "Dedicated Enterprise Account Manager",
                "Standardized Legal Documentation Formats",
                "Assistance with Building Directory Signage"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            {/* Guarantee for Enterprise */}
            <div className="mt-10 flex items-center gap-3 bg-cyan-950/30 p-4 rounded-xl border border-cyan-500/20">
              <BadgeCheck className="w-5 h-5 text-cyan-400" />
              <p className="text-xs text-slate-300">Enterprise SLA guaranteed • 99.9% uptime for mail handling • Dedicated account team</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE ROI LOGIC (CFO-Friendly) */}
      <section className="py-32 bg-white text-slate-900 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 italic-none tracking-tight">Strategic Efficiency.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Compare the overhead of opening a traditional 2,000 sq.ft. regional office versus deploying our managed infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 md:p-12 rounded-[3rem] border border-slate-200 bg-slate-50">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Traditional Office Setup</h4>
              <div className="space-y-6">
                <div className="flex justify-between font-bold border-b border-slate-200 pb-4 text-sm"><span className="text-slate-700">CapEx (Interiors/IT)</span> <span className="text-slate-900">₹25L+</span></div>
                <div className="flex justify-between font-bold border-b border-slate-200 pb-4 text-sm"><span className="text-slate-700">Security Deposit</span> <span className="text-slate-900">₹15L+</span></div>
                <div className="flex justify-between font-bold border-b border-slate-200 pb-4 text-sm"><span className="text-slate-700">Monthly Ops & Admin</span> <span className="text-slate-900">₹3L/Mo</span></div>
                <div className="flex justify-between font-bold pb-2 text-sm"><span className="text-slate-700">Time to Operational</span> <span className="text-slate-900">3-4 Months</span></div>
              </div>
            </div>
            <div className="p-10 md:p-12 rounded-[3rem] bg-[#020617] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 px-5 py-2 text-[10px] font-black uppercase tracking-widest">Optimized Strategy</div>
              <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">Virtual Address Deployment</h4>
              <div className="space-y-6">
                <div className="flex justify-between font-bold border-b border-white/10 pb-4 text-sm"><span className="text-slate-300">CapEx (Interiors/IT)</span> <span className="text-emerald-400">₹0</span></div>
                <div className="flex justify-between font-bold border-b border-white/10 pb-4 text-sm"><span className="text-slate-300">Security Deposit</span> <span className="text-emerald-400">₹0</span></div>
                <div className="flex justify-between font-bold border-b border-white/10 pb-4 text-sm"><span className="text-slate-300">Monthly Subscription</span> <span className="text-emerald-400">Fractional</span></div>
                <div className="flex justify-between font-bold pb-2 text-sm"><span className="text-slate-300">Time to Operational</span> <span className="text-emerald-400">24-48 Hours</span></div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-emerald-400 text-sm font-bold">Estimated annual savings: ₹50L+ per city</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEXT COLOR RESET WRAPPER: 
          Forces dark text for these light-themed shared components 
          so they don't inherit the light text from the Corporate HQ dark mode wrapper. */}
      <div className="text-slate-900">
        <BusinessRegistrationHub />
        <InfrastructureCapabilities />
      </div>

      {/* 6. ENTERPRISE FAQ (Honest & Legally Safe) */}
      <section className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 italic-none text-white tracking-tight">Institutional Inquiries</h2>
        <div className="space-y-6">
          {[
            { q: "Do you support MNCs expanding to India?", a: "Yes. We provide the commercial address and baseline No Objection Certificates required to support your legal team's MCA and ROC filings for Indian subsidiaries." },
            { q: "Can we display our corporate signage?", a: "Most of our Enterprise-tier locations allow for brand name listing on the main building directory or internal lobby signage, strictly subject to individual building by-laws." },
            { q: "How is correspondence privacy maintained?", a: "We employ strict operational protocols for mail handling. Physical mail is securely stored, and digital scans are processed by authorized personnel only, prior to forwarding." },
            { q: "What SLAs do you offer for enterprises?", a: "We provide custom SLAs including 4-hour response times, dedicated account managers, and monthly compliance reports. Contact our enterprise team for a detailed proposal." }
          ].map((faq, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-500" /> {faq.q}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed italic-none">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE ELITE CTA with Urgency */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -z-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6">
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Premium enterprise locations available — limited inventory</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 italic-none tracking-tighter">Ready to Deploy?</h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto italic-none">
            Partner with India's premier corporate infrastructure network. Request a detailed, multi-city proposal for your board.
          </p>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <p className="text-sm font-medium text-slate-300">Enterprise-grade SLAs • Confidentiality agreements • No-obligation consultation</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <PremiumButton href="/contact" variant="primary" className="px-14 py-5 text-lg shadow-2xl shadow-blue-600/30 group">
              Request Enterprise Proposal
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>

            {/* Enterprise Desk WhatsApp Button - Replaces Schedule Strategy Call */}
            <a
              href="https://wa.me/918744041519?text=Hi,%20I%20need%20an%20enterprise%20proposal%20for%20multi-city%20virtual%20offices."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Chat with Enterprise Desk
            </a>
          </div>
          <p className="text-[10px] text-slate-600 mt-8">Response within 4 business hours • NDAs available • Custom pricing for scale</p>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.4em] font-bold">
          Virtual Address ® • Enterprise Infrastructure Division • Mumbai • Bangalore • New Delhi
        </p>
      </footer>
    </div>
  );
}