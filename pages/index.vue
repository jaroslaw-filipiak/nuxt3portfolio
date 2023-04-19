<template>
  <div class="page-content" ref="main">
    <Hero />
    <WhyFreelancer />
    <OfferDark />
    <Portfolio heading="Wybrane realizacje" hasImg />
    <CtaYellow />
  </div>
</template>

<script setup>
  import { onUnmounted, ref, watch } from 'vue';
  import gsap from 'gsap';

  import { useTransitionComposable } from '../composables/transition-composable';
  import transitionConfig from '../helpers/transitionConfig';

  definePageMeta({
    pageTransition: transitionConfig,
  });

  const { transitionState } = useTransitionComposable();
  const main = ref(),
    ctx = ref();

  watch(
    () => transitionState.transitionComplete,
    (newValue) => {
      if (newValue) {
        ctx.value = gsap.context((self) => {
          console.log('transition complete watcher scroll page');
          const headings = self.selector('.gsap--home__txt-opacity');
          headings.forEach((heading) => {
            gsap.from(heading, {
              opacity: 0,
              scrollTrigger: {
                trigger: heading,
                start: 'top bottom',
                end: 'top 40%',
                scrub: true,
                markers: false,
              },
            });
          });
        }, main.value); // <- Scope!
      }
    }
  );

  onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
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
