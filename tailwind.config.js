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
        
      },
      fontFamily: {
        Josefin: ['"Josefin Sans"', 'sans-serif']
      }
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
    plugins: [],
  }
  