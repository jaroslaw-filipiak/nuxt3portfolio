<template>
  <div class="hero__infections hidden xl:flex">
    <div class="hero__infections--inner">
      <div class="section--title xl:hidden">
        <h1>Twoją stronę zaatakował wirus ?</h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <h2 class="text-xl lg:text-3xl mt-2 font-normal mb-6 xl:hidden">
        Oczysczę twoją stronę ze złośliwego kodu i zabezpieczę przed
        atakami.Prześlę raport z wykonanych prac oraz prześlę gwarancję na
        wykonane prace.
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .hero__infections {
    @apply xl:bg-fixed bg-no-repeat bg-[#D9D9D9] text-dark-3 bg-cover bg-center;
    @apply w-full xl:min-h-screen flex flex-col items-start justify-end pt-20 xl:pt-0;
    text-align: left;

    @media (min-width: 1280px) {
      background-image: url('~/assets/uploads/usuwam-wirusy-ze-stron-www-light.webp');
    }

    &--inner {
      @apply w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8;
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
