"use client";
import React from "react";

interface WhatsAppButtonProps {
  className?: string;
  href?: string;
  text?: string;               // Added this back for the homepage
  children?: React.ReactNode;  // Kept this for the icon on the funnel page
}

export function WhatsAppButton({ 
  className, 
  href = "https://wa.me/918744041519",
  text,
  children 
}: WhatsAppButtonProps) {
  const handleConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18177709746/-mbyCLPNprEcELKt59tD",
      });
    }
    console.log("WhatsApp Conversion Tracked!");
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleConversion}
      className={className}
    >
      {/* If it has children (icons), show them. Otherwise, show the text. */}
      {children || text}
    </a>
  );
}