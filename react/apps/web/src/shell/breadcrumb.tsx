import { useMemo } from "react";
import { useRouterState } from "@tanstack/react-router";
import { RouteBreadcrumb } from "@acrostack/layout";
import type { Crumb } from "@acrostack/layout";

import { matchRouteLabel, useRouteLabelIndex } from "./route-meta";
import { renderLink } from "./layout";

/**
 * 由 URL 推导面包屑：把 pathname 逐段累积成前缀，每个前缀到路由标签索引里查名字。
 *
 * 层级来自路由树，因此新增路由只要声明 `staticData.nav`（或 `breadcrumb`）就自动
 * 出现在面包屑里；没有声明的前缀直接跳过，不会留下光秃秃的路径片段。
 */
export function useBreadcrumbs(): Crumb[] {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const index = useRouteLabelIndex();

  return useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const crumbs: Crumb[] = [];

    for (let position = 0; position < segments.length; position += 1) {
      const prefix = "/" + segments.slice(0, position + 1).join("/");
      // 索引路由的 `to` 带尾斜杠（`/admin/`），所以两种写法都要试
      const match = matchRouteLabel(index, prefix) ?? matchRouteLabel(index, `${prefix}/`);
      if (!match) continue;

      // 末级不生成链接（它就是当前页）
      const isLast = position === segments.length - 1;
      crumbs.push({
        label: match.label,
        ...(isLast ? {} : { to: match.pattern }),
      });
    }

    return crumbs;
  }, [pathname, index]);
}

/** 顶栏里的面包屑。 */
export function AppBreadcrumb() {
  const items = useBreadcrumbs();
  if (items.length === 0) return null;
  return <RouteBreadcrumb items={items} renderLink={renderLink} />;
}
