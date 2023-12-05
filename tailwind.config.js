/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        // Primary
        "soft-blue": "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",

        // Neutral
        "very-dark-blue-main-bg": "hsl(217, 54%, 11%)",
        "very-dark-blue-card-bg": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
