// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    },
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
  modules: ['@pinia/nuxt', 'nuxt-gtag', '@nuxt/ui'],

  // modules: ['@pinia/nuxt', 'nuxt-gtag', '@nuxtjs/device'],
  gtag: {
    id: 'G-X4MDTE1EBE',
  },
});
