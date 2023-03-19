<template>
  <div class="hero">
    <div class="hero--inner">
      <div class="section--title">
        <h1>Projektuje oraz wdrażam profesjonalne strony internetowe</h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <h2 class="lg:text-3xl mt-2 font-normal mb-6">
        Pomogę Tobie stworzyć wyjątkową i unikalną stronę www , która wzbudza
        prawdziwe zainteresowanie i zapada w pamięć.
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
    methods: {
      changeLogoTextContent(text) {
        const logo = document.querySelector('.gsap-change-fullname-to-sign');
        logo.innerHTML = text;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .hero {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full h-screen flex flex-col items-start justify-center;
    text-align: left;

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
  }
</style>
