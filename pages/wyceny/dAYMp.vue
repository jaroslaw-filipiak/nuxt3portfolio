<template>
  <div class="page-content" ref="main">
    <ProposalHero
      title="Oferta na wykonanie strony www / artystyczne portfolio "
      publishDate="Sporządzono: Maj 08, 2023"
      expirationDate="Oferta ważna 30 dni od daty sporządzenia"
    />
    <ProposalInfo />
    <ProposalAbout />
    <ProposalProcess />
    <ProposalChooseMe />
    <ProposalPricing />
    <ProposalCta />
  </div>
</template>

<script setup>
  useHead({
    title:
      'jfilipiak.pl | projektuje oraz wdrażam profesjonalne strony www i nie tylko',
    meta: [
      { name: 'robots', content: 'noindex' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Poproś o indywidualną wycenę!. Szybki kontakt',
      },
    ],
    bodyAttrs: {
      class: 'page-home',
    },
  });
</script>

<style lang="scss" scoped>
  .page-content {
    @apply min-h-screen flex flex-col items-start text-white;
  }

  .header {
    @apply pl-8;
  }
  .pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
  }
</style>
