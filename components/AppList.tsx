import Link from "next/link";
import type { App } from "@/lib/apps";
import { AppScreen, DeviceFrame } from "@/components/DeviceFrame";
import { ChevronRight } from "@/components/ChevronRight";

// 홈 앱 목록: 앱 하나당 한 행. 왼쪽 글(이름·소개·자세히 보기), 오른쪽 대표 화면 한 장.
// 여러 장 넘겨 보기는 /apps/[slug] 상세 페이지에서 한다.
export function AppList({ apps }: { apps: App[] }) {
  return (
    <ul className="divide-y divide-line">
      {apps.map((app) => (
        <li
          key={app.slug}
          className="grid grid-cols-[1fr_112px] items-center gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-[1fr_180px] sm:gap-12"
        >
          <div>
            <h3 className="text-title font-bold">{app.name}</h3>
            {app.status && <p className="mt-1 text-caption text-muted">{app.status}</p>}
            <p className="mt-3 text-body text-muted">{app.summary}</p>
            <Link
              href={`/apps/${app.slug}/`}
              className="mt-4 inline-flex items-center gap-1 text-body font-semibold text-accent underline-offset-4 hover:underline"
            >
              자세히 보기
              <ChevronRight className="size-4" />
            </Link>
          </div>
          {app.screenshots?.[0] && (
            <DeviceFrame background={app.screenColor ?? app.splashColor}>
              <AppScreen app={app} src={app.screenshots[0]} />
            </DeviceFrame>
          )}
        </li>
      ))}
    </ul>
  );
}
