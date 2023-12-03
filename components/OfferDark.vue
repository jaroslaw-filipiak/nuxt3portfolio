<template>
  <div class="offer__dark--wrapper bg-dark-3">
    <div class="offer__dark--inner">
      <div class="section--title">
        <h3 class="text--reveal__dark">W czym mogę pomóc ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-full lg:w-6/12">
          <h4 class="text--reveal__dark text-2xl lg:text-5xl">
            Od 2014 roku sukcesywnie pomagam firmom w ulepszeniu ich wizerunku.
            Chętnie pomogę również Tobie
          </h4>
        </div>
      </div>

      <div class="offer__dark--items mt-20">
        <div class="offer__dark--row--wrapper">
          <div class="offer__dark--row lg:border-r-0">
            <div>
              <div>
                <h4 class="text--reveal__dark">Projektowanie graficzne</h4>
              </div>
              <div>
                <img src="@/assets/uploads/icons/ic-1.svg" alt="" />
              </div>
            </div>

            <div></div>
          </div>

          <div class="offer__dark--row lg:border-r-0">
            <div>
              <div>
                <h4 class="text--reveal__dark">WordPress / Vue.js / Next.js</h4>
              </div>
              <div>
                <img src="@/assets/uploads/icons/ic-2.svg" alt="" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <NuxtLink
                    class="link-with-undeline text--reveal__dark"
                    to="/oferta/profesjonalne-strony-www"
                    >Profesjonalne strony www</NuxtLink
                  >
                </li>

                <li>
                  <NuxtLink
                    class="link-with-undeline text--reveal__dark"
                    to="/oferta/tanie-strony-www"
                    >Budżetowe strony www</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="offer__dark--row">
            <div>
              <div>
                <h4 class="text--reveal__dark">Wsparcie</h4>
              </div>
              <div>
                <img src="@/assets/uploads/icons/ic-3.svg" alt="" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <NuxtLink
                    class="link-with-undeline text--reveal__dark"
                    to="/oferta/opieka-nad-stronami-internetowymi"
                    >Opieka nad stronami internetowymi</NuxtLink
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
  .offer__dark {
    &--wrapper {
      @apply pt-20 pb-20  w-full;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-4/12 border border-light;

      &--wrapper {
        @apply flex flex-col lg:flex-row;
      }

      h4 {
        @apply text-4xl mb-10;
      }

      li {
        @apply pb-4 text-xl flex items-start;

        svg {
          @apply mr-2;
        }
      }
    }
  }
</style>
