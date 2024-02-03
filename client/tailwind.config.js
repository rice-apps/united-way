/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // can add or overridee styles here
      colors: {
        'blue': '#015191',
        'purple': '#804B67',
        'red': '#EF4643',
        'yellow': '#FFB351',
        'orange':'#FF7C45'
        
      },
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
  
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
