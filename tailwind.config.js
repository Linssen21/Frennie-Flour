const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./templates/**/*.{html,liquid,js}', './sections/**/*.{html,liquid,js}'],
    theme: {
      extend: {
        boxShadow: {
          'header': '0 2px 8px #464e5433',
          'sub-menu': '0 10px 20px #00000017',
        },
        borderWidth: {
          DEFAULT: '1px',
        },
        colors: {
          primary: '#ff167d',
          secondary: colors.black,
        },
        width: {
          '14px': '0.875rem',
        },
        maxWidth: {
          'page-width': 'var(--page-width)'
        },
        fontSize: {
          tiny: '0.5625rem'
        },
        lineHeight: {
          'search-bar': '1.8',
        },
        maxHeight:{
          'search-container': '60vh'
        },
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },

    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
    plugins: [],
  }
  