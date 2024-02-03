/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        'blue': '#015191',
        'purple': '#804B67',
        'red': '#EF4643',
        'yellow': '#FFB351',
        'orange':'#FF7C45'
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
