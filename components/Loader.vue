<template>
  <div class="loader"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .loader {
    display: block;
    z-index: 99;
    margin-left: auto;
    margin-right: auto;
    width: 32px;
    height: 32px;
    border: 3px solid #191919;
    border-radius: 50%;
    animation: spin 7s ease-in-out;
    animation-iteration-count: infinite;
    transition-duration: 0.1s;
  }

  .loader:hover {
    scale: 0.95;
    /*Loader on hover effect*/
  }

  .loader:active {
    scale: 2.5;
    /*Loader on click effect*/
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-bottom: solid 3px transparent;
      border-top: solid 3px transparent;
    }
    50% {
      transform: rotate(1800deg);
      border: 3px solid #191919;
      border-left: solid 3px transparent;
      border-right: solid 3px transparent;
    }
    100% {
      /*Reversed spinning*/
      transform: rotate(0deg);
      border-bottom: solid 3px transparent;
      border-top: solid 3px transparent;
    }
  }
</style>
