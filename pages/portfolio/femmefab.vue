<template>
  <div class="page-content" ref="main">
    <div class="portfolio-item min-h-max pb-16">
      <div class="portfolio-item--cover">
        <a
          class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
          href="https://www.femmefab.nl/"
          target="_blank"
          :style="{
            backgroundColor: '#C8C1E0',
            color: '#204823',
          }"
        >
          Zobacz stronę www</a
        >
        <img :src="IMG" alt="" />
      </div>
      <div class="portfolio-item--info">
        <h1 class="text-4xl mb-7">Femmefab</h1>
        <p class="text-xl">
          Zdecydowanie najbardziej wymagające zlecenie w ostatnim czasie, nie
          mniej jednak bardzo ciekawe. Strona została wykonana w oparciu o
          Wordpressa, z wykorzystaniem biblioteki GSAP, wszystko kodowane
          autorsko
        </p>
      </div>
    </div>
    <Cta />
  </div>
</template>

<script setup>
  import IMG from 'assets/uploads/femmefab.jpg';

  useHead({
    title: 'Femmefab - portfolio',
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
          'Zdecydowanie najbardziej wymagające zlecenie w ostatnim czasie, nie mniej jednak bardzo ciekawe. Strona została wykonana w oparciu o Wordpressa, z wykorzystaniem biblioteki GSAP, wszystko kodowane autorsko',
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
          'Zdecydowanie najbardziej wymagające zlecenie w ostatnim czasie, nie mniej jednak bardzo ciekawe. Strona została wykonana w oparciu o Wordpressa, z wykorzystaniem biblioteki GSAP, wszystko kodowane autorsko',
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
    @apply bg-dark-2   text-white xl:min-h-screen flex justify-start items-start flex-col lg:min-w-full pl-5  pt-20 pr-5;
  }
  .portfolio-item--cover {
    @apply w-full mb-12 relative;
  }
  .portfolio-item--info {
    @apply 2xl:pb-64 3xl:pr-128;
  }
</style>
