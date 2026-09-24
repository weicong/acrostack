import type { ComponentType } from "react";
import { CircleHelp, Files, Frame, Home, Map as MapIcon, PieChart } from "lucide-react";

/**
 * Sidebar navigation data, plus the dynamic-segment table used by breadcrumbs.
 *
 * The sidebar is declared here as explicit groups/items because the route tree
 * alone cannot express ordering or which nodes belong together. Breadcrumbs are
 * derived from the URL; this file supplies the human-readable names and the
 * `dynamicRoutes` patterns that fixed paths cannot cover.
 *
 * Keep the `to` values in sync with the files under `src/routes/`.
 */

export type NavNode = {
  /** Route path. Must match a real file-based route — no `#` placeholders. */
  to: string;
  /** Label used by both the sidebar and the breadcrumb. */
  label: string;
  icon?: ComponentType<{ className?: string }>;
  /** Billing-style count, mirrored from the shadcn sidebar-07 reference. */
  badge?: string;
  children?: NavNode[];
  /**
   * When true this node is only reachable via a dynamic URL (e.g. `/posts/$postId`)
   * and is therefore never rendered in the sidebar — it exists purely so the
   * breadcrumb can name the segment.
   */
  hidden?: boolean;
};

/**
 * Dynamic routes, matched against concrete pathnames by `matchDynamicRoute`.
 *
 * These cannot live in `navGroups` because they have no fixed `to` value, and
 * they must never show up in the sidebar. Keep them in sync with the
 * `$param` folders under `src/routes/`.
 */
export type DynamicRoute = {
  /** Pattern with `$param` placeholders, e.g. `/posts/$postId/edit`. */
  pattern: string;
  /** Label for the breadcrumb, or a resolver when the label needs the params. */
  label: string | ((params: Record<string, string>) => string);
};

export const dynamicRoutes: DynamicRoute[] = [
  {
    pattern: "/posts/$postId",
    // Falls back to a generic name; the detail page overrides it with the real
    // post title via `useBreadcrumbLabel` so a deleted post still labels sanely.
    label: "文章详情",
  },
  {
    pattern: "/posts/$postId/edit",
    label: "编辑",
  },
];

export type NavGroup = {
  label: string;
  items: NavNode[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Platform",
    items: [
      {
        to: "/",
        label: "首页",
        icon: Home,
      },
      {
        to: "/posts",
        label: "文章",
        icon: Files,
      },
      {
        to: "/about",
        label: "关于",
        icon: CircleHelp,
      },
    ],
  },
  {
    label: "Projects",
    items: [
      {
        to: "/about",
        label: "设计工程",
        icon: Frame,
      },
      {
        to: "/about",
        label: "市场与销售",
        icon: PieChart,
      },
      {
        to: "/about",
        label: "差旅",
        icon: MapIcon,
      },
    ],
  },
];

/**
 * Static routes that have no sidebar entry but still need a breadcrumb label.
 *
 * `/posts/new` is reachable from the list page's button rather than the
 * sidebar, so it is absent from `navGroups`. It must be declared here
 * nonetheless — otherwise `matchDynamicRoute` would match it against
 * `/posts/$postId` and label it "文章详情".
 */
export const staticRoutes: Record<string, string> = {
  "/posts/new": "新建",
};

/** Flattened lookup so a node's icon can be reused in the breadcrumb. */
const navItemsByPath = new Map<string, NavNode>();

for (const group of navGroups) {
  for (const item of group.items) {
    if (!navItemsByPath.has(item.to)) {
      navItemsByPath.set(item.to, item);
    }
    // Children are indexed too, so a nested route keeps its own label/icon
    // instead of resolving to its parent node and stopping the trail short.
    for (const child of item.children ?? []) {
      if (!navItemsByPath.has(child.to)) {
        navItemsByPath.set(child.to, child);
      }
    }
  }
}

export function findNavItem(path: string): NavNode | undefined {
  return navItemsByPath.get(path);
}

/**
 * Label for a static route that the sidebar does not list (see `staticRoutes`).
 */
export function findStaticRouteLabel(path: string): string | undefined {
  return staticRoutes[path];
}

export type DynamicMatch = {
  /** The pattern that matched, e.g. `/posts/$postId`. */
  pattern: string;
  /** Resolved label for the breadcrumb. */
  label: string;
  /** Captured `$param` values keyed by name. */
  params: Record<string, string>;
};

/**
 * Matches a concrete pathname against `dynamicRoutes`.
 *
 * Patterns are compared segment by segment: a `$name` segment matches anything
 * and is captured, while literal segments must match exactly. Returns the match
 * for a single path prefix (e.g. `/posts/abc`), or `undefined`.
 */
export function matchDynamicRoute(path: string): DynamicMatch | undefined {
  // A real static route always wins: without this, `/posts/new` would match
  // `/posts/$postId` and be labelled as a post detail page.
  if (staticRoutes[path] !== undefined) return undefined;

  const pathSegments = path.split("/").filter(Boolean);

  for (const route of dynamicRoutes) {
    const patternSegments = route.pattern.split("/").filter(Boolean);
    if (patternSegments.length !== pathSegments.length) continue;

    const params: Record<string, string> = {};
    let matched = true;

    for (const [index, patternSegment] of patternSegments.entries()) {
      const value = pathSegments[index];
      if (patternSegment.startsWith("$")) {
        params[patternSegment.slice(1)] = decodeURIComponent(value);
        continue;
      }
      if (patternSegment !== value) {
        matched = false;
        break;
      }
    }

    if (!matched) continue;

    return {
      pattern: route.pattern,
      label: typeof route.label === "function" ? route.label(params) : route.label,
      params,
    };
  }

  return undefined;
}
