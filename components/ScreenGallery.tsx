"use client";
/* eslint-disable @next/next/no-img-element -- static export라 next/image 최적화를 쓰지 않는다 */
import { useEffect, useRef, useState } from "react";
import type { App } from "@/lib/apps";
import { ChevronLeft, ChevronRight } from "@/components/ChevronRight";

// 상세 페이지용: 폰 프레임 없이 스크린샷만 보여 준다.
// 가로 한 줄로 나열하고, 넘치면 스와이프하거나 양옆 화살표로 넘긴다. 스크롤바는 숨긴다.
export function ScreenGallery({ app }: { app: App }) {
  const shots = app.galleryShots ?? app.screenshots ?? [];
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


  // 화살표는 이미지 줄 양옆 가운데에 둔다. 이미지 위에 겹치지 않고 바깥에 자리를 따로 잡는다.
  // 모바일(sm 미만)은 폭이 좁아 화살표를 숨기고, 화면 끝까지 붙인 줄에서 스와이프로 넘긴다.
  const showNav = !(edge.start && edge.end);
  const navButton =
    "hidden size-9 shrink-0 items-center justify-center rounded-[var(--radius-ui)] text-muted hover:bg-surface hover:text-foreground disabled:pointer-events-none disabled:opacity-30 sm:flex";

  return (
    <div className="flex items-center gap-2">
      {showNav && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={edge.start}
          className={navButton}
          aria-label="이전 화면"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      <div
        ref={trackRef}
        onScroll={update}
        className="no-scrollbar -mx-4 flex min-w-0 flex-1 snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:mx-0 sm:scroll-px-0 sm:px-0"
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
      {showNav && (
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={edge.end}
          className={navButton}
          aria-label="다음 화면"
        >
          <ChevronRight className="size-5" />
        </button>
      )}
    </div>
  );
}
