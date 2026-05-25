import React from "react";
import { 
  MapPin, 
  FileCheck, 
  CreditCard, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Shield
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: MapPin,
      title: "Choose Your Location",
      desc: "Browse through 50+ prestigious business districts across India. Whether it's BKC in Mumbai or HSR in Bangalore, pick the address that fits your brand.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: FileCheck,
      title: "Seamless Verification",
      desc: "Submit your basic KYC documents and business details through our secure, encrypted portal. Our compliance team reviews everything within hours.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: CreditCard,
      title: "Pick a Flexible Plan",
      desc: "Select a plan that suits your needs—from basic mailing to full GST registration support. No hidden security deposits or maintenance fees.",
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      icon: Rocket,
      title: "Get Your Documentation",
      desc: "Receive your notarized Rent Agreement, NOC, and Utility Bills within 24 hours. You're now ready to apply for GST or Company registration.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="bg-white">
      {/* --- HERO HEADER --- */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* FIX 1: Removed motion.div. Text is now guaranteed to be visible. */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Simple. Fast. <span className="text-brand-primary">Compliant.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Setting up your business address at <strong>Virtual Address</strong> shouldn't be a hurdle. We've optimized every step to get you up and running in 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE VISUAL TIMELINE --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="hidden lg:block absolute left-1/2 top-40 bottom-40 w-0.5 bg-slate-100 -translate-x-1/2" />
        
        <div className="space-y-24">
          {steps.map((step, i) => (
            /* FIX 2: Removed motion.div and animation props from timeline steps. */
            <div 
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className={`p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white`}>
                  <div className={`w-16 h-16 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed italic-none">{step.desc}</p>
                </div>
              </div>
              
              <div className="hidden lg:flex w-12 h-12 rounded-full bg-brand-primary text-white items-center justify-center font-bold z-10 shadow-lg shadow-brand-primary/20">
                {i + 1}
              </div>
              
              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>
      </section>

      {/* --- DOCUMENTATION BREAKDOWN --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic-none">The Complete <br />Documentation Suite.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                When you choose Virtual Address, you receive 100% legally compliant paperwork required by the MCA and GST departments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Notarized Rent Agreement",
                  "Owner NOC for GST",
                  "Recent Utility Bill",
                  "Proof of Possession",
                  "Physical Signage Proof",
                  "Digital Lease Copy"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                    <span className="text-sm font-medium text-slate-200">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12">
               <ShieldCheck className="w-12 h-12 text-brand-cyan mb-6" />
               <h3 className="text-2xl font-bold mb-4">Strict Compliance Policy</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 Every location in our network is physically verified. We ensure that your business stays compliant with the latest government regulations, protecting you from future departmental issues.
               </p>
               <div className="flex items-center gap-4 py-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-wide uppercase">Audit Ready Address</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS / TRUST --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <Clock className="w-10 h-10 text-brand-primary mx-auto mb-6" />
            <h4 className="text-4xl font-bold text-slate-900 mb-2">24h</h4>
            <p className="text-slate-500 font-medium italic-none">Turnaround Time</p>
          </div>
          <div>
            <ShieldCheck className="w-10 h-10 text-brand-primary mx-auto mb-6" />
            <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
            <p className="text-slate-500 font-medium">Compliance Rate</p>
          </div>
          <div>
            <Rocket className="w-10 h-10 text-brand-primary mx-auto mb-6" />
            <h4 className="text-4xl font-bold text-slate-900 mb-2">1.2k+</h4>
            <p className="text-slate-500 font-medium">Successful Onboardings</p>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic-none text-slate-900">Ready to start?</h2>
          <p className="text-slate-600 mb-10">Select a location and get your documents in less than a day.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton href="/locations" variant="primary" showArrow className="w-full sm:w-auto px-10">
              Pick a Location
            </PremiumButton>
            <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="w-full sm:w-auto px-10">
              WhatsApp Us
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
}