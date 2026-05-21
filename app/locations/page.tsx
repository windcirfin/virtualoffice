"use client";

import React, { useState } from "react";
import { Search, MapPin, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { cities } from "@/data/cities";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Find Your Premium <br />
              <span className="text-brand-primary">Business Address.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Explore 50+ verified virtual office locations across India. Fully compliant with GST and Company Registration requirements.
            </p>

            {/* Premium Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by city (e.g. Bangalore, Mumbai...)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-slate-900"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["GST Ready", "Prime Districts", "IT Parks", "Fast Document"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CITIES GRID --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Available Locations</h2>
          <span className="text-sm text-slate-500 font-medium">Showing {filteredCities.length} Cities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCities.map((city) => (
            <div key={city.id}>
              <Link 
                href={`/locations/${city.slug}`}
                className="group block bg-white rounded-[2.5rem] border border-slate-100 p-3 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 mb-6">
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">Starting from</p>
                    <p className="text-2xl font-bold italic-none">₹{city.startingPrice}<span className="text-sm font-normal opacity-70">/mo</span></p>
                  </div>

                  {/* Popular badge - show for specific cities using string comparison */}
                  {(city.id === "1" || city.name === "Bangalore" || city.name === "Mumbai" || city.name === "Delhi") && (
                    <div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      Popular Choice
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{city.name}</h3>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {city.businessAreas?.length || 0} Prime Districts
                    </div>
                    <div className="flex items-center gap-1 text-brand-emerald font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      GST Ready
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No locations found matching your search.</p>
            <button onClick={() => setSearchQuery("")} className="mt-4 text-brand-primary font-bold">Clear Search</button>
          </div>
        )}
      </section>

      {/* --- TRUST BANNER --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Instant Onboarding</h4>
                <p className="text-sm text-slate-500 italic-none">Get your business address and digital agreement within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">100% Compliant</h4>
                <p className="text-sm text-slate-500">All addresses verified for GST and MCA registration across India.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Pan-India Support</h4>
                <p className="text-sm text-slate-500">One partner for all your business locations nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic-none">Ready to establish your <br />presence in a new city?</h2>
          <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto">
            Talk to our business experts today for a custom quote on multiple locations or specific GST requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton href="/contact" variant="primary" className="w-full sm:w-auto px-10">
              Get Started Now
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