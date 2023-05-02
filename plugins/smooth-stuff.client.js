// smooth-stuff = lenis + gsap + scrolltrigger ect..

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);
  nuxtApp.gsap = gsap;
  nuxtApp.ScrollTrigger = ScrollTrigger;

  const lenis = new Lenis();
  nuxtApp.lenis = lenis;

  nuxtApp.hook('app:beforeMount', () => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  nuxtApp.hook('page:finish', () => {
    lenis.scrollTo(0);
  });
});
