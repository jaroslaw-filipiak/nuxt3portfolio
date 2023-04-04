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
            Decydując się na wybór taniej strony internetowej, pewnie boisz się
            tego, że trafisz na bubel? Bez obaw, wszystkie strony, które tworzę,
            są wykonane zgodnie ze sztuką.
          </h4>
          <h4 class="text-white text-4xl mt-10 max-w-6xl">
            U mnie tanio to także znaczy dobrze. Świadczą o tym liczne opinie
            moich Klientów oraz wysokie oceny mojej firmy w Internecie.
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
                Pełnoprawna , w pełni profesjonalna strona www w przystępnej
                cenie ? Oczywiście że to możliwe! Oferuje profesjonalną stronę
                www , w pełni przygotowaną pod SEO wraz ze specjalnym pakietem
                bezpieczeństwa.
              </p>
              <p class="text-2xl mt-8">
                Po zakończeniu współpracy możesz skorzystać z administracji w
                abonamencie , wykupić pakiet SEO , pakiet bezpieczeństwa oraz o
                wiele więcej. Stronę można dowolnie rozbudowywać w każdym
                momencie samodzielnie lub z moją pomocą. Zobacz również obsługa
                ad-hoc na godziny
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
              <p class="text-3xl">..</p>
            </div>
          </div>

          <div class="websites__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4>Bezpieczeństwo Twoich danych</h4>
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
                Sama strona internetowa to nie wszystko. Aby zaistniała ona w
                sieci potrzebny jest serwer , odpowiednia konfiguracja , a także
                domena i certyfikat ssl . Wraz z serwerem trzeba skonfigurować
                pocztę email . Wszystkie te usługi otrzymasz w cenie
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
