// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
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
  modules: [
    '@pinia/nuxt',
    'nuxt-gtag',
    '@nuxt/ui',
    '@nuxtseo/module',
    'nuxt-simple-sitemap',
    'nuxt-link-checker',
  ],
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    '/wyceny/**': { index: false },
  },

  // modules: ['@pinia/nuxt', 'nuxt-gtag', '@nuxtjs/device'],
  gtag: {
    id: 'AW-11423080410',
  },
});
