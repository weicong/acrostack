import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { authGuard } from "@/lib/routing/guards";

const AppLayout = lazyRouteComponent(() => import("@/components/layout/AppLayout"), "AppLayout");

/**
 * 管理后台布局路由（/admin/*）。
 *
 * AppLayout：品牌顶栏 + 侧边栏菜单 + 模拟登录横幅 + 状态栏。
 * 父级统一 authGuard（OIDC 登录）；叶子路由各自叠加 policy 守卫。
 * 管理模块路由文件（identity/cms/openiddict/saas/file-management 及
 * books/chat/settings 等扁平页）均挂在本路由下。
 *
 * AppLayout 采用 lazyRouteComponent：Sidebar 依赖 route-config 的
 * menuRoutes，而 route-config 又通过 import.meta.glob 导入本路由文件，
 * 若此处静态 import AppLayout 会形成 路由→布局→Sidebar→route-config 的
 * 循环依赖，生产构建下 eager glob 会拿到 undefined namespace。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: authGuard,
  component: AppLayout,
});
