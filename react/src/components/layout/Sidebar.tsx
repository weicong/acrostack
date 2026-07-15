import { useMemo, useCallback } from "react";
import { useNavigate, useRouterState, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
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
import type { RouteMenuConfig, RouteMenuConfigChild } from "@/lib/routing/route-menu-types";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    minWidth: 0,
  },
  collapsed: {
    width: "52px",
    minWidth: "52px",
  },
});

interface SidebarProps {
  onNavigate?: () => void;
  collapsed?: boolean;
}

function isActivePath(pathname: string, itemPath: string): boolean {
  if (itemPath === "/") return pathname === "/";
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
}

export function Sidebar({ onNavigate, collapsed }: SidebarProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const router = useRouter();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();
  const styles = useStyles();

  // Derive menu items from router.routesById (single source of truth)
  const allMenuRoutes = useMemo(() => {
    const routes = Object.values(router.routesById).filter((r) => r.staticData?.menu != null);
    return routes.map((r) => ({
      path: r.path,
      menu: r.staticData!.menu as RouteMenuConfig,
    }));
  }, [router.routesById]);

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

    // Find the matching menu route
    const matched = visibleItems.find(({ path }) => path === value);
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

    onNavigate?.();
  };

  return (
    <NavDrawer
      className={mergeClasses(styles.root, collapsed ? styles.collapsed : "")}
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
            // When collapsed, render as a plain NavItem with icon only (no expandable category)
            if (collapsed) {
              return <NavItem key={path} value={path} icon={Icon ? <Icon /> : undefined} />;
            }

            return (
              <NavCategory key={path} value={path}>
                <NavCategoryItem icon={Icon ? <Icon /> : undefined}>
                  {t(menu.nameKey)}
                </NavCategoryItem>
                <NavSubItemGroup>
                  {visibleChildren.map((child) => (
                    <NavSubItem key={path + child.path} value={path + child.path}>
                      {t(child.nameKey)}
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
              {!collapsed && t(menu.nameKey)}
            </NavItem>
          );
        })}
      </NavDrawerBody>
    </NavDrawer>
  );
}
