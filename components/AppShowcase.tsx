"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { App } from "@/lib/apps";
import { APP_SELECT_EVENT } from "@/lib/appSelect";
import { AppIcon } from "@/components/AppIcon";
import { ChevronRight } from "@/components/ChevronRight";
import { AppScreen, DeviceFrame } from "@/components/DeviceFrame";

// 앱 아이콘(탭)을 누르면 오른쪽 폰 화면이 그 앱의 대표 화면으로 바뀐다.
// 여러 장 넘겨 보기는 /apps/[slug] 상세 페이지에서 한다.
export function AppShowcase({ apps }: { apps: App[] }) {
  const [selected, setSelected] = useState(0);
  const current = apps[selected];

  // 히어로 "만든 앱" 줄에서 고른 앱, 또는 주소의 ?app=slug 로 탭을 맞춘다.
  useEffect(() => {
    const pick = (slug: string | null) => {
      const i = apps.findIndex((app) => app.slug === slug);
      if (i >= 0) setSelected(i);
    };
    pick(new URLSearchParams(window.location.search).get("app"));
    const onSelect = (e: Event) => pick((e as CustomEvent<string>).detail);
    window.addEventListener(APP_SELECT_EVENT, onSelect);
    return () => window.removeEventListener(APP_SELECT_EVENT, onSelect);
  }, [apps]);

  return (
    <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-16">
      <div>
        <ul role="tablist" aria-label="앱 고르기" className="flex flex-wrap gap-2 sm:gap-4">
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
          <DeviceFrame background={current.screenColor ?? current.splashColor}>
            <AppScreen app={current} src={current.screenshots?.[0]} />
          </DeviceFrame>
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
    <div>
      <p className="text-title font-bold">{app.name}</p>
      {app.status && <p className="mt-1 text-caption text-muted">{app.status}</p>}
      <p className="mt-3 sm:whitespace-pre-line text-body text-muted">{app.summary}</p>
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
