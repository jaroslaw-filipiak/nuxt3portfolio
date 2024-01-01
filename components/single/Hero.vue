<template>
  <div
    class="w-full pt-20 pb-20 lg:pt-40 lg:pb-40 xl:pt-60 xl:pb-60 flex flex-col items-start justify-center"
  >
    <div
      class="w-full lg:w-11/12 flex flex-col items-start justify-between mx-auto pl-8 pr-8"
    >
      <div class="section--title text-dark-3">
        <p class="text-dark-3 text-base">
          {{ formattedData(post?.date) }}
        </p>
        <h1>
          {{ post?.title?.rendered }}
          <span class="lg:text-3xl font-normal">
            {{ post?.acf?.subtitle }}</span
          >
        </h1>

        <img
          class="pt-3"
          src="~/assets/uploads/smush-dark.svg"
          role="presentation"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, defineProps } from 'vue';

  onMounted(() => {});

  const props = defineProps(['post']);

  const formattedData = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pl-PL', options);
  };
</script>

<style lang="scss" scoped>
  h2 {
    span {
      @apply relative inline-block;
      top: 10px;
    }

    p {
      @apply absolute z-10 text-dark-3 text-3xl;
      left: 25px;
      top: 6px;
    }
  }
</style>
