const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: '#789AA2',
        favyellow: '#F4B921'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
