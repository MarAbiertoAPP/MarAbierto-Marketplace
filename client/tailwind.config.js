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
        limitH: '550px',
        limitHnewHome: '800px',
        limitCardCarousel: '600px'
      },
      colors: {
        probando: 'rgba(217, 33, 171, 0.56)'
      },
      width: {
        cardCarousel: '450px'
      },
      height: {
        cardCarousel: '600px'
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
