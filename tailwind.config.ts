import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Inter Display", "sans-serif"],
        mono: ["Fragment Mono", "monospace"],
        lt: ["LT Remark", "serif"],
      },
      colors: {
        background: "#0a1015",
        foreground: "#ffffff",
        brand: {
          navy: "#0a1015",
          blue: "#0099ff",
          dark: "#05080a",
          border: "#1f2224",
          borderLight: "#3d4145",
          textMuted: "#cecfd0",
          card: "#f7f8fa",
        },
        framer: {
          bg: "#0a1015",
          white: "#fff",
          card: "#f7f8fa",
          border: "#ddd",
          text: "#3d4145",
          textLight: "#cecfd0",
          warm: "#ffe1cb",
          blue: "#c5dffb",
        }
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "text-reveal": "textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        textReveal: {
          from: {
            opacity: "0.001",
            filter: "blur(10px)",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
