import type { App } from "@/lib/apps";

// 앱 아이콘. 이미지가 없으면 앱 이름 첫 글자로 자리를 채운다.
export function AppIcon({ app, size = "md" }: { app: App; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-16 text-2xl" : "size-12 text-lg";
  const shape = `${box} shrink-0 rounded-[var(--radius-ui)] border border-line`;

  if (app.icon) {
    // static export라 next/image 최적화가 꺼져 있어 일반 img를 쓴다.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={app.icon} alt="" width={64} height={64} className={`${shape} object-cover`} />;
  }
  return (
    <span aria-hidden className={`${shape} flex items-center justify-center bg-surface font-semibold text-muted`}>
      {app.name.slice(0, 1)}
    </span>
  );
}
