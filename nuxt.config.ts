// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/vue-slider-component.css',
    '~/assets/css/vue-slider-component-theme.css',
    '~/assets/scss/main.scss',
  ],
  build: {
    transpile: ['gsap'],
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-gtag',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    mode: 'init',
  },

  gtag: {
    id: 'G-X4MDTE1EBE',
  },
});
