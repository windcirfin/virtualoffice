"use client";

import React from "react";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Globe, 
  ShieldCheck,
  Building2,
  HeadphonesIcon
} from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call our Experts",
      value: "+91 87440 41519",
      desc: "Direct line to our business consultants.",
      action: "tel:+918744041519",
      label: "Call Now",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      value: "+91 87440 41519",
      desc: "Fastest response for quick queries.",
      action: "https://wa.me/918744041519",
      label: "Chat on WhatsApp",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      value: "hello@virtualaddress.in",
      desc: "For detailed proposals and partnerships.",
      action: "mailto:hello@virtualaddress.in",
      label: "Send Email",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  const offices = [
    { city: "Bangalore HQ", address: "Level 7, Prestige Shantiniketan, Whitefield, KA 560048" },
    { city: "Mumbai Hub", address: "Bandra Kurla Complex, G Block BKC, Mumbai, MH 400051" },
    { city: "New Delhi", address: "Statesman House, Barakhamba Road, Connaught Place, DL 110001" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Location 1: Removed motion.div wrapper */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Let's Build Your <br />
              <span className="text-brand-primary">Presence in India.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about GST documentation, specific locations, or custom corporate plans? Our business experts are ready to assist you.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
      </section>

      {/* --- CONTACT METHODS CARDS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Location 2: Changed motion.div to regular div and removed animation props */}
          {contactMethods.map((method, i) => (
            <div
              key={i}
              className="p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`w-14 h-14 ${method.bg} ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{method.desc}</p>
              <a href={method.action} className={`text-lg font-bold ${method.color} block mb-4 hover:underline`}>
                {method.value}
              </a>
              <div className="pt-4 border-t border-slate-50">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{method.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAIN INTERACTION ZONE: FORM + INFO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Content & Trust */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Talk to Us?</h2>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "GST Compliance Experts", desc: "We understand the documentation requirements for every state in India." },
                  { icon: Clock, title: "15-Minute Response", desc: "During business hours, our experts respond to inquiries almost instantly." },
                  { icon: HeadphonesIcon, title: "Dedicated Onboarding", desc: "Get a dedicated manager to help you through the KYC and registration process." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
               <Globe className="w-32 h-32 text-white/5 absolute -bottom-8 -right-8" />
               <h3 className="text-xl font-bold mb-4 relative z-10">Our Operational Hubs</h3>
               <div className="space-y-6 relative z-10">
                 {offices.map((office, i) => (
                   <div key={i} className="flex gap-4">
                     <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
                     <div>
                       <p className="font-bold text-sm">{office.city}</p>
                       <p className="text-xs text-slate-400 leading-relaxed">{office.address}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Updated Premium Avatar Section with Real Professional Images */}
            <div className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100">
              <div className="flex -space-x-3">
                {/* 1. Professional Man in Suit */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-40" 
                  alt="Startup Founder" 
                />
                
                {/* 2. Professional Woman Corporate */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-30" 
                  alt="Startup Founder" 
                />
                
                {/* 3. Professional Man Startup Casual */}
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20" 
                  alt="Startup Founder" 
                />
                
                {/* 4. Professional Woman Startup */}
                <img 
                  src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&h=100&fit=crop&crop=faces" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10" 
                  alt="Startup Founder" 
                />

                {/* The +2k Badge */}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white relative z-0">
                  +2k
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Join <span className="font-bold text-slate-900">2,000+ founders</span> who launched their business with us this year.
              </p>
            </div>
          </div>

          {/* --- UPDATED: FORM CARD WITH INTERACTION FIX --- */}
          <div className="sticky top-32">
            <div className="relative">
              {/* 1. Added pointer-events-none so this doesn't block clicks */}
              <div className="absolute -inset-8 bg-brand-primary/10 rounded-[3rem] blur-3xl opacity-50 pointer-events-none -z-10"></div>
              
              {/* 2. Wrapped LeadForm in a clear, white premium card with z-index */}
              <div className="relative z-10 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Send a Message</h3>
                  <p className="text-sm text-slate-500">Our experts typically respond within 15 minutes.</p>
                </div>
                
                <LeadForm />
              </div>
            </div>
            
            {/* Trust Badges below the card */}
            <div className="mt-8 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mb-4">Secured Lead Processing</p>
              <div className="flex justify-center gap-6 opacity-30 grayscale items-center">
                <div className="font-black text-[10px]">ISO 27001</div>
                <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                <div className="font-black text-[10px]">GDPR READY</div>
                <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                <div className="font-black text-[10px]">SSL SECURE</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- PRE-CONTACT FAQ SECTION --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
               <h4 className="font-bold mb-2 flex items-center gap-2">
                 <Building2 className="w-4 h-4 text-brand-primary" />
                 How fast is the process?
               </h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 Once payment is confirmed, we issue your digital Rent Agreement and NOC within 24 business hours.
               </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
               <h4 className="font-bold mb-2 flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-brand-primary" />
                 Is my business data safe?
               </h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 We use bank-grade encryption for all document handling. Your data is only used for registration purposes.
               </p>
            </div>
          </div>
          <div className="mt-10">
             <PremiumButton href="/faq" variant="secondary">View Full FAQ</PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
}