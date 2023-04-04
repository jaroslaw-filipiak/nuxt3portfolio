<template>
  <div class="budget-websites-review--wrapper">
    <div class="budget-websites-review--inner">
      <div class="section--title text-center">
        <h3 class="text-center max-w-5xl mx-auto italic">
          Współpraca na najwyższym poziomie. Zarówno realizacja zlecenia jak i
          rekomendacje usprawnień projektu. Polecam.
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
        <div class="mt-10 italic">
          Wojciech Czeżyk
          <NuxtLink
            class="link-with-undeline link-with-undeline__dark"
            to="http://www.kasywwl.pl"
          >
            / kasywwl.pl</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .budget-websites-review {
    &--wrapper {
      @apply pt-36 pb-36  w-full bg-full-white text-dark-3;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col  gap-10 items-start justify-between p-8  border border-dark-3;

      &--wrapper {
        @apply flex flex-col gap-3;
      }

      h4 {
        @apply text-4xl;
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
