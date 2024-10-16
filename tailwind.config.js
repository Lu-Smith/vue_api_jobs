/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'snas-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        customBlue: {
          50: '#e4f7f9',   
          100: '#ccebef',  
          200: '#99d4da',  
          300: '#66b7c4',  
          400: '#3398a9',  
          500: '#007a8d',  
          600: '#006575',  
          700: '#004e5c',  
          800: '#003944',  
          900: '#00282e',  
        },
      },
    },
  },
  varians: {
    extand: {},
  },
  plugins: [],
}

