/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./style/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'plus': ['Plus Jakarta Sans', 'sans-serif'],
        'preahvihear': ['Preahvihear', 'sans-serif']
      },
      backgroundImage: {
        'my-Image': "url('../img/bg-my-image.png')"
      }
    },
  },
  plugins: [],
}

