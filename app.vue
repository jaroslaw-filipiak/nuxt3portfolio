<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { onMounted } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { TextPlugin } from 'gsap/TextPlugin';

  import { useTransitionComposable } from './composables/transition-composable';

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

  const { toggleTransitionComplete } = useTransitionComposable();

  onMounted(() => {
    toggleTransitionComplete(true);
    console.log('unmounted in app.vue');
  });
</script>

<style>
  /* .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
    border: 22px solid red;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  } */

  .page-content {
    @apply lg:min-h-screen flex flex-col items-start text-white;
  }

  @media (min-width: 1024px) {
    .page-content {
      margin-bottom: 600px;
    }
  }
</style>
