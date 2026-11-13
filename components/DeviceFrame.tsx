/* eslint-disable @next/next/no-img-element -- static export라 next/image 최적화를 쓰지 않는다 */
import type { ReactNode } from "react";
import type { App } from "@/lib/apps";

// public/device-frame.webp(640×1308)는 화면 부분이 투명하다.
// 화면 영역(35,33 ~ 604,1273)을 %로 바꿔 그 자리에 내용을 깔고, 프레임을 위에 겹친다.
const screenBox = {
  left: `${(35 / 640) * 100}%`,
  top: `${(33 / 1308) * 100}%`,
  width: `${(570 / 640) * 100}%`,
  height: `${(1241 / 1308) * 100}%`,
  // 화면 모서리 반경 약 70px → 가로·세로 비율로 각각 환산
  borderRadius: `${(70 / 570) * 100}% / ${(70 / 1241) * 100}%`,
};

// 다이내믹 아일랜드·상태바 자리. 이만큼 비우고 그 아래부터 앱 화면을 보여 준다.
const STATUS_BAR = "6%";

// 폰 프레임 껍데기. children이 화면 안에 들어간다. 프레임은 클릭·스와이프를 막지 않는다.
export function DeviceFrame({ background, children }: { background: string; children: ReactNode }) {
  return (
    <div className="relative aspect-[640/1308] w-full">
      <div className="absolute overflow-hidden" style={{ ...screenBox, background }}>
        {children}
      </div>
      <img src="/device-frame.webp" alt="" className="pointer-events-none absolute inset-0 size-full" />
    </div>
  );
}

// 화면 한 장: 스크린샷 또는 (없으면) 아이콘 스플래시
export function AppScreen({ app, src }: { app: App; src?: string }) {
  if (src) {
    return (
      <div className="relative size-full" style={{ background: app.screenColor ?? app.splashColor }}>
        <img
          src={src}
          alt={`${app.name} 화면`}
          draggable={false}
          className="absolute inset-x-0 bottom-0 w-full object-cover object-top"
          style={app.fullScreenShots ? { top: 0, height: "100%" } : { top: STATUS_BAR, height: `calc(100% - ${STATUS_BAR})` }}
        />
      </div>
    );
  }
  return (
    <div className="relative size-full" style={{ background: app.splashColor }}>
      {app.icon && (
        <img
          src={app.icon}
          alt=""
          className="absolute top-1/2 left-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[22%]"
        />
      )}
    </div>
  );
}
