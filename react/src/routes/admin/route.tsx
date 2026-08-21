import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { AppLayout } from "@/components/layout/AppLayout";
import { authGuard } from "@/lib/routing/guards";

/**
 * 管理后台布局路由（/admin/*）。
 *
 * AppLayout：品牌顶栏 + 侧边栏菜单 + 模拟登录横幅 + 状态栏。
 * 父级统一 authGuard（OIDC 登录）；叶子路由各自叠加 policy 守卫。
 * 管理模块路由文件（identity/cms/openiddict/saas/file-management 及
 * books/chat/settings 等扁平页）均挂在本路由下。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: authGuard,
  component: AppLayout,
});
