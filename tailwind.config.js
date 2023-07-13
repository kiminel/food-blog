/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        footer: "rgb(0 0 0 / 30%) 0px 0px 10px 1px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(20deg)" },
          "20%": { transform: "rotate(-12deg)" },
          "30%": { transform: "rotate(20deg)" },
          "40%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(12deg)" },
          "60%, 100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
      backgroundImage: {
        elephant: "url('/public/images/Elephant.png')",
      },
    },
    animation: {
      bounce: "bounce 1s infinite",
    },
    colors: {
      fill: "#f4f6f8",
      dark: "#010002",
    },
  },
  plugins: [],
};
