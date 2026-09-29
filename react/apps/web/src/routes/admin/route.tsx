import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "@workspace/core";

import { AppLayout } from "@/shell/app-layout";

/**
 * 管理后台布局路由（/admin/*）。
 *
 * 父级统一 authGuard（OIDC 登录）；叶子路由各自叠加 policy 守卫。
 */
export const Route = createFileRoute("/admin")({
  beforeLoad: authGuard,
  component: AppLayout,
});
