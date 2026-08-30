function wrapWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = word;
    el.appendChild(span);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
}

function fadeInWords(el, stagger = 10) {
  el.classList.add("visible");
  const words = el.querySelectorAll(".word");
  requestAnimationFrame(() => {
    words.forEach((word, i) => {
      setTimeout(() => word.classList.add("show"), i * stagger);
    });
  });
}

function fadeIn(el) {
  el.classList.add("visible");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add("show");
    });
  });
}

function fadeOut(el) {
  el.classList.remove("show");
  el.classList.remove("visible");
}

function classNames(value) {
  return (value || "").split(/\s+/).filter(Boolean);
}

function byClass(name) {
  return document.querySelector("." + name);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const searchButton = document.querySelector(".search-button");
  const steps = Array.from(document.querySelectorAll(".text [data-step]"));

  steps.forEach(wrapWords);

  document
    .querySelectorAll("[data-hover-sub], [data-hover-image]")
    .forEach((el) => {
      const sub = el.dataset.hoverSub ? byClass(el.dataset.hoverSub) : null;
      const widthRef = el.dataset.hoverSubWidth
        ? byClass(el.dataset.hoverSubWidth)
        : null;
      const images = classNames(el.dataset.hoverImage).map(byClass);

      el.addEventListener("mouseenter", () => {
        if (sub) {
          sub.style.top = el.offsetTop + "px";
          if (widthRef) sub.style.width = widthRef.offsetWidth + "px";
          sub.classList.add("visible");
        }
        images.forEach((img) => img && img.classList.add("visible"));
      });

      el.addEventListener("mouseleave", () => {
        if (sub) sub.classList.remove("visible");
        images.forEach((img) => img && img.classList.remove("visible"));
      });
    });

  let step = 0;

  if (button) {
    button.addEventListener("click", () => {
      // 모든 단계가 끝나면 버튼은 "End"로 바뀌고 더는 아무 동작도 하지 않는다.
      // 다른 페이지는 검색을 통해서만 이동할 수 있다.
      if (step >= steps.length) return;

      const el = steps[step];
      fadeInWords(el);
      classNames(el.dataset.hide).forEach((c) => {
        const img = byClass(c);
        if (img) fadeOut(img);
      });
      classNames(el.dataset.show).forEach((c) => {
        const img = byClass(c);
        if (img) fadeIn(img);
      });
      if (step === steps.length - 1) {
        button.textContent = "End";
        button.classList.add("is-end");
      }
      step++;
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      window.location.href = searchButton.dataset.search || "../index.html";
    });
  }
});
