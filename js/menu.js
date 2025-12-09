const spotlightItem = {
  0: {
    title: "K-방송영상콘텐츠의 새로운 시대를 열다: ‘성장통’을 넘어서 ‘콘텐츠와 플랫폼이 상생하는 미디어 생태계’로",
    author: { name: "강재원, 박성호", affiliation: "동국대학교 미디어커뮤니케이션학과 교수, MBC플러스 방송본부 부국장" },
  },
  1: {
    title: "생존 전략인가 전략적 동맹인가, 국제 공동제작 2.0",
    author: { name: "방연주", affiliation: "대중문화평론가" },
  },
  2: {
    title: "국제 공동제작 인센티브와 K-콘텐츠의 미래",
    author: { name: "박세진", affiliation: "한양대학교 미디어학과 부교수" },
  },
    3: {
    title: "K-콘텐츠, 플랫폼을 바꾸면 시장이 열린다: FAST · OTT의 새로운 기회",
    author: { name: "김종원", affiliation: "제레미레터 대표" },
  },
};

const globalItem = {
  0: {
    title: "콘텐츠로 글로벌 일류(日流) 꿈꾸는 일본, 새로운 ‘쿨 재팬’ 전략",
    author: { name: "김영덕", affiliation: "前 인천문화재단 대표" },
  },
  1: {
    title: "영상콘텐츠의 글로벌 유통 시대, 더빙과 타이틀 각색을 통한 현지화 전략",
    author: { name: "한영주", affiliation: "성균관대학교 메타사회연구소 선임연구원" },
  },
  2: {
    title: "K-콘텐츠, 아시아를 넘어 중동으로",
    author: { name: "김수완", affiliation: "한국외국어대학교 융합인재대학 중동이슬람 전략모듈 교수" },
  },
};

const peopleItem = {
  0: {
    title: "국제 공동제작, 한국 콘텐츠의 가치를 한 단계 올려주다",
    author: { name: "백헌석", affiliation: "이엘TV·스튜디오잔치 대표" },
  },
  1: {
    title: "서로 다른 문화의 차이를 콘텐츠로 녹여내다",
    author: { name: "김인식", affiliation: "스튜디오모닥 PD" },
  },
};

const trendItem = {
  0: {
    title: "생성형 AI 시대, 창작의 경계를 묻다: 「생성형 AI 활용 저작물의 저작권 등록 안내서」 내용과 의미",
    author: { name: "김현숙", affiliation: "디지털지식재산연구소 소장" },
  },
  1: {
    title: "OTT 예능, 드라마 넘어 새 판 짠다",
    author: { name: "권혜미", affiliation: "전자신문 기자" },
  },
  2: {
    title: "K-콘텐츠 축제의 장, ‘2025 국제방송영상마켓(BCWW)’를 다녀오다!",
  },
};

const dataPointItem = {
  0: {
    title: "글로벌 OTT 플랫폼의 2024 애뉴얼 리포트 분석",
  },
  1: {
    title: "글로벌 동향 분석: 국가별 로컬 TV 프로그램의 넷플릭스 순위",
  },
  3: {
    title: "국내 방송콘텐츠 글로벌 유통 현황",
  },
};

// 따옴표/인용부호 감싸기
function highlightQuotes(text) {
  const QUOTE_REGEX = /["'「」『』\u2018\u2019\u201C\u201D]/g;
  return text.replace(QUOTE_REGEX, (m) => `<span class="bodyQuotes">${m}</span>`);
}

// 섹션별 정보 통합
const contentMap = [
  { label: "스포트라이트", path: "spotlight", items: spotlightItem },
  { label: "피플 인사이트", path: "people", items: peopleItem },
  { label: "글로벌 마켓 리포트", path: "global", items: globalItem },
  { label: "트렌드 하이라이트", path: "trend", items: trendItem },
  { label: "데이터 포인트", path: "data", items: dataPointItem },
];

// 메뉴 열기 및 렌더링
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const menu = document.getElementById("mobile-menu");
  const content = document.getElementById("menu-content");

  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
    renderMenu();
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  });

  function renderMenu() {
    content.innerHTML = "";

    contentMap.forEach(({ label, path, items }) => {
      const section = document.createElement("div");
      section.innerHTML = `
        <h2 class="section-title">${label}</h2>
        <ul class="section-list">
          ${Object.entries(items)
          .map(([key, item]) => {
            const author = item.author
              ? `<p class="author">${item.author.name} | ${item.author.affiliation}</p>`
              : "";
            return `
                <li class="section-item">
                  <a href="./${path}_${Number(key) + 1}.html" class="menu-link">
                    <p>${highlightQuotes(stripFootnotesAndTags(item.title))}</p>
                    ${author}
                  </a>
                </li>
              `;
          })
          .join("")}
        </ul>
      `;
      content.appendChild(section);
    });
  }
});