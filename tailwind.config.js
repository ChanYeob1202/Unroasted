/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'amatic': ['Amatic SC', 'cursive'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'amatic-regular': '400',
        'amatic-bold': '700',
        'oswald-variable': '200 700', // This allows any weight between 200-700
      },
      colors: {
        coffee: '#6F4E37',
        'coffee-dark': '#4A3428',
        'coffee-light': '#8B7355',
      }
    }
  },  
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}