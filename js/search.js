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
  "source/image/3/메간이미지.jpg",
  "source/image/3/maxresdefault-6.jpg",
  "source/image/4/AlphonseLouisConstant.png",
  "source/image/4/엘리파스레비.png",
  "source/image/4/제목없음-1.png",
  "source/image/4/tst바포메트.jpg",
  "source/image/4/Baphosimb.svg.png",
  "source/image/4/앨범커버.jpg",
  "source/image/5/샘스미스퍼포먼스.jpg",
  "source/image/5/데이비드해리스.png",
  "source/image/5/시상장면.jpg",
  "source/image/6/짐승들.jpg",
  "source/image/6/바코드.png",
  "source/image/7/Title_Page_of_Là-bas.jpeg",
  "source/image/7/로즈마리십자가.jpg",
  "source/image/7/요한바오로.jpg",
  "source/image/7/로즈마리의아기.webp",
  "source/image/8/MV5BYmQ5NWZlYjItYTI4MC00ZWI2LWFmNzYtZDgzNWRkZTBhZjMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "source/image/8/제목없음-1.jpg",
  "source/image/8/맨슨t3.png",
  "source/image/9/디제이의음모론.jpg",
  "source/image/9/바틀즈불.png",
  "source/image/9/Zeppelin_IV.jpg",
  "source/image/9/86gL2bzxIW7ZKyEkjLNTebo5X0YjpYSbMpjDKDk4pTkZSySiDxDNnuXCamZ8kv85Gs8tMi0D_UEDQmh80u38RA.webp",
  "source/image/10/images.png",
  "source/image/10/10p.jpg",
  "source/image/11/chrome_Y9cPhV4U3l.png",
  "source/image/11/코카콜라디스플.jpg",
  "source/image/11/코카콜라마킹.jpg",
  "source/image/12/제목없음-1.jpg",
  "source/image/12/정국3.jpg",
  "source/image/13/알버트파이크.jpg",
  "source/image/15/Pentagram_with_one_point_down_(de_Guaita).jpg",
  "source/image/15/기사단.jpg",
  "source/image/16/파리비교.jpg",
  "source/image/16/교황청.jpg",
  "source/image/17/85620712.2.jpg",
  "source/image/17/제목없음-1.jpg",
  "source/image/17/AKR20170802007300075_03_i_P4.jpg",
  "source/image/17/아웃백사탄.jpg",
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
