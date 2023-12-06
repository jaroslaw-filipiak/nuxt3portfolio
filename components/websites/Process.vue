<template>
  <div class="websites-process--wrapper z-50">
    <div class="websites-process--inner">
      <div class="flex flex-col justify-center items-center w-full">
        <div class="GSAP_section--title">
          <h3 class="text-4xl lg:text-4xl leading-10 text-dark-3">
            Jak wygląda proces tworzenia strony internetowej?
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;
  let ctx;

  onMounted(() => {
    const title = document.querySelector('.GSAP_section--title h3');

    ctx = gsap.context(() => {
      // const initialClasses = [
      //   'text-4xl',
      //   'lg:text-7xl',
      //   'leading-10',
      //   'text-dark-3',
      // ];
      // const onEnterClasses = [
      //   'text-xl',
      //   'lg:text-4xl',
      //   'leading-10',
      //   'text-dark-3',
      // ];
      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: '.websites-process--wrapper',
      //       start: 'top top',
      //       end: () =>
      //         '+=' +
      //         document.querySelector('.process-steps--wrapper').offsetHeight,
      //       scrub: true,
      //       markers: false,
      //       pin: true,
      //       toggleActions: 'play none none reverse',
      //     },
      //   })
      //   .to('.websites-process--wrapper', {
      //     ease: 'ease-in',
      //     backgroundColor: '#FECD36',
      //   });
      // // context
    });
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style lang="scss" scoped>
  .websites-process {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-white;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }
  }
</style>
