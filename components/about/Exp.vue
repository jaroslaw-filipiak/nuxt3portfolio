<template>
  <div class="my-exp--wrapper">
    <div class="my-exp--inner">
      <div class="section--title text-left max-w-5xl">
        <h3 class="text-left">
          Posiadam solidny zestaw umiejętności i technologii związanych z całą
          otoczką procesu projektowania
        </h3>
        <h4 class="text-left text-xl mt-8">
          Rozpoczynałem swoją przygodę jako grafik komputerowy, w trakcie ponad
          10 letniej przygody zdobyłem kompetencje, które doprowadziły mnie do
          pracy jako front-end developer. A to jeszcze nie koniec mojej
          przygody. Uważam, że człowiek musi się rozwijać, bo gdy się nie
          rozwija to tak naprawdę się cofa... ponieważ świat idzie do przodu.
        </h4>
        <img
          class="pt-3 mx-auto"
          src="~/assets/uploads/smush-dark.svg"
          alt=""
        />
      </div>

      <div class="my-exp--items mt-32">
        <div class="my-exp--row--wrapper">
          <div class="my-exp--row w-full lg:w-8/12 lg:border-r-0">
            <h4 class="text-3xl lg:text-5xl font-Atkinson">
              Doświadczenie zdobywałem zarówno w większych agencjach jak i
              obsługując klientów “mniej technicznych”
            </h4>
            <p class="textxl lg:text-3xl">
              Uważnie wsłuchuję się w potrzeby każdego klienta. Pracując jako
              freelancer mam tę swobodę że mogę zasugerować więcej różnych
              rozwiązań/wariantów wdrożenia projektu informatycznego aniżeli
              agencja, która jednak jest mocno zunifikowana na jedym stacku
              technologicznym.
            </p>
          </div>

          <div class="my-exp--row w-full lg:w-4/12">
            <h4 class="text-xl lg:text-4xl">w branży od 2014 roku</h4>
          </div>
        </div>
      </div>

      <div class="my-exp--items">
        <div class="my-exp--row--wrapper">
          <div
            class="my-exp--row w-full lg:w-4/12 lg:border-r-0 lg:border-t-0 hidden lg:flex"
          >
            <h4></h4>
          </div>

          <div class="my-exp--row w-full lg:w-4/12 lg:border-t-0">
            <h4 class="text-xl lg:text-4xl">
              Oferuje indywidualne , partnerskie podejście , ogromne
              doświadczenie oraz <strong>jasne warunki współpracy</strong>
            </h4>
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
  .my-exp {
    &--wrapper {
      @apply pt-20 pb-20  w-full bg-full-white text-dark-3;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8;
    }

    &--row {
      @apply flex flex-col  gap-10 items-start justify-between p-8  border border-dark-3;

      &--wrapper {
        @apply flex flex-col lg:flex-row;
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
