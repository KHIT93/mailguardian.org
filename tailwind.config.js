const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {}
}