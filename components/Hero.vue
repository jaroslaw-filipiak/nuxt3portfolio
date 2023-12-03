<template>
  <div class="hero">
    <div class="hero--inner">
      <div class="text--reveal section--title text-5xl lg:text-7xl">
        <!-- <h1 class="text">TEXT EFFECT<span>WOAH</span></h1>
        <h1 class="text">GSAP<span>AND CLIPPING</span></h1>
        <h1 class="text">CRAZYYY<span>CRAZYYY</span></h1> -->
        <h1>{{ title }} {{ subtitle }}</h1>

        <!-- <svg
          class="animation-drawing-svg"
          width="421"
          height="17"
          viewBox="0 0 421 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.3324C94.083 10.1861 185.894 6.41165 277.92 3.83749C319.735 2.66784 361.567 2.11707 403.397 2.04102C407.973 2.0327 412.55 1.95304 417.124 2.04102C424.864 2.18985 401.646 2.36123 393.908 2.59378C299.8 5.42218 205.609 7.44475 111.539 11.3458C99.9351 11.8271 87.307 12.4705 75.6095 13.2805C73.0272 13.4593 70.4475 13.6789 67.8708 13.9254C64.1674 14.2796 64.022 14.3636 67.6866 14.4321C95.2452 14.9472 122.855 14.4782 150.417 14.4782"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg> -->

        <!-- <img
          class="pt-1 left-0"
          src="~/assets/uploads/underline-1-dark.svg"
          alt=""
        /> -->
        <!-- <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" /> -->
      </div>

      <h2 class="text--reveal text-xl lg:text-3xl mt-2 font-normal mb-6">
        {{ heading }}
      </h2>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    subtitle: String,
    heading: String,
  });

  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;

  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {});
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style lang="scss" scoped>
  .hero {
    @apply xl:bg-fixed bg-no-repeat bg-light text-dark-3 bg-cover;
    @apply w-full h-screen flex flex-col items-start justify-center;
    text-align: left;

    @media (min-width: 1280px) {
      background-image: url('~/assets/uploads/hero--main.jpg');
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    h1 {
      @apply max-w-5xl;
    }

    h2,
    h3 {
      @apply max-w-4xl;
    }

    h2 {
      span {
        @apply relative inline-block;
        top: 10px;
      }

      p {
        @apply absolute z-10 text-dark-3 text-3xl;
        left: 25px;
        top: 6px;
      }
    }

    .animation-drawing-svg {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dash 0.6s linear forwards;

      @keyframes dash {
        to {
          stroke-dashoffset: 0;
        }
      }
    }
  }
</style>
