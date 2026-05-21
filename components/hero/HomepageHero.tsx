"use client";

import { CheckCircle2, ShieldCheck, FileText, MapPin, Building2 } from "lucide-react";
import { LeadForm } from "../lead/LeadForm";

export function HomepageHero() {
  const trustMetrics = [
    { icon: <ShieldCheck className="w-5 h-5 text-brand-primary" />, text: "Verified Addresses" },
    { icon: <FileText className="w-5 h-5 text-brand-primary" />, text: "GST Documentation" },
    { icon: <MapPin className="w-5 h-5 text-brand-primary" />, text: "50+ Locations" },
  ];

  return (
    <section className="relative z-0 bg-white pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      
      {/* Premium Background Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] -z-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content (Changed to standard div) */}
          <div className="max-w-2xl mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              India's Most Trusted Virtual Office Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Premium Virtual Offices for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-indigo">
                GST & Company
              </span>{' '}
              Registration.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Get a prestigious business address across India. We provide complete documentation 
              support, mail handling, and fast onboarding without the premium price tag.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {trustMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                  {metric.icon}
                  <span className="text-sm font-semibold text-slate-800">{metric.text}</span>
                </div>
              ))}
            </div>

            {/* Avatar Section */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-40" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-30" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20" alt="Startup Founder" />
                <img src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10" alt="Startup Founder" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +2k
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Trusted by <span className="font-semibold text-slate-900">12,000+ businesses</span>
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form (Changed to standard div) */}
          <div className="lg:ml-auto w-full max-w-md mx-auto mt-12 lg:mt-0 relative z-20">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}