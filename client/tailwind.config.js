/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      scale: {
        '80': '0.8',
        '70': '0.7',
        '60': '0.6',
      },
      brightness: {
        '25': '.25',
      },
      'translate': {
        '30': '7.5rem',
      },
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
