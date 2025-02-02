/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./dist/*.html"],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue
      },
      fontFamily:{
        sans:['Poppins'],
      },
      colors: {
        redCustom: 'hsl(0, 78%, 62%)',
        cyanCustom: 'hsl(180, 62%, 55%)',
        orangeCustom: 'hsl(34, 97%, 64%)',
        blueCustom: 'hsl(212, 86%, 64%)',
      },
    },
    plugins: [],
  }
  
  