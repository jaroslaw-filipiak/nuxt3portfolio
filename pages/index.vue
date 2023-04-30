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
  import { useTransitionComposable } from '../composables/transition-composable';
  import transitionConfig from '../helpers/transitionConfig';

  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;

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
        console.log('transition complete page home');

        // ScrollTrigger.defaults({
        //   pinReparent: true,
        // });

        // const tl = gsap.timeline({
        //   onComplete() {
        //     console.log('complete...');
        //     // toggleTransitionComplete(true);
        //   },
        //   scrollTrigger: {
        //     id: 'test',
        //     trigger: '#orange',
        //     start: 'top top',
        //     end: 'bottom 150px',
        //     pin: '#orange-content',
        //   },
        // });

        ctx.value = gsap.context(() => {
          const heroBG = document.querySelector('.gsap__hero-bg-size--anim');
          const heroBGTrigger = document.querySelector(
            '.gsap__hero-bg-size--trigger'
          );

          gsap.to(heroBG, {
            backgroundSize: '115%',
            scrollTrigger: {
              trigger: heroBGTrigger,
              start: 'top bottom',
              end: 'top 10%',
              scrub: true,
              markers: false,
            },
          });

          gsap.to('#orange', {
            scrollTrigger: {
              id: 'test11',
              trigger: '#orange',
              start: 'top top',
              end: 'bottom 150px',
              pin: '#orange-content',
              markers: true,
            },
          });

          // tl.scrollTrigger.refresh();

          // ScrollTrigger.create({
          //   id: 'test',
          //   trigger: '#orange',
          //   start: 'top top',
          //   end: 'bottom 150px',
          //   pin: '#orange-content',
          // });

          console.log();
        }, main.value); // <- Scope!
      }
    }
  );

  onMounted(() => {
    console.log('onmounted');

    // const homeTL = gsap.timeline({
    //   onComplete() {
    //     console.log('homeTL complete..');
    //   },
    //   scrollTrigger: {
    //     id: 'test',
    //     trigger: '#orange',
    //     start: 'top top',
    //     end: 'bottom 150px',
    //     pin: '#orange-content',
    //     markers: true,
    //   },
    // });
  });

  onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
    // console.log(homeTL);
    // homeTL.kill(true);
    // console.log(homeTL);
    // gsap.set('#element', { clearProps: true });
    // gsap.set("#element", {clearProps: true});

    console.log('on unmounted..');
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
