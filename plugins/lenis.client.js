import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.defaults({
      pinReparent: true,
    });

    console.log('app before mount');
    nuxtApp.gsap = gsap;
    nuxtApp.ScrollTrigger = ScrollTrigger;
  });

  nuxtApp.hook('page:start', () => {
    console.log('page start');
  });
});
