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
    container: {
      center: true,
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        145: '37.5rem',
      },
      colors: {
        green: '#1EE556',
        white: '#eaeaea',
        'full-white': '#fff',
        light: '#EEEEEE',
        'light-1': '#F0F0F1',
        nemo: '#38F0C2',
        accent: '#FF460C',
        'accent-2': '#FF5C36',
        'dark-1': '#202020',
        'dark-2': '#242424',
        'dark-3': '#191919',
        'dark-4': '#1D1D1B',
        'dark-5': '#272727',
        yellow: {
          50: '#FECD36',
          100: '#FECD36',
          200: '#FECD36',
          300: '#FECD36',
          400: '#FECD36',
          500: '#FECD36',
          600: '#FECD36',
          700: '#FECD36',
          800: '#FECD36',
          900: '#FECD36',
          950: '#FECD36',
        },
      },
      screens: {
        '3xl': '1900px',
      },
      fontFamily: {
        Atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
        OpenSans: ['"Open Sans"', 'sans-serif'],
        Lato: ['"Lato"', 'sans-serif'],
        Sora: ['"Sora"', 'sans-serif'],
        Codec: ['"Codec Cold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
