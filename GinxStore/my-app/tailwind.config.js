/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#093048",
          cta: "#32627E",
          green: "#2BAF16"
        },
      },
      fontFamily: {
        sans: ["Qanelas", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Acorn: ["Acorn", "sans-serif"],
      },
    },
  },
  plugins: [],
}

