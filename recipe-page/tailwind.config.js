/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-stone" : "hsl(30, 54%, 90%)",
        'brown-800': "hsl(14, 45%, 36%)",
        'stone-150': "hsl(30, 18%, 87%)",
      },
      fontFamily: {
        "young": ["Young serif", "sans-serif"],
        "outfit": ["Outfit", "sans-serif"],
      }
    },
  },
  plugins: [],
}

