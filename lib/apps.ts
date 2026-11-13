// 앱 목록의 단일 출처(single source of truth).
// 홈의 앱 목록, 이후 /apps/[slug] 소개 페이지(generateStaticParams)가 모두 이 배열을 읽는다.
export type App = {
  slug: string; // URL에 쓰는 이름: /apps/<slug>
  name: string;
  summary: string; // 한 줄 소개
};

export const apps: App[] = [
  { slug: "beatcue", name: "BeatCue", summary: "[BeatCue 한 줄 소개]" },
  { slug: "gilgwattae", name: "길과 때", summary: "[길과 때 한 줄 소개]" },
  { slug: "muhamo", name: "무하모", summary: "[무하모 한 줄 소개]" },
];
