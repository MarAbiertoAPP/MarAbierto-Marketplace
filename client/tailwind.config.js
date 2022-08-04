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
        cardCarousel: '600px',
        exploreCard: '200px',
        exploreCard2: '500px'
      },
      boxShadow: {
        rafagod: '0 0 60px -15px #7e22ce'

      }
    }
  },
  plugins: []
}
