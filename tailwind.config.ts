import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          panel: "#1a2640",
          card: "#253550",
          hover: "#253550",
          surface3: "#3a4860",
          border: "#4a5a70",
        },
        accent: {
          green: "#34d399",
          yellow: "#fbbf24",
          red: "#f87171",
          purple: "#a78bfa",
          blue: "#60a5fa",
          pink: "#f472b6",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Copperplate", "Copperplate Gothic Light", "Georgia", "serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.3s ease-out",
        "scale-in": "scaleIn 0.25s ease-out",
        "count-pop": "countPop 0.35s ease-out",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 8px #34d399" },
          "50%": { boxShadow: "0 0 20px #34d399, 0 0 40px rgba(52,211,153,0.3)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        countPop: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
