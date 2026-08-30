function wrapWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  const frag = document.createDocumentFragment();
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = word;
    frag.appendChild(span);
    if (i < words.length - 1) frag.appendChild(document.createTextNode(" "));
  });
  el.textContent = "";
  el.appendChild(frag);
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

  const stepPlans = steps.map((el) => ({
    el,
    hide: classNames(el.dataset.hide).map(byClass).filter(Boolean),
    show: classNames(el.dataset.show).map(byClass).filter(Boolean),
  }));

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
      if (step >= stepPlans.length) return;

      const plan = stepPlans[step];
      fadeInWords(plan.el);
      plan.hide.forEach(fadeOut);
      plan.show.forEach(fadeIn);
      if (step === stepPlans.length - 1) {
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
