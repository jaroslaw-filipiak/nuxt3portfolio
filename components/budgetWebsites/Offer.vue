<template>
  <div class="about__offer--wrapper">
    <div class="about__offer--inner">
      <div class="section--title max-w-4xl">
        <h3>Dlaczego warto skorzystać z oferty na tanie strony www ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-9/12">
          <h4 class="text-white text-5xl">
            Decydując się na wybór taniej strony internetowej, pewnie boisz się
            tego, że trafisz na bubel? Bez obaw, wszystkie strony, które tworzę,
            są wykonane zgodnie ze sztuką. U mnie tanio to także znaczy dobrze.
            Świadczą o tym liczne opinie moich Klientów oraz wysokie oceny mojej
            firmy w Internecie.
          </h4>
        </div>
      </div>

      <div class="about__offer--items mt-20">
        <div class="about__offer--row--wrapper">
          <div class="about__offer--row lg:border-r-0">
            <div>
              <div>
                <h4>Niska cena! , już od 799 zł netto + VAT - zobacz cennik</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <ul>
                <li>
                  <a href="">Projektowanie stron internetowych</a>
                </li>
                <li>
                  <a href="">Projektowanie aplikacji mobilnych</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="about__offer--row lg:border-r-0">
            <div>
              <div>
                <h4>WordPress</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Wdrażanie kompletnych stron www</a>
                </li>
                <li>
                  <a href=""
                    >Kodowanie projektów graficznych z PSD / XD / FIGMA do
                    systemu WordPress</a
                  >
                </li>
                <li>
                  <a href="">Budżetowe strony www oparte o darmowe szablony</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="about__offer--row">
            <div>
              <div>
                <h4>Wsparcie</h4>
              </div>
              <div>
                <img
                  src="https://www.fusecollective.com/wp-content/uploads/2022/01/strategia.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Opieka nad stronami internetowymi</a>
                </li>
                <li>
                  <a href=""
                    >Administracja / opieka nad stronami opartymi o system
                    WordPress</a
                  >
                </li>
              </ul>
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
      @apply flex flex-col  gap-10 items-start justify-between p-8 w-4/12 border border-light;

      &--wrapper {
        @apply flex;
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
