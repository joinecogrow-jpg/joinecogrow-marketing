/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-leaf": "#7CB342",
        "primary-hand": "#388E3C",
        "text-green": "#689F38",
        "water-blue": "#29B6F6",
        "earth-brown": "#6D4C41",
        "circle-border": "#9CCC65",
      },
    },
  },
  plugins: [],
}
