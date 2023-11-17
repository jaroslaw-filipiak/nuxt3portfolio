<template>
  <div class="websites-features--wrapper">
    <div class="websites-features--inner">
      <div class="section--title text-center">
        <h3 class="text-center max-w-5xl mx-auto">
          Doświadczenie, specjalistyczna wiedza , oraz masa płatnych narzędzi +
          dużo czasu. Tego potrzebuje Twoja strona.
        </h3>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="websites-features--items mt-32"></div>

      <div class="websites-features--items">
        <div class="flex flex-col 2xl:flex-row">
          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-4xl">Doświadczenie + wiedza</h4>
            <p class="text-xl lg:text-2xl">
              To najważniejsza rzecz którą otrzymujesz. Dzięki temu wiesz, że
              Twój projekt jest stale monitorowany , udoskonalany i dobrze
              zaopiekowany. Masz pewność, że czuwa nad nim osoba, która zna się
              na rzeczy.
            </p>
            <p class="text-base">
              Ile czasu potrzebujesz aby samodzielnie rozwikłać problem braku
              strony gdy wyskoczy error 500 zamiast Twojej strony ? Uporasz się
              w parę godzin ? przecież musisz poszukać specjalisty, ustalić
              warunki, przekazać mu wrażliwe dane i czekać. Bądźmy poważni,takie
              podejście jest bez sensu.
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3 border-b-0 2xl:border-b"
          >
            <h4 class="text-4xl">Oszczędność czasu i pieniędzy</h4>
            <p class="text-xl lg:text-2xl">
              Zarządzanie stroną wymaga wiedzy, czasu oraz odpowiednich
              narzędzi. Jeżeli skorzystasz z mojej oferty masz to wszystko w
              pakiecie.
            </p>
            <p class="text-base">
              Sam koszt aplikacji do obsługi automatyzacji i testów kosztuje
              więcej niż miesięczna obsługa. A mówie tylko o jednym narzędziu...
            </p>
          </div>

          <div
            class="flex flex-col gap-10 items-start justify-between p-8 w-full lg:w-full 2xl:w-4/12 border border-dark-3"
          >
            <h4 class="text-4xl">Poczucie bezpieczeństwa</h4>
            <p class="text-xl lg:text-2xl">
              Powierzenie obsługi specjaliście to pewność niezakłuconego
              działania Twojego projektu, monitoring bezpieczeństwa,
              aktualizację oraz o wiele więcej.
            </p>
            <p class="text-base">
              Nie musisz zastanawiać się nad stanem Twojej strony. To jest jak
              prąd - po prostu jest i działa a cała infrastruktura jest
              zarządzana przez osoby do tego powołane. Tak samo jest w przypadku
              projektów informatycznych.
            </p>
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
