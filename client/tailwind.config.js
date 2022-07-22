/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      // poppins
      poppins: ['Poppins', 'sans-serif']
    },
      colors: {
        'cheto-violet': '#110226'
      }
  }
  plugins: []
}
