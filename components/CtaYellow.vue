<template>
  <div id="cta" class="cta__yellow--wrapper">
    <div class="cta__yellow--inner">
      <div class="cta__yellow--header">
        <div class="mx-auto flex flex-col items-center justify-start">
          <div class="dark-label">darmowa wycena</div>
          <div>
            <h4 class="text-center font-Atkinson">
              Skontaktuj się ze mną i uzyskaj
              <span>
                wycenę w <strong>24 godziny</strong>
                <img src="~/assets/uploads/smush-dark.svg" alt="" />
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="cta__yellow--middle">
        <div>
          <a
            class="link-with-undeline link-with-undeline__dark link-with-undeline__hover-dark"
            href="tel:+48 663 568 828"
          >
            +48 663 568 828</a
          >
        </div>
        <div>
          <a
            class="link-with-undeline link-with-undeline__dark link-with-undeline__hover-dark"
            href="mailto:info@j-filipiak.pl"
            >info@j-filipiak.pl</a
          >
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .cta__yellow {
    &--wrapper {
      @apply bg-cover bg-no-repeat min-w-full flex items-center bg-yellow;
      // background-color: #161513;
    }

    &--inner {
      @apply w-full lg:w-11/12 mx-auto pl-8 pr-8 mt-20 pb-20;
    }

    &--header {
      //   background-color: #161513;
      @apply flex justify-center pb-12;
      h4 {
        @apply text-4xl lg:text-7xl mb-10 mt-5 max-w-5xl text-dark-3;

        span {
          @apply relative inline-block;
        }

        img {
          @apply relative hidden lg:block -left-20 lg:left-72 top-6;
        }
      }
    }

    &--middle {
      @apply flex flex-col lg:flex-row items-center justify-center lg:pb-8 lg:pl-8 lg:pr-8  gap-4 lg:gap-12 text-dark-3;

      div {
        @apply flex items-center;
      }

      a {
        @apply text-2xl lg:pl-3;
      }
    }

    &--footer {
      @apply flex flex-row items-start justify-center relative -top-20;

      p {
        @apply w-full lg:w-3/12 lg:text-xl text-white;
      }
    }
  }

  .yellow-label {
    @apply p-3 pl-5 pr-5 text-dark-3 bg-yellow font-bold font-Atkinson inline-block;
  }
  .dark-label {
    @apply p-3 pl-5 pr-5 text-white bg-dark-4 font-bold font-Atkinson inline-block;
  }
</style>
