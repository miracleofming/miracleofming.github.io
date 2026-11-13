import type { ReactNode } from "react";

// 모든 페이지가 같은 폭·좌우 여백을 쓰도록 하는 틀
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

// 홈의 섹션 하나: 위 구분선 + 제목 + 내용. layout="split"이면 왼쪽 제목, 오른쪽 내용.
export function Section({
  id,
  title,
  aside,
  layout = "stack",
  children,
}: {
  id: string;
  title: string;
  aside?: ReactNode; // 제목 오른쪽 끝 보조 정보 (예: 개수)
  layout?: "stack" | "split";
  children: ReactNode;
}) {
  const heading = <h2 className="text-title font-bold">{title}</h2>;
  return (
    <section id={id} className="scroll-mt-8 border-t border-line">
      {layout === "split" ? (
        <Container className="grid gap-6 py-16 sm:grid-cols-[12rem_1fr] sm:py-20">
          {heading}
          <div>{children}</div>
        </Container>
      ) : (
        <Container className="py-16 sm:py-20">
          <div className="flex items-baseline justify-between">
            {heading}
            {aside && <span className="text-caption text-muted">{aside}</span>}
          </div>
          <div className="mt-8">{children}</div>
        </Container>
      )}
    </section>
  );
}
