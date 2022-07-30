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
<<<<<<< HEAD
        cardCarousel: '600px'

=======
        cardCarousel: '600px',
        exploreCard: '200px',
        exploreCard2: '500px'
>>>>>>> 4d5f5af56704ebd5af095f68f4b83153b331a1df
      },
      boxShadow: {
        rafagod: '0 0 60px -15px #7e22ce'
      }
    }
  },
  plugins: []
}
