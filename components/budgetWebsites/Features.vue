<template>
  <div class="budget-websites-features--wrapper">
    <div class="budget-websites-features--inner">
      <div class="section--title text-center">
        <h3 class="text-center max-w-5xl mx-auto">
          Dodatkowo strona będzie poprawnie wyświetlać się również na telefonach
          komórkowych oraz tabletach
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="budget-websites-features--items mt-32">
        <div class="budget-websites-features--row--wrapper">
          <div class="budget-websites-features--row lg:border-r-0">
            <h4>Szybki czas realizacji</h4>
            <p class="text-3xl">opis</p>
          </div>

          <div class="budget-websites-features--row lg:border-r-0">
            <h4>Jasna komunikacja</h4>
          </div>

          <div class="budget-websites-features--row">
            <h4>Indywidualne podejście</h4>
          </div>
        </div>
      </div>

      <div class="budget-websites-features--items">
        <div class="budget-websites-features--row--wrapper">
          <div
            class="budget-websites-features--row lg:border-r-0 lg:border-t-0"
          >
            <h4>Elastyczność</h4>
          </div>

          <div
            class="budget-websites-features--row lg:border-r-0 lg:border-t-0"
          >
            <h4>Jasne warunki rozliczenia</h4>
          </div>

          <div class="budget-websites-features--row lg:border-t-0">
            <h4>Szybkość działania</h4>
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
  .budget-websites-features {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-full-white text-dark-3;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col  gap-10 items-start justify-between p-8 w-4/12 border border-dark-3;

      &--wrapper {
        @apply flex;
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
