<template>
  <div class="page-content smooth-scroll" ref="main">
    <AboutHero />
    <AboutExp />
    <AboutTools />
    <OfferDark />
    <CtaYellow />
  </div>
</template>

<script setup>
  useHead({
    title: 'O mnie, projektuje oraz wdrażam profesjonalne strony internetowe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Projektuje oraz wdrażam profesjonalne strony www',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Poproś o indywidualną wycenę!. Szybki kontakt',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-about',
    },
  });
</script>

<style>
  .about--wrapper {
    @apply w-full lg:w-11/12 mx-auto pl-8 pr-8 pt-20 flex flex-col-reverse items-center justify-center lg:flex-row  lg:items-center lg:justify-between min-h-screen;
  }
  .about--left {
    @apply text-white pt-9 md:pr-7 md:pl-7 lg:w-1/2 xl:pr-1 2xl:pr-8 pb-10;
  }
  .about--right {
    @apply 2xl:w-5/12 2xl:flex 2xl:items-center 2xl:justify-center;
  }
</style>
