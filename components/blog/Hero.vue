<template>
  <header class="w-full">
    <div class="hero__about">
      <div class="hero__about--inner">
        <div>
          <div class="section--title">
            <h1 class="text-3xl lg:text-7xl">
              Blog o grafice komputerowej, designie, tworzeniu stron
              internetowych a także programowaniu.
            </h1>
            <h2 class="text-xl lg:text-3xl pt-3">
              Znajdziesz tutaj zarówno poradniki dot.projektowania stron www,
              projektownia aplikacji mobilnych a także dużo informacji ze świata
              WordPressa i nie tylko.
            </h2>
            <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
          </div>
        </div>
        <div class="mb-10 lg:mb-0">
          <img class="max-w-xl" src="@/assets/uploads/blog-hero.jpg" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .hero__about {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full 2xl:h-screen min-h-screen flex flex-col items-start justify-center pt-20 xl:pt-24 2xl:pt-20  pb-8 xl:pb-20 2xl:pb-8 lg:pt-0 lg:pb-0;
    text-align: left;

    &--inner {
      @apply w-full lg:w-11/12 flex flex-col-reverse lg:flex-row items-center justify-between mx-auto pl-8 pr-8;
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
  }
</style>
