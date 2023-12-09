<template>
  <div class="hero__websites">
    <div class="hero__websites--inner">
      <div class="section--title xl:hidden">
        <h1>Dostarczę Tobie profesjonalną, dedykowaną stronę www.</h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <h2 class="text-xl lg:text-3xl mt-2 font-normal mb-6 xl:hidden">
        Profesjonalna, niezwykle szybka, bezpieczna strona internetowa która
        przyniesie Twojemu biznesowi potencjał to rozwoju
      </h2>
      <img
        class="xl:hidden"
        src="~/assets/uploads/hero-profesjonalne-strony-www__mobile.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .hero__websites {
    @apply xl:bg-fixed bg-no-repeat bg-[#D9D9D9] text-dark-3 bg-cover bg-center;
    @apply w-full xl:min-h-screen flex flex-col items-start justify-end pt-20 xl:pt-0;
    text-align: left;

    @media (min-width: 1280px) {
      background-image: url('~/assets/uploads/hero-profesjonalne-strony-www.jpg');
    }
    &--inner {
      @apply w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8 min-h-full;
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
