/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  important: true,
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        145: '37.5rem',
      },
      colors: {
        white: '#eaeaea',
        'full-white': '#fff',
        light: '#EEEEEE',
        nemo: '#38F0C2',
        'dark-1': '#202020',
        'dark-2': '#242424',
        'dark-3': '#191919',
        'dark-4': '#1D1D1B',
        yellow: '#FECD36',
      },
      screens: {
        '3xl': '1900px',
      },
      fontFamily: {
        Atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
        OpenSans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
