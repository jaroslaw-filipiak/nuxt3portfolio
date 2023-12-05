<template>
  <div class="process--wrapper border border-dashed border-red-600">
    <div class="process--inner">
      <div class="process--step w-6/12">
        <div class="process--step--title">
          <div class="font-Atkinson text-xl text-dark-3 absolute left-3 top-2">
            01
          </div>
          <span>Ustalanie <br />szczegółów <br />zlecenia</span>
        </div>
        <div class="process--step--content">
          <div class="pb-6">
            Pierwszy etap to zazwyczaj ustalanie szczegółow przed przesłaniem
            finalnej oferty. W trakcie początkowego etapu chciałbym dowiedzieć
            się, z jakim projektem mam do czynienia. Po zebraniu niezbędnych
            informacji otrzymasz gotową ofertę, która uwzględnia: koszty, czas
            ralizacji, użyte technologie, gwarancję oraz wstępny timeline dla
            prac
          </div>

          <div class="border-t border-dark-3 pt-2">
            <p class="text-lg mb-2">Rezultaty:</p>
            <div class="text-md">
              <ul class="flex flex-col gap-3">
                <li class="text-lg flex items-start justify-start gap-2">
                  <div>
                    <svg
                      class="icon icon-tabler icon-tabler-check w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    Wiem jaki jest rozmiar projektu oraz znam jego założenia.
                    Dobrze wiem czego oczekujesz.
                  </div>
                </li>
                <li class="text-lg flex items-start justify-start gap-2">
                  <div>
                    <svg
                      class="icon icon-tabler icon-tabler-check w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    Otrzymujesz spersonalizowaną ofertę, która zawiera wszystkie
                    szczegóły projektu w tym min: koszty, czas realizacji,
                    gwrancję, informację o użytych technologiach oraz o wiele
                    więcej.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .process {
    &--wrapper {
      @apply w-full bg-white pb-10 lg:pb-40;
    }
    &--inner {
      @apply w-full flex items-center justify-center;
    }
    &--step {
      &--title {
        @apply border  border-dark-3 p-20 text-dark-3 text-4xl text-center relative;
      }
      &--content {
        @apply flex flex-col text-dark-3 text-2xl pt-20;
      }
    }
  }
</style>
