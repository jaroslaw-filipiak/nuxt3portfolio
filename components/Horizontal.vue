<template>
  <div class="firstContainer">
    <h1>Testing horizontal scrolling w/ three sections</h1>
    <h2>First Container</h2>
  </div>
  <div class="hcontainer">
    <div class="description panel blue">
      <div>
        SCROLL DOWN
        <div class="scroll-down"><div class="arrow"></div></div>
      </div>
    </div>

    <section class="panel red">ONE</section>
    <section class="panel orange">TWO</section>
    <section class="panel purple">THREE</section>
  </div>
  <div class="lastContainer">Last Container</div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.gsap;
  const ScrollTrigger = nuxtApp.ScrollTrigger;
  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {
      let sections = gsap.utils.toArray('.panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.hcontainer',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + document.querySelector('.hcontainer').offsetWidth,
        },
      });

      // context
    });
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style lang="scss" scoped>
  html {
    overflow-y: scroll;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }
  body {
    overflow-y: visible;
    position: relative;
    height: unset;
  }
  html,
  body {
    overflow-x: hidden;
    margin: 0;
  }

  .hcontainer {
    width: 400%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    border: 1px dashed black;
  }

  .firstContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: yellow;
  }

  .lastContainer {
    display: flex;
    height: 100vh;
    background: yellow;
  }
</style>
