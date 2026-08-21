import { createRoute } from "@tanstack/react-router";
import { Route as presentationRoute } from "./route";
import { PresentationPage } from "@/pages/classroom/PresentationPage";

/**
 * 投屏页（/presentation/$sessionId?t=token）。
 * 令牌由教师驾驶舱生成并经 URL 携带；页面存 sessionStorage 以便刷新恢复。
 */
export const Route = createRoute({
  getParentRoute: () => presentationRoute,
  path: "/$sessionId",
  component: PresentationPage,
});
