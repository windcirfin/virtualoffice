import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Zap, 
  Building2, 
  Clock 
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";

// ISR: Revalidate this page every hour
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities.find((c) => c.slug === city);
  return {
    title: `Virtual Office in ${cityData?.name || 'India'} | GST Ready | Virtual Address`,
    description: `Get a premium business address in ${cityData?.name} for GST and Company registration. Fast documentation and verified locations.`,
  };
}

export default async function CityDetailPage({ params }: PageProps) {
  const { city } = await params;
  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) notFound();

  return (
    <div className="bg-white">
      {/* --- SECTION 1: CITY HERO --- */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 border border-brand-primary/20">
                <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
                Available for Immediate Onboarding
              </div>
              
              {/* FIXED TAG HERE: Changed closing </div> to </h1> */}
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Virtual Office in <br />
                <span className="text-brand-primary italic-none">{cityData.name}</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Secure a prestigious business address in {cityData.name}’s prime commercial hubs. Our locations are fully verified and include all documentation required for GST and Company registration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton href="/contact" variant="primary" showArrow className="px-8">
                  Get Pricing for {cityData.name}
                </PremiumButton>
                <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="px-8">
                  Chat with Expert
                </PremiumButton>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/10 to-brand-indigo/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src={cityData.image} 
                alt={`${cityData.name} Business District`}
                className="relative rounded-[2.5rem] border border-slate-200 shadow-2xl object-cover aspect-[4/3] w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                 <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Starting Price</p>
                        <p className="text-2xl font-bold text-slate-900">₹{cityData.startingPrice}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-bold text-brand-emerald uppercase tracking-widest mb-1">Verified</p>
                        <div className="flex gap-1 text-brand-emerald">
                            {[1,2,3,4,5].map(i => <ShieldCheck key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHAT'S INCLUDED --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 italic-none">Complete Documentation Suite</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide 100% compliant documentation as per the latest GST and MCA guidelines in {cityData.name}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FileText, title: "Rent Agreement", desc: "Notarized commercial lease agreement." },
            { icon: ShieldCheck, title: "NOC from Owner", desc: "Valid No Objection Certificate for registration." },
            { icon: Building2, title: "Utility Bill", desc: "Recent electricity/water bill in owner's name." },
            { icon: MapPin, title: "Physical Signage", desc: "Space for your business name display." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <item.icon className="w-10 h-10 text-brand-primary mb-6" />
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: POPULAR AREAS --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 italic-none">Prime Business Districts</h2>
              <p className="text-slate-400 max-w-xl">Choose from our curated list of prestigious areas in {cityData.name} to elevate your professional image.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
               <Zap className="w-5 h-5 text-brand-cyan" />
               {/* FIXED: Changed cityData.districts to cityData.businessAreas.length */}
               <span className="text-sm font-medium">{cityData.businessAreas.length} Locations Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityData.businessAreas.map((area, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300">
                <MapPin className="w-5 h-5 text-brand-primary mb-4" />
                <h4 className="font-bold text-lg mb-1">{area}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-500">Premium Commercial Hub</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROCESS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 italic-none">How it Works in {cityData.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {[
            { step: "01", title: "Select Location", desc: "Pick your preferred area in the city." },
            { step: "02", title: "KYC Check", desc: "Submit basic business and ID proof." },
            { step: "03", title: "Get Documents", desc: "Receive all digital docs in 24 hours." }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-black text-slate-100 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">{step.step}</div>
              <h4 className="font-bold text-xl mb-4">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gradient-to-br from-brand-primary to-brand-indigo rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-brand-primary/20">
              <Clock className="w-12 h-12 mx-auto mb-6 text-brand-cyan" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic-none">Launch Your {cityData.name} <br />Office Today</h2>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">
                Join 2,000+ businesses using Virtual Address for their expansion. Our onboarding team is ready to help you now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <PremiumButton href="/contact" className="bg-white text-brand-primary hover:bg-slate-50 border-none px-10">
                   Get Started
                 </PremiumButton>
                 <PremiumButton href="https://wa.me/918744041519" variant="whatsapp" className="px-10 border border-white/20">
                   WhatsApp Us
                 </PremiumButton>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}