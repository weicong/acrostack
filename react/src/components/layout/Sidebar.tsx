import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ChevronDown20Regular, ChevronRight20Regular, Open20Regular } from "@fluentui/react-icons";
import { routeConfig, type RouteConfigItem } from "@/lib/routing/route-config";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";
import type { ComponentType } from "react";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { t } = useTranslation();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isGranted } = usePermissions();
  const { isAuthenticated } = useAuth();

  const isItemVisible = (item: RouteConfigItem) => {
    if (item.requiresAuth && !isAuthenticated) return false;
    if (!item.requiredPolicy) return true;
    if (!isAuthenticated) return false;
    return isGranted(item.requiredPolicy);
  };

  const visibleItems = routeConfig
    .filter(isItemVisible)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const isDescendantActive = (item: RouteConfigItem): boolean =>
    item.children?.some(
      (child) =>
        isItemVisible(child) &&
        (pathname === child.path ||
          pathname.startsWith(child.path + "/") ||
          isDescendantActive(child)),
    ) ?? false;

  const collectExpandedPaths = (items: RouteConfigItem[], set: Set<string>) => {
    for (const item of items) {
      if (isDescendantActive(item)) {
        set.add(item.path);
      }
      const visibleChildren = item.children?.filter(isItemVisible);
      if (visibleChildren) {
        collectExpandedPaths(visibleChildren, set);
      }
    }
  };

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    collectExpandedPaths(visibleItems, initial);
    return initial;
  });

  useEffect(() => {
    setExpanded((prev) => {
      const toAdd = new Set<string>();
      collectExpandedPaths(visibleItems, toAdd);
      let changed = false;
      for (const path of toAdd) {
        if (!prev.has(path)) {
          changed = true;
          break;
        }
      }
      if (!changed) return prev;
      const next = new Set(prev);
      for (const path of toAdd) next.add(path);
      return next;
    });
  }, [pathname]);

  const toggleExpanded = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const renderItem = (item: RouteConfigItem, depth: number) => {
    const Icon = item.icon as
      | ComponentType<{ className?: string; style?: React.CSSProperties }>
      | undefined;
    const externalHref =
      typeof item.externalHref === "function" ? item.externalHref() : item.externalHref;
    const visibleChildren = item.children?.filter(isItemVisible);
    const hasChildren = visibleChildren && visibleChildren.length > 0;

    if (item.children && !hasChildren) {
      return null;
    }

    if (hasChildren) {
      const isExpanded = expanded.has(item.path);
      const highlight = isDescendantActive(item);

      return (
        <div key={item.path}>
          <button
            onClick={() => toggleExpanded(item.path)}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              color: highlight ? "var(--colorBrandForeground1)" : "var(--colorNeutralForeground3)",
            }}
          >
            {Icon && <Icon style={{ width: "1rem", height: "1rem", flexShrink: 0 }} />}
            <span style={{ flex: 1, textAlign: "left" }}>{t(item.nameKey)}</span>
            {isExpanded ? <ChevronDown20Regular /> : <ChevronRight20Regular />}
          </button>
          {isExpanded && (
            <div
              style={{
                marginLeft: "1rem",
                marginTop: "0.25rem",
                borderLeft: "1px solid var(--colorNeutralStroke1)",
                paddingLeft: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {visibleChildren.map((child) => renderItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    if (depth === 0) {
      const isActive =
        pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));

      if (externalHref) {
        return (
          <a
            key={item.path}
            href={externalHref}
            target={item.externalTarget}
            rel={item.externalRel}
            onClick={onNavigate}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
              textDecoration: "none",
              color: "var(--colorNeutralForeground3)",
            }}
          >
            {Icon && <Icon style={{ width: "1rem", height: "1rem", flexShrink: 0 }} />}
            <span style={{ flex: 1 }}>{t(item.nameKey)}</span>
            <Open20Regular style={{ opacity: 0.7 }} />
          </a>
        );
      }

      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.5rem 0.75rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "0.5rem",
            textDecoration: "none",
            background: isActive ? "var(--colorBrandBackground)" : "transparent",
            color: isActive
              ? "var(--colorNeutralForegroundOnBrand)"
              : "var(--colorNeutralForeground3)",
          }}
        >
          {Icon && <Icon style={{ width: "1rem", height: "1rem", flexShrink: 0 }} />}
          {t(item.nameKey)}
        </Link>
      );
    }

    const isActive = pathname === item.path || pathname.startsWith(item.path + "/");

    if (externalHref) {
      return (
        <a
          key={item.path}
          href={externalHref}
          target={item.externalTarget}
          rel={item.externalRel}
          onClick={onNavigate}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.75rem",
            fontSize: "0.875rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            color: "var(--colorNeutralForeground3)",
          }}
        >
          <span style={{ flex: 1 }}>{t(item.nameKey)}</span>
          <Open20Regular style={{ opacity: 0.7 }} />
        </a>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        onClick={onNavigate}
        style={{
          padding: "0.375rem 0.75rem",
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: isActive ? 600 : 400,
          background: isActive ? "var(--colorBrandBackground)" : "transparent",
          color: isActive
            ? "var(--colorNeutralForegroundOnBrand)"
            : "var(--colorNeutralForeground3)",
        }}
      >
        {t(item.nameKey)}
      </Link>
    );
  };

  return (
    <nav
      style={{
        display: "flex",
        height: "100%",
        minHeight: 0,
        flex: 1,
        flexDirection: "column",
        borderRight: "1px solid var(--colorNeutralStroke1)",
        background: "var(--colorNeutralBackground3)",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          minHeight: 0,
          flex: 1,
          flexDirection: "column",
          gap: "0.25rem",
          overflowY: "auto",
          paddingRight: "0.25rem",
        }}
      >
        {visibleItems.map((item) => renderItem(item, 0))}
      </div>
    </nav>
  );
}
