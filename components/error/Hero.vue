<template>
  <div class="hero__err">
    <div class="hero__err--inner">
      <div class="section--title">
        <h1>Upss... podana strona nie istnieje</h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <h2 class="text-xl lg:text-3xl mt-2 font-normal mb-6">
        Lecz ja nadal jestem dla Ciebie dostępny :) , wróć proszę na stronę
        główną lub skontaktuj się ze mną.
      </h2>
      <NuxtLink exact class="dark-label hover:opacity-80 transition-all" to="/"
        >Strona główna</NuxtLink
      >
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .hero__err {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full  flex flex-col items-start justify-center pt-32 pb-32;
    text-align: left;

    &--inner {
      @apply w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8;
    }

    .section--title {
      @apply pb-9;

      h1,
      h2 {
        @apply text-5xl lg:text-7xl;
      }

      h3,
      h4,
      h5 {
        @apply text-4xl lg:text-7xl;
      }

      img {
        @apply relative lg:left-48 top-3;
      }
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
