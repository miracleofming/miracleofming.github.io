import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/lib/apps";
import { getPrivacyPolicy, privacyPolicies } from "@/lib/privacy";
import { Container } from "@/components/Section";

// 방침 내용이 있는 앱만 페이지를 만든다. (지금은 beatcue)
export function generateStaticParams() {
  return Object.keys(privacyPolicies).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/apps/[slug]/privacy">): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  return { title: `${app?.name} 개인정보처리방침` };
}

export default async function PrivacyPage({ params }: PageProps<"/apps/[slug]/privacy">) {
  const { slug } = await params;
  const app = getApp(slug);
  const policy = getPrivacyPolicy(slug);
  if (!app || !policy) notFound();

  return (
    <main>
      <Container className="pt-10 pb-20">
        <Link href={`/apps/${app.slug}/`} className="text-caption text-muted hover:text-foreground">
          {app.name}
        </Link>

        <article className="mt-8 max-w-2xl">
          <h1 className="text-display-sm font-bold">{app.name} 개인정보처리방침</h1>
          <p className="mt-2 text-caption text-muted">시행일 {policy.updatedAt}</p>
          <p className="mt-8 text-body">{policy.intro}</p>

          {policy.sections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="text-lead font-semibold">{section.title}</h2>
              {section.body.map((p) => (
                <p key={p} className="mt-3 text-body text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </Container>
    </main>
  );
}
