<template>
  <div class="page-content smooth-scroll pb-0 blog-post--content" ref="main">
    <SingleHero :post="data[0]" />
    <div class="bg-[#fff] w-full pt-20 lg:pt-24 pb-20 lg:pb-24">
      <main class="w-full lg:w-9/12 mx-auto pl-8 pr-8 text-dark-3">
        <div v-html="data[0]?.content?.rendered"></div>
        <!-- 
        <div class="border border-red-600 p-10">
          {{ data[0] }}
        </div>
        <pre class="text-dark-3">
          <code>
            {{ data[0] }}
          </code>
        </pre> -->
      </main>
    </div>
    <!-- <RecentsPosts /> -->
    <Cta />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  const route = useRoute();
  const post = ref([]);
  console.log(route.params.title);

  const { data, pending, error, refresh } = await useAsyncData(
    'single-post',
    () =>
      $fetch(
        `https://j-filipiak.pl/api/wp-json/wp/v2/posts?slug=${route.params.title}&_embed`
      )
  );

  onMounted(() => {
    console.log(data);
  });
  // onMounted(async () => {
  //   const response = await $fetch(
  //     `https://j-filipiak.pl/api/wp-json/wp/v2/posts?slug=${route.params.title}&_embed`
  //   );

  //   // const data = await response.json();
  //   // console.log(data);
  //   post.value = response[0];
  // });

  useHead({
    title: `${route.params.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: `${route.params.title}`,
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Znajdziesz tutaj zarówno poradniki dot.projektowania stron www, projektownia aplikacji mobilnych a także dużo informacji ze świata WordPressa i nie tylko.',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content:
          'Blog o grafice komputerowej, designie, tworzeniu stron internetowych a także programowaniu.',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Znajdziesz tutaj zarówno poradniki dot.projektowania stron www, projektownia aplikacji mobilnych a także dużo informacji ze świata WordPressa i nie tylko.',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-about',
    },
  });
</script>

<style lang="scss">
  .blog-post--content main {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul {
      @apply text-dark-3;

      @apply pb-5;
    }

    ul {
      @apply list-disc pl-4;
    }

    p {
      @apply text-base;
    }

    h1 {
      @apply text-5xl;
    }
    h2 {
      @apply text-4xl;
    }
    h3 {
      @apply text-3xl;
    }
    h4 {
      @apply text-2xl;
    }
    h5 {
      @apply text-xl;
    }
    h6 {
      @apply text-lg;
    }
  }
</style>
