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

    <img
      height="1"
      width="1"
      style="display: none"
      src="https://www.facebook.com/tr?id=283449068057732&ev=PageView&noscript=1"
    />
    >;
  </div>
</template>

<script setup>
  import { useNavStore } from '~~/stores/nav';
  import { watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const store = useNavStore();
  const route = useRoute();

  function changeLogoTextContent(text) {
    const logo = document.querySelector('.gsap-change-fullname-to-sign');
    logo.innerHTML = text;
  }

  watch(route, () => {
    store.closeNav();
  });

  onMounted(() => {
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
