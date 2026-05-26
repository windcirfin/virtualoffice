import React from "react";
import {
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  SearchCheck,
  Building2,
  HelpCircle,
  Star,
  Scale,
  Clock3,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Info,
  MessageCircle,
  MapPin,
  UserCheck,
} from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { PremiumButton } from "@/components/ui/PremiumButton";
import TrustInfrastructureBar from "@/app/lp/TrustInfrastructureBar";
import GSTRejectionSection from "@/app/lp/GSTRejectionSection";
import UseCasesSection from "@/app/lp/UseCasesSection";
import BusinessRegistrationHub from "@/app/lp/BusinessRegistrationHub";
import InfrastructureCapabilities from "@/app/lp/InfrastructureCapabilities";
import { ClientGallery } from "@/components/sections/ClientGallery";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// ------------------------------------------------------------------------------------------------
// REAL DATA – replace these numbers with actual, verifiable metrics from your back‑end / CRM
// ------------------------------------------------------------------------------------------------
const VERIFIED_STATS = {
  registrations: 500, // Total GST registrations completed using your addresses
  approvalRate: 98, // Document approval rate on first submission (must be trackable)
  avgDays: 12, // Average GST registration timeline (from document handover)
  reviewScore: 4.9, // Google / Trustpilot rating
  reviewCount: 312, // Total number of verified reviews
};

const FAQ_ITEMS = [
  {
    q: "Is this address accepted for GST registration?",
    a: "Yes, our addresses are regularly used for GST registration. We provide a complete documentation kit (registered rent agreement, owner NOC, utility bill) that meets department norms. Final approval is subject to GST officer verification.",
  },
  {
    q: "What if a GST inspector visits?",
    a: "All our locations are operational business centers with reception, building signage, and your company’s name displayed. We coordinate with your team to ensure the inspector finds a functional workspace. A day‑pass or flexible seat is included in your plan for such visits.",
  },
  {
    q: "How soon do I get the documents?",
    a: "After KYC is verified, documents are typically emailed within 24 business hours. Urgent requests are prioritized.",
  },
  {
    q: "What if my GST application gets rejected?",
    a: "We’ll analyse the rejection notice with you at no cost. If the issue stems from our documentation, we’ll revise and resubmit it free of charge.",
  },
  {
    q: "Is this a genuine office, not just a PO Box?",
    a: "Absolutely. Our addresses are physical coworking spaces and business centres – not mail‑drop boxes. You get a real seat, meeting room access, and a live reception desk.",
  },
];

export default function HighTrustGSTFunnel() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      {/* ===== 1. Top Trust Strip + Legally Safe Scarcity ===== */}
      <div className="bg-slate-900 py-2.5 px-4 text-center">
        <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.25em]">
          All addresses verified for 2026 compliance – Documentation audited by legal team
        </p>
      </div>

      {/* Genuine capacity notice (use real numbers from your inventory) */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800">
          <AlertCircle className="w-3 h-3" />
          <span>
            High demand in BKC, Gurgaon & Bangalore –{" "}
            <strong>limited seats available this quarter</strong>. Secure yours now.
          </span>
          <Clock3 className="w-3 h-3" />
        </div>
      </div>

      {/* ===== 2. Hero with Honest Social Proof ===== */}
      <section className="relative pt-16 pb-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30 -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-wider mb-8">
              GST Documentation & Address Support
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Address & paperwork <br />
              <span className="text-blue-600">aligned with GST norms.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Get a genuine workspace address, a lawyer‑vetted documentation kit, and on‑ground support during inspector visits. Designed to reduce documentation rejections.
            </p>

            {/* Verified Social Proof (replace with live data) */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 mb-8">
              <div className="flex -space-x-3">
                {/* Generic, non‑personalised avatar stack – shows community, not individuals */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    <UserCheck className="w-4 h-4" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                  +{VERIFIED_STATS.registrations}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">
                    {VERIFIED_STATS.registrations}+ businesses
                  </span>{" "}
                  have registered for GST using our addresses
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] text-slate-500 ml-1">
                    {VERIFIED_STATS.reviewScore}/5 from {VERIFIED_STATS.reviewCount} reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Notarised Rent Agreement", "Owner NOC", "Utility Bill"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  {VERIFIED_STATS.approvalRate}% Document Approval
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  24hr Document Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column – Form */}
          <div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Free Consultation & Document Checklist
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight mt-4">
                Request your GST kit
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Documents generally shared within 24 business hours.
              </p>
              <LeadForm />

              <div className="mt-6 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[10px] text-blue-700 text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3 h-3" />
                  No‑obligation quote · Documents reviewed before payment
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
                <Clock3 className="w-4 h-4 text-blue-600" /> High‑Priority Response
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustInfrastructureBar />

      {/* ===== 3. Real Success Metrics (No fake avatars) ===== */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by growing businesses
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our addresses and documentation have supported hundreds of GST registrations across India.
          </p>
        </div>

        {/* Factual metric cards – all data must be real */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          {[
            {
              icon: TrendingUp,
              label: "Document Approval",
              value: `${VERIFIED_STATS.approvalRate}%`,
              desc: "First‑time submission",
            },
            {
              icon: Clock3,
              label: "Avg. GST Timeline",
              value: `${VERIFIED_STATS.avgDays} Days`,
              desc: "From document handover",
            },
            {
              icon: Building2,
              label: "Businesses Served",
              value: `${VERIFIED_STATS.registrations}+`,
              desc: "Across India",
            },
            {
              icon: Star,
              label: "Client Rating",
              value: `${VERIFIED_STATS.reviewScore}/5`,
              desc: `${VERIFIED_STATS.reviewCount} verified reviews`,
            },
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-black text-slate-900">{metric.value}</p>
              <p className="text-xs font-bold text-slate-700">{metric.label}</p>
              <p className="text-[10px] text-slate-500">{metric.desc}</p>
            </div>
          ))}
        </div>

        {/* DISCLAIMER – mandatory legal shield */}
        <p className="text-xs text-slate-400 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
          * Metrics are based on internal data from the past 12 months. GST registration is subject to
          department verification and approval. We provide documentation and address support;
          approval is not guaranteed.
        </p>
      </section>

      {/* ===== 4. Transparent Pricing (clarify what’s included) ===== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-widest mb-6">
              No Hidden Fees · Fully Loaded Documentation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Real office address, <br /> real compliance.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every plan includes a genuine workspace seat (flexible / day‑pass), a complete GST
              documentation kit, and on‑site inspection coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Workspace</h3>
              <p className="text-sm text-slate-500 mb-8">
                One flexible seat, compliant documents, and everything you need for GST registration.
              </p>
              <div className="mb-8">
                <p className="text-5xl font-black text-slate-900">
                  ₹999<span className="text-lg text-slate-500 font-normal">/mo</span>
                </p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                  Billed Annually · All documents included
                </p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  "Dedicated seat in a premium business center",
                  "GST & MCA documentation (NOC included)",
                  "Unlimited digital mail forwarding",
                  "Day‑pass for inspector visits",
                  "Cancel with 30‑days notice",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <PremiumButton
                href="/contact?plan=standard"
                variant="secondary"
                className="w-full py-4 text-center justify-center"
              >
                Get Started
              </PremiumButton>
            </div>

            {/* Long‑Term Builder Plan */}
            <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-blue-500 shadow-2xl shadow-blue-900/20 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-5 py-2 uppercase tracking-widest rounded-bl-2xl">
                Application Required
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Long‑Term Builder</h3>
              <p className="text-sm text-slate-400 mb-8">
                For businesses committing to 4‑year growth. First year on us.
              </p>
              <div className="mb-8">
                <p className="text-5xl font-black text-white">
                  1st Year <span className="text-blue-400">₹0</span>
                </p>
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Subject to eligibility & 4‑year term
                </p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  "Everything in Standard Workspace",
                  "Price locked for 4 years",
                  "Dedicated enterprise manager",
                  "Priority meeting room credits",
                  "Free multi‑city expansion strategy",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <PremiumButton
                href="/contact?plan=subsidy"
                variant="primary"
                className="w-full py-4 text-center justify-center group"
              >
                Check Eligibility{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </PremiumButton>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Who qualifies for the 1st Year Free?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              This subsidy is reserved for businesses that commit to a 4‑year term in one of our partner
              hubs. We invest in your documentation upfront, betting on your long‑term growth. Prefer
              agility? The <strong>₹999/mo Standard Workspace</strong> plan offers the same documentation
              with no long‑term lock‑in.
            </p>
          </div>
        </div>
      </section>

      <ClientGallery />

      {/* ===== 5. Comparison (Traditional vs. Our Workspace) ===== */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight text-slate-900">
            A real alternative to traditional leasing
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Compare the true cost and documentation burden of a physical lease vs. our ready‑to‑use
            workspace address.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 opacity-60 grayscale">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-slate-400">
                Traditional Lease
              </h4>
              <ul className="space-y-4">
                {[
                  "Significant monthly rent",
                  "6‑month security deposit",
                  "Electricity & maintenance",
                  "Long lock‑in periods",
                  "Self‑managed documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase"
                  >
                    <AlertCircle className="w-4 h-4" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-2xl font-bold text-slate-900">
                  ₹50,000+<span className="text-xs font-normal text-slate-500">/month</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">+ ₹3L security deposit</p>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border-2 border-blue-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-widest">
                Recommended
              </div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-blue-600">
                Our Workspace Address
              </h4>
              <ul className="space-y-4">
                {[
                  "Starts at ₹999/month",
                  "Zero security deposit",
                  "Inclusive maintenance",
                  "Flexible terms",
                  "Pre‑prepared documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-slate-900 font-black uppercase"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-3xl font-black text-blue-600">
                  ₹999<span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <p className="text-[10px] text-emerald-600 mt-1 font-bold">
                  ✓ Save up to ₹4.8L+ annually
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. Documentation Grid ===== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: FileCheck,
                  t: "Registered Rent Agreement",
                  d: "Notarised commercial lease as per government norms.",
                },
                {
                  icon: ShieldCheck,
                  t: "Owner’s NOC",
                  d: "Formal No‑Objection Certificate for business use.",
                },
                {
                  icon: Building2,
                  t: "Utility Bill",
                  d: "Recent address proof from the property owner.",
                },
                {
                  icon: SearchCheck,
                  t: "Signage Proof",
                  d: "Physical name board displayed at the premises.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <item.icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Documentation, <br />
              not templates.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every document is reviewed by our legal partner to match your state’s specific GST
              requirements. No generic paperwork.
            </p>
            <div className="flex items-center gap-4 py-6 border-y border-slate-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                Audited for MCA & GST standards
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-xs font-bold">
                100% documentation compliance guarantee or we revise at no cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. Inspection Support (Physical verification clarity) ===== */}
      <section className="py-24 bg-slate-950 text-white rounded-[3.5rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Physical verification? We’ve got it covered.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">
            Our partner locations are fully operational business centres – not virtual “addresses.”
            When an inspector visits, your seat is ready.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                t: "Building Signage",
                d: "Your company name listed in the lobby directory and on your dedicated desk.",
              },
              {
                t: "Ready Records",
                d: "On‑site attendance register and basic business records maintained.",
              },
              {
                t: "Reception & Staff",
                d: "Live reception desk to greet visitors and coordinate with inspectors.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GSTRejectionSection />
      <UseCasesSection />
      <BusinessRegistrationHub />
      <InfrastructureCapabilities />

      {/* ===== 8. FAQ (Honest, legally safe answers) ===== */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold mb-3 flex items-center gap-3 text-slate-900">
                <HelpCircle className="w-4 h-4 text-blue-600" /> {item.q}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 9. Final CTA – No fake urgency, clear disclaimer ===== */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Get your GST documentation kit today.
          </h2>
          <p className="text-slate-600 mb-10 text-lg max-w-xl mx-auto">
            Join {VERIFIED_STATS.registrations}+ businesses that used our addresses for GST
            registration. Receive your documents within 24 hours.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <p className="text-sm font-bold text-slate-700">
              100% documentation compliance promise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <PremiumButton
              href="/contact"
              variant="primary"
              className="px-14 py-5 text-lg shadow-xl shadow-blue-500/20 group"
            >
              Request Documents
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>

            <WhatsAppButton
              href="https://wa.me/918744041519?text=Hi,%20I%20need%20a%20GST-compliant%20workspace%20address%20and%20documentation."
              className="flex items-center justify-center gap-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-10 py-5 rounded-full font-bold shadow-xl hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600" />
              <span>Chat on WhatsApp</span>
            </WhatsAppButton>
          </div>

          <p className="text-xs text-slate-400 mt-8 max-w-xl mx-auto leading-relaxed">
            * No‑obligation consultation. Final GST registration is subject to government approval. We
            provide address and documentation support; we do not guarantee registration outcome.
          </p>
        </div>
      </section>
    </div>
  );
}