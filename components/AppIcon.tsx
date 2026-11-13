// 실제 앱 아이콘 이미지가 생기기 전까지 쓰는 자리 표시: 앱 이름 첫 글자.
export function AppIcon({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-16 text-2xl" : "size-12 text-lg";
  return (
    <span
      aria-hidden
      className={`${box} flex shrink-0 items-center justify-center rounded-[var(--radius-ui)] border border-line bg-surface font-semibold text-muted`}
    >
      {name.slice(0, 1)}
    </span>
  );
}
