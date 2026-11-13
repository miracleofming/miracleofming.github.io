"use client";

import type { App } from "@/lib/apps";
import { appHref, selectApp } from "@/lib/appSelect";
import { AppIcon } from "@/components/AppIcon";

// 히어로 아래 "만든 앱" 줄. 앱 섹션의 목차 역할을 한다.
// 누르면 아래 앱 섹션으로 내려가면서 그 앱 탭이 선택된다. 앱이 늘면 줄이 옆으로·다음 줄로 늘어난다.
export function HeroApps({ apps }: { apps: App[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-line pt-6">
      <span className="text-caption text-muted">만든 앱</span>
      <ul className="flex flex-wrap gap-x-7 gap-y-4">
        {apps.map((app) => (
          <li key={app.slug}>
            <a
              href={appHref(app.slug)}
              onClick={(e) => {
                e.preventDefault();
                selectApp(app.slug);
              }}
              className="flex items-center gap-3 text-body font-semibold underline-offset-4 hover:underline"
            >
              <AppIcon app={app} size="sm" />
              {app.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
