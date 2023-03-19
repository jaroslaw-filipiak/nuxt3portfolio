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
  import { watch } from 'vue';
  import { useRoute } from 'vue-router';

  const store = useNavStore();
  const route = useRoute();

  watch(route, () => {
    store.closeNav();
  });
</script>

<style lang="scss">
  .section--title {
    @apply pb-9;

    h1,
    h2,
    h3,
    h4,
    h5 {
      @apply text-7xl;
    }
    img {
      @apply relative lg:left-48 top-3;
    }
  }
</style>
