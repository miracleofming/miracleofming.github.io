"use client";

import { useRef, useState } from "react";
import type { App } from "@/lib/apps";
import { AppScreen, DeviceFrame } from "@/components/DeviceFrame";
import { ChevronLeft, ChevronRight } from "@/components/ChevronRight";

// 폰 화면 안에서 스크린샷을 좌우로 넘겨 보는 캐러셀.
// CSS scroll-snap으로 손가락 스와이프·트랙패드를 처리하고, 버튼과 점은 같은 스크롤을 움직인다.
export function ScreenCarousel({ app }: { app: App }) {
  const shots = app.screenshots?.length ? app.screenshots : [undefined];
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(shots.length - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  const many = shots.length > 1;
  const navButton =
    "flex size-9 items-center justify-center rounded-[var(--radius-ui)] text-muted hover:bg-surface hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div>
      <DeviceFrame background={app.screenColor ?? app.splashColor}>
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex size-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label={`${app.name} 화면`}
        >
          {shots.map((src, i) => (
            <div
              key={src ?? "splash"}
              className="size-full shrink-0 snap-center"
              aria-roledescription="slide"
              aria-label={`${shots.length}장 중 ${i + 1}번째`}
            >
              <AppScreen app={app} src={src} />
            </div>
          ))}
        </div>
      </DeviceFrame>

      {many && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button type="button" onClick={() => goTo(index - 1)} disabled={index === 0} className={navButton} aria-label="이전 화면">
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {shots.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}번째 화면`}
                aria-current={i === index}
                className={`size-2 rounded-full ${i === index ? "bg-foreground" : "bg-line"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === shots.length - 1}
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
