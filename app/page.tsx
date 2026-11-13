import Link from "next/link";
import { apps } from "@/lib/apps";
import { profile } from "@/lib/profile";
import { AppIcon } from "@/components/AppIcon";
import { ChevronRight } from "@/components/ChevronRight";

const container = "mx-auto max-w-5xl px-4 sm:px-6";

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <section className={`${container} pt-16 pb-20 sm:pt-24 sm:pb-28`}>
        <p className="text-muted">
          {profile.role} {profile.name}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl sm:leading-tight">
          {profile.headline}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/#apps"
            className="inline-flex h-11 items-center rounded-[var(--radius-ui)] bg-accent px-5 font-medium text-accent-foreground"
          >
            앱 둘러보기
          </Link>
          <Link href="/#contact" className="font-medium text-accent">
            연락하기
          </Link>
        </div>
      </section>

      {/* 앱 목록: 각 행이 소개 페이지로 이동하는 링크 */}
      <section id="apps" className="scroll-mt-8 border-t border-line">
        <div className={`${container} py-16 sm:py-20`}>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight">앱</h2>
            <span className="text-sm text-muted">{apps.length}개</span>
          </div>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/apps/${app.slug}/`}
                  className="-mx-3 flex items-center gap-4 rounded-[var(--radius-ui)] px-3 py-5 hover:bg-surface"
                >
                  <AppIcon name={app.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-lg font-semibold">{app.name}</span>
                      <span className="text-sm text-muted">{app.status}</span>
                    </div>
                    <p className="mt-1 text-muted">{app.summary}</p>
                  </div>
                  <ChevronRight className="shrink-0 text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 소개: 왼쪽 제목, 오른쪽 본문의 두 단 배치 */}
      <section id="about" className="scroll-mt-8 border-t border-line">
        <div className={`${container} grid gap-6 py-16 sm:grid-cols-[12rem_1fr] sm:py-20`}>
          <h2 className="text-2xl font-bold tracking-tight">소개</h2>
          <div className="max-w-2xl">
            {profile.about.map((p) => (
              <p key={p} className="mb-4 leading-7">
                {p}
              </p>
            ))}
            <p className="mt-8 text-sm font-semibold">주로 쓰는 기술</p>
            <p className="mt-2 text-muted">{profile.stack.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* 연락 */}
      <section id="contact" className="scroll-mt-8 border-t border-line">
        <div className={`${container} grid gap-6 py-12 sm:grid-cols-[12rem_1fr] sm:py-16`}>
          <h2 className="text-2xl font-bold tracking-tight">연락</h2>
          <dl className="grid grid-cols-[5rem_1fr] gap-y-3">
            {profile.links.map((link) => (
              <div key={link.label} className="contents">
                <dt className="text-muted">{link.label}</dt>
                <dd>
                  <a href={link.href} className="text-accent underline-offset-4 hover:underline">
                    {link.text}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
