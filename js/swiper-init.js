document.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      sectionName: "스포트라이트",
      theme: "K-방송영상콘텐츠의 글로벌 경쟁력 강화",
      item: "K-방송영상콘텐츠의 새로운 시대를 열다:<br><span class='bodyQuotes'>‘</span>성장통<span class='bodyQuotes'>’</span>을 넘어서 <span class='bodyQuotes'>‘</span>콘텐츠와 플랫폼이 상생하는 미디어 생태계<span class='bodyQuotes'>’</span>로",
      img: "./img/manuscript1/banner.png",
      imgMobile: "./img/manuscript1/banner-m.png",
      bgPosition: "center center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "피플 인사이트",
      theme: "글로벌 프로젝트로 경쟁력 강화하는 제작사를 만나다!",
      item: "이엘TV·스튜디오잔치 백헌석 대표<br>스튜디오모닥 김인식 PD",
      img: "./img/manuscript5/banner.png",
      imgMobile: "./img/manuscript5/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "글로벌 마켓 리포트",
      theme: "",
      item: "콘텐츠로 글로벌 일류(日流) 꿈꾸는 일본,<br>새로운 <span class='bodyQuotes'>‘</span>쿨 재팬<span class='bodyQuotes'>’</span> 전략",
      img: "./img/manuscript7/banner.png",
      imgMobile: "./img/manuscript7/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "트렌드 하이라이트",
      theme: "",
      item: "생성형 AI 시대, 창작의 경계를 묻다:<br>「생성형 AI 활용 저작물의 저작권 등록 안내서」 내용과 의미",
      img: "./img/manuscript10/banner.png",
      imgMobile: "./img/manuscript10/banner-m.png",
      bgPosition: "center center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "데이터 포인트",
      theme: "",
      item: "글로벌 OTT 플랫폼의 2024 애뉴얼 리포트 분석",
      img: "./img/manuscript13/banner.png",
      imgMobile: "./img/manuscript13/banner-m.png",
      bgPosition: "center right",
      bgPositionMobile: "center right",
    },
  ];

  // === 메인 배너 슬라이드 렌더링 ===
  const swiperWrapper = document.getElementById("swiper-slides");
  contents.forEach((content) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
  <div class="banner">
    <div class="banner-bg pc-bg" 
         style="background-image: url('${content.img}'); background-position: ${
      content.bgPosition || "center center"
    };"></div>
    <div class="banner-bg mobile-bg" 
         style="background-image: url('${
           content.imgMobile || content.img
         }'); background-position: ${
      content.bgPositionMobile || content.bgPosition || "center center"
    };"></div>
    <div class="overlay"></div>
    <div class="content">
      <div class="theme-wrapper">
        <div class="label">${content.sectionName}</div>
        ${content.theme ? `<p class="theme">${content.theme}</p>` : ""}
      </div>
      <p class="item">${content.item}</p>
    </div>
  </div>
`;
    swiperWrapper.appendChild(slide);
  });

  new Swiper(".main-banner-swiper", {
    loop: true,
    // autoplay: { delay: 3000 },
    pagination: {
      el: ".main-banner-swiper .swiper-pagination",
      clickable: true,
    },
  });

  const swiperStates = {
    spotlight: null,
    global: null,
    people: null,
    trend: null,
    data: null,
  };

  // === Swiper 초기화/해제 함수 ===
  function toggleSwiper(key, selector, nextEl, prevEl) {
    const initialized = !!swiperStates[key];

    if (!initialized) {
      const slideCount = document.querySelectorAll(
        `${selector} .swiper-slide`
      ).length;

      swiperStates[key] = new Swiper(selector, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        slideToClickedSlide: false,
        grabCursor: true,
        loop: slideCount >= 3,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl,
          prevEl,
        },
        breakpoints: {
          1440: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
      });
    }
  }

  // === 전체 Swiper 초기화 실행 함수 ===
  function initAllSwipers() {
    toggleSwiper(
      "spotlight",
      ".spotlight-swiper",
      ".spotlight-button-next",
      ".spotlight-button-prev"
    );
    toggleSwiper(
      "global",
      ".global-swiper",
      ".global-button-next",
      ".global-button-prev"
    );
    toggleSwiper(
      "people",
      ".people-swiper",
      ".people-button-next",
      ".people-button-prev"
    );
    toggleSwiper(
      "trend",
      ".trend-swiper",
      ".trend-button-next",
      ".trend-button-prev"
    );
    toggleSwiper(
      "data",
      ".data-swiper",
      ".data-button-next",
      ".data-button-prev"
    );
  }

  // 최초 실행 및 리사이즈 대응
  initAllSwipers();
  window.addEventListener("resize", () => {
    setTimeout(initAllSwipers, 100);
  });
});
