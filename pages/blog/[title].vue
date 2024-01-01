<template>
  <div class="page-content smooth-scroll pb-0" ref="main">
    <SingleHero />
    <div class="bg-[#fff] w-full pt-20 lg:pt-24 pb-20 lg:pb-24">
      <main class="w-full lg:w-11/12 mx-auto pl-8 pr-8">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quibusdam incidunt, dolor qui magnam cupiditate dolore
          porro ipsa molestias minus accusantium consectetur beatae voluptatibus
          mollitia expedita non. Porro velit hic magni!
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          soluta excepturi, odit ex, fuga quaerat dolores modi repellat, fugit
          provident iusto? Est accusantium temporibus iste quos iusto, eos
          aliquam veniam porro nam omnis laudantium hic vero, deserunt nihil.
          Eligendi, ad suscipit. Nesciunt odit suscipit iure voluptatem incidunt
          officiis neque non dignissimos ullam. Corporis, architecto reiciendis
          fugiat sint sapiente amet ipsa doloribus culpa, animi nostrum eius
          voluptates aliquid perferendis adipisci at aliquam commodi deserunt
          officia eaque maiores, itaque eveniet fuga. Eveniet ipsa quam
          praesentium dignissimos voluptatum harum neque odio unde reiciendis
          atque mollitia rem quas sint labore sequi accusantium corporis qui
          alias modi, libero distinctio perspiciatis numquam. Aut eaque
          perferendis dicta cumque? Commodi amet sapiente nihil dicta quisquam
          dignissimos velit? Libero magnam aliquid nesciunt dignissimos ullam
          non quos, placeat error maxime facilis natus, commodi tempore
          distinctio harum eligendi minima minus dolor laboriosam nostrum
          dolorum? Aspernatur in magnam eos, quod rerum, dolorum suscipit vitae
          nam distinctio veritatis nobis deleniti voluptatem ut aliquam odio
          inventore laboriosam natus! Sint aspernatur iusto quae repellendus ad
          a magnam optio quod, consectetur vero officia voluptate, saepe
          temporibus maiores quaerat. Sunt totam placeat sit error, ad officiis
          ducimus deleniti ex eveniet voluptate tempora saepe, doloremque vero
          vitae eligendi expedita atque dicta dolorem officia corrupti molestias
          velit nemo natus aperiam? Nostrum dolore, magnam ad maiores vero
          eveniet aut dolores repudiandae? Veniam similique minima reiciendis,
          enim quis amet repudiandae pariatur, voluptatibus molestias commodi
          quae dolorum. Vitae officia aliquam provident placeat minus
          consectetur odit aspernatur qui animi quisquam itaque repellendus eos
          nesciunt id, velit non, corrupti libero unde fuga impedit totam
          tenetur odio sint cum! Amet quis veniam beatae dignissimos quasi sed
          officiis optio! Ullam natus repellat, minima maxime, vel tempore
          quaerat veniam quo totam porro assumenda nam incidunt atque
          consectetur illo saepe explicabo! Nihil odio laudantium illum dolore
          autem accusantium, pariatur velit modi, odit ab delectus deleniti
          quaerat aut vitae debitis fugit voluptatum, ex deserunt. Earum
          incidunt consequuntur corporis reprehenderit cum alias quo ipsum
          recusandae possimus repudiandae voluptas, ipsa maxime a autem quaerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          praesentium hic non eum alias? Quibusdam, nostrum omnis facere tempore
          fugit, ducimus nisi recusandae cum similique ex dolorum est quaerat
          illo! Totam, ut deleniti.
        </p>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          quaerat modi?
        </h4>
      </main>
    </div>
    <RecentsPosts />
    <Cta />
  </div>
</template>

<script setup>
  useHead({
    title:
      'Blog o grafice komputerowej, designie, tworzeniu stron internetowych a także programowaniu.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'Blog o grafice komputerowej, designie, tworzeniu stron internetowych a także programowaniu.',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Znajdziesz tutaj zarówno poradniki dot.projektowania stron www, projektownia aplikacji mobilnych a także dużo informacji ze świata WordPressa i nie tylko.',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content:
          'Blog o grafice komputerowej, designie, tworzeniu stron internetowych a także programowaniu.',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Znajdziesz tutaj zarówno poradniki dot.projektowania stron www, projektownia aplikacji mobilnych a także dużo informacji ze świata WordPressa i nie tylko.',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-about',
    },
  });

  const route = useRoute();
</script>

<style lang="scss" scoped>
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-dark-3;

    @apply pb-10;
  }

  p {
    @apply text-base;
  }

  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6 {
    @apply text-lg;
  }
</style>
