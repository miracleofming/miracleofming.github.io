// 앱 목록의 단일 출처(single source of truth).
// 홈의 앱 목록과 /apps/[slug] 소개 페이지(generateStaticParams)가 모두 이 배열을 읽는다.
export type App = {
  slug: string; // URL에 쓰는 이름: /apps/<slug>
  name: string;
  summary: string; // 소개 문구. 줄바꿈(\n)한 자리에서 화면에서도 줄이 바뀐다
  icon?: string; // public/ 기준 경로. 없으면 이름 첫 글자로 대신 표시
  splashColor: string; // 스크린샷이 없을 때 폰 화면 배경 (아이콘 배경색)
  // 폰 프레임 안에 들어갈 앱 화면들 (public/ 기준 경로). 첫 장이 홈 목록에 쓰인다.
  // 화면 위쪽 상태바 자리는 비워 두므로 상태바 없는 캡처를 쓴다.
  screenshots?: string[];
  screenColor?: string; // 스크린샷 위 상태바 자리 배경 (캡처 맨 윗줄 색)
  // 상세 페이지 갤러리에만 쓸 이미지 (헤드라인이 들어간 스토어 이미지 등). 없으면 screenshots를 쓴다
  galleryShots?: string[];
  fullScreenShots?: boolean; // 상태바까지 담긴 실제 폰 캡처면 true → 화면을 꽉 채운다
  status?: string; // 예: "App Store 출시", "개발 중" (정해지면 추가)
  storeLinks?: { label: string; href: string }[];
  ogImage?: string; // 링크 공유 미리보기 이미지 (public/ 기준 경로). 스토어 피처 그래픽 1024x500
};

export const apps: App[] = [
  {
    slug: "beatcue",
    icon: "/apps/beatcue/icon.png",
    splashColor: "#090c05",
    screenColor: "#0a0a0a",
    fullScreenShots: true,
    screenshots: [1, 2, 3, 4, 5, 6, 7].map((n) => `/apps/beatcue/screen-${n}.webp`),
    name: "BeatCue",
    summary: "비트에 맞춰 달리고 걷는 인터벌 러닝 앱.\n광고 없이 오프라인으로 동작합니다.",
  },
  {
    slug: "gilgwattae",
    icon: "/apps/gilgwattae/icon.png",
    splashColor: "#efede6",
    screenColor: "#fbfaf7",
    screenshots: [
      "/apps/gilgwattae/screen-1.webp",
      "/apps/gilgwattae/screen-2.webp",
      "/apps/gilgwattae/screen-3.webp",
    ],
    name: "길과 때",
    summary:
      "성경 사건을 시대(때)와 지도(길) 위에 함께 놓아 보여줍니다.\n시대를 고르면 인물과 이동 경로가 보이고, 게임으로 흐름을 익힐 수 있습니다.",
  },
  {
    slug: "muhamo",
    icon: "/apps/muhamo/icon.png",
    splashColor: "#fbfbf8",
    screenColor: "#f4f4f6",
    screenshots: [
      "/apps/muhamo/screen-1.webp",
      "/apps/muhamo/screen-2.webp",
      "/apps/muhamo/screen-3.webp",
      "/apps/muhamo/screen-4.webp",
    ],
    name: "무하모",
    summary:
      "목표 하나 정하고, 함께 인증하며 서로 응원하는 습관 모임.\n혼자서는 흐지부지되던 다짐도, 같이 하면 끝까지 갈 수 있습니다.",
  },
  {
    slug: "jaraneunna",
    icon: "/apps/jaraneunna/icon.png",
    splashColor: "#d6d2c8",
    screenColor: "#d6d2c8",
    fullScreenShots: true,
    screenshots: [1, 2, 3, 4, 5, 6].map((n) => `/apps/jaraneunna/screen-${n}.webp`),
    galleryShots: [1, 2, 3, 4, 5, 6].map((n) => `/apps/jaraneunna/store-${n}.webp`),
    ogImage: "/apps/jaraneunna/feature-graphic.png",
    name: "자라는 나",
    summary:
      "나를 닮은 도트 캐릭터와 목표별 알을 키우는 육성 기록 앱.\n'운동하는 나', '책 읽는 나'처럼 목표마다 알을 두고, 기록할 때마다 함께 자랍니다.",
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
