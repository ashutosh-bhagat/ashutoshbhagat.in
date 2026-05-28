/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#050505", // Deep black
        surface: "#121212",
        accent: "#22c55e", // Professional Success Green
        textMain: "#fafafa",
        textMuted: "#a3a3a3",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #2b2b2b 1px, transparent 1px), linear-gradient(to bottom, #2b2b2b 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
