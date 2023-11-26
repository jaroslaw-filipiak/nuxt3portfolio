<template>
  <div class="flex flex-row w-full mx-auto pt-20 brief">
    <div class="flex flex-col items-start justify-center w-8/12">
      <div class="brief--header w-full">
        <div class="section--title">
          <h1 class="text-dark-3">Skonsultuj projekt</h1>

          <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
        </div>
        <h2 class="text-dark-3">
          Czas na nowy projekt? Jeżeli potrzebujesz kreatywnego projektu
          graficznego, porządnego teamu developerskiego lub stałego partnera do
          wspólpracy projektowej - wypelnij poniższy brief.
        </h2>
      </div>
      <form class="brief-form w-full lg:pr-14" @submit.prevent="sendData">
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
              class="flex flex-col lg:flex-row items-start lg:items-center lg:mt-10 justify-stretch"
            >
              <div class="group">
                <input
                  id="graphic"
                  type="checkbox"
                  name="projektowanie graficzne"
                  v-model="formData.selectedServices.projektowanieGraficzne"
                />
                <label
                  for="graphic"
                  class="border border-dark-3 group-hover:bg-yellow-300 transition-all"
                >
                  <span class="text-dark-3">Projektownie graficzne</span>
                </label>
              </div>

              <div class="group">
                <input
                  id="proggraming"
                  type="checkbox"
                  name="programowanie"
                  v-model="formData.selectedServices.uslugaProgramistyczna"
                />
                <label
                  for="proggraming"
                  class="border border-dark-3 group-hover:bg-yellow-300 transition-all"
                >
                  <span class="text-dark-3">Usługa programistyczna</span>
                </label>
              </div>

              <div class="group">
                <input
                  id="www"
                  type="checkbox"
                  name="www"
                  v-model="formData.selectedServices.stronaWWW"
                />
                <label
                  for="www"
                  class="border border-dark-3 group-hover:bg-yellow-300 transition-all"
                >
                  <span class="text-dark-3"> Wykonanie strony www</span>
                </label>
              </div>

              <div class="group">
                <input
                  id="full"
                  type="checkbox"
                  name="full"
                  v-model="formData.selectedServices.stalaWspolpraca"
                />
                <label
                  for="full"
                  class="border border-dark-3 group-hover:bg-yellow-300 transition-all"
                >
                  <span class="text-dark-3">Stała obsługa</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-row--wrapper">
          <div class="form-row--header">
            <div class="form-row--number">02</div>
            <div class="form-row--title">Szacowany budżet</div>
          </div>
          <div class="form-row--fields">
            <!-- fields in this form row -->
            <div class="flex items-center justify-around">
              <div class="w-9/12">
                <URange
                  v-model="budget"
                  :step="1000"
                  :min="3000"
                  :max="20000"
                  size="2xl"
                  name="range"
                />
              </div>
              <div
                class="w-3/12 flex items-center justify-start text-start pl-3"
              >
                <p class="text-dark-3 text-3xl pl-10 font-Atkinson">
                  {{ budget }} zł
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 03 -->
        <div class="form-row--wrapper">
          <div class="form-row--header">
            <div class="form-row--number">03</div>
            <div class="form-row--title">Pozostałe informacje</div>
          </div>
          <div class="form-row--fields">
            <!-- fields in this form row -->

            <div class="flex flex-col lg:flex-row items-center lg:gap-7">
              <div class="lg:mt-7 mb-3">
                <label class="label-email mr-4" for="name">
                  <span class="text-dark-3">Imię, nazwisko</span>
                </label>
                <input
                  id="name"
                  class="w-full border border-dark-3 text-dark-3"
                  placeholder="Imię, nazwisko"
                  type="text"
                  name="name"
                  v-model="formData.contactData.name"
                />
              </div>

              <div class="lg:mt-7 mb-3">
                <label class="label-email mr-4" for="email">
                  <span class="text-dark-3">Podaj adres email</span>
                </label>
                <input
                  id="email"
                  class="w-full border border-dark-3 text-dark-3"
                  placeholder="email"
                  type="email"
                  v-model="formData.contactData.email"
                />
              </div>

              <div class="lg:mt-7 mb-3">
                <label class="label-email mr-4" for="phone">
                  <span class="text-dark-3">Numer telefonu</span>
                </label>
                <input
                  id="phone"
                  class="w-full border border-dark-3 text-dark-3"
                  placeholder="telefon"
                  type="text"
                  name="phone"
                  v-model="formData.contactData.phone"
                />
              </div>
            </div>

            <div :class="{ 'textarea-wrapper__is-send': sendOK }">
              <label class="label-email mr-4" for="tresc">
                <span class="text-dark-3">Treść wiadomośći</span>
              </label>
              <textarea
                id="tresc"
                class="w-full border border-dark-3 text-dark-3 font-normal"
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
            <div class="text-dark-3">
              <p class="text-sm text-center lg:text-left">
                Chciałbyś podpisać NDA ? napisz bezpośrednio na
                <a
                  class="link-with-undeline link-with-undeline__dark"
                  href="mailto:info@j-filipiak.pl"
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
                <button class="submit font-normal" type="submit">
                  Wyślij
                  <div class="brief-spinner"></div>
                </button>
              </div>
            </div>
          </div>
          <!-- submit -->
        </div>
      </form>
    </div>

    <!-- sticky -->
    <div class="w-4/12 border border-red sticky top-0 pt-20 bg-red-500">
      <h1>Sidebar sticky</h1>
    </div>
  </div>
</template>

<script setup>
  import { useBriefStore } from '~~/stores/brief';
  import { storeToRefs } from 'pinia';

  const store = useBriefStore();
  const { formData } = storeToRefs(store);

  const budget = ref(5000);
  const sendOK = ref(false);
</script>

<style lang="scss">
  .textarea-wrapper__is-send {
    transition: all 2s cubic-bezier(0.39, 0.575, 0.565, 1);
    @apply relative;

    &::after {
      content: 'Wiadomość została wysłana!';
      @apply w-full h-full absolute left-0 top-0 bg-yellow-300 inline-flex items-center justify-center text-4xl text-dark-1 font-semibold;
    }
  }
  .brief-spinner {
    @apply flex items-center justify-center;
    .px-griditem {
      @apply transform scale-50 m-0;
      transform-origin: center;
    }
  }
  .vue-slider--wrapper {
    @apply lg:max-w-3xl lg:mt-10 lg:pl-14;
  }
  .vue-slider-process {
    background-color: #e9fb18 !important;
  }
  .vue-slider-rail {
    background-color: transparent !important;
    border: 1px solid;
    height: 18px;
  }

  .vue-slider-dot-handle {
    background-color: #e9fb18 !important;
  }
  .brief {
    @apply w-full lg:w-8/12 mx-auto pl-8 pr-8  pt-20 pb-40 lg:pt-40 lg:pb-40;

    &--header {
      h2 {
        @apply max-w-5xl lg:text-2xl mt-5;
      }
    }

    &--tip {
      @apply flex items-center pt-8 italic pb-8 lg:pb-0;

      p {
        @apply pl-4 text-sm;
        max-width: 190px;
      }
    }

    form {
      @apply lg:mt-20;

      .form-row {
        &--wrapper {
          @apply relative lg:pb-14 pb-10 lg:pt-14;
        }

        &--header {
          @apply flex flex-col items-start  lg:flex-row lg:items-center gap-3 pb-10;
        }

        &--number {
          @apply text-3xl lg:text-5xl font-Atkinson font-normal;
        }

        &--title {
          @apply text-2xl lg:text-3xl;
        }

        &--fields {
          @apply lg:pl-10;
        }

        small {
          @apply text-base;
        }
      }

      input[type='checkbox'] {
        // display: none;
        visibility: hidden;

        &::selection {
          background-color: transparent;
        }
      }

      label.vue-js-switch {
        width: auto !important;
        height: auto !important;
        @apply p-0 border-none;
        padding: 0 !important;

        &:hover {
          @apply bg-opacity-80;
        }
      }

      // .vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0] {
      //   background-color: #000 !important;
      // }

      label:not(.label-email) {
        position: relative;
        cursor: pointer;
        @apply border border-white inline-flex items-center p-5;
        width: 230px;
        height: 110px;

        // &:hover {
        //   @apply bg-dark-2;
        // }

        &::selection {
          background-color: transparent;
        }

        span {
          @apply text-2xl;

          &::selection {
            background-color: transparent;
          }
        }
      }

      label:not(.label-email):before {
        content: '';
        -webkit-appearance: none;

        @apply absolute right-0 top-0 w-full h-full  p-4 inline-flex items-center justify-center cursor-pointer bg-transparent;

        &::selection {
          background-color: transparent;
        }
      }

      input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: -12px;
        right: -4px;
        width: 9px;
        height: 22px;
        border: solid #000000;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);

        &::selection {
          background-color: transparent;
        }
      }

      input:checked + label:before {
        content: '';
        width: 20px;
        height: 20px;
        display: block;
        background-color: #e9fb18;
        position: absolute;
        right: -15px;
        top: -15px;

        &::selection {
          background-color: transparent;
        }
      }

      input[type='email'] {
        @apply bg-transparent border p-3;
      }

      input[type='text'] {
        @apply bg-transparent border p-3;
      }

      textarea {
        color: #fff;
        @apply p-8 text-lg font-semibold bg-transparent border lg:mt-5;
      }

      .submit {
        @apply bg-yellow-300 text-dark-1 mt-5 lg:mt-0 pt-3 pb-3 pl-12 pr-12 font-bold hover:opacity-80 w-36 h-12;
      }
    }
  }
</style>
