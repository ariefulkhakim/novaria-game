/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      bgMidnightBlue: "#2C3E50",
      primary: "#E74C3C",
      secondry: "#F1C40F",
      textPrimary: "#ECF0F1",
      textSecondry: "#BDC3C7",
    },
    extend: {
      backgroundImage: {
        "hero-banner": "url('/src/assets/image/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
