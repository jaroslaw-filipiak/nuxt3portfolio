<template>
  <div class="w-full mx-auto">
    <TopBarLanding />
    <div>
      <div class="content">
        <div class="hidden lg:flex"><FooterLanding /></div>
        <slot />
      </div>
      <Menu />
    </div>
    <div class="lg:hidden"><FooterLanding /></div>
  </div>
</template>

<script setup>
  import { useNavStore } from '~/stores/nav';
  import { watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const store = useNavStore();
  const route = useRoute();

  watch(route, () => {
    store.closeNav();
  });

  onMounted(() => {
    const phone = document.querySelector('.top-bar--phone');
    phone.classList.add('opacity-0');

    window.addEventListener('scroll', () => {
      let header = document.querySelector('.top-bar');

      header.classList.toggle('top-bar__sticky', window.scrollY > 0);

      if (window.scrollY > 0) {
        phone.classList.remove('opacity-0');
      } else {
        phone.classList.add('opacity-0');
      }
    });
  });

  useHead({
    script: [
      {
        src: '/hotjar.js',
        async: true,
      },
    ],
  });
</script>
