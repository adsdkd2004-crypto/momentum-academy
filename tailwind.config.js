/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f8",
          100: "#d6e0ee",
          300: "#7f97c0",
          500: "#2d4d84",
          700: "#1A3A6B",
          800: "#132c52",
          900: "#0c1c36",
        },
        momentum: {
          50: "#eafaf3",
          100: "#c9f0dd",
          300: "#6dcfa8",
          500: "#2E8B72",
          600: "#227a63",
          700: "#1b6350",
        },
        paper: "#F7F9F8",
        ink: "#12202B",
      },
    },
  },
  plugins: [],
};