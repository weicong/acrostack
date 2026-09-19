import { useMemo, useCallback } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Open20Regular } from "@fluentui/react-icons";
import {
  NavDrawer,
  NavDrawerBody,
  NavItem,
  NavCategory,
  NavCategoryItem,
  NavSubItemGroup,
  NavSubItem,
  type OnNavItemSelectData,
} from "@fluentui/react-components";
import type { RouteMenuConfig, RouteMenuConfigChild } from "@/lib/routing/route-config-types";
import { menuRoutes } from "@/lib/routing/route-config";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";

function isActivePath(pathname: string, itemPath: string): boolean {
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
}

/** 侧边导航：使用 Fluent UI 的 NavDrawer（inline 常开），不自定义宽度与配色。 */
export function Sidebar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();

  // Menu routes are collected from route files via route-config.ts (single source of truth).
  const allMenuRoutes = menuRoutes;

  const isItemVisible = useCallback(
    (menu: RouteMenuConfig | RouteMenuConfigChild) => {
      if (menu.requiresAuth && !isAuthenticated) return false;
      if (!menu.requiredPolicy) return true;
      if (!isAuthenticated) return false;
      return isGranted(menu.requiredPolicy);
    },
    [isAuthenticated, isGranted],
  );

  const visibleItems = useMemo(
    () =>
      allMenuRoutes
        .filter(({ menu }) => isItemVisible(menu))
        .sort((a, b) => (a.menu.order ?? 0) - (b.menu.order ?? 0)),
    [allMenuRoutes, isItemVisible],
  );

  // Determine the selected NavItem value based on current pathname
  const selectedValue = useMemo(() => {
    for (const { path, menu } of visibleItems) {
      const visibleChildren = menu.children?.filter((child) => isItemVisible(child));
      if (visibleChildren) {
        for (const child of visibleChildren) {
          if (isActivePath(pathname, path + child.path)) return child.path;
        }
      }
      if (isActivePath(pathname, path)) return path;
    }
    return undefined;
  }, [pathname, visibleItems, isItemVisible]);

  // Determine which categories should show as selected (when a child is active but category is collapsed)
  const selectedCategoryValue = useMemo(() => {
    for (const { path, menu } of visibleItems) {
      const visibleChildren = menu.children?.filter((child) => isItemVisible(child));
      if (visibleChildren && visibleChildren.some((c) => isActivePath(pathname, path + c.path))) {
        return path;
      }
    }
    return undefined;
  }, [pathname, visibleItems, isItemVisible]);

  const handleNavItemSelect = (_: unknown, data: OnNavItemSelectData) => {
    const value = data.value;
    if (!value) return;

    // value is an absolute path. Search both top-level items and their children.
    type Matched = { path: string; menu: RouteMenuConfig | RouteMenuConfigChild };
    let matched: Matched | undefined;
    for (const item of visibleItems) {
      if (item.path === value) {
        matched = item;
        break;
      }
      const child = item.menu.children?.find((c) => item.path + c.path === value);
      if (child) {
        matched = { path: item.path + child.path, menu: child };
        break;
      }
    }
    if (!matched) return;

    const externalHref =
      typeof matched.menu.externalHref === "function"
        ? matched.menu.externalHref()
        : matched.menu.externalHref;

    if (externalHref) {
      window
        .open(externalHref, matched.menu.externalTarget ?? "_blank", matched.menu.externalRel)
        ?.focus();
    } else {
      void navigate({ to: matched.path });
    }
  };

  return (
    <NavDrawer
      type="inline"
      open
      selectedValue={selectedValue}
      selectedCategoryValue={selectedCategoryValue}
      onNavItemSelect={handleNavItemSelect}
      multiple
      defaultOpenCategories={visibleItems
        .filter(({ path, menu }) =>
          menu.children
            ?.filter((child) => isItemVisible(child))
            .some((c) => isActivePath(pathname, path + c.path)),
        )
        .map(({ path }) => path)}
    >
      <NavDrawerBody>
        {visibleItems.map(({ path, menu }) => {
          const Icon = menu.icon;
          const visibleChildren = menu.children?.filter((child) => isItemVisible(child));
          const hasChildren = visibleChildren && visibleChildren.length > 0;

          if (menu.children && !hasChildren) {
            return null;
          }

          if (hasChildren) {
            return (
              <NavCategory key={path} value={path}>
                <NavCategoryItem icon={Icon ? <Icon /> : undefined}>{menu.name}</NavCategoryItem>
                <NavSubItemGroup>
                  {visibleChildren.map((child) => (
                    <NavSubItem key={path + child.path} value={path + child.path}>
                      {child.name}
                    </NavSubItem>
                  ))}
                </NavSubItemGroup>
              </NavCategory>
            );
          }

          const externalHref =
            typeof menu.externalHref === "function" ? menu.externalHref() : menu.externalHref;

          return (
            <NavItem
              key={path}
              value={path}
              icon={externalHref ? <Open20Regular /> : Icon ? <Icon /> : undefined}
            >
              {menu.name}
            </NavItem>
          );
        })}
      </NavDrawerBody>
    </NavDrawer>
  );
}
