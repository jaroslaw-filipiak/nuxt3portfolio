<template>
  <div class="about__offer--wrapper">
    <div class="about__offer--inner">
      <div class="section--title">
        <h3>W jaki sposób pomagam swoim klientom ?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-6/12">
          <h4 class="text-white text-5xl">
            Od ponad 10 lat sukcesywnie pomagam firmom w ulepszeniu ich
            wizerunku. Chętnie pomogę również Tobie
          </h4>
        </div>
      </div>

      <div class="about__offer--items mt-20">
        <div class="about__offer--row--wrapper">
          <div class="about__offer--row lg:border-r-0">
            <div>
              <div>
                <h4>Projektowanie graficzne</h4>
              </div>
              <div>
                <img src="@/assets/uploads/icons/ic-1.svg" alt="" />
              </div>
            </div>

            <div>
              <ul>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
                    to="/oferta/projektowanie-stron-internetowych"
                    >Projektowanie stron internetowych</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
                    to="/oferta/projektowanie-stron-internetowych"
                    >Projektowanie aplikacji mobilnych</NuxtLink
                  >
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
                <img src="@/assets/uploads/icons/ic-2.svg" alt="" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
                    to="/oferta/profesjonalne-strony-www"
                    >Profesjonalne strony www</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
                    to="/oferta/kodowanie-do-wordpress"
                    >Kodowanie PSD / XD / FIGMA do WordPress</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
                    to="/oferta/tanie-strony-www"
                    >Budżetowe strony www</NuxtLink
                  >
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
                <img src="@/assets/uploads/icons/ic-3.svg" alt="" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <NuxtLink
                    class="link-with-undeline"
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

        svg {
          @apply mr-2;
        }
      }
    }
  }
</style>
