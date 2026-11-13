"use client";
/* eslint-disable @next/next/no-img-element -- static export라 next/image 최적화를 쓰지 않는다 */
import { useEffect, useRef, useState } from "react";
import type { App } from "@/lib/apps";
import { ChevronLeft, ChevronRight } from "@/components/ChevronRight";

// 상세 페이지용: 폰 프레임 없이 스크린샷만 보여 준다.
// 가로 한 줄로 나열하고, 넘치면 옆으로 스크롤(스와이프)하거나 버튼으로 넘긴다.
export function ScreenGallery({ app }: { app: App }) {
  const shots = app.screenshots ?? [];
  const trackRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: true });

  // 스크롤 위치로 양 끝에 닿았는지 계산한다. 다 들어가면 버튼을 숨긴다.
  const update = () => {
    const t = trackRef.current;
    if (!t) return;
    setEdge({
      start: t.scrollLeft <= 1,
      end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 1,
    });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 보이는 폭의 80%만큼 넘긴다. 스냅이 가장 가까운 이미지에 맞춰 준다.
  const scroll = (dir: 1 | -1) => {
    const t = trackRef.current;
    t?.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: "smooth" });
  };

  if (!shots.length) return null;

  const image = (src: string, i: number) => (
    <img
      key={src}
      src={src}
      alt={`${app.name} 화면 ${i + 1}`}
      loading={i < 3 ? "eager" : "lazy"}
      draggable={false}
      className="w-full rounded-[var(--radius-ui)] border border-line"
      style={{ background: app.screenColor ?? app.splashColor }}
    />
  );


  const navButton =
    "flex size-9 items-center justify-center rounded-[var(--radius-ui)] text-muted hover:bg-surface hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={update}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6"
        aria-label={`${app.name} 화면`}
      >
        {shots.map((src, i) => (
          <div
            key={src}
            className="w-[200px] shrink-0 snap-start sm:w-[240px] lg:w-[300px]"
          >
            {image(src, i)}
          </div>
        ))}
      </div>
      {!(edge.start && edge.end) && (
        <div className="mt-4 flex justify-end gap-1">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={edge.start}
            className={navButton}
            aria-label="이전 화면"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edge.end}
            className={navButton}
            aria-label="다음 화면"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}
