<template>
  <div
    ref="mainMenu"
    class="main-menu"
    :class="{ 'menu-is-hidden': !isVisible }"
  >
    <div class="d-flex flex-column h-screen w-full pl-8 pr-8">
      <ul
        class="offer-menu flex flex-wrap flex-col items-start justify-center w-full h-full"
      >
        <p class="text-xs mt-8 lg:hidden">Co mogę Tobie zaoferować ?</p>
        <li
          @mouseover="handleHoverIN('wpPages')"
          @mouseleave="handleHoverOUT"
          class="border-t-0 group"
        >
          <NuxtLink
            class="offer-menu--item flex items-center justify-between w-full"
            to="/oferta/profesjonalne-strony-www"
          >
            <div class="flex flex-col">
              <div class="left-0 relative lg:group-hover:left-4 transition-all">
                Strony internetowe WordPress... i nie tylko
              </div>

              <span
                class="hidden lg:block left-0 relative group-hover:left-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                >Kompleksowo zrealizuje dla Ciebie szybką, bezpieczną i
                profesjonalną stronę www</span
              >
            </div>

            <div
              class="w-10 hidden lg:flex opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
                  data-name="8-Arrow Down"
                />
              </svg>
            </div>
          </NuxtLink>
        </li>

        <li
          @mouseover="handleHoverIN('cheapWWW')"
          @mouseleave="handleHoverOUT"
          class="border-t-0 group"
        >
          <NuxtLink
            class="offer-menu--item flex items-center justify-between w-full relative"
            to="/oferta/tanie-strony-www"
          >
            <div class="flex flex-col">
              <div class="flex flex-col items-start justify-start">
                <div
                  class="left-0 relative lg:group-hover:left-4 transition-all"
                >
                  Tanie / Budżetowe strony www
                </div>
              </div>

              <span
                class="hidden lg:block left-0 relative group-hover:left-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                >Strony www z budżetem skrojonym na miarę, dobry start do
                e-marketingu, który szybko się zwróci</span
              >
            </div>

            <div
              class="w-10 hidden lg:flex opacity-0 group-hover:opacity-100 transition-all relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
                  data-name="8-Arrow Down"
                />
              </svg>
            </div>

            <div
              class="hidden xl:flex items-center justify-start gap-1 opacity-0 group-hover:opacity-100 transition-all bg-yellow-300 rounded-full pl-4 pr-4 pb-1 pt-1 text-base ml-4 absolute top-[50%] right-20 translate-y-[-50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-exclamation-circle"
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
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 9v4" />
                <path d="M12 16v.01" />
              </svg>

              <div>Oferta testowa, ograniczona czasowo</div>
            </div>
          </NuxtLink>
        </li>

        <li
          @mouseover="handleHoverIN('maintenance')"
          @mouseleave="handleHoverOUT"
          class="border-t-0 group"
        >
          <NuxtLink
            class="offer-menu--item flex items-center justify-between w-full"
            to="/oferta/opieka-nad-stronami-internetowymi"
          >
            <div class="flex flex-col">
              <div class="left-0 relative lg:group-hover:left-4 transition-all">
                Administracja stronami www
              </div>

              <span
                class="hidden lg:block left-0 relative group-hover:left-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                >Chesz mieć pewność, że ktoś czuwa nad Twoją stroną www? zleć to
                profesjonaliście i zajmij się prowadzeniem biznesu</span
              >
            </div>

            <div
              class="w-10 hidden lg:flex opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
                  data-name="8-Arrow Down"
                />
              </svg>
            </div>
          </NuxtLink>
        </li>

        <li
          @mouseover="handleHoverIN('maintenance')"
          @mouseleave="handleHoverOUT"
          class="border-t-0 group"
        >
          <NuxtLink
            class="offer-menu--item flex items-center justify-between w-full"
            to="/oferta/usuwanie-wirusow"
          >
            <div class="flex flex-col">
              <div class="left-0 relative lg:group-hover:left-4 transition-all">
                Usuwanie wirusów z WordPress
              </div>

              <span
                class="hidden lg:block left-0 relative group-hover:left-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all"
                >Na stronę wkradła się infekcja? Chętnie oczyszczę stronę i
                zabezpiecze ją za pomocą żelaznego firewalla!</span
              >
            </div>

            <div
              class="w-10 hidden lg:flex opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
                  data-name="8-Arrow Down"
                />
              </svg>
            </div>
          </NuxtLink>
        </li>

        <p class="text-xs mt-8 lg:hidden">Dowiedz się kim jestem</p>
        <li class="border-t-0 lg:hidden">
          <NuxtLink class="offer-menu--item" to="/about">O mnie</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { useNavStore } from '~~/stores/nav';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { main } from '@popperjs/core';

  const mainMenu = ref(null);

  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  // const ScrollTrigger = nuxtApp.ScrollTrigger;

  let ctx;

  const handleHoverIN = (param) => {
    // param = wpPages, cheapWWW, maintenance

    switch (param) {
      case 'wpPages':
        gsap.to(mainMenu.value, {
          backgroundColor: '#EEEEEE',
        });
        break;
      case 'cheapWWW':
        gsap.to(mainMenu.value, {
          backgroundColor: '#EEEEEE',
        });
        break;
      case 'maintenance':
        gsap.to(mainMenu.value, {
          backgroundColor: '#EEEEEE',
        });
        break;
      default:
        gsap.to(mainMenu.value, {
          backgroundColor: '#EEEEEE',
        });
    }
  };

  const handleHoverOUT = () => {
    gsap.to(mainMenu.value, {
      backgroundColor: '#EEEEEE',
    });
  };

  onUnmounted(() => {
    // ctx.revert();
  });

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
      @apply border-b border-dark-3 w-full xl:pl-8 xl:pr-8;

      &:first-of-type {
        @apply border-t border-r-dark-3;
      }

      a {
        @apply inline-flex items-center;
      }
    }

    .offer-menu--item {
      @apply text-xl lg:text-3xl xl:text-4xl  2xl:text-5xl font-Atkinson pt-3 pb-3 lg:pt-6 lg:pb-6 xl:pt-9 xl:pb-9;

      span {
        @apply text-base 2xl:text-xl;
      }
    }
  }
</style>
