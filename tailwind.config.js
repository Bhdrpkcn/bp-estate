/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 20%",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "55% 55%" },
        },
      },
      animation: {
        pulseBackground: "pulse 5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
