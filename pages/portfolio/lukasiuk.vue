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
          href="https://www.grupalukasiuk.pl/"
          target="_blank"
          :style="{
            backgroundColor: '#282a2e',
            color: '#ffffff',
          }"
        >
          Zobacz stronę www</a
        >
        <img :src="IMG" alt="" />
      </div>
      <div class="portfolio-item--info">
        <h1 class="text-4xl mb-7">Grupa Łukasiuk</h1>
        <p class="text-xl">
          Przedmiotem zlecenia było zakodowanie warstwy front-end zgodnie z
          wytycznymi. Style pisane w .scss , calośc kompilowana za pomocą
          webpacka , skrypty .js pisane w esnext. W niektórych elementach
          wykorzystano cssGrid , w projekcie jest także użyta biblioteka jQuery
        </p>
      </div>
    </div>
    <Cta />
  </div>
</template>

<script setup>
  import IMG from 'assets/uploads/2020/07/lukasiuk-cover.jpg';

  useHead({
    title: 'Łukasiuk - portfolio',
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
