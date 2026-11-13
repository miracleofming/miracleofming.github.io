// 앱 목록의 단일 출처(single source of truth).
// 홈의 앱 목록과 /apps/[slug] 소개 페이지(generateStaticParams)가 모두 이 배열을 읽는다.
export type App = {
  slug: string; // URL에 쓰는 이름: /apps/<slug>
  name: string;
  summary: string; // 한 줄 소개
  status: string; // 예: "App Store 출시", "개발 중"
  description: string; // 소개 페이지 본문
};

export const apps: App[] = [
  {
    slug: "beatcue",
    name: "BeatCue",
    summary: "[BeatCue 한 줄 소개]",
    status: "[출시 상태]",
    description: "[BeatCue 소개 문단]",
  },
  {
    slug: "gilgwattae",
    name: "길과 때",
    summary: "[길과 때 한 줄 소개]",
    status: "[출시 상태]",
    description: "[길과 때 소개 문단]",
  },
  {
    slug: "muhamo",
    name: "무하모",
    summary: "[무하모 한 줄 소개]",
    status: "[출시 상태]",
    description: "[무하모 소개 문단]",
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
