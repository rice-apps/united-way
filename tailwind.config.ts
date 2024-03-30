import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '80': '0.8',
        '70': '0.7',
        '60': '0.6',
      },
      brightness: {
        '25': '.25',
      },
      translate: {
        '30': '7.5rem',
      },
      // can add or override styles here
      colors: {
        blue: '#015191',
        purple: '#804B67',
        red: '#EF4643',
        yellow: '#FFB351',
        orange: '#FF7C45',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
}
export default config
