import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FFF1B5",
          sky: "#C1DBE8",
          linen: "#F8F6F1",
          espresso: "#43302E",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        "open-sauce": ["var(--font-open-sauce)", "Georgia", "serif"],
        "public-sans": ["var(--font-public-sans)", "system-ui", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,6vw,6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl":  ["clamp(2.25rem,4.5vw,4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-lg":  ["clamp(1.75rem,3vw,3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(4rem,8vw,8rem)",
      },
      maxWidth: {
        "prose-xl": "72ch",
        "layout": "1440px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
