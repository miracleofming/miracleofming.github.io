import { apps } from "@/lib/apps";
import { profile } from "@/lib/profile";
import { AppList } from "@/components/AppList";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Section } from "@/components/Section";

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <h1 className="whitespace-pre-line text-display-sm font-bold sm:whitespace-normal sm:text-display">{profile.headline}</h1>
        <p className="mt-4 max-w-2xl text-lead text-muted">{profile.subline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href="/#apps">앱 둘러보기</ButtonLink>
          <ButtonLink href="/#contact" variant="text">
            연락하기
          </ButtonLink>
        </div>
      </Container>

      {/* 앱: 소개·연락과 같은 두 단 틀. 앱마다 한 행 + 대표 화면 한 장 */}
      <Section id="apps" title="앱" layout="split">
        <AppList apps={apps} />
      </Section>

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
