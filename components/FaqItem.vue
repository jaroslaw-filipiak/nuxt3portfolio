<template>
  <div
    @click="toggle"
    class="faq--item selection:bg-transparent group"
    :id="id"
    :class="{
      collapsed: state.isExpanded,
      'faq--item__dark': color === 'dark',
    }"
  >
    <header>
      <div class="faq--title transition-all text-2xl lg:text-4xl">
        {{ title }}
      </div>
      <div class="faq--btn opacity-50 group-hover:opacity-100 hidden lg:block">
        <!-- <img src="@/assets/uploads/arrow-down-circle 1.svg" alt="" /> -->
        <svg
          class="w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
            data-name="8-Arrow Down"
          />
        </svg>
      </div>
    </header>

    <div class="faq--content text-xl lg:text-2xl">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  const state = reactive({ isExpanded: false });
  const props = defineProps(['color', 'title', 'content', 'id']);

  function toggle() {
    const item = document.getElementById(props.id);
    const content = item.querySelector('.faq--content');

    state.isExpanded = !state.isExpanded;
    if (state.isExpanded) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  }
</script>

<style lang="scss" scoped>
  .faq {
    &--content {
      max-height: 0px;
      @apply overflow-hidden transition-all;

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
        // transform: rotate(0deg);
        @apply transition-all scale-75 -rotate-[45deg];
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
      //TODO:  dynamic max height
      // max-height: 40px;
    }
    .faq--btn {
      @apply transition-all scale-100 opacity-100 -rotate-0;
      opacity: 100% !important;
    }
  }
</style>
