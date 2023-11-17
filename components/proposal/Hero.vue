<template>
  <div class="hero">
    <div class="hero--inner">
      <div class="section--title text-center">
        <div class="text-xl">Oferta dla Pani Edyty</div>
        <h3 class="text-center max-w-6xl mx-auto lg:text-8xl gsap--why-me--pin">
          Oferta na wykonanie strony www / artystyczne portfolio
        </h3>
        <img class="pt-3 mx-auto" src="~/assets/uploads/smush.svg" alt="" />
      </div>
      <div class="section--title">
        <!-- <div class="text-xl">Oferta dla Pani Edyty</div> -->
        <h1 class="relative inline-block pt-3 hidden">
          {{ title }}
          <svg
            class="animation-drawing-svg absolute top-0 -left-8 hidden"
            width="496"
            height="84"
            viewBox="0 0 496 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M401.906 15.7569C356.838 10.7637 311.727 6.039 266.364 4.49334C201.948 2.29848 136.37 1.77955 72.2785 12.8494C68.0237 13.5843 -5.7708 25.5168 3.21555 41.1431C8.3202 50.0196 24.6885 54.03 32.5503 56.5079C68.4575 67.825 106.176 72.7085 143.432 76.0732C221.587 83.1315 301.136 84.222 379.51 75.0429C406.286 71.9069 433.33 67.6724 459.551 60.3645C464.588 58.9608 493.671 52.8606 493.007 41.3208C492.546 33.3064 478.247 28.2809 473.588 26.4291C455.265 19.1456 435.573 15.3866 416.337 12.1232C389.606 7.58834 362.54 4.58666 335.447 3.38847C318.492 2.63867 298.982 2.67864 281.956 3.83206C243.103 6.46415 272.795 5.71785 235.176 9.5692"
              stroke="#FECD36"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </h1>

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

      <p class="text-base lg:text-base mt-2 font-normal">
        {{ publishDate }}
      </p>
      <p class="text-base lg:text-base mt-2 font-normal">
        {{ expirationDate }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    publishDate: String,
    expirationDate: String,
  });
</script>

<style lang="scss" scoped>
  .hero {
    @apply bg-no-repeat bg-light text-dark-3;
    @apply w-full  flex flex-col items-start justify-center pt-32 pb-32;
    text-align: left;

    @media (min-width: 1280px) {
      background-position: center;
      background-size: 100%;
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
