/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      sm: { max: '600px' },
      md: { max: '960px' },
      lg: { max: '1280px' },
      xl: { max: '1920px' }
    }
  },
  plugins: []
}
