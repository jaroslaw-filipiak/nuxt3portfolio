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
      @apply text-2xl lg:text-7xl;
    }

    img {
      @apply relative lg:left-48 top-3;
    }
  }
</style>
