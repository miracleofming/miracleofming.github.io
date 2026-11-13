/* eslint-disable @next/next/no-img-element -- static export라 next/image 최적화를 쓰지 않는다 */
import type { App } from "@/lib/apps";

// public/device-frame.webp(640×1308)는 화면 부분이 투명하다.
// 화면 영역(35,33 ~ 604,1273)을 %로 바꿔 그 자리에 앱 화면을 깔고, 프레임을 위에 겹친다.
const screen = {
  left: `${(35 / 640) * 100}%`,
  top: `${(33 / 1308) * 100}%`,
  width: `${(570 / 640) * 100}%`,
  height: `${(1241 / 1308) * 100}%`,
  // 화면 모서리 반경 약 70px → 가로·세로 비율로 각각 환산
  borderRadius: `${(70 / 570) * 100}% / ${(70 / 1241) * 100}%`,
};

export function DeviceFrame({ app }: { app: App }) {
  return (
    <div className="relative aspect-[640/1308] w-full">
      <div className="absolute overflow-hidden" style={{ ...screen, background: app.splashColor }}>
        {app.screenshot ? (
          <img src={app.screenshot} alt={`${app.name} 화면`} className="size-full object-cover" />
        ) : (
          // 스크린샷이 생기기 전까지는 스플래시 화면처럼 아이콘을 가운데에 둔다.
          app.icon && (
            <img
              src={app.icon}
              alt=""
              className="absolute top-1/2 left-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[22%]"
            />
          )
        )}
      </div>
      <img src="/device-frame.webp" alt="" className="pointer-events-none absolute inset-0 size-full" />
    </div>
  );
}
