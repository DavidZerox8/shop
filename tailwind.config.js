const colors = require('tailwindcss/colors');

module.exports = {

  purge: ['./src/**/*{html,js}'],
  //darkMode: false,
  content: [],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],

};
