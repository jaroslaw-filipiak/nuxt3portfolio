<template>
  <div class="offer__light--wrapper">
    <div class="offer__light--inner">
      <div class="section--title">
        <h3>W czym mogę pomóc ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <div class="offer__light--items mt-20">
        <div class="offer__light--row--wrapper">
          <div class="offer__light--row lg:border-r-0">
            <div>
              <div>
                <h4>Projektowanie graficzne</h4>
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

          <div class="offer__light--row lg:border-r-0">
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

          <div class="offer__light--row">
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
  .offer__light {
    &--wrapper {
      @apply pt-20 pb-20  w-full text-dark-3 bg-light;
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
