<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .page-content {
    @apply lg:min-h-screen flex flex-col items-start text-white;
  }

  @media (min-width: 1024px) {
    .page-content {
      margin-bottom: 600px;
    }
  }
</style>
