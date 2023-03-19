<template>
  <div class="footer--wrapper">
    <div class="footer--inner">
      <div class="footer--col footer--col-1 w-full lg:w-3/12">
        <h4>Kontakt</h4>
        <ul>
          <li><a href="tel:663568828">Zadzwoń do mnie: 663 568 828</a></li>
          <li>
            <a href="mailto:info@j-filipiak.pl">Email: info@j-filipiak.pl</a>
          </li>
          <li><NuxtLink to="/brief"> Formularz kontaktowy</NuxtLink></li>
          <li>
            <a
              target="_blank"
              href="https://calendly.com/jaroslaw-filipiak/30minmeeting"
            >
              Umów się na spotkanie via online</a
            >
          </li>
        </ul>
      </div>

      <div class="footer--col footer--col-2 hidden">
        <h4>Informacje</h4>
        <ul>
          <li><NuxtLink to="/about"> O mnie</NuxtLink></li>
          <li><NuxtLink to="#"> Prezentacja firmowa</NuxtLink></li>
          <li><NuxtLink to="#"> Aktualnośći</NuxtLink></li>
          <li><NuxtLink to="#"> Zasady współpracy</NuxtLink></li>
        </ul>
      </div>

      <div class="footer--col footer--col-3 w-full lg:w-9/12">
        <h4>Oferta</h4>
        <ul class="flex flex-wrap items-start justify-start gap-2 lg:gap-6">
          <li class="hidden">
            <NuxtLink class="text-xl font-Atkinson" to="#">
              Projektowanie graficzne
            </NuxtLink>
          </li>
          <li class="hidden">
            <NuxtLink class="text-xl font-Atkinson" to="#">
              Aplikacje mobilne</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-xl font-Atkinson" to="#">
              Strony www WordPress</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-xl font-Atkinson" to="#">
              Administracja stronami www
            </NuxtLink>
          </li>
          <li class="hidden">
            <NuxtLink class="text-xl font-Atkinson" to="#">
              Stała obsługa abonamentowa
            </NuxtLink>
          </li>
          <li class="relative">
            <div
              class="hidden xl:flex link--label absolute text-xs text-dark-3 bg-yellow rounded-xl pt-1 pb-1 pl-2 pr-2"
              style="top: -25px; right: -30px"
            >
              Oferta testowa , ogarniczona czasowo !
            </div>
            <NuxtLink
              class="text-xl font-Atkinson"
              to="/oferta/tanie-strony-www"
              >Tanie / Budżetowe strony www</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-xl font-Atkinson" to="#"
              >Front-end : Vue.js / Nuxt.js
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-xl font-Atkinson" to="#"
              >Wdrażenie PSD/Figma do WordPress</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-xl font-Atkinson" to="#"
              >Programista ad hoc na godziny</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div class="footer--col footer--col-4 hidden">
        <h4>Publikuje również na</h4>
        <ul>
          <li><a href="#"> Facebook</a></li>
          <li><a href="#"> Instagram</a></li>
          <li><a href="#"> TikTok</a></li>
          <li><a href="#"> YouTube</a></li>
          <li><a href="#"> Dribble </a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Awwwards</a></li>
        </ul>
      </div>
    </div>
    <div class="footer--bottom">
      <div class="flex items-center gap-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-copyright"
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
          </svg>
        </div>
        <div>
          <div>
            <NuxtLink class="text-sm" to="https://www.j-filipiak.pl"
              >j-filipiak.pl - projektowanie stron www
            </NuxtLink>

            <NuxtLink class="text-sm hidden" to="/docs/regulamin"
              >regulamin</NuxtLink
            >

            <NuxtLink class="text-sm hidden" to="/docs/polityka-prywatnosci"
              >polityka prywatnośći</NuxtLink
            >

            <NuxtLink class="text-sm hidden" to="/docs/informacje-o-cookies"
              >Informacje o cookies</NuxtLink
            >
          </div>
        </div>
      </div>

      <div class="items-center gap-2 techstack hidden md:flex">
        <p>in</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
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
            <path
              d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            ></path>
          </svg>
        </div>

        <div>
          with <a href="https://nuxtjs.org/">NuxtJS</a> /
          <a href="https://tailwindcss.com/">tailwindcss</a> /
          <a href="https://github.com/features/actions">GitHub Actions</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  @media (min-width: 1024px) {
    .footer--wrapper {
      z-index: -1 !important;
    }
  }

  .footer {
    &--wrapper {
      @apply bg-fixed flex flex-col items-center  w-full mx-auto  bg-dark-4  lg:fixed lg:bottom-0 box-border lg:h-145 z-0 text-white;
    }

    &--inner {
      @apply w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-start lg:w-11/12 mx-auto gap-10  pl-8 pr-8 pt-20 lg:pt-28 pb-20;
    }
    &--bottom {
      @apply w-full flex flex-col lg:flex-row items-center lg:items-start  lg:justify-between lg:w-11/12 mx-auto pl-8 pr-8 pb-3;

      a {
        @apply opacity-70 hover:opacity-100;
      }

      .techstack {
        @apply text-xs;
      }
    }

    &--col {
      h4 {
        @apply pb-8 text-2xl font-bold font-Atkinson;
      }

      li {
        a {
          @apply uppercase text-sm font-Atkinson pb-2 inline-block;
          &::after {
            content: '';
            @apply w-0 bg-white block;
            height: 2px;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }

          &:hover {
            &::after {
              content: '';
              @apply w-full bg-white block;
              height: 2px;
            }
          }
        }
      }

      &-3 {
        a {
          @apply relative pl-4;

          &::before {
            content: '';
            @apply block bg-white absolute left-0;
            top: 7px;
            width: 2px;
            height: 2px;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }

          &:hover {
            &::before {
              content: '';
              @apply block bg-white absolute left-0;
              top: 7px;
              width: 8px;
              height: 8px;
              transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
</style>
