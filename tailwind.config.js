module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ubuntu_menu: ['Ubuntu'],
      ubuntu_terminal: ['Ubuntu Mono'],
    },
    extend: {
      colors: {
        'title-bar': '#535149',
        'title-bar-button': '#7E7D77',
        'menu-bar': '#494740',
        'ubuntu-terminal': '#2D0922',
        'ubuntu-terminal-text': '#89E234',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
