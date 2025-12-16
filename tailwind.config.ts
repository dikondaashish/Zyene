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
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
        },
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: {
          green: "rgb(var(--color-accent-green) / <alpha-value>)",
          orange: "rgb(var(--color-accent-orange) / <alpha-value>)",
          teal: "rgb(var(--color-accent-teal) / <alpha-value>)",
        },
        gray: {
          900: "rgb(var(--color-gray-900) / <alpha-value>)",
          700: "rgb(var(--color-gray-700) / <alpha-value>)",
          500: "rgb(var(--color-gray-500) / <alpha-value>)",
          300: "rgb(var(--color-gray-300) / <alpha-value>)",
          100: "rgb(var(--color-gray-100) / <alpha-value>)",
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
