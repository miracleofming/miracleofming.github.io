// 앱 목록의 단일 출처(single source of truth).
// 홈의 앱 목록과 /apps/[slug] 소개 페이지(generateStaticParams)가 모두 이 배열을 읽는다.
export type App = {
  slug: string; // URL에 쓰는 이름: /apps/<slug>
  name: string;
  summary: string; // 한 줄 소개
  icon?: string; // public/ 기준 경로. 없으면 이름 첫 글자로 대신 표시
  splashColor: string; // 스크린샷이 없을 때 폰 화면 배경 (아이콘 배경색)
  // 폰 프레임 안에 들어갈 앱 화면들 (public/ 기준 경로). 첫 장이 홈 목록에 쓰인다.
  // 화면 위쪽 상태바 자리는 비워 두므로 상태바 없는 캡처를 쓴다.
  screenshots?: string[];
  screenColor?: string; // 스크린샷 위 상태바 자리 배경 (캡처 맨 윗줄 색)
  fullScreenShots?: boolean; // 상태바까지 담긴 실제 폰 캡처면 true → 화면을 꽉 채운다
  status?: string; // 예: "App Store 출시", "개발 중" (정해지면 추가)
  storeLinks?: { label: string; href: string }[];
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
    summary: "비트에 맞춰 달리고 걷는 인터벌 러닝 앱. 광고 없이 오프라인으로 동작합니다.",
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
    summary: "성경 속 인물이 걸은 길과 때를 지도와 타임라인으로 따라가는 게임.",
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
    summary: "목표 하나 정하고, 함께 인증하며 서로 응원하는 습관 모임.",
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
