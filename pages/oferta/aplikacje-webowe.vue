<template>
  <div ref="main">
    <h1>Aplikacje webowe</h1>
  </div>
</template>

<script setup>
  import { onUnmounted, ref, watch } from 'vue';
  import gsap from 'gsap';

  import { useTransitionComposable } from '~/composables/transition-composable';
  import transitionConfig from '~/helpers/transitionConfig';

  definePageMeta({
    pageTransition: transitionConfig,
  });

  const { transitionState } = useTransitionComposable();
  const main = ref(),
    ctx = ref();

  watch(
    () => transitionState.transitionComplete,
    (newValue) => {
      if (newValue) {
        ctx.value = gsap.context((self) => {
          console.log('transition complete watcher scroll page');
          const headings = self.selector('.gsap--home__txt-opacity');
          headings.forEach((heading) => {
            gsap.from(heading, {
              opacity: 0,
              scrollTrigger: {
                trigger: heading,
                start: 'top bottom',
                end: 'top 40%',
                scrub: true,
                markers: false,
              },
            });
          });
        }, main.value); // <- Scope!
      }
    }
  );

  onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
  });
</script>

<style scoped></style>
