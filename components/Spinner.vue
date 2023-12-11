<template>
  <div class="spinner" :style="{ borderTopColor: ringColor }"></div>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    ringColor: {
      type: String,
      default: 'blue',
    },
  });
</script>

<style lang="scss" scoped>
  .spinner {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #eee;
    animation: spinner 0.8s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1turn);
    }
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
    }
  }
</style>
