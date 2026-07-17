import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      /* Colors */

      colors: {
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#DBEAFE",
        },

        secondary: {
          DEFAULT: "#16A34A",
          hover: "#15803D",
          light: "#DCFCE7",
        },

        background: "#F5F7FB",

        card: "#FFFFFF",

        border: "#E5E7EB",

        text: "#111827",

        subtitle: "#6B7280",

        success: "#16A34A",

        warning: "#F59E0B",

        danger: "#DC2626",

        info: "#0EA5E9",
      },

      /* Fonts */

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["var(--font-poppins)"],
      },

      /* Shadows */

      boxShadow: {
        card: "0 12px 40px rgba(15,23,42,.08)",

        button: "0 6px 18px rgba(37,99,235,.25)",

        modal: "0 20px 45px rgba(0,0,0,.15)",

        input: "0 1px 2px rgba(15,23,42,.05)",
      },

      /* Border Radius */

      borderRadius: {
        xl: "16px",
        "2xl": "22px",
        "3xl": "28px",
        card: "20px",
        button: "16px",
      },

      /* Animation */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        250: "250ms",
      },

      /* Screens */

      screens: {
        xs: "480px",
      },

      /* Spacing */

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};

export default config;