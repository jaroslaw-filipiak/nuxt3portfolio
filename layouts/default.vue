<template>
  <div class="template-default-wrapper">
    <TopBar />
    <div>
      <div class="content">
        <div class="hidden lg:flex"><Footer /></div>
        <slot />
      </div>
      <Menu />
    </div>
    <div class="lg:hidden"><Footer /></div>
  </div>
</template>

<script setup>
  import { useNavStore } from '~~/stores/nav';
  import { watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const store = useNavStore();
  const route = useRoute();

  // const blogRoutes = async () => {
  //   const { data } = await axios(
  //     'https://www.j-filipiak.pl/api/wp-json/wp/v2/posts?per_page=100'
  //   );

  //   console.log(data);

  //   const prepared = [];

  //   data.map((route) => prepared.push('/blog/' + route.title?.rendered));

  //   console.log(prepared);
  //   return prepared;
  // };

  // const arr = await blogRoutes();

  function changeLogoTextContent(text) {
    const logo = document.querySelector('.gsap-change-fullname-to-sign');
    logo.innerHTML = text;
  }

  watch(route, () => {
    store.closeNav();
  });

  onMounted(() => {
    // blogRoutes();
    // console.log('arr', arr);
    // console.log(arr);
    // console.log('blog..');

    window.addEventListener('scroll', () => {
      let header = document.querySelector('.top-bar');
      header.classList.toggle('top-bar__sticky', window.scrollY > 0);
      changeLogoTextContent(window.scrollY > 0 ? 'JF' : 'Jarosław Filipiak');
    });
  });

  useHead({
    script: [
      {
        src: '/hotjar.js',
        async: true,
      },
      {
        src: '/piwik.js',
        async: true,
      },
      {
        src: '/meta-pixel.js',
        async: true,
      },
    ],
  });
</script>

<style lang="scss">
  .section--title {
    @apply pb-9;

    h1,
    h2 {
      @apply text-5xl lg:text-7xl;
    }

    h3,
    h4,
    h5 {
      @apply text-4xl lg:text-7xl leading-10;
    }

    img {
      @apply relative lg:left-48 top-3;
    }
  }
</style>
