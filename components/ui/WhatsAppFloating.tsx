"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloating() {
  const handleConversion = () => {
    // Added (window as any) to bypass the strict TypeScript error
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18177709746/-mbyCLPNprEcELKt59tD",
      });
    }
    console.log("Floating WhatsApp Conversion Tracked!");
  };

  return (
    <motion.a
      href="https://wa.me/918744041519?text=Hi, I am interested in a Virtual Office."
      target="_blank"
      onClick={handleConversion}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-brand-emerald text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-emerald border-2 border-white"></span>
      </span>
    </motion.a>
  );
}