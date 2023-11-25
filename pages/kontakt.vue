<template>
  <div class="page-content border-2 border-dashed flex flex-row" ref="main">
    <div class="flex w-8/12 border border-red-500">
      <div class="border border-dark-3">
        <form class="brief-form lg:pr-14" @submit.prevent="sendData">
          <!-- 01 -->
          <div class="form-row--wrapper">
            <div class="form-row--header">
              <div class="form-row--number">01</div>
              <div class="form-row--title">Specyfikacja projektu</div>
              <small>(zaznacz jeden lub więcej obszarów)</small>
            </div>
            <div class="form-row--fields">
              <!-- fields in this form row -->

              <div
                class="flex flex-col lg:flex-row items-start lg:items-center lg:mt-10"
              >
                <div>
                  <input
                    id="graphic"
                    type="checkbox"
                    name="projektowanie graficzne"
                    v-model="formData.selectedServices.projektowanieGraficzne"
                  />
                  <label for="graphic" class="border border-dark-3">
                    <span>Projektownie graficzne</span>
                  </label>
                </div>
                <div>
                  <input
                    id="proggraming"
                    type="checkbox"
                    name="programowanie"
                    v-model="formData.selectedServices.uslugaProgramistyczna"
                  />
                  <label for="proggraming" class="border border-dark-3">
                    <span>Usługa programistyczna</span>
                  </label>
                </div>
                <div>
                  <input
                    id="www"
                    type="checkbox"
                    name="www"
                    v-model="formData.selectedServices.stronaWWW"
                  />
                  <label for="www" class="border border-dark-3">
                    <span>Wykonanie strony www</span>
                  </label>
                </div>

                <div>
                  <input
                    id="full"
                    type="checkbox"
                    name="full"
                    v-model="formData.selectedServices.stalaWspolpraca"
                  />
                  <label for="full" class="border border-dark-3">
                    <span>Stała obsługa</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="form-row--wrapper">
            <div class="form-row--header">
              <div class="form-row--number">02</div>
              <div class="form-row--title">Dane kontaktowe</div>
            </div>
            <div class="form-row--fields">
              <!-- fields in this form row -->

              <div class="flex flex-col lg:flex-row items-center lg:gap-7">
                <div class="lg:mt-7 mb-3">
                  <label class="label-email mr-4" for="email">
                    <span>Podaj adres email</span>
                  </label>
                  <input
                    id="email"
                    class="w-full lg:w-auto border border-dark-3"
                    placeholder="email"
                    type="email"
                    v-model="formData.contactData.email"
                  />
                </div>

                <div class="lg:mt-7 mb-3">
                  <label class="label-email mr-4" for="phone">
                    <span>Numer telefonu</span>
                  </label>
                  <input
                    id="phone"
                    class="w-full lg:w-auto border border-dark-3"
                    placeholder="telefon"
                    type="text"
                    name="phone"
                    v-model="formData.contactData.phone"
                  />
                </div>
              </div>

              <div :class="{ 'textarea-wrapper__is-send': sendOK }">
                <label class="label-email mr-4" for="tresc">
                  <span>Treść wiadomośći</span>
                </label>
                <textarea
                  id="tresc"
                  class="w-full border border-dark-3"
                  name="tresc"
                  cols="30"
                  rows="10"
                  v-model="formData.message"
                ></textarea>
              </div>
            </div>

            <!-- submit -->
            <div
              class="lg:pl-10 mt-5 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between h-14"
            >
              <div>
                <p class="text-sm text-center lg:text-left">
                  Chciałbyś podpisać NDA ? napisz bezpośrednio na
                  <a class="link-with-undeline" href="mailto:info@j-filipiak.pl"
                    >info@j-filipiak.pl</a
                  >
                </p>
                <p
                  class="text-xs mt-2 flex flex-col items-center lg:items-start lg:flex-row mb-2 lg:mb-0 text-center lg:text-left"
                >
                  Wyrażam zgodę na przetwarzanie tego formularza w celu kontaktu
                  oraz przedstawienia oferty
                </p>
              </div>
              <div class="flex items-center">
                <div>
                  <button class="submit" type="submit">
                    <div class="brief-spinner"></div>
                  </button>
                </div>
              </div>
            </div>
            <!-- submit -->
          </div>
        </form>
      </div>
    </div>
    <div class="w-4/12 border border-red bg-red-500 sticky top-0">
      <h1>Sidebar sticky</h1>
    </div>
    <!-- <Brief /> -->
  </div>
</template>

<script setup>
  import { useBriefStore } from '~~/stores/brief';
  import { storeToRefs } from 'pinia';

  const store = useBriefStore();
  const { formData } = storeToRefs(store);

  const nuxtApp = useNuxtApp();
  const ToggleButton = nuxtApp.ToggleButton;

  useHead({
    title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Poproś o indywidualną wycenę!. Szybki kontakt',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Projektowanie stron www - tylko profesjonalne strony firmowe',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-home',
    },
  });

  function sendData() {
    console.log('send data');
  }

  onMounted(() => {
    console.log('mounted brief component');
    console.log(ToggleButton);
  });
</script>

<style lang="scss" scoped>
  .page-content {
    @apply min-h-screen  text-white;
  }

  .header {
    @apply pl-8;
  }
  .pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
  }
</style>
