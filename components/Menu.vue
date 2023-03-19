<template>
  <div class="main-menu" :class="{ 'menu-is-hidden': !isVisible }">
    <div class="d-flex flex-column h-screen w-full pl-8 pr-8">
      <ul
        class="offer-menu flex flex-wrap flex-col items-start justify-center w-full h-full"
      >
        <li>
          <NuxtLink
            class="offer-menu--item"
            to="/oferta/profesjonalne-strony-www"
          >
            Strony www WordPress
            <span
              >Kompleksowo zrealizuje dla Ciebie szybką , bezpieczną i
              profesjonalną stronę www</span
            >
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="offer-menu--item"
            to="/oferta/opieka-nad-stronami-internetowymi"
          >
            Administracja stronami www<span
              >Chesz mieć pewność, że ktoś czuwa nad Twoją stroną www ? zleć do
              profesjonaliście i zajmij się prowadzeniem biznesu</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink class="offer-menu--item" to="/oferta/tanie-strony-www">
            <div class="flex items-center">
              <div>Tanie / Budżetowe strony www</div>
              <div
                class="hidden lg:block bg-yellow rounded-full pl-4 pr-4 pb-2 pt-2 text-base ml-4"
              >
                Oferta testowa , ograniczona czasowo
              </div>
            </div>

            <span
              >Strony www z budżetem skrojonym na miarę , dobry start do
              emarketingu , który szybko się zwróci</span
            ></NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="offer-menu--item" to="/oferta/aplikacje-webowe"
            >Front-end : Vue.js / Nuxt.js<span
              >SPA , ekosystem Vue.js , headlessy i o wiele więcej</span
            >
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="offer-menu--item" to="/oferta/kodowanie-do-wordpress"
            >Wdrażenie PSD/Figma do WordPress<span
              >Autorskie kodowanie z projektu graficznego
            </span></NuxtLink
          >
        </li>
        <li class="hidden">
          <NuxtLink class="offer-menu--item" to="#"
            >Programista ad hoc na godziny<span
              >Masz FUCKUP ? zbliża się DEADLINE ? chętnie wyczyszczę pare
              tasków z Jiry</span
            ></NuxtLink
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
      @apply flex flex-col items-start justify-center text-3xl 2xl:text-5xl font-Atkinson h-32 xl:h-20 2xl:h-28;

      span {
        @apply text-base 2xl:text-xl;
      }
    }
  }
</style>
