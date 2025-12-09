// Remove Footnotes and HTML Tags
function stripFootnotesAndTags(text) {
  return text
    .replace(/<^>+>/g, "") // HTML 태그 제거
    .replace(/[\d¹²³⁴⁵⁶⁷⁸⁹⁰]+[⁾)]/g, "") // 각주 숫자 제거
    .trim();
}

// Progress Bar
function updateProgressBar() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollableHeight = scrollHeight - clientHeight;
  const scrolled = (scrollTop / scrollableHeight) * 100;

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = `${scrolled}%`;
  }
}

window.addEventListener("scroll", updateProgressBar);

// anchorButton
function handleAnchorButtonVisibility() {
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const distanceToBottom = documentHeight - (scrollY + windowHeight);

  const anchorButton = document.getElementById("anchor-button");
  if (scrollY > 200 && distanceToBottom > 200) {
    anchorButton?.classList.add("show");
  } else {
    anchorButton?.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

window.addEventListener("scroll", handleAnchorButtonVisibility);