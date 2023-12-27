<template>
  <div class="websites__offer--wrapper bg-dark-3">
    <div class="websites__offer--inner">
      <div class="section--title">
        <h3>Dlaczego mam wirusa na stronie?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-white text-2xl lg:text-5xl">
            WordPress jako jeden z najpopularniejszych systemów CMS na świecie
            jest częstym celem hackerów
          </h4>
          <h4 class="text-white text-xl lg:text-4xl mt-10 max-w-6xl">
            W ciagu jednej sekundy dochodzi do 90000 ataków na strony oparte o
            ten system. 90% z tych ataków wykonywanych jest automatycznie
          </h4>
        </div>
      </div>

      <div class="websites__offer--items mt-20">
        <div
          class="inline-flex flex-col lg:flex-row items-center bg-red-600 pl-4 pr-4 pt-1 pb-1 border border-white border-b-0"
        >
          <IconAlertCircleFilled class="mr-2 w-6 h-6 hidden lg:flex" />
          <h5 class="text-xl">
            Wirus na stronie to poważny problem. Z jakimi konsekwencjami mogę
            się liczyć?
          </h5>
        </div>

        <div class="websites__offer--row--wrapper">
          <div
            class="websites__offer--row xl:border-b-0 2xl:border-b 2xl:w-7/12 3xl:w-7/12"
          >
            <div>
              <div>
                <h4>Zablokowanie strony przez hosting</h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>

            <div>
              <p class="text-xl lg:text-3xl">
                Jeżeli posiadasz stronę na sewerze współdzielonym to możesz być
                pewien, że system plików jest skanowany często. W przypadku
                wykrycia nieprawidłowości hostingodawca może zablokować twoją
                stronę oraz wysłać Tobie monit o usunięcie wirusa.
              </p>
              <p class="text-base lg:text-2xl mt-8">
                W przypadku braku reakcji z Twojej strony hostingodawca może
                zablokować stronę na stałe.
              </p>
            </div>
          </div>

          <div class="websites__offer--row 2xl:w-5/12 3xl:w-5/12">
            <div>
              <div>
                <h4>Spadek w Google</h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
                Google z powodu infekcji blokuje strony w wynikach wyszukiwania
                oraz przesyła Tobie ostrzeżenie o możliwośći całkowitego
                zablokowania strony.
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4>Problemy prawne</h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
                Strony oparte o WordPress często zbierają dane o użytkownikach.
                Jeżeli twoja strona zostanie zaatakowana oznacza to, że dane
                użytkowników mogą zostać wykradzione. W takim przypadku możesz
                zostać pociągnięty do odpowiedzialności
              </p>
              <p class="text-base lg:text-2xl mt-8">
                Nie ryzykuj i zabezpiecz swoją stronę już dziś!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { IconAlertCircleFilled } from '@tabler/icons-vue';
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
