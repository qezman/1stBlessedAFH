import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040A13", // Deep near-black for true hero backgrounds
          900: "#0B1628",
          800: "#122240",
          700: "#1A3358",
          600: "#25508A",
          500: "#3366A8",
          300: "#6B93C4",
          200: "#A8C3E0",
          100: "#D6E5F5",
        },
        gold: {
          50: "#FDF8EE",
          100: "#FBF0D5",
          400: "#D9A835",
          500: "#C9992E",
          600: "#B28522",
        },
        sage: {
          500: "#8DA399",
        },
        brand: {
          blue: "#6B93C4",
          pale: "#ABC3E0",
          mist: "#D6E5F5",
          light: "#EEF5FC",
          bg: "#F8F9FA",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(180deg, var(--tw-gradient-stops))", // Can use from-navy-950 to-navy-900 in HTML, or define it here
        "hero-glow": "linear-gradient(180deg, #040A13 0%, #0B1628 100%)",
        "gold-glow": "radial-gradient(circle, rgba(217, 168, 53, 0.08) 0%, transparent 70%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(11,22,40,0.06), 0 1px 3px rgba(11,22,40,0.04)',
        'card-hover': '0 12px 32px rgba(11,22,40,0.08), 0 2px 6px rgba(11,22,40,0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;
