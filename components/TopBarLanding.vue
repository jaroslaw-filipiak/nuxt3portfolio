<template>
  <div class="top-bar">
    <div class="top-bar--left">
      <div class="flex items-center justify-start">
        <div class="flex items-center gap-2 top-bar--phone">
          <div>
            <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-copyright hidden lg:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path
              d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"
            ></path>
          </svg> -->
            <img class="w-6" src="@/assets/uploads/jarek-avatar.png" alt="" />
          </div>
          <div>
            <div class="text-center lg:text-left text-white">
              <a
                href="tel:663568828"
                class="text-sm footer--version"
                to="https://www.j-filipiak.pl"
                >Masz pytania ? Zadzwoń: +48 663 568 828
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-bar--right">
      <NuxtLink
        @click="handleClick()"
        exact
        class="bg-accent text-white transition-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:scale-105 flex items-center gap-3"
        to="#cta"
      >
        <IconArrowNarrowRight />
        Zamów teraz!</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const lenis = nuxtApp.lenis;
  const { gtag } = useGtag();
  import { IconArrowNarrowRight, IconHelpSmall } from '@tabler/icons-vue';

  function handleClick() {
    gtag('event', 'click', {
      event_category: 'cta',
      event_label: 'click-zamow-teraz',
      value: 'click-zamow-teraz',
    });
  }
</script>

<style lang="scss" scoped>
  .logo {
    @apply transform hover:opacity-95;
  }

  .top-bar {
    @apply text-dark-3 w-screen  fixed pt-3 pb-3 left-0 top-0 p-8 flex items-center justify-between z-20 transition-all;
    background-color: transparent;

    &--contact-wrapper {
      position: relative;

      &::before {
        content: '';
        width: 1px;
        @apply block absolute left-0 top-0 h-full bg-dark-3 bg-opacity-30;
      }
    }

    &--right {
      @apply flex items-center gap-4;

      a {
        position: relative;
      }
    }

    &__sticky {
      @apply bg-dark-5 md:pt-3 md:pl-8 md:pr-8 md:pb-3;
    }
  }
</style>
