<template>
  <div class="page-content" ref="main">
    <WebsitesHero />
    <WebsitesFeatures />
    <WebsitesOffer />
    <WebsitesExp />
    <WebsitesPortfolio
      :hasImg="true"
      heading="Jak może wyglądać Twoja nowa strona www ?"
    />

    <WebsitesFaq />
    <!-- <WebsitesProcess /> -->

    <!-- horizontall proess steps -->
    <!-- <div class="process-steps--wrapper pt-40">
      <WebsitesProcess1 />
      <WebsitesProcess2 />
      <WebsitesProcess2 />
    </div> -->

    <WebsitesSEOContent />
    <WebsitesReview />
    <CtaYellow />
  </div>
</template>

<script setup>
  useHead({
    title: 'Profesjonalne strony www',
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
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-profesjonalne-strony-www',
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
