// 앱 목록의 단일 출처(single source of truth).
// 홈의 앱 목록과 /apps/[slug] 소개 페이지(generateStaticParams)가 모두 이 배열을 읽는다.
export type App = {
  slug: string; // URL에 쓰는 이름: /apps/<slug>
  name: string;
  summary: string; // 한 줄 소개
  status?: string; // 예: "App Store 출시", "개발 중" (정해지면 추가)
  storeLinks?: { label: string; href: string }[];
};

export const apps: App[] = [
  {
    slug: "beatcue",
    name: "BeatCue",
    summary: "비트에 맞춰 달리고 걷는 인터벌 러닝 앱. 광고 없이 오프라인으로 동작합니다.",
  },
  {
    slug: "gilgwattae",
    name: "길과 때",
    summary: "성경 속 인물이 걸은 길과 때를 지도와 타임라인으로 따라가는 게임.",
  },
  {
    slug: "muhamo",
    name: "무하모",
    summary: "목표 하나 정하고, 함께 인증하며 서로 응원하는 습관 모임.",
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
