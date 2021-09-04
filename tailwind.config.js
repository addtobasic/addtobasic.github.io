module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'title-bar': '#535149',
        'title-bar-button': '#7E7D77',
        'ubuntu-terminal': '#2D0922',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
