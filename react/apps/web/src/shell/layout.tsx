import { useCallback } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import type { LinkRenderer, ShellUser } from "@acrostack/layout";
import { useAuth, useCurrentUser, usePermissions } from "@acrostack/core";

import { useNavGroups, type NavGroup, type RouteNavMeta } from "./route-meta";

/**
 * 宿主装配层：把「本应用的路由树 + ABP 权限 + OIDC 会话」翻译成
 * `@acrostack/layout` 认识的数据形状。
 *
 * `@acrostack/layout` 刻意不认识路由库与权限系统——它只收数据、要一个链接渲染器。
 * 本文件就是那个翻译层，也是本应用唯一 import `@tanstack/react-router` 的壳层文件。
 */

/**
 * 链接渲染器：模块级常量，身份稳定。
 *
 * 必须返回**裸**元素——Base UI 的 `render` 会把按钮自己的 `className` 与条目的
 * children 合并进来，这里再带 children 会渲染两遍。
 */
export const renderLink: LinkRenderer = ({ to }) => <Link to={to} />;

/** 侧栏分组：路由树 → 按 ABP 权限过滤 → 分组。 */
export function useShellNav(): NavGroup[] {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();

  const isVisible = useCallback(
    (meta: RouteNavMeta) => {
      if (meta.requiresAuth && !isAuthenticated) return false;
      if (!meta.requiredPolicy) return true;
      // 未登录时权限清单还没加载，先按「不可见」处理，避免闪现后又消失
      if (!isAuthenticated) return false;
      return isGranted(meta.requiredPolicy);
    },
    [isAuthenticated, isGranted],
  );

  return useNavGroups(isVisible, pathname);
}

/** 侧栏页脚展示的账户。 */
export function useShellUser(): ShellUser {
  const { user } = useAuth();
  const currentUser = useCurrentUser();

  const name =
    currentUser?.name ??
    user?.name ??
    currentUser?.userName ??
    user?.userName ??
    user?.email ??
    "用户";
  const email = currentUser?.email ?? user?.email ?? "";

  return {
    name,
    email: email === name ? "" : email,
    initials: name.slice(0, 1).toUpperCase(),
  };
}
