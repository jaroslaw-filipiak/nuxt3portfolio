<template>
  <div class="my-tools--wrapper">
    <div class="my-tools--inner">
      <div class="section--title text-left max-w-5xl">
        <h3 class="text-left">
          Aktywnie korzystam z nowoczesnych narzędzi, które wspierają proces
          projektowy oraz codzienną komunikację
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="my-tools--items mt-16">
        <div class="my-tools--row--wrapper">
          <div class="my-tools--row">
            <img src="@/assets/uploads/tools/icon-bc.jpg" alt="" />
            <img src="@/assets/uploads/tools/icon-miro.jpg" alt="" />
            <img src="@/assets/uploads/tools/icon-figma.jpg" alt="" />
            <img src="@/assets/uploads/tools/icon-loom.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .my-tools {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-full-white text-dark-3;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col lg:flex-row gap-3 lg:gap-10 items-center justify-between p-8 w-full;

      &--wrapper {
        @apply flex;
      }

      h4 {
        @apply text-4xl;
      }

      img {
        @apply border p-8 lg:border-none lg:p-0;
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
