import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Changed from ["class"] to "class"
  content: [
    // FIX: Removed 'src/' so Tailwind actually scans your files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Kept just in case you add it later
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB", // Royal Blue
          indigo: "#4F46E5",
          navy: "#0F172A",
          cyan: "#06B6D4",
          emerald: "#10B981", // For WhatsApp
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        "premium-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;