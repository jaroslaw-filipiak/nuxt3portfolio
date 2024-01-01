// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    },
  },

  site: {
    url: 'https://j-filipiak.pl',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  modules: [
    '@pinia/nuxt',
    'nuxt-gtag',
    '@nuxt/ui',
    '@nuxtseo/module',
    'nuxt-simple-sitemap',
    'nuxt-link-checker',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
  ],

  googleFonts: {
    families: {
      Sora: true,
      Lato: true,
      'Open+Sans': true,
    },
    // Options
  },

  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    '/wyceny/**': { index: false },
  },

  // modules: ['@pinia/nuxt', 'nuxt-gtag', '@nuxtjs/device'],
  gtag: {
    id: 'AW-11423080410',
  },

  generate: {
    routes: ['/generated-rouute'],
  },
});
