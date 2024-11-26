/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
      margin: {
        '600px': '600px',
        '400px':'400px',
    },
      colors: {
        'purple': '#8B5CF6',
        'bord':'#E5E5E5',
        'body':'#F5F5F5',
        'noir':'#262626',

      },
      backgroundImage: {
        'img': "url('/src/assets/go.PNG')"
      }
    },
  },
  plugins: [],
}

