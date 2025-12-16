const spotlightItem = {
  0: {
    title: "크리에이터 이코노미 대격변: 니치 마켓의 선봉에서 미디어 생태계의 중심으로",
    author: { name: "최세정", affiliation: "고려대학교 미디어대학 교수" },
  },
  1: {
    title: "‘팬심’이 곧 경쟁력...크리에이터 콘텐츠 생태계 이끄는 ‘팬덤 이코노미’",
    author: { name: "이은주", affiliation: "《서울신문》 기자" },
  },
  2: {
    title: "크리에이터 이코노미와 광고전략: 연결을 넘어 관계로, 관계를 넘어 시장으로",
    author: { name: "권예지", affiliation: "한국방송광고진흥공사 미디어광고연구소 선임연구위원" },
  },
};

const peopleItem = {
  0: {
    title: "유튜브의 바다에서 디지털 스튜디오의 생존 전략을 답하다",
    author: { name: "백승엽", affiliation: "스튜디오 수제 이사•PD" },
  },
  1: {
    title: "콘텐츠의 확장성, 세심한 밑작업이 만든다",
    author: { name: "박수진", affiliation: "CJ ENM PD" },
  },
};

const globalItem = {
  0: {
    title: "중국 마이크로드라마 산업의 성장과 K-콘텐츠의 새로운 기회",
    author: { name: "오창학", affiliation: "광운대학교 미디어커뮤니케이션학부 부교수" },
  },
  1: {
    title: "인도로 가는 K-방송영상콘텐츠 산업: 드라마를 중심으로",
    author: { name: "김정곤", affiliation: "대외경제정책연구원 연구위원" },
  },
  2: {
    title: "메가 IP로 성장한 키즈콘텐츠, 문화의 새로운 중심축으로 떠오르다",
    author: { name: "유진희", affiliation: "중앙대학교 첨단영상대학원 겸임교수" },
  },
};

const trendItem = {
  0: {
    title: "국내 OTT, 로컬을 넘어 글로벌로 간다: 티빙(TVING) 글로벌 진출의 의의와 과제",
    author: { name: "전은선", affiliation: "CJ ENM 전략지원팀" },
  },
  1: {
    title: "K-팝, 장르에서 콘텐츠로",
    author: { name: "이규탁", affiliation: "한국조지메이슨대학교 국제학과 교수" },
  },
  2: {
    title: "화면 밖으로 나온 방송영상콘텐츠, 체험으로 확장하다.",
    author: { name: "박꽃", affiliation: "이투데이 문화전문기자" },
  },
  3: {
    title: "AI가 이끄는 넥스트 프로덕션 시대: 창작의 확장, 제작의 새로운 패러다임",
    author: { name: "손영준", affiliation: "오길비코리아 AE" },
  },
};

const dataPointItem = {
  0: {
    title: "2026년 글로벌 미디어 시장 전망",
  },
  1: {
    title: "글로벌 동향 분석: 국가별 인기 장르",
  },
  3: {
    title: "미국의 TV 시청 트렌드",
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