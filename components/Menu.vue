<template>
  <div class="main-menu" :class="{ 'menu-is-hidden': !isVisible }">
    <div class="d-flex flex-column h-screen w-full pl-8 pr-8">
      <ul
        class="offer-menu flex flex-wrap flex-col items-start justify-center w-full h-full"
      >
        <p class="text-xs mt-8 lg:hidden">Co mogę Tobie zaoferować ?</p>
        <li class="border-t-0">
          <NuxtLink
            class="offer-menu--item"
            to="/oferta/profesjonalne-strony-www"
          >
            Strony internetowe WordPress... i nie tylko
            <span class="hidden lg:block"
              >Kompleksowo zrealizuje dla Ciebie szybką, bezpieczną i
              profesjonalną stronę www</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink class="offer-menu--item" to="/oferta/tanie-strony-www">
            <div class="flex items-center">
              <div>Tanie / Budżetowe strony www</div>
              <div
                class="hidden lg:block bg-yellow rounded-full pl-4 pr-4 pb-1 pt-1 text-base ml-4"
              >
                Oferta testowa, ograniczona czasowo
              </div>
            </div>

            <span class="hidden lg:block"
              >Strony www z budżetem skrojonym na miarę , dobry start do
              emarketingu, który szybko się zwróci</span
            ></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            class="offer-menu--item"
            to="/oferta/opieka-nad-stronami-internetowymi"
          >
            Administracja stronami www<span class="hidden lg:block"
              >Chesz mieć pewność, że ktoś czuwa nad Twoją stroną www ? zleć do
              profesjonaliście i zajmij się prowadzeniem biznesu</span
            >
          </NuxtLink>
        </li>

        <li class="hidden">
          <NuxtLink class="offer-menu--item" to="/oferta/programista-na-godziny"
            >Programista ad hoc na godziny<span class="hidden lg:block"
              >Masz FUCKUP ? zbliża się DEADLINE ? chętnie wyczyszczę pare
              tasków z Jiry</span
            ></NuxtLink
          >
        </li>

        <p class="text-xs mt-8 lg:hidden">Dowiedz się kim jestem</p>
        <li class="border-t-0 lg:hidden">
          <NuxtLink class="offer-menu--item" to="/oferta/programista-na-godziny"
            >O mnie<span>Dowiedz się troszkę więcej o mnie</span></NuxtLink
          >
        </li>
        <p class="text-xs mt-8 lg:hidden">
          Skontaktuj się ze mną szybko i sprawnie:
        </p>
        <li class="border-t-0 lg:hidden">
          <NuxtLink class="offer-menu--item" to="/oferta/programista-na-godziny"
            >info@j-filipiak.pl</NuxtLink
          >
        </li>
        <li class="lg:hidden">
          <NuxtLink class="offer-menu--item" to="/oferta/programista-na-godziny"
            >+48 663 568 828</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { useNavStore } from '~~/stores/nav';
  import { storeToRefs } from 'pinia';

  const store = useNavStore();
  const { isVisible } = storeToRefs(store);
</script>

<style lang="scss">
  .main-menu {
    @apply fixed w-screen h-screen left-0 top-0 bg-light flex flex-col xl:flex-row items-center justify-center z-10 xl:items-start;
  }

  .main-menu a {
    @apply mx-auto text-left;
  }
  .menu-is-hidden {
    display: none !important;
  }

  .hidden {
    display: none;
  }

  .offer-menu {
    @apply text-dark-3;

    li {
      @apply border-b border-dark-3 w-full xl:pl-8;

      &:first-of-type {
        @apply border-t border-r-dark-3;
      }

      a {
        @apply inline-flex items-center;
      }
    }

    .offer-menu--item {
      @apply flex flex-col items-start justify-center text-xl lg:text-3xl 2xl:text-5xl font-Atkinson pt-3 pb-3 lg:pt-6 lg:pb-6 xl:pt-9 xl:pb-9;

      span {
        @apply text-base 2xl:text-xl;
      }
    }
  }
</style>
