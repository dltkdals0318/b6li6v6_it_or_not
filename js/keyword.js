const KEYWORD_ROUTES = [
  {
    page: "html/page1.html",
    keywords: [
      "스탠리큐브릭",
      "스탠리 큐브릭",
      "큐브릭",
      "Stanley Kubrick",
      "StanleyKubrick",
      "stanleykubrick",
      "stanley kubrick",
    ],
  },
  {
    page: "html/page2.html",
    keywords: [
      "칸예웨스트",
      "칸예 웨스트",
      "Kanye West",
      "KanyeWest",
      "kanyewest",
      "kanye west",
    ],
  },
  {
    page: "html/page3.html",
    keywords: [
      "메간폭스",
      "메간 폭스",
      "Megan Fox",
      "MeganFox",
      "meganfox",
      "megan fox",
    ],
  },
  {
    page: "html/page4.html",
    keywords: ["바포메트", "Baphomet", "baphomet"],
  },
  {
    page: "html/page5.html",
    keywords: [
      "샘스미스",
      "샘 스미스",
      "Sam Smith",
      "SamSmith",
      "samsmith",
      "sam smith",
    ],
  },
  {
    page: "html/page6.html",
    keywords: ["666"],
  },
  {
    page: "html/page7.html",
    keywords: [
      "역십자가",
      "Inverted Cross",
      "InvertedCross",
      "invertedcross",
      "inverted cross",
    ],
  },
  {
    page: "html/page8.html",
    keywords: [
      "레이디가가",
      "레이디 가가",
      "Lady Gaga",
      "LadyGaga",
      "ladygaga",
      "lady gaga",
    ],
  },
  {
    page: "html/page9.html",
    keywords: ["백마스킹", "Backmasking", "backmasking"],
  },
  {
    page: "html/page10.html",
    keywords: ["인격화", "Personification", "personification"],
  },
  {
    page: "html/page11.html",
    keywords: [
      "코카콜라",
      "코카 콜라",
      "Coca-Cola",
      "CocaCola",
      "cocacola",
      "coca cola",
    ],
  },
  {
    page: "html/page12.html",
    keywords: [
      "뮤직비디오",
      "뮤직 비디오",
      "Music Video",
      "MusicVideo",
      "musicvideo",
      "music video",
    ],
  },
  {
    page: "html/page13.html",
    keywords: [
      "프리메이슨",
      "Freemason",
      "Freemasonry",
      "freemason",
      "freemasonry",
    ],
  },
  {
    page: "html/page14.html",
    keywords: ["몰렉", "Moloch", "moloch"],
  },
  {
    page: "html/page15.html",
    keywords: ["펜타그램", "Pentagram", "pentagram"],
  },
  {
    page: "html/page16.html",
    keywords: [
      "개막식",
      "Opening Ceremony",
      "OpeningCeremony",
      "openingceremony",
      "opening ceremony",
    ],
  },
  {
    page: "html/page17.html",
    keywords: ["아웃백", "Outback", "outback"],
  },
];

function normalizeQuery(str) {
  return (str || "").toLowerCase().replace(/\s+/g, "");
}

function findRoute(query) {
  const normalized = normalizeQuery(query);
  if (!normalized) return null;
  const route = KEYWORD_ROUTES.find((r) =>
    r.keywords.some((keyword) => normalized.includes(normalizeQuery(keyword))),
  );
  return route ? route.page : null;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search-form");
  const input = document.querySelector(".search-input");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const page = findRoute(input.value);
    if (page) window.location.href = page;
  });
});
