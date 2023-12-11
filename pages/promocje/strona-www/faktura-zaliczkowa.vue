<template>
  <div class="page-content mx-auto bg-[#fff]" ref="main">
    <div class="bg-[#fff] font-Sora pt-40 pb-20 w-full">
      <div class="container">
        <div
          class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
        >
          Opłacam połowę i przystępujemy do pracy
        </div>
        <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
          Zakup usługi wykonania<br />strony internetowej
        </h3>
        <h4 class="text-dark-5 text-xl font-semibold max-w-2xl mt-6 mb-6">
          Abym mógł właściwie przygotować fakturę i dostarczyć Państwu
          dokumentację proszę o wypełnienie poniższego formularza z danymi do
          faktury zaliczkowej 50%.
        </h4>
      </div>
    </div>

    <div
      class="w-full flex items-center justify-center mb-20 font-Sora pre-invoice--form"
    >
      <div class="w-9/12 bg-light-1 rounded-xl pt-10 pb-10 pl-20 pr-20">
        <h4 class="text-dark-5 text-2xl font-semibold max-w-2xl mt-6 mb-12">
          Wypełnij formularz<br />
          w celu otrzymania faktury zaliczkowej 50%
        </h4>
        <form @submit.prevent="sendForm">
          <div class="lg:mt-7 mb-4">
            <label class="label-email mr-4" for="email">
              <span class="text-dark-3">Adres email</span>
            </label>
            <input
              id="email"
              class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
              placeholder="Adres email"
              type="email"
              name="email"
              v-model="form.email"
            />
            <FormError :errors="invalid_fields" field="email" />
          </div>
          <div class="lg:mt-7 mb-3">
            <label class="label-email mr-4" for="company_name">
              <span class="text-dark-3">Nazwa firmy</span>
            </label>
            <input
              id="company_name"
              class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
              placeholder="Nazwa firmy"
              type="text"
              name="company_name"
              v-model="form.company_name"
            />
            <FormError :errors="invalid_fields" field="company_name" />
          </div>

          <div class="lg:mt-7 mb-3">
            <label class="label-email mr-4" for="nip">
              <span class="text-dark-3">NIP</span>
            </label>
            <input
              id="nip"
              class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
              placeholder="NIP"
              type="text"
              name="nip"
              v-model="form.nip"
            />
            <FormError :errors="invalid_fields" field="nip" />
          </div>

          <div class="flex items-start justify-around gap-6">
            <div class="lg:mt-7 mb-3 w-full">
              <label class="label-email mr-4" for="city">
                <span class="text-dark-3">Miasto</span>
              </label>
              <input
                id="city"
                class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
                placeholder="Miasto"
                type="text"
                name="city"
                v-model="form.city"
              />
              <FormError :errors="invalid_fields" field="city" />
            </div>

            <div class="lg:mt-7 mb-3 w-full">
              <label class="label-email mr-4" for="postal_code">
                <span class="text-dark-3">Kod pocztowy</span>
              </label>
              <input
                id="postal_code"
                class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
                placeholder="Kod pocztowy"
                type="text"
                name="postal_code"
                v-model="form.postal_code"
              />
              <FormError :errors="invalid_fields" field="postal_code" />
            </div>
          </div>

          <div class="flex items-start justify-around gap-6">
            <div class="lg:mt-7 mb-3 w-full">
              <label class="label-email mr-4" for="street">
                <span class="text-dark-3">Ulica</span>
              </label>
              <input
                id="street"
                class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
                placeholder="Imię, nazwisko"
                type="text"
                name="street"
                v-model="form.street"
              />
              <FormError :errors="invalid_fields" field="street" />
            </div>

            <div class="lg:mt-7 mb-3 w-full">
              <label class="label-email mr-4" for="building_no">
                <span class="text-dark-3">nr: budynku</span>
              </label>
              <input
                id="building_no"
                class="w-full border3 text-dark-3 bg-[#fff] pt-4 pb-4 pl-6 pr-6 rounded-full font-Sora mt-2 mb-2"
                placeholder="Imię, nazwisko"
                type="text"
                name="building_no"
                v-model="form.building_no"
              />
              <FormError :errors="invalid_fields" field="building_no" />
            </div>
          </div>

          <div class="flex items-center gap-4 justify-between mt-10">
            <div
              class="text-2xl flex items-center gap-4"
              :class="
                resp?.status === 'validation_failed'
                  ? 'text-accent'
                  : 'text-dark-5'
              "
            >
              <!-- <IconAlertCircleFilled /> -->
              <p>{{ resp?.message }}</p>
            </div>

            <button
              class="bg-accent text-white transition-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:scale-105 flex items-center gap-3 justfy-center"
              type="submit"
            >
              <template v-if="isLoading">
                <IconArrowNarrowRight />
                Wysyłanie... <Spinner ringColor="#FF460C" />
              </template>

              <template v-else>
                <IconArrowNarrowRight />
                Wyślij
              </template>
            </button>
          </div>
        </form>

        <div class="flex flex-col tems-start gap-2 mt-20">
          <div class="flex gap-4">
            <UToggle
              :ui="ui"
              color="accent"
              size="lg"
              v-model="form.acceptance"
            />
            <p
              class="text-xs flex flex-col items-center lg:items-start lg:flex-row mb-2 lg:mb-0 text-center lg:text-left text-dark-5"
            >
              Administratorem danych osobowych podanych powyżej jest Jarosław
              FIlipiak j-filipiak.pl. Podanie danych jest dobrowolne, ale
              konieczne do skontaktowania się. Podane dane osobowe będą
              przetwarzane przez Jarosław Filipiak j-filipiak.pl w celu
              przygotowania i przekazania odpowiedzi na wiadomość. Oświadczam,
              że poinformowano mnie o tym, iż podanie danych jest dobrowolne i
              przysługuje mi prawo dostępu do treści moich danych osobowych, ich
              poprawiania oraz usunięcia. Poinformowano mnie o prawie do
              wycofania zgody w dowolnym momencie. Wycofanie zgody nie wpływa na
              zgodność z prawem przetwarzania, którego dokonano na podstawie
              zgody przed jej wycofaniem.
            </p>
          </div>

          <FormError :errors="invalid_fields" field="acceptance-198" />
        </div>
      </div>
    </div>

    <CtaLanding />

    <!--  -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { IconArrowNarrowRight } from '@tabler/icons-vue';
  const isLoading = ref(false);

  const ui = {
    inactive: 'bg-[#fff] dark:bg-[#fff]',
    active: 'bg-[#48b02c] dark:bg-[#48b02c]',
    ring: 'focus-visible:ring-2 focus-visible:ring-[#fff]-500 dark:focus-visible:ring-[#fff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff] dark:focus-visible:ring-offset-[#fff]',
  };

  const form = ref({
    email: '',
    company_name: '',
    nip: '',
    city: '',
    postal_code: '',
    street: '',
    building_no: '',
    acceptance: false,
  });

  const clearForm = () => {
    form.value = {
      email: '',
      company_name: '',
      nip: '',
      city: '',
      postal_code: '',
      street: '',
      building_no: '',
      acceptance: false,
    };
  };

  const resp = ref(null);
  const invalid_fields = ref([]);

  const sendForm = async () => {
    isLoading.value = true;
    const formData = new FormData();

    for (let key in form.value) {
      formData.append(key, form.value[key]);
    }
    formData.append('acceptance-198', form.value.acceptance ? '1' : '0');

    try {
      const { data } = await axios.post(
        'https://j-filipiak.pl/api/wp-json/contact-form-7/v1/contact-forms/51/feedback',
        formData
      );

      resp.value = data;
      invalid_fields.value = data?.invalid_fields || [];
      console.log(data);
      isLoading.value = false;

      window.setTimeout(() => {
        data?.status === 'mail_sent' ? clearForm() : null;
      }, 5000);
    } catch (e) {
      console.log(e);
      isLoading.value = false;
    }
  };

  definePageMeta({
    layout: 'landing',
  });
  useHead({
    title: 'Strona internetowa w niasamowitej cenie promocyjnej',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Strona internetowa w niasamowitej cenie promocyjnej',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne sgtrony zoptymalizowane pod Google. Optymalizacja UX',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Strona internetowa w niasamowitej cenie promocyjnej',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX.',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-profesjonalne-strony-www',
    },
  });
</script>

<style lang="scss" scoped>
  .faq--item {
    @apply text-dark-5 font-Sora font-semibold;
  }

  .strona-www-hero {
    background-image: url('@/assets/uploads/oferta/hero.jpg');
    @apply bg-cover bg-bottom bg-no-repeat;
  }
</style>
