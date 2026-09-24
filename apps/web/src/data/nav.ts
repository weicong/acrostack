import type { ComponentType } from "react";
import { CircleHelp, Files, Frame, Home, Map as MapIcon, PieChart } from "lucide-react";

/**
 * The single source of truth for the app's navigation.
 *
 * Both the sidebar and the breadcrumb read from this file, so a route's label
 * and its parent are declared exactly once. The breadcrumb is derived from the
 * URL, this map supplies the human-readable names.
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
};

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
        children: [
          { to: "/posts", label: "全部文章" },
          { to: "/posts/new", label: "新建" },
        ],
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
 * Route path -> label. Also drives the breadcrumb trail.
 *
 * `/posts/new` resolves to 首页 > 文章 > 新建 by walking `/` -> `/posts` -> `/posts/new`.
 */
export const routeLabels: Record<string, string> = {
  "/": "首页",
  "/posts": "文章",
  "/posts/new": "新建",
  "/about": "关于",
};

/** Flattened lookup so a node's icon can be reused in the breadcrumb. */
const navItemsByPath = new Map<string, NavNode>();

for (const group of navGroups) {
  for (const item of group.items) {
    if (!navItemsByPath.has(item.to)) {
      navItemsByPath.set(item.to, item);
    }
    // Children are indexed too, otherwise `/posts/new` would resolve to the
    // parent "文章" node and the trail would stop one level short.
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
