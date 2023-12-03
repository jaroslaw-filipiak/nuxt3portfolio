<template>
  <div class="websites__offer--wrapper bg-dark-3">
    <div class="websites__offer--inner">
      <div class="section--title max-w-4xl">
        <h3 class="text--reveal__dark">
          Czym aktualnie zajmuje się w 2023 roku ?
        </h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-white text-2xl lg:text-5xl text--reveal__dark">
            W tym roku zrealizowałem kilka ciekawych projektów.
          </h4>
          <h4
            class="text-white text-xl lg:text-4xl mt-10 max-w-6xl text--reveal__dark"
          >
            Liczę na to, że rok 2024 będzie okazją do jeszcze trudniejszych i
            bardziej wymagających projektów obarczonych odpowiedzialnością.
          </h4>
        </div>
      </div>

      <div class="websites__offer--items mt-20">
        <div class="websites__offer--row--wrapper">
          <div
            class="websites__offer--row xl:border-b-0 2xl:border-b w-full 2xl:w-6/12 3xl:w-7/12"
          >
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl text--reveal__dark">
                  Obsługuję agencję kreatywną jako Vue.js developer
                </h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>

            <div>
              <p class="text-xl lg:text-3xl text--reveal__dark">
                Wdrażam projekty graficzne do Vue.js a następnie integruje je z
                API dostarczonym od backendowców (Laravel)
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full 2xl:w-6/12 3xl:w-5/12">
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl text--reveal__dark">
                  Obsługuję stałych klientów
                </h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl text--reveal__dark">
                Głównie Wordpress, poprawki na stronach , pisanie nowych
                funkcjonalności, usprawnienia czy też optymalizację. Czasami
                czyszcze strony z wirusów , czasami zabezpieczam je przed
                atakami.
              </p>
            </div>
          </div>

          <div
            class="websites__offer--row w-full xl:border-t-0 text--reveal__dark"
          >
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl text--reveal__dark">
                  Tworze fullstackowo
                </h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl text--reveal__dark">
                Aktualnie tworze dla średniej wielkości przedsiębiorstwa
                dedykowany system,który usprawni wysyłanie kompletnych,
                personalizowanych ofert dla klientów. Jestem odpowiedzialny za
                cały proces: Tworze projekt graficzny, stawiam panel
                administracyjny oraz moduł do istniejącej strony www a takze
                pisze API.
              </p>
              <p class="text-xl lg:text-2xl mt-10 text--reveal__dark">
                Dodatkowo lubie sprawdzać co zmienia się w świecie
                front-endowym, dlatego też odrzuciłem używany na codzień
                framework Vue.js i piszę front w Next.js
              </p>
            </div>
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
  .websites__offer {
    &--wrapper {
      @apply pt-20 pb-20  w-full;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col  gap-10 items-start justify-between p-8  border border-light;

      &--wrapper {
        @apply flex flex-col lg:flex-row flex-wrap;
      }

      h4 {
        @apply text-4xl mb-10;
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
