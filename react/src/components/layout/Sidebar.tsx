import { useMemo } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Open20Regular } from "@fluentui/react-icons";
import {
  NavDrawer,
  NavDrawerBody,
  NavItem,
  NavCategory,
  NavCategoryItem,
  NavSubItemGroup,
  NavSubItem,
  AppItem,
  type OnNavItemSelectData,
} from "@fluentui/react-components";
import { routeConfig, type RouteConfigItem } from "@/lib/routing/route-config";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    minWidth: 0,
    background: tokens.colorNeutralBackground1,
  },
});

interface SidebarProps {
  onNavigate?: () => void;
}

function isActivePath(pathname: string, itemPath: string): boolean {
  if (itemPath === "/") return pathname === "/";
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();
  const styles = useStyles();

  const isItemVisible = (item: RouteConfigItem) => {
    if (item.requiresAuth && !isAuthenticated) return false;
    if (!item.requiredPolicy) return true;
    if (!isAuthenticated) return false;
    return isGranted(item.requiredPolicy);
  };

  const visibleItems = useMemo(
    () => routeConfig.filter(isItemVisible).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated, isGranted],
  );

  // Determine the selected NavItem value based on current pathname
  const selectedValue = useMemo(() => {
    for (const item of visibleItems) {
      const visibleChildren = item.children?.filter(isItemVisible);
      if (visibleChildren) {
        for (const child of visibleChildren) {
          if (isActivePath(pathname, child.path)) return child.path;
        }
      }
      if (isActivePath(pathname, item.path)) return item.path;
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, visibleItems]);

  // Determine which categories should show as selected (when a child is active but category is collapsed)
  const selectedCategoryValue = useMemo(() => {
    for (const item of visibleItems) {
      const visibleChildren = item.children?.filter(isItemVisible);
      if (visibleChildren && visibleChildren.some((c) => isActivePath(pathname, c.path))) {
        return item.path;
      }
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, visibleItems]);

  const handleNavItemSelect = (_: unknown, data: OnNavItemSelectData) => {
    const value = data.value;
    if (!value) return;

    // Find the matching route config item to check for external links
    const findItem = (items: RouteConfigItem[]): RouteConfigItem | undefined => {
      for (const item of items) {
        if (item.path === value) return item;
        const found = item.children ? findItem(item.children) : undefined;
        if (found) return found;
      }
      return undefined;
    };

    const matched = findItem(visibleItems);
    if (!matched) return;

    const externalHref =
      typeof matched.externalHref === "function" ? matched.externalHref() : matched.externalHref;

    if (externalHref) {
      window.open(externalHref, matched.externalTarget ?? "_blank", matched.externalRel)?.focus();
    } else {
      void navigate({ to: matched.path });
    }

    onNavigate?.();
  };

  return (
    <NavDrawer
      className={styles.root}
      type="inline"
      open
      selectedValue={selectedValue}
      selectedCategoryValue={selectedCategoryValue}
      onNavItemSelect={handleNavItemSelect}
      multiple
      defaultOpenCategories={visibleItems
        .filter((item) =>
          item.children?.filter(isItemVisible).some((c) => isActivePath(pathname, c.path)),
        )
        .map((item) => item.path)}
    >
      <NavDrawerBody>
        <AppItem>AcroStack</AppItem>
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const visibleChildren = item.children?.filter(isItemVisible);
          const hasChildren = visibleChildren && visibleChildren.length > 0;

          if (item.children && !hasChildren) {
            return null;
          }

          if (hasChildren) {
            return (
              <NavCategory key={item.path} value={item.path}>
                <NavCategoryItem icon={Icon ? <Icon /> : undefined}>
                  {t(item.nameKey)}
                </NavCategoryItem>
                <NavSubItemGroup>
                  {visibleChildren.map((child) => (
                    <NavSubItem key={child.path} value={child.path}>
                      {t(child.nameKey)}
                    </NavSubItem>
                  ))}
                </NavSubItemGroup>
              </NavCategory>
            );
          }

          const externalHref =
            typeof item.externalHref === "function" ? item.externalHref() : item.externalHref;

          return (
            <NavItem
              key={item.path}
              value={item.path}
              icon={externalHref ? <Open20Regular /> : Icon ? <Icon /> : undefined}
            >
              {t(item.nameKey)}
            </NavItem>
          );
        })}
      </NavDrawerBody>
    </NavDrawer>
  );
}
