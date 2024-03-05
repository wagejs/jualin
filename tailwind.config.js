/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#fcb800",
          gray: "#f1f2f6",
          red: "#fc6b00",
          green: "#80bc00",
        },
        status: {
          primary: "#fcf9ef",
          red: "#f9ece5",
          green: "#f0f5e7",
        },
        content: {
          black: "#222",
        },
      },
    },
  },
  plugins: [],
};
