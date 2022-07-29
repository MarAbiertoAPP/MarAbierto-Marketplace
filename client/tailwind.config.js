/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maxHeight: {
        limitH: '550px'
      },
      colors: {
        probando: 'rgba(217, 33, 171, 0.56)'
      },
      width: {
        exploreCard: '200px'
      },
      height: {
        exploreCard: '500px'
      }
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      // poppins
      poppins: ['Poppins', 'sans-serif']
    }

  },
  plugins: []
}
