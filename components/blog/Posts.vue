<template>
  <div
    class="bg-[#fff] text-dark-3 w-full flex flex-col items-start justify-center pt-20 pb-20"
  >
    <div class="w-full lg:w-11/12 mx-auto pl-8 pr-8">
      <div class="section--title text-dark-3">
        <p class="text-dark-3 text-base">Blog</p>
        <h1>Ostatnie wpisy na blogu</h1>
        <img
          class="pt-3"
          src="~/assets/uploads/smush-dark.svg"
          role="presentation"
        />
      </div>
    </div>

    <div class="w-full lg:w-11/12 mx-auto pl-8 pr-8 mt-12">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <article class="flex flex-col gap-6" v-for="item in 6">
          <img src="~/assets/uploads/administracja-www.jpg" alt="" />
          <header>
            <p class="text-sm">16 czerwca 2024r.</p>
            <h3 class="text-xl lg:text-3xl pb-5">
              Jak sztuczna inteligencja rewolucjonizuje projektowanie graficzne:
              Przyszłość branży
            </h3>
            <p>
              W dzisiejszym artykule przyjrzymy się temu, jak sztuczna
              inteligencja (AI) zmienia krajobraz projektowania graficznego i
              wpływa na branżę. Rozwój AI przynosi za sobą nowe możliwości […]
            </p>
            <button class="flex items-center mt-6 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#191919"
              >
                <path
                  d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                />
              </svg>
              <NuxtLink
                class="link-with-undeline link-with-undeline__dark"
                to="/oferta/opieka-nad-stronami-internetowymi"
                >Czytaj dalej
              </NuxtLink>
            </button>
          </header>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  article {
    @apply w-full border border-dark-3 p-8;
  }
  h3 {
    @apply max-w-4xl;
  }
</style>
