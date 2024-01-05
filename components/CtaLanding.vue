<template>
  <div id="cta" class="cta--wrapper bg-dark-5 mt-0 font-Sora">
    <div class="cta--inner">
      <div class="cta--header">
        <div class="xl:pr-5 max-lg:mx-auto mb-6">
          <img src="~/assets/uploads/jarek-avatar.png" alt="" />
        </div>
        <div
          class="pl-5 flex flex-col items-center justify-center lg:justify-start lg:items-start"
        >
          <div class="accent-label">Potrzebujesz pomocy?</div>
          <div>
            <h4 class="text--reveal text-center lg:text-left">
              Chciałbyś uzyskać więcej informacji na temat moich usług?.
              <span>
                Porozmawiajmy!
                <!-- <img src="~/assets/uploads/smush.svg" alt="" /> -->
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="cta--middle">
        <div>
          <a class="link-with-undeline" href="tel:+48 663 568 828">
            +48 663 568 828</a
          >
        </div>
        <div>
          <a class="link-with-undeline" href="mailto:info@j-filipiak.pl"
            >info@j-filipiak.pl</a
          >
        </div>
        <div class="hidden">
          <a
            class="link-with-undeline"
            href="https://calendly.com/jaroslaw-filipiak/30minmeeting"
            >Umów spotkanie online</a
          >
        </div>
      </div>
      <div class="cta--footer">
        <p>
          Porozmawiamy o Twoim projekcie — w ciągu 24 godzin możesz liczyć na
          pierwszy kontakt z mojej strony.
        </p>
        <p>Odpowiem na wszystkie Twoje pytania — wyczerpująco i rzeczowo.</p>
        <p>
          Pamiętaj, że moja pełna oferta nie ogarnicza się tylko do budżetowych
          stron www.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .cta {
    &--wrapper {
      // background-image: url('@/assets/uploads/cta-bg.jpg');
      @apply bg-cover bg-no-repeat min-h-screen flex items-center bg-fixed mt-20 w-full;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8 mt-10 xl:mt-20 pb-10 xl:pb-20;
    }

    &--header {
      @apply flex flex-col items-center  lg:flex-row justify-center xl:pb-8 xl:mb-5;
      h4 {
        @apply text-4xl lg:text-6xl mb-10 mt-5 max-w-4xl text-white;

        span {
          @apply relative inline-block;
        }

        img {
          @apply relative hidden lg:block -left-20 lg:left-52 top-3;
        }
      }
    }

    &--middle {
      @apply flex flex-col lg:flex-row items-center justify-center pt-8 pb-8 lg:pt-20 lg:pb-20 lg:pl-8 lg:pr-8  gap-4 lg:gap-12 text-white;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      div {
        @apply flex items-center;
      }

      a {
        @apply text-2xl pl-3;
      }
    }

    &--footer {
      @apply flex flex-col lg:flex-row items-start justify-between gap-3 p-8;

      p {
        @apply w-full lg:w-3/12 lg:text-xl text-white;
      }
    }
  }

  .accent-label {
    @apply p-3 pl-10 pr-10 text-white bg-accent font-bold font-Sora inline-block rounded-full;
  }
</style>
