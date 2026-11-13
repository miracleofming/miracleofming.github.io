import { profile } from "@/lib/profile";
import { Container } from "@/components/Section";

// 모든 페이지 공통 푸터 한 줄: © 연도 handle · GitHub · 이메일
// 가운뎃점은 앞 항목 끝에 붙여서, 모바일에서 줄이 바뀌어도 새 줄이 점으로 시작하지 않게 한다.
export function SiteFooter() {
  const sep = (
    <span aria-hidden="true" className="ml-2">
      ·
    </span>
  );
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center gap-x-2 gap-y-1 py-8 text-caption text-muted">
        <span>
          © {new Date().getFullYear()} {profile.handle}
          {sep}
        </span>
        {profile.links.map((link, i) => (
          <span key={link.href}>
            <a href={link.href} className="font-semibold text-accent underline-offset-4 hover:underline">
              {link.text}
            </a>
            {i < profile.links.length - 1 && sep}
          </span>
        ))}
      </Container>
    </footer>
  );
}
