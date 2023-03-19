<template>
  <button
    class="hamburger hamburger--vortex z-30"
    :class="{ 'is-active': isVisible }"
    type="button"
    @click="toggleVisible"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script setup>
  import { useNavStore } from '~~/stores/nav';
  import { storeToRefs } from 'pinia';
  const store = useNavStore();
  const { isVisible } = storeToRefs(store);
  const { toggleVisible } = store;
</script>
