// https://nuxt.com/docs/api/configuration/nuxt-config
// import { dirname } from 'path';
const fs = require('fs');

// Read the routes from the file

const routes = JSON.parse(
  fs.readFileSync(`${__dirname}/blog-routes.json`, 'utf8')
);

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

  // generate: {
  //   routes: async () => {
  //     const routes = await blogRoutes();
  //     return routes;
  //   },
  // },

  // nitro: {
  //   prerender: {
  //     routes: [...blog],
  //     // routes: async () => {
  //     //   const routes = await blogRoutes();
  //     //   return routes;
  //     // },
  //   },
  // },

  nitro: {
    prerender: {
      routes: [
        '/blog/w jaki sposób wygenerować elementy graficzne z dynamiczną treścią?',
        '/blog/Ile kosztuje strona www w 2024 roku?',
        '/blog/W jaki sposób dodać własny typ treści w WordPress ?',
      ],
    },
  },

  gtag: {
    id: 'AW-11423080410',
  },
});
