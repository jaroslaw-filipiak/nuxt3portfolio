<template>
  <div class="about__offer--wrapper">
    <div class="about__offer--inner">
      <div class="section--title max-w-4xl">
        <h3>Dlaczego warto skorzystać z oferty na tanie strony www ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-white text-2xl lg:text-5xl">
            Decydując się na wybór taniej strony internetowej, pewnie boisz się
            tego, że trafisz na bubel? Bez obaw, wszystkie strony, które tworzę,
            są wykonane zgodnie ze sztuką.
          </h4>
          <h4 class="text-white text-base lg:text-4xl mt-10 max-w-6xl">
            U mnie tanio to także znaczy dobrze. Świadczą o tym liczne opinie
            moich Klientów oraz wysokie oceny mojej firmy w Internecie.
          </h4>
        </div>
      </div>

      <div class="about__offer--items mt-20">
        <div class="about__offer--row--wrapper">
          <div
            class="about__offer--row xl:border-b-0 2xl:border-b w-full 2xl:w-6/12 3xl:w-7/12"
          >
            <div>
              <div>
                <h4>Niska cena! , już od 899 zł netto + VAT</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <p class="text-xl lg:text-3xl">
                Pełnoprawna , w pełni profesjonalna strona www w przystępnej
                cenie ? Oczywiście że to możliwe! Oferuje profesjonalną stronę
                www , w pełni przygotowaną pod SEO wraz ze specjalnym pakietem
                bezpieczeństwa.
              </p>
            </div>
          </div>

          <div class="about__offer--row w-full 2xl:w-6/12 3xl:w-5/12">
            <div>
              <div>
                <h4>Panel administracyjny</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
                Dzięki któremu możesz samodzielnie zarządzać stwoją witryną ,
                dodawać nowe wpisy , strony , podglądać statystyki czy zarządzać
                dogłębnie SEO swojej witryny.
              </p>
            </div>
          </div>

          <div class="about__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4>Wdrożenie strony na serwer</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
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
  .about__offer {
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
