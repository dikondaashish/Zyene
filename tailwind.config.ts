import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans-stack)"],
        display: ["var(--font-display-stack)"],
        mono: ["var(--font-mono-stack)"],
      },
      colors: {
        ink: "#0a1015",
        paper: "#fbfbfa",
        line: "#e6e8ea",
        muted: "#5b626c",
        signal: "#1f9bff",
        background: "#0a1015",
        foreground: "#ffffff",
        brand: {
          blue: "#0099ff",
        },
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      }
    },
  },
  plugins: [],
};
export default config;
