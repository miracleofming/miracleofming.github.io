import Link from "next/link";
import type { ReactNode } from "react";

// 행동 요소 두 가지: primary(채운 버튼) / text(글자 링크). 강조색은 여기서만 쓴다.
const styles = {
  primary:
    "inline-flex h-11 items-center rounded-[var(--radius-ui)] bg-accent px-5 text-body font-semibold text-accent-foreground hover:opacity-90",
  text: "inline-flex h-11 items-center text-body font-semibold text-accent hover:underline underline-offset-4",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
