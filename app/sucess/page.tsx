"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Thank you for reaching out. One of our business experts will contact you within 15 minutes to discuss your virtual office requirements.
        </p>

        <div className="space-y-4">
          <PremiumButton 
            href="https://wa.me/918744041519?text=I just submitted an inquiry for a virtual office." 
            variant="whatsapp" 
            className="w-full py-4"
          >
            Chat with us now
          </PremiumButton>
          
          <Link href="/" className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}