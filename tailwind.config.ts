import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono-label)", "ui-monospace", "monospace"],
        pen: ["var(--font-pen)", "cursive"],
      },
      colors: {
        black: "#020206",
        deep: "#08080f",
        surface: "#0d0d1a",
        surface2: "#131325",
        purple: {
          DEFAULT: "#7c3aed",
          glow: "#a855f7",
        },
        cyber: {
          blue: "#2563eb",
          cyan: "#22d3ee",
          electric: "#1e90ff",
        },
        vortex: {
          deep: "#2d1b6b",
          electric: "#1e90ff",
          cyan: "#22d3ee",
        },
      },
      animation: {
        "gradient-shift": "gradientShift 4s linear infinite",
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
        float3: "float3 8s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s infinite",
        "scroll-track": "scrollTrack 30s linear infinite",
        "fade-up": "fadeUp 0.8s ease both",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "200%" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0) rotate(1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        scrollTrack: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
        "purple-blue": "linear-gradient(135deg, #7c3aed, #2563eb)",
        "purple-cyan": "linear-gradient(135deg, #a855f7, #06b6d4)",
        "full-gradient": "linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
