document.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      sectionName: "스포트라이트",
      theme: "방송영상콘텐츠 창작 생태계 구조 변화를 조망하다",
      item: "크리에이터 이코노미 대격변:<br>니치 마켓의 선봉에서 미디어 생태계의 중심으로",
      img: "./img/manuscript1/banner.png",
      imgMobile: "./img/manuscript1/banner-m.png",
      bgPosition: "center center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "피플 인사이트",
      theme: "콘텐츠의 격전지, 새로운 플레이어를 만나다!",
      item: "스튜디오 수제 백승엽 이사•PD<br>CJ ENM 박수진 PD",
      img: "./img/manuscript4/banner.png",
      imgMobile: "./img/manuscript4/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "글로벌 마켓 리포트",
      theme: "",
      item: "중국 마이크로 드라마 산업의 성장과 K-콘텐츠의 새로운 기회",
      img: "./img/manuscript6/banner.png",
      imgMobile: "./img/manuscript6/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "트렌드 하이라이트",
      theme: "",
      item: "국내 OTT, 로컬을 넘어 글로벌로 간다:<br>티빙(TVING) 글로벌 진출의 의의와 과제",
      img: "./img/manuscript9/banner.png",
      imgMobile: "./img/manuscript9/banner-m.png",
      bgPosition: "center center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "데이터 포인트",
      theme: "",
      item: "2026년 글로벌 미디어 시장 전망",
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
    autoplay: { delay: 3000 },
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
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
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
