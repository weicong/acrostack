import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { ClassroomLayout } from "@/components/layout/ClassroomLayout";
import { authGuard } from "@/lib/routing/guards";

/**
 * 教师课堂域父路由（/classroom/*）。
 * ClassroomLayout：品牌顶栏 + 课堂导航（我的课堂/题库/试卷），无管理 chrome；
 * 课堂面板（$sessionId，staticData.fullscreen）在全屏变体下渲染。
 * 父级仅要求登录；叶子路由各自校验权限。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classroom",
  beforeLoad: authGuard,
  component: ClassroomLayout,
});
