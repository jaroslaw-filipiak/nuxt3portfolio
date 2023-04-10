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

  watch(route, () => {
    store.closeNav();
  });

  onMounted(() => {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('.top-bar');
      header.classList.toggle('top-bar__sticky', window.scrollY > 0);
    });
  });

  useHead({
    script: [
      {
        hotjar: `(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 3304441, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
`,
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
      @apply text-4xl lg:text-7xl;
    }

    img {
      @apply relative lg:left-48 top-3;
    }
  }
</style>
