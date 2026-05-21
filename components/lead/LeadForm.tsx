"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Loader2, CheckCircle2, Building2, Briefcase } from "lucide-react";
import { usePathname } from "next/navigation";

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const pathname = usePathname();

  const [utmData, setUtmData] = useState({ source: "direct", medium: "none", campaign: "organic" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmData({
      source: params.get("utm_source") || "direct",
      medium: params.get("utm_medium") || "none",
      campaign: params.get("utm_campaign") || "organic"
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const leadData = {
      source_site: "virtualaddress.in",
      form_id: pathname.includes('lp') ? pathname.split('/').pop() : 'main_site',
      full_name: formData.get("name"),
      phone_primary: formData.get("phone"),
      primary_city: formData.get("city"),
      primary_service: formData.get("service_type"), // MANDATORY
      company_name: formData.get("company_name"),    // OPTIONAL
      user_message: formData.get("requirements"),    // OPTIONAL
      
      utm_source: utmData.source,
      utm_medium: utmData.medium,
      utm_campaign: utmData.campaign,
      landing_page_url: window.location.href,
      
      metadata: {
        browser: navigator.userAgent,
        preferred_time: formData.get("contact_time")
      }
    };

    try {
      const { error } = await supabase.from("master_leads").insert([leadData]);
      if (error) throw error;
      setIsSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center bg-blue-50 rounded-3xl border border-blue-100">
        <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-slate-900 mb-2">Requirement Logged</h4>
        <p className="text-sm text-slate-500 italic-none">Our specialist will contact you with a customized proposal shortly.</p>
      </motion.div>
    );
  }

  // SHARED INPUT CLASS: Force text-slate-900 to ensure visibility on dark themes
  const inputClass = "w-full px-5 py-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* MANDATORY FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" required placeholder="Full Name *" className={inputClass} />
        <input type="tel" name="phone" required placeholder="WhatsApp Number *" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="city" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select City *</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Gurgaon">Gurgaon (NCR)</option>
          <option value="Noida">Noida (NCR)</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Other">Other City</option>
        </select>

        <select name="service_type" required defaultValue="" className={inputClass}>
          <option value="" disabled>Requirement Type *</option>
          <option value="GST Registration">GST Registration Office</option>
          <option value="Virtual Office">Business Address (Virtual)</option>
          <option value="Mailing Address">Mailing & Courier Address</option>
          <option value="Full Compliance">Full Business Setup (Both)</option>
        </select>
      </div>

      {/* OPTIONAL FIELDS (To "Find the Particular Fish") */}
      <input type="text" name="company_name" placeholder="Company Name (Optional)" className={inputClass} />
      
      <select name="contact_time" defaultValue="" className={inputClass}>
        <option value="" disabled>Preferred Contact Time</option>
        <option value="Morning">Morning (10 AM - 1 PM)</option>
        <option value="Afternoon">Afternoon (1 PM - 5 PM)</option>
        <option value="Evening">Evening (5 PM - 8 PM)</option>
      </select>

      <textarea 
        name="requirements" 
        placeholder="Specific requirements (e.g. Need physical signage, floor space for 1 hour, etc.)" 
        rows={2}
        className={`${inputClass} resize-none`}
      ></textarea>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Get My Quote <ArrowRight className="w-5 h-5" /></>}
      </button>
    </form>
  );
}