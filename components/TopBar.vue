<template>
  <div class="top-bar">
    <div class="flex items-center">
      <NuxtLink
        exact
        class="gsap-change-fullname-to-sign logo uppercase text-xs font-Atkinson pr-3"
        to="/"
        >Jarosław Filipiak</NuxtLink
      >
      <div
        class="pl-3 hidden lg:flex gap-2 flex-row items-center top-bar--contact-wrapper"
      >
        <a
          class="block text-xs dont-underline opacity-70 hover:opacity-100"
          href="tel:663568828"
          >+48 663 568 828</a
        >
        <a
          class="block text-xs dont-underline opacity-70 hover:opacity-100"
          href="mailto:info@j-filipiak.pl"
          >info@j-filipiak.pl</a
        >
      </div>
    </div>

    <!-- 

			TODO: trzeba wrócić do widoku bezpłatna konsultacja + menu 
			w momencie gdy uporządkuje full screen menu , na chwilę obecną
			link do kontaktowej strony z tego względu, że nie mam menu + wyłączony hamburger
		 -->

    <!-- <div class="top-bar--right">
            <NuxtLink class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link" style="opacity: 0" to="#cta"
                >Bezpłatna konsultacja</NuxtLink
            >
            <Hamburger />
        </div> -->

    <div class="top-bar--right">
      <NuxtLink
        exact
        class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link"
        to="#cta"
        >Bezpłatna konsultacja</NuxtLink
      >

      <NuxtLink
        @click="sendEvent()"
        exact
        class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link"
        to="/about"
        >O mnie</NuxtLink
      >
      <NuxtLink
        exact
        class="uppercase text-xs font-Atkinson hidden lg:flex lg:items-center lg:justify-center bg-yellow-500 pt-2 pb-2 pl-3 pr-3 dont-underline"
        to="/kontakt"
        >Wypełnij brief</NuxtLink
      >

      <NuxtLink
        exact
        class="uppercase text-xs font-Atkinson hidden"
        to="/kontakt"
        >Kontakt</NuxtLink
      >

      <Hamburger />
    </div>
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const lenis = nuxtApp.lenis;
  const { gtag } = useGtag();

  function sendEvent() {
    gtag('event', 'click', {
      event_category: 'cta',
      event_label: 'cta',
      value: 'click-about-me-link',
    });
  }

  function goToCTA() {
    console.log(lenis);
    lenis.scrollTo('#cta', {});
  }
</script>

<style lang="scss">
  .logo {
    @apply transform hover:opacity-95;
  }

  .top-bar {
    @apply text-dark-3 w-screen h-11 fixed left-0 top-0 p-8 flex items-center justify-between z-20 transition-all;
    background-color: transparent;

    &__sticky {
      @apply bg-yellow-300 md:pt-3 md:pl-8 md:pr-8 md:pb-3;
    }

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

      a:not(.dont-underline) {
        &::after {
          content: '';
          @apply w-0 bg-dark-3 block;
          height: 2px;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }

        &:hover {
          &::after {
            content: '';
            @apply w-full bg-dark-3 block;
            height: 2px;
          }
        }
      }
    }
  }

  .page-portfolio {
    .top-bar {
      @apply text-light;

      &__sticky {
        @apply text-dark-3;

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          background-color: #191919 !important;
        }

        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          background-color: #191919 !important;
        }

        .top-bar--contact-wrapper {
          &::before {
            content: '';
            @apply bg-dark-3;
          }
        }
      }

      &--contact-wrapper {
        &::before {
          content: '';
          @apply bg-light;
        }
      }

      &--right {
        a:not(.dont-underline) {
          &::after {
            content: '';
            @apply bg-light;
          }

          &:hover {
            &::after {
              content: '';
              @apply bg-light;
            }
          }
        }
      }

      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        @apply bg-light;
      }

      .hamburger.is-active .hamburger-inner,
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        background-color: #191919;
      }
    }
  }
</style>
