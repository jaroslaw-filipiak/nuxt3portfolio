<template>
  <div class="hello">
    <div class="hello--inner">
      <div>
        <div class="section--title">
          <h1 class="text-3xl lg:text-7xl">
            Witam bardzo serdecznie na mojej stronie
          </h1>
          <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
        </div>

        <h2 class="text-xl lg:text-3xl mt-2 font-normal mb-6">
          Z tej strony Jarosław Filipiak, tworze projekty graficzne, wdrażam
          kompletne strony internetowe oraz aplikację webowe/mobilne , pomagam
          firmom na wielu płaszczyznach i mam nadzieję, że pomogę również Tobie
        </h2>
      </div>
      <div class="mb-10 lg:mb-0">
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
  .hello {
    @apply bg-cover bg-fixed bg-no-repeat bg-[#fff] text-dark-3;
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
