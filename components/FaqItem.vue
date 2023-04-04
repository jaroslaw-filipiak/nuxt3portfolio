<template>
  <div
    class="faq--item"
    :class="{
      collapsed: state.isExpanded,
      'faq--item__dark': color === 'dark',
    }"
  >
    <header @click="toggle">
      <div class="faq--title">{{ title }}</div>
      <div class="faq--btn">
        <!-- <img src="@/assets/uploads/arrow-down-circle 1.svg" alt="" /> -->
      </div>
    </header>

    <div class="faq--content">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  const state = reactive({ isExpanded: false });
  const props = defineProps(['color', 'title', 'content']);

  function toggle() {
    state.isExpanded = !state.isExpanded;
  }
</script>

<style lang="scss" scoped>
  .faq {
    &--content {
      max-height: 0px;
      @apply overflow-hidden;

      p {
        @apply pb-10;
      }
    }
    &--item {
      @apply text-3xl;
      border-bottom: 1px solid white;
      header {
        @apply flex items-center justify-between cursor-pointer h-28;
      }

      img {
        &::selection {
          outline: none;
          background-color: transparent;
        }
      }

      .faq--btn {
        transform: rotate(0deg);
      }

      &__dark {
        border-bottom: 1px solid;
        @apply border-dark-3;

        .faq--content {
        }
      }
    }
  }

  .collapsed {
    .faq--content {
      max-height: 800px;
    }
    .faq--btn {
      transform: rotate(180deg);
    }
  }
</style>
