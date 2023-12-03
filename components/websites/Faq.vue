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
          :id="item.id"
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
                href="tel:663568828"
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
                href="mailto:info@j-filipiak.pl"
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
                target="_blank"
                href="https://calendly.com/jaroslaw-filipiak/30minmeeting"
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
  // TODO: id2 = zajrzyj do cennika i link do strony z cennikem .
  const faqs = [
    {
      id: 1,
      title: 'Jak wygląda proces tworzenia strony www?',
      content:
        'Tworzenie strony internetowej to niezwykle złożony proces składający się w wielu kroków, które również są dopasowane indywidualnie do klienta. Dlatego też zachęcam do niezobowiązującego kontaktu w celu ustalenia szczegółów.',
    },
    {
      id: 2,
      title: 'Ile kosztuje wykonanie strony www?',
      content:
        'Wszystko zależy od wielu czynników min ilość podstron, wymagana funkcjonalność, ilość jezyków czy też rodzaj zamówionej strony (z szablonu bądź autorski design). W celu uzyskania wyceny zapraszamy do kontaktu.',
    },
    {
      id: 3,
      title: 'Co z RODO i ciasteczkami?',
      content:
        'Dbam o dostosowanie strony do aktualnych aktów prawnych. Każda strona zawiera box informacyjny o ciasteczkach oraz link do polityki prywatności',
    },
    {
      id: 4,
      title: 'Jak długo trwa zrobienie strony?',
      content:
        'W zależności od rozmiaru projektu i jego funkcjonalności. 80% projektów wykonuje w ciągu 2-3 tygodni.',
    },
    {
      id: 5,
      title: 'Czy mogę edytować swoją stronę www?',
      content:
        'Tak, wraz ze stroną otrzymasz dostęp do panelu administracyjnego, z poziomu którego będzie można w pełni edytować stronę, jej treśći i grafikę a także dodawać nowe podstrony oraz o wiele więcej.',
    },

    {
      id: 6,
      title: 'Czy strony są dopasowane do urządzeń mobilnych?',
      content:
        'Tak, wszystkie strony są w pełni responsywne i dopasowane do urządzeń mobilnych. Oznacza to, że poprawnie wyświetlają się nie tylko na laptopie i komputerze ale i na telefonie komórkowym oraz tabletach',
    },
    {
      id: 7,
      title: 'Czy strony są zoptymalizowane pod kątem SEO?',
      content:
        'Tak, wszystkie strony są zoptymalizowane pod kątem SEO. Każda strona otrzymuje ode mnie wyprawkę w postaci rozwiązań ułatwiających przyszłe pozycjonowanie strony www czyli: prawidłowe oznaczenie tagów na stronie (min. kluczowy tag h1 na każdej podstronie), przygotowanie sitemap.xml oraz robots.txt, skonfigurowanie wtyczki do SEO. Jeżeli jest taka potrzeba to mogę również skonfigurować Google Analytics oraz Google Search Console i poprosić o szybszą indeksację strony www.',
    },

    {
      id: 8,
      title: 'Czy strony są w pełni bezpieczne?',
      content:
        'Nie ma w pełni bezpiecznego systemu na całym świecie. Nie mniej dbam o wiele kluczowych kwestii takich jak: mocne hasła, prawidłowe skonfigurowanie serwera czy też zastosowanie certyfikatu ssl. W naszej ofercie mamy również stałą opiekę i monitoring stron www dbając min. o aktualizacje wtyczek, motywów oraz samego WordPressa. Jeżeli mamy do czynienia z prostą stroną www to otrzymany pakiet zabezpieczeń w zupełności wystarczy aby uznać stronę za bezpieczną. Nie mniej im więcej doinstalowanych wtyczek tym większe ryzyko. W takim przypadku zalecam wykonywanie regularnego serwisu przez doświadczone osoby',
    },
    {
      id: 9,
      title: 'Czy strony mogą mieć wiele języków?',
      content:
        'Tak można dodać obsługę wielu języków samodzielnie lub też zlecić to mnie w ramach usługi',
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
