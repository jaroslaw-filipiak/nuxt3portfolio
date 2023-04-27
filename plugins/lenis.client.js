import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
