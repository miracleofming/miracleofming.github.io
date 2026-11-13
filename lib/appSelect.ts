// 히어로 "만든 앱" 줄(목차)과 앱 섹션 탭(본문)을 잇는 약속.
// 히어로에서 앱을 누르면 이 이벤트를 보내고, 앱 섹션은 받아서 그 탭을 고른다.
// 주소에도 ?app=slug#apps 로 남겨서, 링크를 공유하거나 새로고침해도 같은 앱이 열린다.
export const APP_SELECT_EVENT = "app:select";

export function appHref(slug: string) {
  return `/?app=${slug}#apps`;
}

export function selectApp(slug: string) {
  window.history.replaceState(null, "", appHref(slug));
  window.dispatchEvent(new CustomEvent<string>(APP_SELECT_EVENT, { detail: slug }));
  document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" });
}
