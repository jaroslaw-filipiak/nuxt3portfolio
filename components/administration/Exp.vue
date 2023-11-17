<template>
  <div class="websites__exp">
    <div class="websites__exp--inner">
      <div class="section--title">
        <h1>
          Od ponad 5 lat obsługuję większe agencje typu 360 oraz software
          house-y
        </h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <h2 class="lg:text-3xl mt-2 font-normal mb-6">
        Jako podwykonawca wdrażam strony dla topowych marek.
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
  .websites__exp {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full h-screen flex flex-col items-start justify-center;
    text-align: left;

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
