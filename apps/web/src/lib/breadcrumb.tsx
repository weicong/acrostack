import { useBreadcrumbOverrides, RouteBreadcrumb, type Crumb } from "@workspace/layout";

import { matchRouteLabel, useRouteLabelIndex, type RouteLabelIndex } from "./route-meta";
import { renderLink } from "./layout";

/**
 * Derives a breadcrumb trail from a pathname.
 *
 * Every path prefix is a candidate crumb, so `/posts/new` becomes
 * 首页 / 文章 / 新建 — no per-route hardcoding. Labels come from the route tree
 * (each route names itself via `staticData`), so the sidebar and the breadcrumb
 * can never drift apart.
 *
 * Dynamic segments (`/posts/abc123`) resolve to the route that matched them,
 * e.g. `/posts/$postId`; `overrides` lets the page substitute the real title.
 *
 * Deriving the trail is app-specific, so it lives here; `@workspace/layout`
 * only renders the `Crumb[]` it produces.
 */
export function buildCrumbs(
  pathname: string,
  index: RouteLabelIndex,
  overrides: Record<string, string> = {},
): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  const paths = segments.map((_, index) => `/${segments.slice(0, index + 1).join("/")}`);
  // Always anchor the trail at the root route.
  paths.unshift("/");

  const crumbs: Crumb[] = [];

  for (const path of paths) {
    const label = matchRouteLabel(index, path);
    if (!label) continue;

    crumbs.push({
      to: path,
      label: overrides[label.pattern] ?? label.label,
      icon: label.icon,
    });
  }

  return crumbs;
}

/** The breadcrumb for the current pathname, rendered by the layout package. */
export function AppBreadcrumb({ pathname }: { pathname: string }) {
  const index = useRouteLabelIndex();
  const overrides = useBreadcrumbOverrides();

  return (
    <RouteBreadcrumb items={buildCrumbs(pathname, index, overrides)} renderLink={renderLink} />
  );
}
