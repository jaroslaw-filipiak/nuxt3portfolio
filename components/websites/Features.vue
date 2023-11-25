<template>
  <div class="websites-features--wrapper">
    <div class="websites-features--inner">
      <div class="section--title text-center">
        <h1 class="text-center max-w-5xl mx-auto">
          Dostarczę Tobie profesjonalną , dedykowaną stronę www.
        </h1>
        <h2
          class="text-xl lg:text-3xl font-normal mb-6 max-w-3xl mt-10 mx-auto"
        >
          Profesjonalna, niezwykle szybka, bezpieczna strona internetowa która
          przyniesie Twojemu biznesowi potencjał to rozwoju
        </h2>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="websites-features--items mt-32"></div>

      <div class="websites-features--items">
        <div class="flex flex-col 2xl:flex-row">
          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-3/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-3xl lg:text-4xl">W pełni indywidualne podejście</h4>
            <p class="text-xl">
              Autorska strona www od projektu po wdrożenie. Zrobiona przez
              osobę, która zna się na rzeczy i wie jak projektować strony zgodne
              z najnowszymi standardami branżowymi.
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-3xl lg:text-4xl">Pełna responsywność</h4>
            <p class="text-xl">
              Strony internetowe testuje na realnych urządzeniach oraz w
              narzędziach do testowania i automatyzacji. Strony wykonane przeze
              mnie dopasowują się do ekranu na którym są wyświetlane.
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-5/12 border border-dark-3"
          >
            <h4 class="text-3xl lg:text-4xl">
              Optymalizacja na wielu płaszczyznach
            </h4>
            <p class="text-xl">
              Autorskie strony są optymalizowane już przy samym projektowaniu:
              optymalizuję scieżkę usera czyli: wg. klasycznej zasady: "jak
              najmniej klikania, jak najmniej szukania". Optymalizacja szybkości
              wczytywania to kolejny etap.
            </p>
            <p class="text-xl">
              Finalnie kończymy na optymalizacji pod kątem SEO aby Twoja strona
              nie była oglądana tylko przez Ciebie.
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
