/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // can add or overridee styles here
      // colors: {
      //   customBlue: colors.lightBlue,
      // },
    },
  },
  plugins: [require("daisyui")],
};
