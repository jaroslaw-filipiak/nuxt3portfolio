<template>
  <div class="administration--wrapper bg-light pt-20 pb-20">
    <div
      class="w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8"
    >
      <div class="section--title text-dark-3">
        <h3>
          Ile kosztuje wyczyszczenie <br class="hidden lg:flex" />
          oraz zabezpieczenie strony?
        </h3>

        <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
      </div>

      <!-- pricing -->
      <div class="flex flex-col-reverse lg:flex-row items-start">
        <!-- pricing item -->
        <div class="border border-dark-3 text-dark-3 w-full lg:w-4/12">
          <div class="pt-12 pb-12 pl-8 pr-8">
            <h3 class="text-xl lg:text-4xl mb-6">Usługa jednorazowa</h3>
            <p class="text-xl lg:text-3xl hidden lg:flex">
              Wyczyszczę stronę oraz cały serwer z wirusów. Zabezpiecze raz a
              porządnie a ty zyskasz święty spokój.
            </p>
          </div>

          <div class="w-full border-t border-dark-3 bg-yellow-400">
            <div class="pt-12 pb-12 pl-8 pr-8">
              <p class="text-xl lg:text-3xl">499 PLN / netto</p>
            </div>
          </div>
        </div>

        <!-- pricing item -->
        <div class="border border-dark-3 text-dark-3 w-full lg:w-8/12">
          <div class="pt-12 pl-8 pr-8">
            <h3 class="text-xl lg:text-4xl mb-6">
              Jak wygląda proces realizacji?
            </h3>
            <ul class="flex flex-col gap-3">
              <li class="flex flex-col items-start justify-start gap-3">
                <div><strong>1. Blokada Twojej strony</strong></div>
                <p class="pl-8">
                  To niezwykle ważne aby Twoja strona nie czyniła innym
                  użytkownikom dalszych szkód. Zamiast twojej strony będzie
                  widniał komunikat o tym, że strona jest w trakcie prac
                  konserwacyjnych.
                </p>
              </li>
              <li class="flex flex-col items-start justify-start gap-3">
                <div>
                  <strong>2. Utworzenie środowiska developerskiego</strong>
                </div>
                <p class="pl-8">
                  Tworze kopie zapasową Twojej strony i odpalam ją lokalnie na
                  swoim komputerze. Korzystam z niesamowitego narzędzia jakim
                  jest konteneryzacja za pomocą Dockera. Dzięki temu mogę w
                  pełni bezpiecznie pracować nad Twoją stroną.
                </p>
              </li>
              <li class="flex flex-col items-start justify-start gap-3">
                <div><strong>3. Proces oczyszczania strony</strong></div>
                <p class="pl-8">
                  Skrupulatnie krok po kroku oczyszczam twoją stronę.
                  Technicznie rzecz biorąc tworze ją od nowa. Najpierw przenoszę
                  bazę danych, następnie wtyczki, motywy itp. Każdy plik jest
                  dokładnie sprawdzany pod kątem złośliwego kodu. To jest
                  oczywiście największy możliwy skrót tego co robię ale nie chcę
                  Cię zanudzać.
                </p>
              </li>

              <li class="flex flex-col items-start justify-start gap-3">
                <div><strong>4. Testy nowej strony</strong></div>
                <p class="pl-8">
                  Stabilna wersja Twojej strony jest testowana na moim
                  wewnętrznym serwerze. Sprawdzam czy wszystko działa poprawnie,
                  czy nie ma żadnych błędów. Jeśli wszystko jest ok to przenoszę
                  stronę na Twój serwer.
                </p>
              </li>

              <li class="flex flex-col items-start justify-start gap-3">
                <div><strong>5. Zabezpieczenie strony</strong></div>
                <p class="pl-8">
                  Zabezpieczam stronę przed atakami, instaluje odpowiednie
                  wtyczki, konfiguruje je, tworzę kopie zapasowe. Wszystko po to
                  abyś miał pewność, że Twoja strona jest bezpieczna.
                </p>
              </li>
            </ul>
          </div>

          <div class="pt-12 pl-8 pr-8 pb-12">
            <h3 class="text-xl lg:text-4xl mb-6">Co obejmuje usługa?</h3>
            <ul class="flex flex-col gap-3">
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Kopia zapasowa strony</p>
              </li>
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Identyfikacja zagrożenia - wirusy, malware, spam</p>
              </li>
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Pełne oczyszczenie strony oraz serwera</p>
              </li>
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Zabezpieczenie strony przed ponowną infekcją</p>
              </li>
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Aktualizacja strony oraz wszelkich komponentów</p>
              </li>
              <li class="flex items-start justify-start gap-3">
                <div>
                  <IconCheck class="w-6 h-6 mr-2" />
                </div>
                <p>Konfiguracja reguł w .htacces (firewall)</p>
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
  import { IconCheck, IconAlertCircleFilled } from '@tabler/icons-vue';
  // const nuxtApp = useNuxtApp();
  // const gsap = nuxtApp.gsap;
  // const ScrollTrigger = nuxtApp.ScrollTrigger;

  // let ctx;

  // onMounted(() => {
  //   ctx = gsap.context(() => {
  //     ScrollTrigger.matchMedia({
  //       '(min-width: 1024px)': function () {
  //         const pinElem = document.querySelector('.gsap-pricing-pin');
  //         const endElem = document.querySelector('.gsap-end-trigger');

  //         gsap.timeline({
  //           scrollTrigger: {
  //             id: 'gsap_pin--pricing',
  //             trigger: pinElem,
  //             scrub: true,
  //             pin: true,
  //             start: 'top 15%',
  //             endTrigger: endElem,
  //             end: 'bottom top',
  //             markers: false,
  //           },
  //         });
  //       },
  //     });
  //   }); // context
  // });

  // onUnmounted(() => {
  //   ctx.revert();
  // });
</script>

<style lang="scss" scoped></style>
