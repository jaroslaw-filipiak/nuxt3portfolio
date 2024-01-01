<template>
  <div
    class="bg-light text-dark-3 w-full flex flex-col items-start justify-center pt-20 pb-20"
  >
    <div class="w-full lg:w-11/12 mx-auto pl-8 pr-8">
      <div class="section--title text-dark-3">
        <p class="text-dark-3 text-base">Zobacz również</p>
        <h1>Ostatnie artykuły</h1>
        <img
          class="pt-3"
          src="~/assets/uploads/smush-dark.svg"
          role="presentation"
        />
      </div>
    </div>

    <div class="w-full mx-auto pl-8 pr-8">
      <div class="flex w-full items-center justify-between mt-12">
        <button class="text-dark-3 flex items-center gap-3 recent-posts--prev">
          <p>Wstecz</p>
          <div>
            <svg
              width="85"
              height="25"
              viewBox="0 0 85 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1354_597)">
                <path
                  d="M61.5 10.8799C68.8333 10.8799 76.1667 10.9699 83.5 11.1499C83.8978 11.1499 84.2794 11.308 84.5607 11.5893C84.842 11.8706 85 12.2521 85 12.6499C85 13.0478 84.842 13.4293 84.5607 13.7106C84.2794 13.9919 83.8978 14.1499 83.5 14.1499C57.76 13.5199 31.67 13.9999 5.95 15.5699C5.55217 15.5938 5.16116 15.4587 4.86298 15.1942C4.56479 14.9298 4.38387 14.5578 4.36 14.1599C4.33613 13.7621 4.47128 13.3711 4.7357 13.0729C5.00013 12.7747 5.37217 12.5938 5.77 12.5699C24.22 11.4499 42.9 10.8799 61.5 10.8799Z"
                  fill="black"
                />
                <path
                  d="M18.4286 4.91998C18.7812 4.92039 19.1224 5.04502 19.3923 5.27197C19.6622 5.49893 19.8435 5.81371 19.9043 6.16104C19.9652 6.50836 19.9018 6.86603 19.7252 7.17124C19.5486 7.47644 19.2701 7.70967 18.9386 7.82998C14.2215 9.55502 9.60136 11.5346 5.09861 13.76C10.6244 16.0725 15.9926 18.7449 21.1686 21.76C21.3387 21.8598 21.4874 21.9921 21.6063 22.1494C21.7253 22.3067 21.812 22.4859 21.8617 22.6767C21.9114 22.8675 21.923 23.0662 21.8959 23.2615C21.8688 23.4569 21.8034 23.6449 21.7036 23.815C21.6038 23.985 21.4715 24.1338 21.3142 24.2527C21.1569 24.3716 20.9777 24.4584 20.7869 24.5081C20.5961 24.5578 20.3974 24.5694 20.202 24.5422C20.0067 24.5151 19.8187 24.4498 19.6486 24.35C13.6609 20.8331 7.40871 17.7872 0.948611 15.24C0.67944 15.1358 0.446047 14.9562 0.276424 14.7226C0.1068 14.4891 0.00815506 14.2116 -0.00767992 13.9234C-0.0235149 13.6352 0.0441345 13.3486 0.187152 13.0979C0.330169 12.8471 0.542481 12.643 0.798617 12.51C6.32924 9.61881 12.0451 7.09664 17.9086 4.95998C18.0783 4.91618 18.2543 4.90264 18.4286 4.91998Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1354_597">
                  <rect
                    width="85"
                    height="24.6"
                    fill="white"
                    transform="translate(85 24.6) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
        <button class="text-dark-3 flex items-center gap-3 recent-posts--next">
          <p>Dalej</p>
          <div>
            <svg
              width="85"
              height="25"
              viewBox="0 0 85 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1354_592)">
                <path
                  d="M23.5 13.72C16.1667 13.72 8.83333 13.63 1.5 13.45C1.10218 13.45 0.720644 13.292 0.43934 13.0107C0.158035 12.7294 0 12.3479 0 11.95C0 11.5522 0.158035 11.1707 0.43934 10.8894C0.720644 10.6081 1.10218 10.45 1.5 10.45C27.24 11.08 53.33 10.6 79.05 9.03004C79.4478 9.00617 79.8388 9.14132 80.137 9.40575C80.4352 9.67017 80.6161 10.0422 80.64 10.44C80.6639 10.8379 80.5287 11.2289 80.2643 11.5271C79.9999 11.8252 79.6278 12.0062 79.23 12.03C60.78 13.15 42.1 13.72 23.5 13.72Z"
                  fill="black"
                />
                <path
                  d="M66.5714 19.68C66.2188 19.6796 65.8776 19.555 65.6077 19.328C65.3378 19.101 65.1565 18.7863 65.0957 18.4389C65.0348 18.0916 65.0982 17.7339 65.2748 17.4287C65.4514 17.1235 65.7299 16.8903 66.0614 16.77C70.7785 15.045 75.3986 13.0654 79.9014 10.84C74.3756 8.52752 69.0074 5.85512 63.8314 2.84C63.6613 2.74019 63.5126 2.60787 63.3937 2.45058C63.2747 2.2933 63.188 2.11412 63.1383 1.9233C63.0886 1.73248 63.077 1.53374 63.1041 1.33843C63.1312 1.14312 63.1966 0.95506 63.2964 0.784998C63.3962 0.614937 63.5285 0.466196 63.6858 0.347273C63.8431 0.22835 64.0223 0.141574 64.2131 0.0918947C64.4039 0.0422154 64.6026 0.0306065 64.798 0.0577341C64.9933 0.0848617 65.1813 0.150194 65.3514 0.249999C71.3391 3.7669 77.5913 6.81275 84.0514 9.36C84.3206 9.46418 84.554 9.64382 84.7236 9.87735C84.8932 10.1109 84.9918 10.3884 85.0077 10.6766C85.0235 10.9648 84.9559 11.2514 84.8128 11.5021C84.6698 11.7528 84.4575 11.957 84.2014 12.09C78.6708 14.9812 72.9549 17.5033 67.0914 19.64C66.9217 19.6838 66.7457 19.6973 66.5714 19.68Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1354_592">
                  <rect width="85" height="24.6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </div>
      <div class="flex mt-6">
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperController,
            SwiperEffectCube,
            SwiperGrid,
            SwiperHashNavigation,
            SwiperHistory,
            SwiperNavigation,
            SwiperPagination,
            SwiperScrollbar,
          ]"
          :navigation="{
            nextEl: '.recent-posts--next',
            prevEl: '.recent-posts--prev',
          }"
          :slides-per-view="3"
          :loop="true"
          :autoplay="{
            delay: 9400,
            disableOnInteraction: true,
          }"
        >
          <SwiperSlide>
            <article class="flex flex-col gap-6">
              <img src="~/assets/uploads/administracja-www.jpg" alt="" />
              <header>
                <p class="text-sm">16 czerwca 2024r.</p>
                <h3 class="text-xl lg:text-3xl pb-5">
                  Jak sztuczna inteligencja rewolucjonizuje projektowanie
                  graficzne: Przyszłość branży
                </h3>
                <p>
                  W dzisiejszym artykule przyjrzymy się temu, jak sztuczna
                  inteligencja (AI) zmienia krajobraz projektowania graficznego
                  i wpływa na branżę. Rozwój AI przynosi za sobą nowe możliwości
                  […]
                </p>
                <button class="flex items-center mt-6 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#191919"
                  >
                    <path
                      d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                    />
                  </svg>
                  <NuxtLink
                    class="link-with-undeline link-with-undeline__dark"
                    to="/oferta/opieka-nad-stronami-internetowymi"
                    >Czytaj dalej
                  </NuxtLink>
                </button>
              </header>
            </article>
          </SwiperSlide>
          <SwiperSlide v-for="item in 33">
            <article class="flex flex-col gap-6">
              <img src="~/assets/uploads/administracja-www.jpg" alt="" />
              <header>
                <p class="text-sm">16 czerwca 2024r.</p>
                <h3 class="text-xl lg:text-3xl pb-5">
                  Jak sztuczna inteligencja rewolucjonizuje projektowanie
                  graficzne: Przyszłość branży
                </h3>
                <p>
                  W dzisiejszym artykule przyjrzymy się temu, jak sztuczna
                  inteligencja (AI) zmienia krajobraz projektowania graficznego
                  i wpływa na branżę. Rozwój AI przynosi za sobą nowe możliwości
                  […]
                </p>
                <button class="flex items-center mt-6 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#191919"
                  >
                    <path
                      d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
                    />
                  </svg>
                  <NuxtLink
                    class="link-with-undeline link-with-undeline__dark"
                    to="/oferta/opieka-nad-stronami-internetowymi"
                    >Czytaj dalej
                  </NuxtLink>
                </button>
              </header>
            </article>
          </SwiperSlide>

          <SwiperControls />
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'swiper/css';
  import 'swiper/css/pagination';
</script>

<style lang="scss" scoped>
  article {
    @apply w-full border border-dark-3 p-8;
  }
  h3 {
    @apply max-w-4xl;
  }
</style>
