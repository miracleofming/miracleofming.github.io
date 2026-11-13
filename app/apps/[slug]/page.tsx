import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { AppIcon } from "@/components/AppIcon";
import { Container } from "@/components/Section";

// static export: 빌드할 때 apps 배열의 slug마다 HTML을 한 장씩 만든다.
export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

// 배열에 없는 slug는 만들지 않고 404로 보낸다.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  return { title: app?.name, description: app?.summary };
}

export default async function AppPage({ params }: PageProps<"/apps/[slug]">) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <main>
      <Container className="pt-10 pb-20">
      <Link href="/#apps" className="text-caption text-muted hover:text-foreground">
        앱 목록
      </Link>

      <div className="mt-8 flex items-center gap-5">
        <AppIcon app={app} size="lg" />
        <div>
          <h1 className="text-display-sm font-bold sm:text-display">{app.name}</h1>
          {app.status && <p className="mt-1 text-caption text-muted">{app.status}</p>}
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-lead">{app.summary}</p>

      {app.storeLinks && app.storeLinks.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
          {app.storeLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-body font-semibold text-accent">
              {link.label}
            </a>
          ))}
        </div>
      )}
      </Container>
    </main>
  );
}
