<template>
  <div class="budget-websites-features--wrapper">
    <div class="budget-websites-features--inner">
      <div class="section--title text-center">
        <h3 class="text-center max-w-5xl mx-auto">
          Nienaganne wyświetlanie na telefonie oraz laptopie ? responsywność to
          podstawa!
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="budget-websites-features--items mt-32">
        <div class="budget-websites-features--row--wrapper">
          <div class="budget-websites-features--row w-full">
            <h4 class="text-3xl lg:text-4xl">
              Strona www od doświadczonego freelancera
            </h4>
            <p class="text-2xl">
              Jestem w branży od ponad 10 lat. Od wielu lat wdrażam autorsko
              strony www dla agencji interaktywnych. Pracuje w złożonym teamie
              składającym się z designerów / marketerów / managerów. Wiem jak
              wygląda tworzenie ogromnych projektów od kuchni. Zauważam dużo
              błędów w największych agencjach i przekuwam je w autorski workflow
              pracy bezpośrednio z klientem
            </p>
          </div>

          <div class="flex flex-col lg:flex-row gap-3 mb-3">
            <div class="budget-websites-features--row w-full lg:w-6/12">
              <h4 class="text-3xl lg:text-4xl">Pełna responsywność</h4>
              <p class="text-xl lg:text-2xl">
                Strony internetowe testuje na realnych urządzeniach oraz w
                narzędziach do testowania i automatyzacji. Strony wykonane prze
                ze mnie dopasowują się do ekranu na którym są wyświetlana
              </p>
            </div>

            <div class="budget-websites-features--row w-full lg:w-6/12">
              <h4 class="text-3xl lg:text-4xl">Szybki czas realizacji</h4>
              <p class="text-xl lg:text-2xl">
                Z doświadczenia wiem, że można drastycznie zminimalizować czas
                realizacji oraz koszty. Wystarczy współpracować face 2 face z
                freelancerem zamiast z agencją , która zatrudnia freelancera.
                Brak aparatu administracyjnego i szybki przepływ informacji to
                klucz do szybkiego wdrożenia strony www
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="budget-websites-features--items">
        <div class="flex flex-col lg:flex-row gap-3">
          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-4/12 border border-dark-3"
          >
            <h4 class="text-xl lg:text-4xl">Elastyczność</h4>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-4/12 border border-dark-3"
          >
            <h4 class="text-xl lg:text-4xl">Jasne warunki rozliczenia</h4>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-4/12 border border-dark-3"
          >
            <h4 class="text-xl lg:text-4xl">Szybkość działania</h4>
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
