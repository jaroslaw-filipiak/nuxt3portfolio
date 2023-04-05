<template>
  <div class="websites__offer--wrapper">
    <div class="websites__offer--inner">
      <div class="section--title max-w-4xl">
        <h3>Dlaczego warto skorzystać z oferty na autorskie strony www ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-white text-5xl">
            Decydując się na wybór profesjonalnej strony internetowej masz
            pewność, żę projekt będzie szybki, bezpieczny oraz w pełni stabilny.
          </h4>
          <h4 class="text-white text-4xl mt-10 max-w-6xl">
            Skoro wydajesz pieniądze na stronę www to upewnij się, że zostanie
            ona wykonana przez profesjonalistę.
          </h4>
        </div>
      </div>

      <div class="websites__offer--items mt-20">
        <div class="websites__offer--row--wrapper">
          <div
            class="websites__offer--row xl:border-b-0 2xl:border-b 2xl:w-6/12 3xl:w-7/12"
          >
            <div>
              <div>
                <h4>Responsywność</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <p class="text-3xl">
                Responsywność to tak naprawdę wygoda oraz dostępność.
                Użytkownicy bedą mogli oglądać Twoją stronę na różnych
                urządzeniach niezależnie od rodzaju. Sama wygoda to nie jedyne
                korzyści wynikające z posiadania responsywnej strony. Pamiętaj,
                że takie strony mają lepsze wyniki w wyszukiwarkach oraz lepsze
                statystyki odwiedzin.
              </p>
              <p class="text-2xl mt-8">
                Dokładnie testuje za pomocą automatycznych narzędzi sposób
                wyświetlania strony na najpopularniejszych urządzeniach.
              </p>
            </div>
          </div>

          <div class="websites__offer--row 2xl:w-6/12 3xl:w-5/12">
            <div>
              <div>
                <h4>Przystosowanie strony pod SEO</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p class="text-3xl">
                Zwiększona widoczność to więcej odwiedzin a więcej odwiedzin to
                więcej okazji do sprzedania swojego produktu lub usługi. Dobra
                optymalizacja pod SEO jest jak lokata - wraz z czasem zyskujesz
                coraz więcej.
              </p>
              <p class="text-xl mt-8">
                Długoterminowe korzyści to najważniejszy aspekt dobrej
                optymalizacji strony pod wyniki wyszukiwania.
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4>Bezpieczeństwo to podstawa</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p class="text-3xl">
                Strona musi być dobrze zabezpieczona przed najpopularniejszymi
                atakami oraz powinna mieć kopie zapasową nie tylko plików ale
                także bazy danych. Stała współpraca to bezpieczeństwo Twoich
                danych, szybka reakcja na awarie, regularne kopie zapasowe oraz
                stały monitoring statusu witryny.
              </p>
              <p class="text-2xl mt-8">
                Każda wykonana strona jest mocno zabezpieczona. Jeżeli chcesz
                aby dodatkowo ktoś nad nią czuwał skorzystaj z oferty na
                <NuxtLink
                  class="link-with-undeline"
                  to="/oferta/opieka-nad-stronami-internetowymi"
                  >Opiekę nad stronami internetowymi.</NuxtLink
                >
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
        @apply flex flex-wrap;
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
