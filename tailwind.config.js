module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'fit': 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
