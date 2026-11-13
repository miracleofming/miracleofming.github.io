import type { ReactNode } from "react";

// 모든 페이지가 같은 폭·좌우 여백을 쓰도록 하는 틀
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
