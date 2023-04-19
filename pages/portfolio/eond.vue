<template>
  <div ref="main">
    <div class="portfolio-item">
      <div class="portfolio-item--cover">
        <a
          class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
          href="https://eond.eu/"
          target="_blank"
          :style="{
            backgroundColor: '#1a63cb',
            color: '#ffffff',
          }"
        >
          Zobacz stronę www</a
        >
        <img :src="IMG" alt="" />
      </div>
      <div class="portfolio-item--info">
        <h1 class="text-4xl mb-7">EoND</h1>
        <p class="text-xl">
          Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający
          technicznie , zwłaszcza w zakresie animacji czy tez niektórych
          elementów , na stronie głównej wykorzystano bibliotekę paralax ,
          accordiony są napisane autorsko , całośc pisana w scss , wykorzystano
          gridaCss , nie korzystano z żadnych frameworków typu bootstrap (nie
          korzystam z takich bibliotek jeżeli nie ma takiego wymogu od klienta )
          , całość skompilowana za pomocą webpacka
        </p>
      </div>
    </div>
    <Cta />
  </div>
</template>

<script setup>
  import IMG from 'assets/uploads/2020/07/eond-cover.jpg';
  import { onUnmounted, ref, watch } from 'vue';
  import gsap from 'gsap';

  import { useTransitionComposable } from '~/composables/transition-composable';
  import transitionConfig from '~/helpers/transitionConfig';

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
    title: 'Eond - portfolio',
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
      class: 'page-portfolio',
    },
  });
</script>
<style>
  .portfolio-item {
    @apply bg-dark-2   text-white min-h-screen flex justify-start items-start flex-col min-w-full pl-5  pt-20 pr-5;
  }
  .portfolio-item--cover {
    @apply w-full mb-12 relative;
  }
  .portfolio-item--info {
    @apply 2xl:pb-64 3xl:pr-128;
  }
</style>
