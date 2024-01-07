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
        <article class="flex flex-col gap-6" v-for="item in posts">
          <!-- <pre class="text-dark-3">
            <code> 
              {{ item }}
            </code>
          </pre> -->
          <img src="~/assets/uploads/administracja-www.jpg" alt="" />
          <header>
            <p class="text-sm">
              {{ formattedData(item.date) }}
            </p>
            <h3 class="text-xl lg:text-3xl">
              {{ item.title?.rendered }}
            </h3>
            <h4 class="text-xl lg:text-2xl pb-5">
              {{ item.acf?.subtitle }}
            </h4>
            <p v-html="item.excerpt?.rendered"></p>
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
                :to="`/blog/${item.slug}`"
                >Czytaj dalej
              </NuxtLink>
            </button>
          </header>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps(['posts']);

  const formattedData = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pl-PL', options);
  };
</script>

<style lang="scss" scoped>
  article {
    @apply w-full border border-dark-3 p-8;
  }
  h3 {
    @apply max-w-4xl;
  }
</style>
