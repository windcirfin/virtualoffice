"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export function PremiumButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  showArrow = false,
}: PremiumButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-indigo text-white shadow-premium hover:shadow-premium-hover",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm",
    whatsapp: "bg-brand-emerald text-white shadow-premium hover:shadow-premium-hover",
  };

  const ButtonContent = (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {variant === "whatsapp" && <MessageCircle className="w-4 h-4" />}
      <span>{children}</span>
      {showArrow && variant !== "whatsapp" && <ArrowRight className="w-4 h-4" />}
      
      {/* Subtle shine effect on hover for primary/whatsapp */}
      {(variant === "primary" || variant === "whatsapp") && (
        <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
}