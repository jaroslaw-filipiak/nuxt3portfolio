<template>
  <div
    class="page-content pb-0 flex flex-col w-full mx-auto pt-20 brief pl-0 pr-0"
  >
    <div class="flex w-full lg:w-11/12 mx-auto pl-8 pr-8 pt-20 pb-20">
      <div class="flex flex-col items-start justify-center w-full">
        <div class="brief--header w-full">
          <div class="section--title">
            <h1 class="text-dark-3">Skonsultuj projekt</h1>

            <img class="pt-3" src="~/assets/uploads/smush-dark.svg" alt="" />
          </div>
          <h2 class="text-dark-3">
            Czas na nowy projekt? Jeżeli potrzebujesz kreatywnego projektu
            graficznego, porządnego teamu developerskiego lub stałego partnera
            do wspólpracy projektowej to napisz do mnie!
          </h2>
        </div>
      </div>

      <!-- sidebar -->
      <!-- <div class="w-4/12 pt-20"></div> -->
    </div>

    <CtaYellow />
  </div>
</template>

<script setup>
  import { useBriefStore } from '~~/stores/brief';
  import { storeToRefs } from 'pinia';
  import axios from 'axios';

  const store = useBriefStore();
  const { formData } = storeToRefs(store);

  const selectedServices = ref({
    projektowanieGraficzne: false,
    uslugaProgramistyczna: false,
    stronaWWW: false,
    stalaWspolpraca: false,
  });

  const sendOK = ref(false);
  const isSending = ref(false);
  const resp = ref(null);

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

  const clearForm = () => {
    formData.name_surname = '';
    formData.email = '';
    formData.phone = '';
    formData.message = '';
    formData.budget = 3000;
    resp.value = null;
  };

  const send = async () => {
    isSending.value = true;

    const specs = Object.keys(selectedServices.value).filter(
      (key) => selectedServices.value[key] === true
    );

    const form = new FormData();

    form.append('name_surname', store.formData.name_surname);
    form.append('email', store.formData.email);
    form.append('phone', store.formData.phone);
    form.append('message', store.formData.message);
    form.append('budget', store.formData.budget);
    form.append('acpt-required', 1);
    form.append('spec', specs);

    axios
      .post(
        'https://j-filipiak.pl/api/wp-json/contact-form-7/v1/contact-forms/40/feedback',
        form
      )
      .then(function (response) {
        resp.value = response;
        console.log(response);
        isSending.value = false;
        window.setTimeout(() => {
          clearForm();
        }, 15000);
      })
      .catch(function (error) {
        resp.value = response;
        console.log(error);
        isSending.value = false;
      });
  };
</script>

<style lang="scss">
  .brief-spinner {
    @apply flex items-center justify-center absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
  .page-content {
    @apply min-h-screen  text-white;
  }

  .header {
    @apply pl-8;
  }
  .pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
  }
  .brief {
    @apply w-full  mx-auto pl-8 pr-8  pt-20 lg:pt-40;

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
          @apply flex flex-col items-start  lg:flex-row lg:items-center gap-3 pb-10  text-dark-2;
        }

        &--number {
          @apply text-3xl lg:text-5xl font-Atkinson font-normal  text-dark-2;
        }

        &--title {
          @apply text-2xl lg:text-3xl text-dark-2;
          span {
            @apply text-dark-2;
          }
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
        @apply border border-white inline-flex items-center p-5 text-xl;
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

        top: -9px;
        right: 1px;
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
        width: 42px;
        height: 42px;
        display: block;
        @apply bg-yellow-300 rounded-full  flex items-center justify-center;
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
