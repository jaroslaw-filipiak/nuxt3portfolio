<template>
  <div class="page-content" ref="main">
    <BudgetWebsitesHero />
    <BudgetWebsitesFeatures />
    <BudgetWebsitesOffer />
    <BudgetWebsitesExp />
    <BudgetWebsitesPortfolio />
    <!-- <BudgetWebsitesFaq /> -->
    <BudgetWebsitesSEOContent />
    <BudgetWebsitesReview />
    <CtaYellow />
  </div>
</template>

<script setup>
  useHead({
    title: 'Strony www w rozsądnych cenach!',
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
          'Pełnoprawna, w pełni profesjonalna strona www w przystępnej cenie? Tak to możliwe!. Poproś o indywidualną wycenę!. Szybki kontakt, gwarancja zadowolenia',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Strony www w rozsądnych cenach',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Pełnoprawna, w pełni profesjonalna strona www w przystępnej cenie? Tak to możliwe!. Poproś o indywidualną wycenę!. Szybki kontakt, gwarancja zadowolenia',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-strony-www',
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
