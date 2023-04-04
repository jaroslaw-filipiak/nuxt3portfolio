<template>
  <div class="budget-websites__seo-content">
    <div class="budget-websites__seo-content--inner">
      <div class="section--title">
        <h1>Kompleksowa oferta</h1>
        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <div class="flex mt-8">
        <div class="w-6/12 text-5xl border border-black p-8">
          <ul>
            <li>Wybierając moją ofertę otrzymujesz :</li>
          </ul>
        </div>

        <div class="w-4/12 text-3xl border border-black p-8">
          <ul>
            <li>
              wysoką jakość projektu strony, opartą o autorskie rozwiązania,
            </li>
          </ul>
        </div>

        <div class="w-4/12 text-3xl border border-black p-8">
          <ul>
            <li>szybkie wdrożenie strony internetowej,</li>
          </ul>
        </div>
      </div>

      <div class="flex w-full">
        <div class="w-10/12 text-3xl border border-black p-8 lg:border-t-0">
          <ul>
            <li>optymalizację SEO — przygotowanie strony do pozycjonowania,</li>
          </ul>
        </div>

        <div class="w-2/12 text-3xl border border-black p-8 lg:border-t-0">
          <ul>
            <li>Gwarancję</li>
          </ul>
        </div>
      </div>

      <div class="w-full mt-32">
        <h3 class="text-6xl">
          Autorskie strony www to przewaga nad konkurencją
        </h3>
        <p class="text-3xl mt-12">
          Potrzebujesz strony internetowej na wczoraj? Postaw na profesjonalne i
          tanie strony www dla swojej firmy. Oferuję kompleksową usługę
          stworzenia strony internetowej, w oparciu o system WordPress oraz
          autorskie rozwiązania. Postaw na doświadczenie i sprawdzone
          technologie.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .budget-websites__seo-content {
    @apply bg-cover bg-fixed bg-no-repeat bg-light text-dark-3;
    @apply w-full flex flex-col items-start justify-center pb-40 pt-40;
    text-align: left;

    &--inner {
      @apply w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8;
    }

    h1 {
      @apply max-w-5xl;
    }

    h2,
    h3 {
      @apply max-w-4xl;
    }

    h2 {
      span {
        @apply relative inline-block;
        top: 10px;
      }

      p {
        @apply absolute z-10 text-dark-3 text-3xl;
        left: 25px;
        top: 6px;
      }
    }
  }
</style>
