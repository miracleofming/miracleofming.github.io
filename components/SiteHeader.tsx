"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/profile";
import { Container } from "@/components/Section";

// 이만큼(px) 이상 움직였을 때만 숨김/보임을 바꾼다. 손가락 떨림 같은 작은 움직임은 무시.
const THRESHOLD = 8;
// 헤더 높이(h-14 = 56px). 맨 위 근처에서는 항상 보인다.
const HEADER_HEIGHT = 56;

// 스마트 헤더: 아래로 내리면 숨고, 위로 올리면 다시 나타난다.
export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const diff = y - lastY.current;
      if (Math.abs(diff) < THRESHOLD) return;
      setHidden(diff > 0 && y > HEADER_HEIGHT);
      lastY.current = y;
    };

    // 스크롤 이벤트는 1초에 수십 번 온다. 화면을 그릴 때(requestAnimationFrame) 한 번만 계산한다.
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 키보드(Tab)로 헤더 링크(로고)에 오면 숨어 있어도 다시 보이게 한다.
  return (
    <header
      className={`sticky top-0 z-20 border-b border-line bg-background transition-transform duration-200 ease-out has-[:focus-visible]:translate-y-0 motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-body font-bold">
          {profile.siteName}
        </Link>
      </Container>
    </header>
  );
}
