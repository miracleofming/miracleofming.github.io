"use client";

import Link from "next/link";
import { useState } from "react";
import type { App } from "@/lib/apps";
import { AppIcon } from "@/components/AppIcon";
import { ChevronRight } from "@/components/ChevronRight";
import { ScreenCarousel } from "@/components/ScreenCarousel";

// 앱 아이콘(탭)을 누르면 오른쪽 폰 화면이 그 앱의 스크린샷 캐러셀로 바뀐다.
export function AppShowcase({ apps }: { apps: App[] }) {
  const [selected, setSelected] = useState(0);
  const current = apps[selected];

  return (
    <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-16">
      <div>
        <ul role="tablist" aria-label="앱 고르기" className="flex gap-2 sm:gap-4">
          {apps.map((app, i) => {
            const active = i === selected;
            return (
              <li key={app.slug}>
                <button
                  type="button"
                  role="tab"
                  id={`app-tab-${app.slug}`}
                  aria-selected={active}
                  aria-controls="app-panel"
                  onClick={() => setSelected(i)}
                  className={`flex w-20 flex-col items-center gap-2 rounded-[var(--radius-ui)] p-2 sm:w-24 ${
                    active ? "bg-surface" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <AppIcon app={app} />
                  <span className={`text-caption ${active ? "font-semibold" : ""}`}>{app.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 hidden sm:block">
          <AppDetail app={current} />
        </div>
      </div>

      <div id="app-panel" role="tabpanel" aria-labelledby={`app-tab-${current.slug}`}>
        <div className="mx-auto w-[220px] sm:w-[260px]">
          {/* key를 바꿔 앱이 바뀌면 캐러셀을 새로 만든다 → 항상 첫 장부터 */}
          <ScreenCarousel key={current.slug} app={current} />
        </div>
        <div className="mt-8 sm:hidden">
          <AppDetail app={current} />
        </div>
      </div>
    </div>
  );
}

function AppDetail({ app }: { app: App }) {
  return (
    <div className="max-w-md">
      <p className="text-title font-bold">{app.name}</p>
      {app.status && <p className="mt-1 text-caption text-muted">{app.status}</p>}
      <p className="mt-2 text-lead text-muted">{app.summary}</p>
      <Link
        href={`/apps/${app.slug}/`}
        className="mt-4 inline-flex items-center gap-1 text-body font-semibold text-accent underline-offset-4 hover:underline"
      >
        자세히 보기
        <ChevronRight className="size-4" />
      </Link>
    </div>
  );
}
