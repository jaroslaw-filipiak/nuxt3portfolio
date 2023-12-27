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
      title: 'Jak rozpoznać czy mam wirusa na stronie?',
      content:
        'Najczęstsze objawy to różnego rodzaju przekierowania na inne strony, brak możliwości zalogowania się do panelu administracyjnego, pojawiające się dziwne wpisy czy też nowi użytkownicy. Czasami jest to całkowita zmiana treści strony. Zdarzają się przypadki, gdzie właściciel strony dowiaduje się o wirusie dopiero po zablokowaniu strony przez Google czy też po wiadomośći od hostingodawcy o zablokowaniu strony.',
    },
    {
      id: 2,
      title: 'Dlaczego moja strona została zainfekowana?',
      content:
        'Przyczyn jest bardzo dużo. Z mojego doświadczenia najwięcej infekcji na stronie spowodowane jest przez tzw: ataki typu nulled themes. Oznacza to, że właściciel strony albo pobrał motyw/wtyczkę z nieznanego żródła albo też zrobił to poprzedni wykonawca strony www. Niestety często niska cena wykonania strony www jest jedynym czynnikiem który składania do wyboru taniej oferty. Dodatkowo często usuwam wirusy na stronach , które zostają pozostawione same sobie przez dłuższy czas. Wówczas strona nie jest aktualizowana i zabezpieczana przed atakami. Dlatego też rekomenduje usługę stałej administracji strony www - wówczas strona jest na bieżąco aktualizowana i zabezpieczana przed nowymi zagrożeniami. ',
    },
    {
      id: 3,
      title: 'Czy przywrócenie kopii zapasowej pomoże?',
      content:
        'Istnieje taka szansa. Jeśli jednak wirus był na stronie już dłuższy czas, to może się okazać, że kopie zapasowe również są zainfekowane. Wtedy konieczne jest ręczne usunięcie wirusa. Warto też pamiętać, że niektóre wirusy mogą być zainfekowane również na serwerze, wtedy konieczne jest przeskanowanie serwera i usunięcie wirusa z niego.',
    },
    {
      id: 4,
      title:
        'Czy otrzymam gwarancję, że strona nie zostanie zainfekowana ponownie',
      content:
        'W ramach usługi usuwam wirusy oraz zabepieczam stronę przed ponownym zainfekowaniem co znacznie zmniejszy ryzyko ponownej infekcji. Nie mniej każdego dnia odkrywane są nowe zagrożenia i luki bezpieczeństwa dlatego rekomenduje usługę stałej administracji strony www - wówczas strona jest na bieżąco aktualizowana i zabezpieczana przed nowymi zagrożeniami.',
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
