<template>
  <div class="page-content" ref="main">
    <Hero
      title="Projektuje oraz wdrażam profesjonalne"
      subtitle="strony internetowe"
      heading="Pomogę Tobie stworzyć wyjątkową i unikalną stronę www , która wzbudza
        prawdziwe zainteresowanie i zapada w pamięć."
    />
    <WhyFreelancer />
    <OfferDark />
    <Portfolio heading="Co ostatnio robiłem ?" hasImg />

    <CtaYellow />
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;

  let ctx;

  onMounted(() => {
    // ctx = gsap.context(() => {
    //   const heroBG = document.querySelector('.gsap__hero-bg-size--anim');
    //   const heroBGTrigger = document.querySelector(
    //     '.gsap__hero-bg-size--trigger'
    //   );
    //   gsap.to(heroBG, {
    //     backgroundSize: '115%',
    //     scrollTrigger: {
    //       id: 'heroImageZoom',
    //       trigger: heroBGTrigger,
    //       start: 'top bottom',
    //       end: 'top 10%',
    //       scrub: true,
    //       markers: false,
    //     },
    //   });
    // });
  });

  onUnmounted(() => {
    // ctx.revert();
  });

  useHead({
    title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
    meta: [
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
