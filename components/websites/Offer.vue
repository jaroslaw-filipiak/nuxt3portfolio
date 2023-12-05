<template>
  <div class="websites__offer--wrapper bg-dark-3">
    <div class="websites__offer--inner">
      <div class="section--title max-w-4xl hidden">
        <h3>Dlaczego warto skorzystać z oferty na autorskie strony www?</h3>
        <img class="pt-3" src="~/assets/uploads/smush.svg" alt="" />
      </div>

      <div class="flex items-end mt-20 mb-20">
        <div class="w-11/12">
          <h4 class="text-2xl lg:text-5xl xl:text-[90px] gsap_pin--wrapper">
            Decydując się na wybór profesjonalnej strony internetowej masz
            pewność, że projekt będzie szybki, bezpieczny oraz w pełni
            stabilny.<br /><br />
          </h4>
          <!-- <h5
            class="text-2xl lg:text-5xl xl:text-[110px] text-white gsap_pin--wrapper-2"
          >
            <strong>3 najważniejsze aspekty porządnej strony www to:</strong>
          </h5> -->
          <h4 class="text-yellow-400 text-xl lg:text-4xl mt-10 max-w-6xl"></h4>
        </div>
      </div>

      <div class="websites__offer--items mt-20">
        <h5 class="text-4xl text-white mb-6">
          3 najważniejsze aspekty porządnej strony www to:
        </h5>
        <div class="websites__offer--row--wrapper">
          <div
            class="websites__offer--row xl:border-b-0 2xl:border-b w-full 2xl:w-6/12 3xl:w-7/12"
          >
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl">Responsywność</h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>

            <div>
              <p class="text-xl lg:text-3xl">
                Responsywność to tak naprawdę wygoda oraz dostępność.
                Użytkownicy bedą mogli oglądać Twoją stronę na różnych
                urządzeniach niezależnie od rodzaju. Sama wygoda to nie jedyne
                korzyści wynikające z posiadania responsywnej strony. Pamiętaj,
                że takie strony mają lepsze wyniki w wyszukiwarkach oraz wyższe
                statystyki odwiedzin.
              </p>
              <p class="text-base lg:text-2xl mt-8">
                Dokładnie testuje za pomocą automatycznych narzędzi sposób
                wyświetlania strony na najpopularniejszych urządzeniach.
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full 2xl:w-6/12 3xl:w-5/12">
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl">
                  Przystosowanie strony pod SEO
                </h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
                Zwiększona widoczność to więcej odwiedzin a więcej odwiedzin to
                więcej okazji do sprzedania swojego produktu lub usługi. Dobra
                optymalizacja pod SEO jest jak lokata - wraz z czasem zyskujesz
                coraz więcej.
              </p>
              <p class="text-base lg:text-xl mt-8">
                Długoterminowe korzyści to najważniejszy aspekt dobrej
                optymalizacji strony pod wyniki wyszukiwania.
              </p>
            </div>
          </div>

          <div class="websites__offer--row w-full xl:border-t-0">
            <div>
              <div>
                <h4 class="text-3xl lg:text-4xl">Bezpieczeństwo</h4>
              </div>
              <div class="hidden">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <p class="text-xl lg:text-3xl">
                Strona musi być dobrze zabezpieczona przed najpopularniejszymi
                atakami oraz powinna mieć kopie zapasową nie tylko plików ale
                także bazy danych. Stała współpraca to bezpieczeństwo Twoich
                danych, szybka reakcja na awarie, regularne kopie zapasowe oraz
                stały monitoring statusu witryny.
              </p>
              <p class="text-base lg:text-2xl mt-8">
                Każda wykonana strona jest mocno zabezpieczona. Jeżeli chcesz
                aby dodatkowo ktoś nad nią czuwał skorzystaj z oferty na
                <NuxtLink
                  class="link-with-undeline"
                  to="/oferta/opieka-nad-stronami-internetowymi"
                  >Opiekę nad stronami internetowymi.</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;

  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {
      const pinWrapper = document.querySelector('.gsap_pin--wrapper');
      // const pinWrapper2 = document.querySelector('.gsap_pin--wrapper-2');

      gsap
        .timeline({
          scrollTrigger: {
            id: 'gsap_pin--wrapper',
            trigger: pinWrapper,
            scrub: true,
            pin: true,
            start: 'top 30%',
            end: '+=190%',
            markers: false,
          },
        })
        .from(pinWrapper, {
          ease: 'ease-in',
          backgroundSize: '0%',
        });

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       id: 'gsap_pin--wrapper2',
      //       trigger: pinWrapper2,
      //       scrub: true,
      //       pin: true,
      //       start: 'top 30%',
      //       end: '+=100%',
      //       markers: false,
      //     },
      //   })
      //   .from(pinWrapper2, {
      //     ease: 'ease-in',
      //     backgroundSize: '0%',
      //   });
    }); // context
  });

  onUnmounted(() => {
    ctx.revert();
  });
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
        @apply flex flex-col lg:flex-row flex-wrap;
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
