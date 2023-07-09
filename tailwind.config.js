const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@apideck/components/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'basier-circle': ['Basier Circle', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: '#333333',
          100: '#292929',
          200: '#1f1f1f',
          300: '#171717',
          400: '#111111',
          500: '#0d0d0d',
          600: '#090909',
          700: '#060606',
          800: '#030303',
          900: '#000000'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
