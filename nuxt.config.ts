// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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

  modules: ['@pinia/nuxt', 'nuxt-gtag'],
  gtag: {
    id: 'G-X4MDTE1EBE',
  },
});
