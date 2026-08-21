import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { StudentLayout } from "@/components/layout/StudentLayout";

/**
 * 学员端父路由（/student）：匿名访问（课堂短期令牌鉴权，非 OIDC 会话）。
 * StudentLayout：移动优先窄栏容器，无侧栏/顶栏管理 chrome。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/student",
  component: StudentLayout,
});
