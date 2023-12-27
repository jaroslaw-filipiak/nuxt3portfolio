<template>
  <div class="websites-features--wrapper">
    <div class="websites-features--inner">
      <div class="section--title text-center lg:pt-20 lg:pb-20">
        <h1 class="text-center max-w-5xl mx-auto">
          Twoją stronę zaatakował wirus ?
        </h1>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
        <ul
          class="flex flex-wrap items-center justify-center gap-6 mt-20 max-w-3xl mx-auto"
        >
          <li class="flex items-start justify-start gap-3">
            <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
            <div>
              Oczyszczę twoją stronę ze złośliwego kodu i zabezpieczę przed
              atakami.
            </div>
          </li>
          <li class="flex items-start justify-start gap-3">
            <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
            <div>Prześlę raport z wykonanych prac.</div>
          </li>
          <li class="flex items-start justify-start gap-3">
            <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
            <div>Całośc przebiegnie szybko i sprawnie.</div>
          </li>
          <li class="flex items-start justify-start gap-3">
            <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
            <div>Realizację rozpoczynam w ciągu 24h od zlecenia.</div>
          </li>
        </ul>
        <h2
          class="text-xl lg:text-3xl font-normal mb-6 mt-6 lg:mt-12 max-w-3xl mx-auto"
        ></h2>
      </div>

      <div class="websites-features--items">
        <div class="flex flex-col 2xl:flex-row">
          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-4xl">Pracuję z WordPressem od wersji 3.6</h4>
            <p class="text-xl">
              Która została wydana w 2013 roku. Tworze autorskie motywy do
              WordPressa, piszę pluginy oraz indywidualne blogi do Elementora
              czy też natywnego gutenberga. Dbam także o bezpieczeństwo stron
              moich klientów
            </p>
            <div class="text-base flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#191919"
              >
                <path
                  d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                />
              </svg>
              <NuxtLink
                class="link-with-undeline link-with-undeline__dark ml-3"
                to="/about"
                >Dowiedz się więcej o mnie</NuxtLink
              >
            </div>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-4xl">
              Wiem, że czas ma znaczenie dlatego działam od razu!
            </h4>
            <p class="text-xl">
              Atak na WP nie oznacza infekcji w katalogu WordPressa, niestety
              ale często zdarza się, że mallware wychodzi katalog wyżej aniżeli
              sam WordPress i uzyskuje dostep do całego serwera a wówczas sprawa
              robi się poważna
            </p>
            <p class="text-base">
              Pamiętam klienta, który miał 15 domen i mallware na całym
              serwerze...
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3"
          >
            <h4 class="text-4xl">
              Skrupulatnie zabezpieczam stronę oraz serwer
            </h4>
            <p class="text-xl">
              Mam pod swoją opieką kilkadziesiąt serwisów moich klientów i
              oferuje im święty spokój. Być może też potrzebujesz kogoś do
              stałej administracji strony? Zleć mi odwirusowywanie Twojej strony
              i w między czasie sprawdź moją ofertę dot. administracji stronami
              www.
            </p>
            <div class="text-base flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#191919"
              >
                <path
                  d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                />
              </svg>
              <NuxtLink
                class="link-with-undeline link-with-undeline__dark ml-3"
                to="/oferta/opieka-nad-stronami-internetowymi"
                >Dowiedz się więcej o administracji stronami www</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { IconCheck } from '@tabler/icons-vue';
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
