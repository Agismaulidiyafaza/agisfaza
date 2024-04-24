/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#172554",
        bg: "#d4d4d8",
        text: "#0f172a",
        text_secondary: "#475569",
      },
    },
  },
  plugins: [],
};
