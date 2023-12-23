<template>
  <div class="administration--wrapper bg-light pt-20 pb-20">
    <div
      class="w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8"
    >
      <div class="section--title text-dark-3">
        <h3>Ile kosztuje święty spokój?</h3>
        <h4 class="text-2xl lg:text-5xl mt-6">
          Powierz swój projekt w dobre ręce
        </h4>
        <h5 class="text-xl lg:text-4xl mt-10 max-w-6xl">
          Administracja stroną www w cenie 1/10 etatu, reakcja na usterki w 24h
        </h5>

        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <!-- pricing -->
      <div class="columns-1 lg:columns-2">
        <!-- pricing item -->
        <div class="border border-dark-3 text-dark-3 gsap-pricing-pin">
          <div class="pt-12 pb-12 pl-8 pr-8">
            <h3 class="text-xl lg:text-4xl mb-6">Abonament podstawowy</h3>
            <p class="text-xl lg:text-3xl hidden lg:flex">
              Zadbam o to, aby strona działała i była dostępna w internecie,o
              kopie zapasowe, aktualizacje oprogramowania i zabezpieczenia. Co
              miesiąc otrzymasz szczegółowy raport opisujący kondycję twojej
              strony.
            </p>
          </div>

          <div class="w-full border-t border-dark-3">
            <div class="pt-12 pb-12 pl-8 pr-8">
              <p class="text-xl lg:text-3xl">
                od 269 PLN / netto / miesięcznie
              </p>
            </div>
          </div>
        </div>

        <!-- pricing item -->
        <div class="border border-dark-3 text-dark-3 gsap-end-trigger">
          <div class="pt-12 pl-8 pr-8">
            <h3 class="text-xl lg:text-4xl mb-6">
              Co wchodzi w skład pakietu?
            </h3>
            <ul class="flex flex-col gap-3">
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>Aktualizowanie WordPressa, wtyczek, motywu, PHP</div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  Wykonywanie kopii zapasowych na serwerze zewnętrznym:
                  codziennie, kopie przechowywane 3 miesiące. Przywrócenie
                  serwisu z kopii zapasowej w razie potrzeby.
                </div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>Skanowanie zabezpieczeń i malware: codziennie.</div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>Raportowanie: co miesiąc.</div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>Przyjmowanie zgłoszeń: mailowo lub telefoniczne.</div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  Kompleksowy audyt strony, audyt bezpieczeństwa, aktualizacja
                  zabezpieczeń raz w roku.
                </div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  SEO: monitorowanie widoczności online, szybkości, użyteczności
                  i zgłoszeń z Google Search Console,
                </div>
              </li>
            </ul>
          </div>
          <div class="pl-8 pr-8 pb-12">
            <h3 class="text-xl lg:text-4xl mb-6 mt-6">
              Czym jeszcze mogę zajmować się w ramach opieki?
            </h3>
            <ul class="flex flex-col gap-3">
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  SEO: Optymalizacją serwisu pod kątem pozycjonowania w
                  wyszukiwarkach, optymalizacją szybkości strony i poprawianiem
                  słabych wyników podstawowych wskaźników internetowych wg
                  Google (Core Web Vitals).
                </div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  Weryfikacją doręczeń wiadomości z formularzy, czy na pewno
                  dochodzą tam, gdzie powinny.
                </div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>Monitorowaniem ciągłości działania strony (uptime).</div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCheck class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <div>
                  Monitorowaniem zintegrowanych usług (np. mapy, aplikacji FB)
                </div>
              </li>
            </ul>
          </div>

          <div class="pl-8 pr-8 pb-12">
            <h3 class="text-xl lg:text-4xl mb-6 mt-6">
              Dodatkowe prace zlecone?
            </h3>
            <ul class="flex flex-col gap-3">
              <li class="flex items-start justify-start gap-3">
                <div>
                  Oprócz stałej opieki jako stały klient możesz zgłaszać dowolne
                  zmiany na swojej stronie, są one wyceniane osobno i
                  realizowane zgodnie z ustaloną stawką godzinową.<br /><br />
                </div>
              </li>
              <li class="flex items-start justify-start gap-3">
                <IconCirclePlus class="text-dark-3 min-w-[24px] max-w-[24px]" />
                <strong>
                  Największym atutem bycia stałym klientem jest to, że nie
                  musisz czekać w kolejce na realizację zlecenia. Jako stały
                  klient jesteś traktowany priorytetowo.</strong
                >
              </li>
            </ul>
          </div>

          <div class="w-full border-t border-dark-3">
            <div class="pt-12 pb-12 pl-8 pr-8">
              <p class="text-xl lg:text-3xl">Skorzystaj już teraz!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { IconCheck, IconCirclePlus } from '@tabler/icons-vue';
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;

  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function () {
          const pinElem = document.querySelector('.gsap-pricing-pin');
          const endElem = document.querySelector('.gsap-end-trigger');

          gsap.timeline({
            scrollTrigger: {
              id: 'gsap_pin--pricing',
              trigger: pinElem,
              scrub: true,
              pin: true,
              start: 'top 15%',
              endTrigger: endElem,
              end: 'bottom top',
              markers: false,
            },
          });
        },
      });
    }); // context
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style lang="scss" scoped></style>
