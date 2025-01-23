/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html"],
    theme: {
      extend: {
        colors: {
            "custom-cream": "hsl(30, 38%, 92%)",
            'custom-greyblue': "hsl(228, 12%, 48%)",
            "custom-blue": "hsl(212, 21%, 14%)",
        },
        fontFamily: {
          "mont": ["Montserrat", 'sans-serif'],
          "fraunces": ["Fraunces", 'sans-serif'],

        },

      },
    },
    plugins: [],
  }
  
  