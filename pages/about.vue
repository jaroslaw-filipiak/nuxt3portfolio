<template>
  <div class="page-content">
    <AboutHero />
    <AboutExp />
    <AboutTools />
    <AboutOffer />
    <CtaYellow />
  </div>
</template>

<script></script>

<style>
  .about--wrapper {
    @apply w-full lg:w-11/12 mx-auto pl-8 pr-8 pt-20 flex flex-col-reverse items-center justify-center lg:flex-row  lg:items-center lg:justify-between min-h-screen;
  }
  .about--left {
    @apply text-white pt-9 md:pr-7 md:pl-7 lg:w-1/2 xl:pr-1 2xl:pr-8 pb-10;
  }
  .about--right {
    @apply 2xl:w-5/12 2xl:flex 2xl:items-center 2xl:justify-center;
  }
</style>
