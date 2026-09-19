/**
 * 侧栏菜单模型：把路由的菜单元数据（routeConfig）转换成
 * 参考界面那种「分组标题 + 扁平条目」的结构，并计算当前选中项。
 *
 * 分组规则：
 *   - 带 children 的顶层项 → 以自身 name 作为分组标题，children 作为条目；
 *   - 顶层叶子项 → 归入其 `group`（缺省「其他」）。
 * 组顺序由顶层项的 order 决定；组内条目按其 order 升序。
 */
import { useCallback, useMemo } from "react";
import { useRouterState } from "@tanstack/react-router";
import { menuRoutes } from "@/lib/routing/route-config";
import type { RouteMenuConfig, RouteMenuConfigChild } from "@/lib/routing/route-config-types";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";

export interface ShellMenuItem {
  /** 绝对路径（外链为原始 URL）。 */
  path: string;
  name: string;
  icon?: RouteMenuConfig["icon"];
  order: number;
  externalHref?: string;
  externalTarget?: "_self" | "_blank";
  externalRel?: string;
}

export interface ShellMenuGroup {
  caption: string;
  items: ShellMenuItem[];
}

export interface ShellMenuState {
  groups: ShellMenuGroup[];
  /** 当前路由对应的菜单项（用于顶栏标题与选中态）。 */
  activeItem?: ShellMenuItem;
  activeGroupCaption?: string;
}

const FALLBACK_GROUP = "其他";

function isActivePath(pathname: string, itemPath: string): boolean {
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
}

function resolveExternalHref(externalHref: RouteMenuConfig["externalHref"]): string | undefined {
  return typeof externalHref === "function" ? externalHref() : externalHref;
}

export function useShellMenu(): ShellMenuState {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();

  const isVisible = useCallback(
    (menu: RouteMenuConfig | RouteMenuConfigChild) => {
      if (menu.requiresAuth && !isAuthenticated) return false;
      if (!menu.requiredPolicy) return true;
      if (!isAuthenticated) return false;
      return isGranted(menu.requiredPolicy);
    },
    [isAuthenticated, isGranted],
  );

  const groups = useMemo<ShellMenuGroup[]>(() => {
    const result: ShellMenuGroup[] = [];

    const sortedRoutes = menuRoutes
      .filter(({ menu }) => isVisible(menu))
      .sort((a, b) => (a.menu.order ?? 0) - (b.menu.order ?? 0));

    for (const { path, menu } of sortedRoutes) {
      const children = menu.children?.filter((child) => isVisible(child)) ?? [];

      if (menu.children && children.length === 0) {
        continue;
      }

      if (children.length > 0) {
        result.push({
          caption: menu.name,
          items: children
            .map((child) => ({
              path: path + child.path,
              name: child.name,
              icon: child.icon,
              order: child.order ?? 0,
              externalHref: resolveExternalHref(child.externalHref),
              externalTarget: child.externalTarget,
              externalRel: child.externalRel,
            }))
            .sort((a, b) => a.order - b.order),
        });
        continue;
      }

      const caption = menu.group ?? FALLBACK_GROUP;
      const item: ShellMenuItem = {
        path,
        name: menu.name,
        icon: menu.icon,
        order: menu.order ?? 0,
        externalHref: resolveExternalHref(menu.externalHref),
        externalTarget: menu.externalTarget,
        externalRel: menu.externalRel,
      };
      const group = result.find((g) => g.caption === caption);
      if (group) {
        group.items.push(item);
      } else {
        result.push({ caption, items: [item] });
      }
    }

    for (const group of result) {
      group.items.sort((a, b) => a.order - b.order);
    }
    return result;
  }, [isVisible]);

  // 最长路径匹配优先：/admin 是 /admin/identity/users 的前缀，
  // 必须选中更深的那一项，否则面包屑与选中态会停在父级。
  const active = useMemo(() => {
    let best: { item: ShellMenuItem; caption: string } | undefined;
    for (const group of groups) {
      for (const item of group.items) {
        if (item.externalHref || !isActivePath(pathname, item.path)) {
          continue;
        }
        if (!best || item.path.length > best.item.path.length) {
          best = { item, caption: group.caption };
        }
      }
    }
    return best;
  }, [groups, pathname]);

  return {
    groups,
    activeItem: active?.item,
    activeGroupCaption: active?.caption,
  };
}
