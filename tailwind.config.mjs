/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F67FD'
      },
      textColor: {
        primary: '#102539',
        secondary: '#436280',
        button: '#0F67FD'
      },
      screens: {
        'mobile': '430px',
        '3xl': '1920px',
        'web': '2300px'
      },
      fontFamily: {
        primary: 'Gilroy-Bold',
        secondary: 'Hoves'
      }
    }
  },
  plugins: []
}
