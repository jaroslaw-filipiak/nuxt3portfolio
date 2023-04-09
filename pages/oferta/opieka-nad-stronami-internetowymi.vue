<template>
  <div class="page-content">
    <AdministrationHero />
    <AdministrationFeatures />
    <AdministrationOffer />
    <!-- cennik -->
    <!-- <AdministrationFaq /> -->
    <CtaYellow />
  </div>
</template>

<script setup>
  useHead({
    title: 'Administracja stronami www, opieka WordPress',
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
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne sgtrony zoptymalizowane pod Google. Optymalizacja UX. Poproś o indywidualną wycenę!. Szybki kontakt',
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
        content: 'https://j-filipiak.pl/assets/img/seo/og-img--home.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-administracja-stronami-www',
    },
  });
</script>

<style lang="scss" scoped>
  .cta__layout2 {
    &--wrapper {
      @apply -mt-36 pt-36;
    }
  }
</style>
