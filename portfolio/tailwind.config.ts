import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#07080C",
          surface: "#0F1117",
          surface2: "#161922",
          border: "rgba(255,255,255,0.08)",
        },
        light: {
          DEFAULT: "#F7F7F5",
          surface: "#FFFFFF",
          surface2: "#F0F0EE",
          border: "rgba(10,10,15,0.08)",
        },
        ink: {
          DEFAULT: "#E8EAF0",
          muted: "#9AA1B2",
          dim: "#6B7180",
        },
        signal: {
          DEFAULT: "#5EEAD4",
          soft: "#99F6E4",
          deep: "#2DD4BF",
        },
        violet: {
          DEFAULT: "#A78BFA",
          deep: "#8B5CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(94,234,212,0.14), transparent 60%)",
        "signal-gradient": "linear-gradient(135deg, #5EEAD4 0%, #A78BFA 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(94,234,212,0.45)",
        "glow-violet": "0 0 40px -8px rgba(167,139,250,0.45)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
