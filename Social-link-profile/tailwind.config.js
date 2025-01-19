/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-green': 'hsl(75, 94%, 57%)',
      }
    },
  },
  plugins: [],
}

