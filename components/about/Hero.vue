<template>
  <div class="hero__about">
    <div class="hero__about--inner">
      <div>
        <div class="section--title">
          <h1>
            Nazywam się Jarosław Filipiak, jestem doświadczonym grafikiem oraz
            front-end developerem
          </h1>
          <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
        </div>

        <h2 class="lg:text-3xl mt-2 font-normal mb-6">
          Specjalizuje się w projektowaniu oraz kodowaniu stron internetowych a
          także kompleksowych aplikacji webowych.
        </h2>
      </div>
      <div>
        <img src="@/assets/p3.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .hero__about {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full h-screen flex flex-col items-start justify-center;
    text-align: left;

    &--inner {
      @apply w-full lg:w-11/12 flex items-center justify-between mx-auto pl-8 pr-8;
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
