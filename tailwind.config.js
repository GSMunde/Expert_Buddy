/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this includes your source files
  theme: {
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.3s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "scale(0.95)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
        },
      },
    },
  },
  plugins: [],
};
