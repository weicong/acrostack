import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { routeConfig, type RouteConfigItem } from "@/lib/routing/route-config";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";

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
    const Icon = item.icon;
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
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              highlight
                ? "text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {Icon && <Icon className="size-4 shrink-0" />}
            <span className="flex-1 text-left">{t(item.nameKey)}</span>
            {isExpanded ? (
              <ChevronDown className="size-4 shrink-0" />
            ) : (
              <ChevronRight className="size-4 shrink-0" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
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
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {Icon && <Icon className="size-4 shrink-0" />}
            <span className="flex-1">{t(item.nameKey)}</span>
            <ExternalLink className="size-3.5 shrink-0 opacity-70" />
          </a>
        );
      }

      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          {Icon && <Icon className="size-4 shrink-0" />}
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
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <span className="flex-1">{t(item.nameKey)}</span>
          <ExternalLink className="size-3.5 shrink-0 opacity-70" />
        </a>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        onClick={onNavigate}
        className={cn(
          "rounded-lg px-3 py-1.5 text-sm transition-colors",
          isActive
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {t(item.nameKey)}
      </Link>
    );
  };

  return (
    <nav className="flex h-full min-h-0 flex-1 flex-col border-r border-border bg-muted/30 p-4">
      <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-1">
        {visibleItems.map((item) => renderItem(item, 0))}
      </div>
    </nav>
  );
}
