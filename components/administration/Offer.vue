<template>
  <div class="websites__offer--wrapper">
    <div class="websites__offer--inner">
      <div class="section--title max-w-4xl">
        <h3>
          Dlaczego stała administracja Twoich projektów informatycznych jest
          niezbędna ?
        </h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-white text-5xl">
            Powierzenie strony www w ręce osób wykwalifikowanych to oszczędność
            czasu, kosztów oraz zasobów. Stały kontakt ze specjalistami to
            doskonała okazja aby powiększyć zakres kompetencji w swojej firmie
            bez Tworzenia dodatkowego etatu.
          </h4>
          <h4 class="text-white text-4xl mt-10 max-w-6xl">
            Do bezpieczeństwa oraz ochrony danych w czasach RODO należy
            przyłożyć się porządnie. Uważam, że dziś każda firma powinna
            korzystać z obsługi prawnej, księgowej oraz informatycznej.
          </h4>
        </div>
      </div>

      <div class="websites__offer--items mt-20">
        <div class="websites__offer--row--wrapper">
          <div
            class="websites__offer--row xl:border-b-0 2xl:border-b 2xl:w-5/12 3xl:w-5/12"
          >
            <div>
              <div>
                <h4>Skalowalność</h4>
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
                Korzystanie z outsourcingu IT do zarządzania i administracją
                swojej strony to również możliwość szybkiego zlecenia
                dodatkowych prac programistycznych i rozwijania swojego
                projektu.
              </p>
              <p class="text-2xl mt-8">
                Łatwo możesz zarządzać przerobem roboczogodzinowym nad Twoim
                projektem mając pewność startu prac praktycznie od ręki.
              </p>
            </div>
          </div>

          <div class="websites__offer--row 2xl:w-7/12 3xl:w-7/12">
            <div>
              <div>
                <h4>Dostęp do najnowszych technologii i narzędzi</h4>
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
                Korzystam z wielu płatnych narzędzi do zarządzania,
                monitorowania i sprawdzania projektów. Dodatkowo blisko
                współpracuje z moimi partnerami, którzy to uzupełniają moje
                kompetencje o kwestie związane z bezpieczeństwem, SEO czy też
                kwestiami prawnymi a także całą otoczką serwerową znaną jako
                DevOps.
              </p>
              <p class="text-2xl mt-8">
                Współpracując z freelancerem współpracujesz również z moimi
                partnerami.
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4>Pełen wachlarz usług</h4>
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
                Kompleksowa opieka oferuje ogromną ilośc usług: aktualizacje,
                bezpieczeństwo, konfiguracje skrzynek pocztowych, przekierownie
                DNSów, instalacje SSL, administracja serwerami, przypominanie o
                wygasających usługach a także konsultacje w zakresie poprawy
                jakośći, kwestie dostępności, SEO oraz o wiele więcej.
              </p>
              <p class="text-2xl mt-8">
                Pełen informatyczny konglomerat w jednym miejscu. Zyskaj
                wartościowego partnera technologicznego.
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
