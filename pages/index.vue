<template>
  <div class="page-content">
    <Hero />
    <WhyFreelancer />
    <OfferDark />
    <Portfolio heading="Wybrane realizacje" hasImg />
    <CtaYellow />
  </div>
</template>

<script setup></script>

<style lang="scss">
  .page-content {
    @apply min-h-screen flex flex-col items-start text-white;
  }

  .header {
    @apply pl-8;
  }
  .pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
  }
</style>
