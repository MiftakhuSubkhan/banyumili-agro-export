import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4332",
          50: "#F0F7F4",
          100: "#D8ECE1",
          200: "#B3DBC5",
          300: "#83C3A2",
          400: "#52A77E",
          500: "#2D8A60",
          600: "#246F4D",
          700: "#1B4332",
          800: "#133124",
          900: "#081C15",
        },
        "primary-green": "#1B4332",
        "deep-dark": "#081C15",
        "accent-gold": {
          DEFAULT: "#C89B3C",
          50: "#FCF9F0",
          100: "#F7F0DC",
          200: "#EFE0B6",
          300: "#E4CD89",
          400: "#D7B95E",
          500: "#C89B3C",
          600: "#A87D29",
          700: "#805B1E",
          800: "#593F16",
        },
        "earth-brown": {
          DEFAULT: "#8B5E34",
          50: "#F9F5F0",
          100: "#F1E7DD",
          200: "#E3CDB8",
          300: "#D3AF90",
          400: "#C19067",
          500: "#8B5E34",
          600: "#704824",
          700: "#553518",
        },
        "warm-cream": {
          DEFAULT: "#F8F3E7",
          50: "#FEFCF8",
          100: "#F8F3E7",
          200: "#EFE6CF",
          300: "#E3D5B1",
          400: "#D4C091",
        },
        brand: {
          primary: "#1B4332",
          dark: "#081C15",
          gold: "#C89B3C",
          brown: "#8B5E34",
          cream: "#F8F3E7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
