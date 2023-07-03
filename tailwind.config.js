/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#83b8be",
        },
        pink: {
          500: "#f08ca7",
        },
        brow: {
          500: "#8D6E3F",
        },
      },
      screens: {
        "wide-tablet": { max: "1450px" },
        tablet: { max: "1100px" },
        mobile: { max: "768px" },
        "min-mobile": { max: "527px" },
      },
    },
  },
  plugins: [],
};
