<template>
  <div
    class="why-freelancer--wrapper gsap__hero-bg-size--trigger gsap__why-me-txt--trigger"
  >
    <div class="why-freelancer--inner why-freelancer--is-pinned">
      <div class="section--title text-center">
        <h3 class="text-center max-w-6xl mx-auto lg:text-8xl gsap--why-me--pin">
          Dlaczego warto ze mną współpracować ?
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="why-freelancer--items mt-32">
        <div class="why-freelancer--row--wrapper flex-nowrap">
          <div class="why-freelancer--row lg:border-r-0">
            <h4
              class="text--reveal text-3xl lg:text-5xl font-Atkinson gsap--home__txt-opacity"
            >
              Nie wszystkie projekty wymagają zatrudnienia agencji kreatywnej
              lub zespołu
            </h4>
            <p class="text--reveal text-xl lg:text-3xl">
              Dowiedz się dlaczego warto współpracować z
              <strong>dobrym </strong> freelancerem
            </p>
          </div>

          <div class="why-freelancer--row lg:border-r-0">
            <h4 class="text--reveal text-xl lg:text-3xl">Jasna komunikacja</h4>
          </div>

          <div class="why-freelancer--row">
            <h4 class="text--reveal text-xl lg:text-3xl">
              Indywidualne podejście
            </h4>
          </div>
        </div>
      </div>

      <div class="why-freelancer--items">
        <div class="why-freelancer--row--wrapper">
          <div class="why-freelancer--row lg:border-r-0 lg:border-t-0">
            <h4 class="text--reveal text-xl lg:text-3xl">Elastyczność</h4>
          </div>

          <div class="why-freelancer--row lg:border-r-0 lg:border-t-0">
            <h4 class="text--reveal text-xl lg:text-3xl">
              Jasne warunki rozliczenia
            </h4>
          </div>

          <div class="why-freelancer--row lg:border-t-0">
            <h4 class="text--reveal text-xl lg:text-3xl">Szybkość działania</h4>
          </div>
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
    ctx = gsap.context(() => {
      const heroBGTrigger = document.querySelector(
        '.gsap__hero-bg-size--trigger'
      );
      // gsap.from('.gsap--why-me--pin', {
      //   scale: '3',
      //   scrollTrigger: {
      //     id: 'heroImageZoom',
      //     trigger: heroBGTrigger,
      //     start: 'top bottom',
      //     end: 'top 10%',
      //     scrub: true,
      //     markers: true,
      //   },
      // });
    });
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style lang="scss" scoped>
  .why-freelancer {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-full-white text-dark-3;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col gap-10 items-start justify-between p-8  border border-dark-3;

      &--wrapper {
        @apply flex flex-col lg:flex-row;
      }

      li {
        @apply pb-4 text-xl flex items-start;

        a {
          @apply cursor-default pointer-events-none;
        }

        svg {
          @apply mr-2;
        }
      }
    }
  }
</style>
