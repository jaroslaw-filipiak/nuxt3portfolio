<template>
  <div ref="main">
    <div class="portfolio-item">
      <div class="portfolio-item--cover">
        <!-- <a
                v-if="item.acf.behance_link"
                class="absolute bottom-0 left-0 block p-4"
                :href="`${item.acf.behance_link}`"
                :style="{
                    backgroundColor: `${item.acf.behance_kolor}`,
                }"
            >
                {{ item.acf.behance_link }}</a
            > -->
        <a
          class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
          href="http://siborsoft.com/"
          target="_blank"
          :style="{
            backgroundColor: '#d78605',
            color: '#ffffff',
          }"
        >
          Zobacz stronę www</a
        >
        <img :src="siborsoftIMG" alt="" />
      </div>
      <div class="portfolio-item--info">
        <h1 class="text-4xl mb-7">Siborsoft</h1>
        <p class="text-xl">
          Dosyć prosta i niepozorna strona www ale mimo wyglądu szablonowego
          została ona najpierw zaprojektowana w figmie. Większość stron nawet
          tych najmniejszych i najprostszych projektuje mimo wszystko od białej
          kartki.<br /><br />Bardzo ciekawym mechanizmem jest zastosowanie
          html5history API , dzięki czemu strona się nie odświeża w momencie gdy
          przechodzimy do innych podstron , strona oparta o WP + ACF
        </p>
      </div>
    </div>
    <Cta />
  </div>
</template>

<script setup>
  import siborsoftIMG from 'assets/uploads/2021/10/siborsoft_main.jpg';
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
    title: 'Siborsoft - portfolio',
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
