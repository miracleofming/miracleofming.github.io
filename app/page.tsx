import Link from "next/link";
import { apps } from "@/lib/apps";
import { profile } from "@/lib/profile";
import { AppIcon } from "@/components/AppIcon";
import { ButtonLink } from "@/components/ButtonLink";
import { ChevronRight } from "@/components/ChevronRight";
import { Container, Section } from "@/components/Section";

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-caption text-muted">{profile.role}</p>
        <h1 className="mt-3 text-display-sm font-bold sm:text-display">{profile.headline}</h1>
        <p className="mt-4 max-w-2xl text-lead text-muted">{profile.subline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href="/#apps">앱 둘러보기</ButtonLink>
          <ButtonLink href="/#contact" variant="text">
            연락하기
          </ButtonLink>
        </div>
      </Container>

      {/* 앱: 카드 전체가 소개 페이지로 가는 링크 */}
      <Section id="apps" title="앱" aside={`${apps.length}개`}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <li key={app.slug}>
              <Link
                href={`/apps/${app.slug}/`}
                className="flex h-full flex-col rounded-[var(--radius-ui)] border border-line p-6 hover:bg-surface"
              >
                <AppIcon app={app} />
                <span className="mt-5 text-lead font-semibold">{app.name}</span>
                {app.status && <span className="text-caption text-muted">{app.status}</span>}
                <p className="mt-2 text-body text-muted">{app.summary}</p>
                <span className="mt-auto flex items-center gap-1 pt-6 text-caption font-semibold text-accent">
                  자세히 보기
                  <ChevronRight className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="about" title="소개" layout="split">
        <div className="max-w-2xl space-y-4">
          {profile.about.map((p) => (
            <p key={p} className="text-lead">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section id="contact" title="연락" layout="split">
        <dl className="grid grid-cols-[5rem_1fr] gap-y-3 text-body">
          {profile.links.map((link) => (
            <div key={link.label} className="contents">
              <dt className="text-muted">{link.label}</dt>
              <dd>
                <a href={link.href} className="font-semibold text-accent underline-offset-4 hover:underline">
                  {link.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
}
