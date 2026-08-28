const SITE_IMAGES = [
  "source/image/1/아이즈와이드셧_사숭.jpg",
  "source/image/1/아와셧_사숭이들ㄹㄹ.png",
  "source/image/1/아와셧_사숭셋.png",
  "source/image/1/영화BTs.png",
  "source/image/1/크루즈오빠.jpg",
  "source/image/1/스페이스오디세이.jpg",
  "source/image/1/ees_집단오컬트.png",
  "source/image/1/c02MbWEBL7iEkRemwYGAYCUFw8odq8_large.jpg",
  "source/image/1/images-22.jpeg",
  "source/image/1/3aNwDnXuCAcGX16xBtJA7sjXyDvft4LA3UYy3l1DWIzGZ5A5o-q6X0aSmDk_0lJ_ZVrsJucM7sphX1WG61Ddag.webp",
  "source/image/2/칸예폭로.jpg",
  "source/image/2/니키언니.png",
  "source/image/2/농담쟁이노아.png",
  "source/image/2/스크린샷 2026-08-21 오후 5.23.28.png",
  "source/image/3/메간결혼.jpg",
];

function shuffled(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startFlicker(group) {
  const imgs = Array.from(group.children);
  if (!imgs.length) return;

  let timer = null;

  function tick() {
    const next = imgs[Math.floor(Math.random() * imgs.length)];
    imgs.forEach((img) => {
      img.style.opacity = img === next ? "1" : "0";
    });
    timer = setTimeout(tick, 90 + Math.random() * 220);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearTimeout(timer);
      timer = null;
    } else if (!timer) {
      tick();
    }
  });

  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tri-imgs, .bg-imgs").forEach((group) => {
    shuffled(SITE_IMAGES).forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      group.appendChild(img);
    });
    startFlicker(group);
  });
});
