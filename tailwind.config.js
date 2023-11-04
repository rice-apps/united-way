/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // can add or overridee styles here
      // colors: {
      //   customBlue: colors.lightBlue,
      // },
    },
  },
  plugins: [require('daisyui')],
};
