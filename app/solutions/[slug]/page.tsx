import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Building2, 
  FileText, 
  Users, 
  Globe, 
  Lock, 
  Layout, 
  Eye, 
  SearchCheck,
  Plus
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

const iconMap: any = {
  Building2, FileText, Users, Globe, Lock, Layout, Eye, ShieldCheck, Zap
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const data = solutions[slug];

  if (!data) return notFound();

  return (
    <div className="bg-white">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* FIXED: Changed motion-div to regular div since motion is not imported */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase mb-6 border border-brand-primary/20">
              Premium Solutions
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <PremiumButton href="/contact" variant="primary" className="px-10">Get Started</PremiumButton>
               <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="px-10">Talk to Expert</PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE CORE VALUE PROP --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight italic-none">
              Built for Growth. <br />Designed for Trust.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic-none">
              {data.description} <br /><br />
              <span className="font-bold text-slate-900">{data.mainBenefit}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.features.map((f, i) => {
                const Icon = iconMap[f.icon] || CheckCircle2;
                return (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <Icon className="w-8 h-8 text-brand-primary mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-brand-navy rounded-[3rem] p-12 text-white relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]"></div>
             <ShieldCheck className="w-16 h-16 text-brand-cyan mb-8" />
             <h3 className="text-3xl font-bold mb-6 italic-none tracking-tight">Compliance Guaranteed</h3>
             <p className="text-slate-400 mb-8 leading-relaxed italic-none">
               At Virtual Address, we take liability seriously. Every document is prepared by corporate legal experts to ensure you are 100% compliant with local and national regulations.
             </p>
             <ul className="space-y-4 mb-10">
                {["Lobby Listing Included", "Audit-Ready Seating", "Physical Mail Storage"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <Plus className="w-4 h-4 text-brand-cyan" /> {item}
                  </li>
                ))}
             </ul>
             <PremiumButton href="/contact" variant="primary" className="bg-white text-brand-navy border-none hover:bg-slate-100">
               Request Custom Proposal
             </PremiumButton>
          </div>
        </div>
      </section>

      {/* --- 3. INDUSTRY USE CASES --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who is this for?</h2>
            <p className="text-slate-500">Tailored solutions for every stage of your business journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.useCases.map((use, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <div className="text-brand-primary font-black text-4xl mb-4 opacity-10">0{i+1}</div>
                <h4 className="font-bold text-slate-900 mb-3">{use.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. DOCUMENTATION CHECKLIST --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 italic-none">Your Documentation <br />Checklist</h2>
                <p className="text-slate-600 mb-10 italic-none">We provide the following mandatory documents within 24 hours of your onboarding.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                   {data.documentation.map((doc, i) => (
                     <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-50">
                        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">{doc}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <SearchCheck className="w-10 h-10 text-brand-primary mb-6" />
                <h4 className="font-bold text-slate-900 mb-4">Verification Ready</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  All documents are generated with unique QR codes for instant verification by government departments. We ensure zero friction during your GST or MCA audit.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. TARGETED FAQ --- */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 italic-none text-slate-900">Common Questions</h2>
            <div className="space-y-4">
               {data.faq.map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-3">{item.q}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 6. FINAL CALL TO ACTION --- */}
      <section className="py-24 text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-white shadow-2xl shadow-brand-primary/20">
               <h2 className="text-3xl md:text-5xl font-bold mb-8 italic-none">Ready to activate your <br />{data.title}?</h2>
               <p className="text-white/80 mb-10 text-lg">Join 2,000+ businesses growing with virtualaddress.in</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <PremiumButton href="/contact" className="bg-white text-brand-primary border-none hover:bg-slate-50 px-10">Get a Proposal</PremiumButton>
                  <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="border border-white/20 px-10">Message us on WhatsApp</PremiumButton>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}