import { Outlet, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@workspace/layout";
import { getApplicationName, getBackendAccountUrl, useAuth } from "@workspace/core";
import type { NavUserAction } from "@workspace/layout";

import { AppBreadcrumb } from "./breadcrumb";
import { renderLink, useShellNav, useShellUser } from "./layout";
import { ImpersonationBanner } from "./impersonation-banner";

/** 内容列最大宽度：与外壳的内边距一起保证长行可读。 */
const CONTENT_MAX_WIDTH = "1440px";

/** 侧栏折叠状态在纯 SPA 里刷新即丢，因此自己持久化。 */
const SIDEBAR_COOKIE = "acrostack.sidebar-open";

function readSidebarOpen(): boolean {
  if (typeof document === "undefined") return true;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${SIDEBAR_COOKIE}=(true|false)`));
  return match?.[1] !== "false";
}

/**
 * 管理后台布局（/admin/*）。
 *
 * 外壳来自 `@workspace/layout`：它不认识路由库，导航数据与链接渲染器都由这里注入。
 * 槽位映射：`header` = 面包屑、`banner` = 模拟登录提示、`children` = 当前页面。
 * 窄屏（< md）时外壳把侧栏收进抽屉并自动渲染开关。
 */
export function AppLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const nav = useShellNav();
  const user = useShellUser();

  const onUserAction = (action: NavUserAction) => {
    switch (action) {
      case "profile":
        void navigate({ to: "/admin/profile" });
        break;
      case "account":
        window.location.assign(getBackendAccountUrl("/account/manage"));
        break;
      case "sessions":
        window.location.assign(getBackendAccountUrl("/account/sessions"));
        break;
      case "logout":
        void logout();
        break;
    }
  };

  return (
    <AppShell
      nav={nav}
      user={user}
      brand={{ mark: getApplicationName().charAt(0).toUpperCase(), name: getApplicationName() }}
      header={<AppBreadcrumb />}
      banner={<ImpersonationBanner />}
      defaultSidebarOpen={readSidebarOpen()}
      themeStorageKey="acrostack.theme"
      renderLink={renderLink}
      onUserAction={onUserAction}
    >
      {/* 内容列限宽并水平居中；窄屏时自然占满 */}
      <div className="mx-auto flex w-full flex-col gap-6" style={{ maxWidth: CONTENT_MAX_WIDTH }}>
        <Outlet />
      </div>
    </AppShell>
  );
}
