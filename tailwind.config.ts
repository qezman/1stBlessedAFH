import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1628', // Darkest background
          900: '#122240',
          800: '#1A3358', // Primary dark / section header
          600: '#25508A', // Card border / hover
          500: '#3366A8', // Interactive links
        },
        gold: {
          50: '#FDF8EE',  // Warm cream background
          100: '#FBF0D5',
          400: '#D9A835',
          500: '#C9992E', // Primary accent
          600: '#B28522',
        },
        brand: {
          blue: '#6B93C4',
          pale: '#ABC3E0',
          mist: '#D6E5F5',
          light: '#EEF5FC',
          bg: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
