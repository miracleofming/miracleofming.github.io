import { apps } from "@/lib/apps";
import { profile } from "@/lib/profile";
import { AppShowcase } from "@/components/AppShowcase";
import { Container, Section } from "@/components/Section";

export default function Home() {
  return (
    <main>
      {/* 히어로: 사람 소개 + 바로 아래 앱 탭과 폰 목업. 상단 메뉴 "앱"이 이 자리로 온다 */}
      <section id="apps" className="scroll-mt-20">
        <Container className="pt-16 pb-20 sm:pt-24 sm:pb-24">
          <h1 className="whitespace-pre-line text-display-sm font-bold sm:whitespace-normal sm:text-display">{profile.headline}</h1>
          <p className="mt-4 max-w-2xl text-lead text-muted">{profile.subline}</p>
          <div className="mt-12 sm:mt-16">
            <AppShowcase apps={apps} />
          </div>
        </Container>
      </section>

      <Section id="about" title="소개" layout="split">
        <div className="max-w-2xl space-y-4">
          {profile.about.map((p) => (
            <p key={p} className="sm:whitespace-pre-line text-lead">
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
