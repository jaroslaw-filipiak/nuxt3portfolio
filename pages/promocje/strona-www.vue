<template>
  <div class="page-content mx-auto bg-[#fff]" ref="main">
    <div
      class="bg-light-1 font-Sora pt-32 pb-24 w-full min-h-screen strona-www-hero"
    >
      <div class="container">
        <h1
          class="text-dark-5 text-4xl text-center font-semibold leading-[80px]"
        >
          Strona internetowa<br />
          <span class="text-8xl font-extrabold">
            <span class="text-accent">Do końca grudnia</span><br />
            w cenie 1299 zł brutto</span
          >
        </h1>
        <ul
          class="font-Sora font-semibold text-lg text-dark-5 flex gap-10 items-center justify-center pt-10"
        >
          <li class="flex items-center justify-center gap-3">
            <IconCheck />
            <div>Domena .pl na rok gratis</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck />
            <div>Hosting na rok gratis</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck />
            <div>Certyfikat ssl w cenie</div>
          </li>
        </ul>
        <div class="w-full flex items-center justify-center pt-20">
          <NuxtLink
            @click="handleClick()"
            exact
            class="bg-accent text-white transiton-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:bg-dark-5 flex items-center gap-3"
            to="#cta"
          >
            <IconArrowNarrowRight />
            Zamów teraz!</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="bg-[#fff] font-Sora pt-40 pb-40 w-full">
      <div class="container">
        <div
          class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
        >
          Jasne warunki współpracy
        </div>
        <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
          Żadnych dodatkowych i <br />
          ukrytych kosztów
        </h3>
        <h4 class="text-dark-5 text-xl font-semibold max-w-2xl mt-6 mb-6">
          Profesjonalna strona internetowa oparta o najpopularniajszy na świecie
          sytem WordPress. 43% sieci działa na WordPressie.
        </h4>
        <ul
          class="font-Sora font-semibold text-dark-5 flex flex-col gap-4 items-start justify-start"
        >
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>Strona dostosowana do telefonów i tabletów</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>Optymalizacja czasu wczytywania</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>Profesjonalne wykonanie</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>
              Roczny hosting na naszych serwerach oraz domena .pl na rok gratis
            </div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>Prosty w obsłudze system zarządzania treścią na stronie</div>
          </li>
          <li class="flex items-center justify-center gap-3">
            <IconCheck class="text-[#48b02c]" />
            <div>
              Masa dodatków do wyboru min: formularze kontaktowe , galerie,
              mapka google, newsletter itp
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full flex items-center justify-center mb-20">
      <div class="w-9/12 bg-light-1 rounded-xl pt-10 pb-10 pl-20 pr-20">
        <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
          Roczny hosting na naszych <br />
          serwerach
        </h3>
        <h4 class="text-[#80818C] text-xl font-semibold max-w-2xl mt-6 mb-6">
          A także dodatkowo domena z końcówką .pl na 12 miesięcy gratis.
        </h4>
      </div>
    </div>

    <div class="mb-20 mt-20 w-full pl-20 mx-auto">
      <div class="flex items-stretch justify-center">
        <div class="w-5/12">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            Panel administracyjny
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Niesamowity panel <br />
            administratora
          </h3>
          <ul class="font-Sora mt-10">
            <li class="flex flex-col">
              <div class="flex gap-6">
                <div>
                  <div
                    class="w-9 h-9 rounded-full bg-light-1 flex items-center justify-center"
                  >
                    <IconInfinity class="text-[#64656c]" />
                  </div>
                </div>
                <div>
                  <h4 class="text-dark-5 text-2xl font-semibold mb-3">
                    Potężne funkcje i nieograniczone możliwości
                  </h4>
                  <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                    Dodanie funkcji sklepu internetowego ? a może chcesz
                    uruchomić liste mailingową czy stworzyć zaawansowany
                    formularz ? wybierz z pośród 55 000 wtyczek i dodatków
                  </h5>
                </div>
              </div>
            </li>
            <li class="flex flex-col mt-12">
              <div class="flex gap-6">
                <div>
                  <div
                    class="w-9 h-9 rounded-full bg-light-1 flex items-center justify-center"
                  >
                    <IconPencil class="text-[#64656c]" />
                  </div>
                </div>
                <div>
                  <h4 class="text-dark-5 text-2xl font-semibold mb-3">
                    Łatwa edycja stron oraz możliwości rozbudowy
                  </h4>
                  <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                    Dodanie nowej podstrony czy też wpisu na bloga jest
                    dziecinnie proste.Możesz edytować strony samodzielnie
                  </h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="w-7/12 bg-light-1 rounded-3xl flex items-center justify-center relative"
        >
          <img src="@/assets/uploads/admin_panel.png" alt="" />
        </div>
      </div>
    </div>

    <!-- rwd -->
    <div class="w-full mb-20 mt-20 max-w-[1920px] pr-20 mx-auto">
      <div class="flex items-stretch justify-center">
        <div
          class="w-6/12 bg-light-1 rounded-3xl flex items-center justify-center"
        >
          <img
            class="w-full h-auto"
            src="@/assets/uploads/oferta/rwd.jpg"
            alt=""
          />
        </div>
        <div class="w-6/12 pl-20">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            widoczność na każdym urządzeniu
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Strona przystosowana <br />
            do telefonów i tabletów
          </h3>
          <ul class="font-Sora mt-10">
            <li class="flex flex-col">
              <div class="flex gap-6">
                <div>
                  <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                    Zdecydowana większośc ruchu na stronach internetowych
                    pochodzi z urządzeń mobilnych. Zadbam o to aby strona
                    poprawnie wyświetlała się na telefonie komórkowym , tablecie
                    czy laptopie oraz dodatkowo zoptymalizujemy szybkość
                    wczytywania
                  </h5>
                </div>
              </div>
            </li>
          </ul>

          <ul
            class="font-Sora mt-10 font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start"
          >
            <li class="flex items-start justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>
                Strona będzie poprawnie wyświetlana<br />
                na telefonie komórkowym , tablecie czy laptopie
              </div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Tworzę zgodnie z zasadą "mobile first design"</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>
                Dbam o poprawne wyświetlanie na nowoczesnych przeglądarkach
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-full mb-20">
      <div class="container">
        <ul class="font-Sora mt-10 flex items-start justify-center">
          <li class="flex flex-col">
            <div class="flex gap-6">
              <div>
                <div
                  class="w-16 h-16 rounded-full bg-accent flex items-center justify-center"
                >
                  <IconMailFilled class="text-white" />
                </div>
              </div>
              <div>
                <h4 class="text-dark-5 text-2xl font-semibold mb-3">
                  Konta pocztowe dla Twojej firmy
                </h4>
                <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                  Otrzymasz dostęp do kont pocztowych w twojej domenie np:
                  biuro@nazwafirmy.pl
                </h5>
              </div>
            </div>
          </li>
          <li class="flex flex-col">
            <div class="flex gap-6">
              <div>
                <div
                  class="w-16 h-16 rounded-full bg-accent flex items-center justify-center"
                >
                  <IconFileCertificate class="text-white" />
                </div>
              </div>
              <div>
                <h4 class="text-dark-5 text-2xl font-semibold mb-3">RODO</h4>
                <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                  Strona będzie przystosowana również pod tym względem. Będzie
                  posiadała mechanizm zarządzania cookies
                </h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- pozycjonowanie -->
    <div class="w-full mb-20 mt-20 max-w-[1920px] pl-20 mx-auto">
      <div class="flex items-stretch justify-center">
        <div class="w-5/12">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            Google cie pokocha
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Pozycjonowanie
          </h3>
          <ul class="font-Sora mt-10">
            <li class="flex flex-col">
              <div class="flex gap-6">
                <div>
                  <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                    Tworzę strony z myślą o pozycjonowaniu dlatego stosujemy
                    szereg dobrych praktyk dzięki którym strona będzie
                    przystosowana pod SEO
                  </h5>
                </div>
              </div>
            </li>
          </ul>
          <h4 class="text-dark-5 text-2xl font-semibold mb-6 mt-6">
            Co dokładnie otrzymam ?
          </h4>
          <ul
            class="font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start"
          >
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>
                Prawidłowe oznaczenie tagów na stronie. min 1 tag h1 na każdej
                stronie
              </div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Konfiguracja pluginu pod SEO</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Ustawienie fraz kluczowych</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Odpowienie meta tagi</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Optymalizacja szybkości wczytywania strony</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Ustawienie mapy witryny</div>
            </li>
          </ul>
        </div>
        <div
          class="w-7/12 bg-light-1 rounded-3xl flex items-center justify-center"
        >
          <img
            class="w-full h-auto"
            src="@/assets/uploads/oferta/seo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- ssl -->
    <div class="w-full mb-20 mt-20 max-w-[1920px] pr-20 mx-auto">
      <div class="flex items-stretch justify-center">
        <div
          class="w-6/12 bg-light-1 rounded-3xl flex items-center justify-center"
        >
          <img
            class="w-full h-auto"
            src="@/assets/uploads/oferta/ssl.jpg"
            alt=""
          />
        </div>
        <div class="w-6/12 pl-20">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            szyfrowane połączenie
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Certyfikat SSL <br />
            czyli tzw: Kłódka<br />
            przy adresie strony
          </h3>
          <div>
            <div class="flex flex-col mt-10">
              <div class="flex items-center gap-6">
                <div>
                  <div
                    class="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
                  >
                    <IconAlertTriangleFilled class="text-white" />
                  </div>
                </div>
                <div>
                  <h5 class="text-dark-5 text-lg font-semibold max-w-xl">
                    Strony bez tego certyfikatu są oznaczane jako niebezpieczne!
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <ul class="font-Sora mt-10">
            <li class="flex flex-col">
              <div class="flex gap-6">
                <div>
                  <h5 class="text-[#80818C] text-base font-semibold max-w-xl">
                    Certyfikat SSL to bardzo ważny aspekt oferty zwłaszcza, że
                    taki certyfikat potrafi kosztować kilkaset złotych
                  </h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- optymalizacja szybkości -->
    <div class="w-full mb-20 mt-20 max-w-[1920px] pl-20 mx-auto">
      <div class="flex items-stretch justify-center">
        <div class="w-6/12">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            Szybkość decyduje o wrażeniach użytkowników
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Optymalizacja <br />szybkości wczytywania
          </h3>
          <h5 class="text-[#80818C] text-base font-semibold max-w-xl mt-10">
            Każda sekunda opóźnienia we wczytywaniu strony powoduje spadek
            konwersji o nawet 20 procent w handlu detalicznym. Dlatego zadbam o
            to aby strona ładowała się tak szybko jak to tylko możliwe.
          </h5>
          <h4 class="text-dark-5 text-2xl font-semibold mb-6 mt-6">
            Co dokładnie otrzymam ?
          </h4>
          <ul
            class="font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start"
          >
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Minifikacja zasobów css/js</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Optymalizacja zasobów graficznych</div>
            </li>
            <li class="flex items-center justify-center gap-3">
              <IconCheck class="text-[#48b02c]" />
              <div>Ustawienie systemu pamięci cache</div>
            </li>
          </ul>
        </div>
        <div
          class="w-6/12 bg-light-1 rounded-3xl flex items-center justify-center"
        >
          <img class=" " src="@/assets/uploads/oferta/fast.jpg" alt="" />
        </div>
      </div>
    </div>

    <!-- portfolio -->
    <!-- 23knots + siborsoft + https://j-filipiak.pl/clients/behira/  http://biallly.webd.pl/stagging/immedrive/-->
    <div class="bg-light-1 font-Sora pt-20 pb-20 w-full hidden">
      <div class="container">
        <div
          class="text-base font-Sora font-semibold text-[#80818C] bg-[#fff] rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
        >
          Jak może wyglądać Twoja nowa strona?
        </div>
        <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
          Przykładowe <br />
          realizacje
        </h3>
      </div>

      <div class="container columns-2 mt-10 gap-0">
        <div class="border bg-light-1">1</div>
        <div class="border bg-light-1">2</div>
        <div class="border bg-light-1">3</div>
        <div class="border bg-light-1">4</div>
      </div>
    </div>

    <!-- przebieg ralizacji -->
    <div class="w-full mb-20 mt-20 max-w-[1920px] pl-20 pr-20 mx-auto">
      <div class="flex items-stretch justify-start">
        <div class="w-6/12">
          <div
            class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
          >
            Transparentny przebieg realizacji
          </div>
          <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
            Zaledwie kilka kroków <br />dzieli cię od posiadania strony www
          </h3>
        </div>
      </div>
      <div class="flex mt-10">
        <ul class="flex items-start justify-start gap-10">
          <li class="w-3/12 flex flex-col items-start justify-start">
            <div class="flex items-center justify-start w-full gap-6 pr-6">
              <div
                class="w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-light-1 flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora"
              >
                1
              </div>
              <div class="border w-10/12"></div>
            </div>
            <div class="mt-3">
              <h5 class="text-dark-5 text-lg font-semibold max-w-xl">
                Zakup usługi
              </h5>
            </div>
            <div>
              <h5 class="text-[#80818C] text-base font-semibold max-w-xl mt-1">
                Jeżeli oferta jest dla Ciebie jasna, wybierz rodzaj płatności i
                dokonaj zakupu
              </h5>
            </div>
          </li>

          <li class="w-3/12 flex flex-col items-start justify-start">
            <div class="flex items-center justify-start w-full gap-6 pr-6">
              <div
                class="w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-light-1 flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora"
              >
                2
              </div>
              <div class="border w-10/12"></div>
            </div>
            <div class="mt-3">
              <h5 class="text-dark-5 text-lg font-semibold max-w-xl">
                Wypełnij brief
              </h5>
            </div>
            <div>
              <h5 class="text-[#80818C] text-base font-semibold max-w-xl mt-1">
                Z którego dowiem się czego dokładnie potrzebujesz. Otrzymasz go
                po zakupie
              </h5>
            </div>
          </li>

          <li class="w-3/12 flex flex-col items-start justify-start">
            <div class="flex items-center justify-start w-full gap-6 pr-6">
              <div
                class="w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-light-1 flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora"
              >
                3
              </div>
              <div class="border w-10/12"></div>
            </div>
            <div class="mt-3">
              <h5 class="text-dark-5 text-lg font-semibold max-w-xl">
                Projektowanie
              </h5>
            </div>
            <div>
              <h5 class="text-[#80818C] text-base font-semibold max-w-xl mt-1">
                Rozpoczynam proces tworzenia twojej strony. Wstępny projekt
                otrzymasz po kilku dniach. Zależy MI na tym aby stronę
                dostarczyć szybko i sprawnie
              </h5>
            </div>
          </li>

          <li class="w-3/12 flex flex-col items-start justify-start">
            <div class="flex items-center justify-start w-full gap-6 pr-6">
              <div
                class="w-[112px] h-[112px] min-w-[112px] min-h-[112px] rounded-full bg-light-1 flex items-center justify-center text-dark-5 text-4xl font-semibold font-Sora"
              >
                4
              </div>
            </div>
            <div class="mt-3">
              <h5 class="text-dark-5 text-lg font-semibold max-w-xl">
                Akceptacja projektu
              </h5>
            </div>
            <div>
              <h5 class="text-[#80818C] text-base font-semibold max-w-xl mt-1">
                W momencie gdy uznasz, że prace zostały zakończone czas na
                uruchomienie projektu. Gratulujemy! Twoja strona jest gotowa a
                ty możesz się nią chwalić
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- payment -->
    <div class="w-full pt-20 pb-20 max-w-[1920px] pl-20 pr-20 font-Sora">
      <div
        class="text-base font-Sora font-semibold text-[#80818C] bg-light-1 rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
      >
        Chce porzadną stronę www
      </div>
      <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
        Wybierz dogodną <br />
        formę płatności
      </h3>
      <ul
        class="font-Sora font-semibold text-[#80818C] flex flex-col gap-4 items-start justify-start mt-10"
      >
        <li class="flex items-center justify-center gap-3">
          <IconCheck class="text-[#48b02c]" />
          <div>Pełen koszt to 1299zł brutto wraz</div>
        </li>
        <li class="flex items-center justify-center gap-3">
          <IconCheck class="text-[#48b02c]" />
          <div>
            Hosting, domena, certyfikat SSL oraz skrzynki pocztowe na okres 12
            miesięcy w cenie usługi
          </div>
        </li>
        <li class="flex items-center justify-center gap-3">
          <IconCheck class="text-[#48b02c]" />
          <div>Faktura VAT 23%</div>
        </li>
      </ul>

      <div class="container flex items-start justify-center mt-14 gap-4">
        <div
          class="w-6/12 border bg-light-1 pt-10 pb-10 pl-10 pr-10 rounded-xl relative flex flex-col items-center"
        >
          <img
            class="max-w-[360px]"
            src="@/assets/uploads/oferta/formy-platnosci.png"
            alt=""
          />

          <NuxtLink
            @click="handleClick()"
            exact
            class="bg-accent text-white transiton-all rounded-full pt-3 pb-3 pl-7 pr-10 font-Sora font-semibold text-base hover:bg-dark-5 flex items-center gap-3"
            to="#cta"
          >
            <IconArrowNarrowRight />
            Przechodzę do zamówienia</NuxtLink
          >

          <!-- <div class="w-full border-t mt-6 text-center pt-4">
            <p class="text-dark-5 text-base text-center">Oferta ograniczona</p>
          </div> -->
        </div>
        <div class="w-6/12 border bg-light-1 p-10 rounded-xl relative"></div>
      </div>
    </div>

    <!-- faq -->
    <div class="bg-light-1 font-Sora pt-20 pb-20 w-full">
      <div class="container">
        <div
          class="text-base font-Sora font-semibold text-[#80818C] bg-[#fff] rounded-full pl-8 pr-8 inline-flex pt-3 pb-3 mb-6"
        >
          sekcja FAQ
        </div>
        <h3 class="text-7xl leading-[100px] text-dark-5 font-semibold">
          Najczęściej zadawane <br />
          pytania
        </h3>
      </div>

      <div class="container">
        <div class="budget-websites-faq--items">
          <faqItem
            color="dark"
            :title="item.title"
            :content="item.content"
            :id="item.id"
            v-for="item in faqs"
            v-bind:key="item.id"
          />
        </div>
        <div class="budget-websites-faq--footer text-dark-5 font-Sora">
          <div
            class="flex flex-col lg:flex-row items-center justify-start mt-10 lg:mt-6"
          >
            <div class="flex flex-col w-full lg:w-6/12">
              <p class="lg:pr-20 text-5xl lg:text-3xl">
                Nie znalazłeś/aś odpowiedzi na pytanie ?
              </p>
              <p class="text-xl mt-6 lg:mt-0">
                <strong>skontaktuj się ze mną</strong> <br class="lg:hidden" />a
                chętnie udziele więcej informacji
              </p>
            </div>
            <div
              class="flex flex-col lg:flex-row mt-6 lg:mt-0 w-full lg:w-6/12 gap-2 lg:gap-0"
            >
              <div class="flex">
                <a
                  href="tel:663568828"
                  class="max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block relative underline-after text-dark-3"
                  >+48 663 568 828</a
                >
                <IconArrowNarrowRight class="text-dark-5 mr-3 ml-3" />
              </div>
              <div class="flex">
                <a
                  href="mailto:info@j-filipiak.pl"
                  class="max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block underline-after text-dark-3 relative"
                  >info@j-filipiak.pl</a
                >
                <IconArrowNarrowRight class="text-dark-5 mr-3 ml-3" />
              </div>
              <div class="flex">
                <a
                  target="_blank"
                  href="https://calendly.com/jaroslaw-filipiak/30minmeeting"
                  class="max-lg:text-2xl link-with-undeline link-with-undeline__dark md:ml-0 inline-block underline-after text-dark-3 relative"
                  >porozmawiajmy via online</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CtaLanding />

    <!--  -->
  </div>
</template>

<script setup>
  import {
    IconCheck,
    IconArrowNarrowRight,
    IconInfinity,
    IconPencil,
    IconMailFilled,
    IconFileCertificate,
    IconAlertTriangleFilled,
  } from '@tabler/icons-vue';

  definePageMeta({
    layout: 'landing',
  });
  useHead({
    title: 'Strona internetowa w niasamowitej cenie promocyjnej',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Strona internetowa w niasamowitej cenie promocyjnej',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne sgtrony zoptymalizowane pod Google. Optymalizacja UX',
      },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Strona internetowa w niasamowitej cenie promocyjnej',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX.',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og.jpg',
      },
    ],
    bodyAttrs: {
      class: 'page-profesjonalne-strony-www',
    },
  });

  const faqs = [
    {
      id: 1,
      title: 'Jakie czekają mnie koszty po roku?',
      content:
        'W pierwszym roku zapewniam własne zasoby serwerowe oraz wykupuje na własny koszt domenę. Koszty przedłużenia domeny i hostingu to zazwyczaj 250zł brutto',
    },
    {
      id: 2,
      title: 'A jeżeli mam swoją domenę / hosting ?',
      content:
        'Z przyjemnością przeniosę domenę oraz hosting na Państwa serwery. W ramach usługi zainstaluje oraz skonfiguruje stronę na Państwa serwerze',
    },
    {
      id: 3,
      title: 'Ile poprawek mogę zgłosić w trakcie prac nad stroną?',
      content:
        'Nie stosuje limitów poprawek. W ramach usługi wykonuje wszystkie poprawki do momentu akceptacji projektu przez klienta.',
    },
    {
      id: 4,
      title: 'Czy mój projekt będzie indywidualny?',
      content:
        'Tak oczywiście. Każdy projekt jest tworzony od podstaw na podstawie briefu od klienta. Layout strony oraz poszczególne sekcje są tworzone w oparciu o przesłane materiały dzięki czemu strona jest w pełni spersonalizowana',
    },
    {
      id: 5,
      title: 'Czy mogę edytować swoją stronę www?',
      content:
        'Tak, wraz ze stroną otrzymasz dostęp do panelu administracyjnego, z poziomu którego będzie można w pełni edytować stronę, jej treśći i grafikę a także dodawać nowe podstrony oraz o wiele więcej.',
    },

    {
      id: 6,
      title: 'Czy strony są dopasowane do urządzeń mobilnych?',
      content:
        'Tak, wszystkie strony są w pełni responsywne i dopasowane do urządzeń mobilnych. Oznacza to, że poprawnie wyświetlają się nie tylko na laptopie i komputerze ale i na telefonie komórkowym oraz tabletach',
    },
    {
      id: 7,
      title: 'Czy strony są zoptymalizowane pod kątem SEO?',
      content:
        'Tak, wszystkie strony są zoptymalizowane pod kątem SEO. Każda strona otrzymuje ode mnie wyprawkę w postaci rozwiązań ułatwiających przyszłe pozycjonowanie strony www czyli: prawidłowe oznaczenie tagów na stronie (min. kluczowy tag h1 na każdej podstronie), przygotowanie sitemap.xml oraz robots.txt, skonfigurowanie wtyczki do SEO. Jeżeli jest taka potrzeba to mogę również skonfigurować Google Analytics oraz Google Search Console i poprosić o szybszą indeksację strony www.',
    },
    {
      id: 9,
      title: 'Czy strony mogą mieć wiele języków?',
      content:
        'Tak można dodać obsługę wielu języków samodzielnie za pomocą wtyczki lub zlecić mi to zadanie. W przypadku zlecenia mi tego zadania, proszę o kontakt w celu dodatkowej wyceny.',
    },
    {
      id: 10,
      title: 'Co muszę dostarczyć przed rozpoczęciem współpracy?',
      content:
        'Po zakupie dostarcze specjalny formularz który pozwoli poznać Państwa wymagania, preferowaną kolorystykę oraz kilka innych aspektów. Poproszę również o dostarczenie tekstów , informacji kontaktowych oraz grafik, które powinny zostać użyte na stronie. Dostarczanie grafk nie jest obowiązkowe, w przypadku ich braku wykorzystam grafiki ze stocków.',
    },
  ];
</script>

<style lang="scss" scoped>
  .faq--item {
    @apply text-dark-5 font-Sora font-semibold;
  }

  .strona-www-hero {
    background-image: url('@/assets/uploads/oferta/hero.jpg');
    @apply bg-cover bg-bottom bg-no-repeat;
  }
</style>
