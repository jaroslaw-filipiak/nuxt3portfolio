<template>
  <div class="budget-websites-faq--wrapper">
    <div class="budget-websites-faq--inner">
      <header>
        <div class="flex flex-col justify-center items-center w-full">
          <div class="section--title">
            <h4 class="text-xl text-center">sekcja FAQ czyli...</h4>
            <h3 class="max-w-4xl text-center pt-3">
              Najczęściej zadawane pytania
            </h3>
          </div>
        </div>
      </header>
      <div class="budget-websites-faq--items">
        <faqItem
          color="dark"
          :title="item.title"
          :content="item.content"
          v-for="item in faqs"
          v-bind:key="item.id"
        />
      </div>
      <div class="budget-websites-faq--footer">
        <div class="flex items-center justify-start mt-6">
          <div class="flex flex-col w-6/12">
            <p class="pr-20 text-3xl">
              Nie znalezłeś/aś odpowiedzi na pytanie ?
            </p>
            <p class="text-xl">
              <strong>skontaktuj się ze mną</strong> a chętnie udziele więcej
              informacji
            </p>
          </div>
          <div class="flex w-6/12">
            <div class="flex">
              <a
                href="#"
                class="link-with-undeline link-with-undeline__yellow ml-6 md:ml-0 inline-block relative underline-after text-dark-3"
                >+48 663 568 828</a
              >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDI4IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC42NjEgMy41MzE0N0MyNS40MzgxIDMuMzQ5MzcgMjYuMjY1IDIuNzE3MjkgMjYuOTE5OSAyLjI3MjVNMjYuOTE5OSAyLjI3MjVDMjYuOTMyNSAyLjI2MzkgMjYuNzY3OCAyLjA4NjAzIDI2Ljc1NDggMi4wNzI1MUMyNi4xNyAxLjQ2NTMgMjQuODk5MiAwLjgyNjg3NiAyNC4yMDk1IDAuNjc5MzkyTTI2LjkxOTkgMi4yNzI1QzIyLjQzOTcgMS44ODcwNiAxNy40NTIgMS45Mjg4MiAxMi41MjI0IDEuOTUwMDlDOC41NDQ4MSAxLjk2NzI1IDQuNjA1IDEuOTcxMDcgMS4wMDAxMiAxLjcyNjM1IiBzdHJva2U9IiNGRkQ0MEIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                alt="arrow"
                class="hidden md:block ml-6 pr-6"
                style="width: 64px"
              />
            </div>
            <div class="flex">
              <a
                href="#"
                class="link-with-undeline link-with-undeline__yellow ml-6 md:ml-0 inline-block underline-after text-dark-3 relative"
                >info@j-filipiak.pl</a
              >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDI4IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC42NjEgMy41MzE0N0MyNS40MzgxIDMuMzQ5MzcgMjYuMjY1IDIuNzE3MjkgMjYuOTE5OSAyLjI3MjVNMjYuOTE5OSAyLjI3MjVDMjYuOTMyNSAyLjI2MzkgMjYuNzY3OCAyLjA4NjAzIDI2Ljc1NDggMi4wNzI1MUMyNi4xNyAxLjQ2NTMgMjQuODk5MiAwLjgyNjg3NiAyNC4yMDk1IDAuNjc5MzkyTTI2LjkxOTkgMi4yNzI1QzIyLjQzOTcgMS44ODcwNiAxNy40NTIgMS45Mjg4MiAxMi41MjI0IDEuOTUwMDlDOC41NDQ4MSAxLjk2NzI1IDQuNjA1IDEuOTcxMDcgMS4wMDAxMiAxLjcyNjM1IiBzdHJva2U9IiNGRkQ0MEIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                alt="arrow"
                class="hidden md:block ml-6 pr-6"
                style="width: 64px"
              />
            </div>
            <div class="flex">
              <a
                href="#"
                class="link-with-undeline link-with-undeline__yellow ml-6 md:ml-0 inline-block underline-after text-dark-3 relative"
                >porozmawiajmy via online</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const faqs = [
    {
      id: 1,
      title: 'Jak wygląda tworzenie taniej strony www?',
      content:
        'Przygotowanie taniej strony internetowej jest prosta i szybkie. Wystarczy, że dokonasz zamówienia w sklepie i wypełnisz formularz - dla mnie to wystarczy, aby wykonać Twoją stronę www.',
    },
    {
      id: 2,
      title: 'Ile kosztuje tania strona wizytówka?',
      content:
        'Koszt prostej strony www to 999 zł. W tej cenie otrzymasz także domenę, serwer na 12 miesięcy oraz certyfikat SSL oraz pocztę email.',
    },
    {
      id: 3,
      title: 'Ile kosztuje strona www multipage?',
      content:
        'Koszt przygotowania strony multipage to  od : 1999 zł. Podobnie jak w przypadku wizytówki, w cenie dostaniesz także domenę wraz z serwerem, certyfikat SSL i adres e-mail.',
    },
    {
      id: 4,
      title: 'Czy mogę zmieniać układ strony www?',
      content: '',
    },
    {
      id: 5,
      title: 'Ile kosztuje utrzymanie taniej strony www?',
      content: '',
    },
    {
      id: 6,
      title: 'Czy mogę edytować swoją tanią stronę www?',
      content: '',
    },
    {
      id: 7,
      title: 'Czy strony są dopasowane do urządzeń mobilnych?',
      content: '',
    },
    {
      id: 8,
      title: 'Kwestia seo ',
      content: '',
    },
    {
      id: 9,
      title: 'Kwestia szybkości ',
      content: '',
    },
    {
      id: 10,
      title: 'Kwestia zabepieczeń ',
      content: '',
    },
    {
      id: 11,
      title: 'Kwestia gwarancji ',
      content: '',
    },
  ];
</script>

<style lang="scss">
  .budget-websites-faq {
    &--wrapper {
      @apply w-full bg-light;
    }

    &--inner {
      @apply w-full xl:w-9/12 pt-20 pb-20 pl-8 pr-8  mx-auto text-dark-3;
    }
    &--title {
      @apply text-4xl;
      &::selection {
        outline: none;
        background-color: transparent;
      }
    }
    &--content {
      @apply max-w-7xl text-xl;
    }
    &--items {
      @apply pt-20;
    }

    &--footer {
      @apply pt-10;
    }
  }
</style>
