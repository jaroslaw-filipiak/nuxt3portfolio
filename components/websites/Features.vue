<template>
  <div class="websites-features--wrapper">
    <div class="websites-features--inner">
      <div class="section--title text-center">
        <h3 class="text-center max-w-5xl mx-auto">
          Dedykowane strony www to moja mocna strona. Zaprojektuje ,
          zaprogramuje oraz wdroże {feature.props } stronę www
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="websites-features--items mt-32"></div>

      <div class="websites-features--items">
        <div class="flex">
          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-3/12 border border-dark-3"
          >
            <h4 class="text-4xl">W pełni indywidualne podejście</h4>
            <p class="text-2xl">Autorska strona www od projektu po wdrożenie</p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-4/12 border border-dark-3"
          >
            <h4 class="text-4xl">Pełna responsywność</h4>
            <p class="text-2xl">
              Strony internetowe testuje na realnych urządzeniach oraz w
              narzędziach do testowania i automatyzacji. Strony wykonane przeze
              mnie dopasowują się do ekranu na którym są wyświetlane
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-5/12 border border-dark-3"
          >
            <h4 class="text-4xl">Bezpieczeństwo Twoich danych</h4>
            <p class="text-2xl">
              Z doświadczenia wiem, że można drastycznie zminimalizować czas
              realizacji oraz koszty. Wystarczy współpracować face 2 face z
              freelancerem zamiast z agencją... która zatrudnia freelancerów.
            </p>
            <p class="text-2xl">
              Brak aparatu administracyjnego i szybki przepływ informacji to
              klucz do szybkiego wdrożenia strony www
            </p>
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
  .websites-features {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-full-white text-dark-3;
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
