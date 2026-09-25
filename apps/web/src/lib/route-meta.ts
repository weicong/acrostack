import type { ComponentType } from "react";
import { useMemo } from "react";
import { useRouter, type AnyRouter, type AnyRoute } from "@tanstack/react-router";

/**
 * Route metadata rides on TanStack Router's `staticData`, so every route file
 * declares its own place in the sidebar and its own breadcrumb name right next
 * to the component it belongs to.
 *
 * https://tanstack.com/router/latest/docs/framework/react/guide/static-route-data
 *
 * This module is the only place that reads that metadata back. It turns the
 * route tree into the sidebar's groups and into the label index the breadcrumb
 * is built from, which means adding a route adds a menu entry — there is no
 * second list to keep in sync.
 */

/** Props shared by the lucide icons used in the sidebar. */
export type RouteIcon = ComponentType<{ className?: string }>;

/** Declares a route as a sidebar menu item. */
export type RouteNavMeta = {
  /** Text shown in the sidebar, and in the breadcrumb unless `breadcrumb` overrides it. */
  label: string;
  icon?: RouteIcon;
  /**
   * Sidebar section the item belongs to. Sections render in the order their
   * first item appears, so no separate group list is needed.
   */
  group: string;
  /** Sort key inside the section — smaller first. */
  order: number;
};

/**
 * Breadcrumb name for a route the sidebar does not list.
 *
 * `/posts/new` is reached from the list page's button rather than the sidebar,
 * but the trail still has to name it — and it must be declared, otherwise the
 * segment would fall through to `/posts/$postId` and read 「文章详情」.
 */
export type RouteBreadcrumbMeta = {
  label: string;
};

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    nav?: RouteNavMeta;
    breadcrumb?: RouteBreadcrumbMeta;
  }
}

export type NavNode = {
  /** Route path, e.g. `/posts`. */
  to: string;
  label: string;
  icon?: RouteIcon;
  children?: NavNode[];
};

export type NavGroup = {
  label: string;
  items: NavNode[];
};

/** A node while the tree is still being assembled — it still carries its sort keys. */
type PendingNode = NavNode & { group: string; order: number; children: PendingNode[] };

/**
 * Turns every route that declares `staticData.nav` into the sidebar's groups.
 *
 * Nesting follows the route tree rather than a hand-written list: an item whose
 * nearest `nav`-declaring ancestor is another item becomes that item's child,
 * which is what the sidebar renders as a collapsible submenu. Nesting the route
 * files is therefore enough to nest the menu.
 */
export function collectNavGroups(router: AnyRouter): NavGroup[] {
  const pending = new Map<string, PendingNode>();
  const navRoutes: AnyRoute[] = [];

  for (const route of Object.values(router.routesById)) {
    const meta = route.options.staticData?.nav;
    if (!meta) continue;

    navRoutes.push(route);
    pending.set(route.id, {
      to: route.to,
      label: meta.label,
      icon: meta.icon,
      group: meta.group,
      order: meta.order,
      children: [],
    });
  }

  const topLevel: PendingNode[] = [];

  for (const route of navRoutes) {
    const node = pending.get(route.id);
    if (!node) continue;

    const parent = findNavParent(route, pending);
    if (parent) parent.children.push(node);
    else topLevel.push(node);
  }

  byOrder(topLevel);
  for (const node of topLevel) byOrder(node.children);

  // Grouped after sorting, so sections come out in the order of their first item.
  const groups = new Map<string, NavNode[]>();
  for (const node of topLevel) {
    const bucket = groups.get(node.group);
    if (bucket) bucket.push(toNavNode(node));
    else groups.set(node.group, [toNavNode(node)]);
  }

  return [...groups].map(([label, items]) => ({ label, items }));
}

/** The sidebar's groups, derived from the route tree. */
export function useNavGroups(): NavGroup[] {
  const router = useRouter();
  return useMemo(() => collectNavGroups(router), [router]);
}

function findNavParent(
  route: AnyRoute,
  pending: Map<string, PendingNode>,
): PendingNode | undefined {
  let parent = route.parentRoute as AnyRoute | undefined;

  while (parent) {
    const node = pending.get(parent.id);
    if (node) return node;
    parent = parent.parentRoute as AnyRoute | undefined;
  }

  return undefined;
}

function byOrder(nodes: PendingNode[]) {
  nodes.sort((a, b) => a.order - b.order);
}

function toNavNode(node: PendingNode): NavNode {
  const children = node.children.map(toNavNode);

  return {
    to: node.to,
    label: node.label,
    icon: node.icon,
    ...(children.length > 0 ? { children } : {}),
  };
}

/** A route's breadcrumb name, together with the path the router matches it by. */
export type RouteLabel = {
  /** Route path as the router knows it — `$param` segments kept, trailing slash trimmed. */
  pattern: string;
  label: string;
  icon?: RouteIcon;
};

export type RouteLabelIndex = {
  /** Fixed paths (`/posts/new`), matched exactly. */
  byPath: Map<string, RouteLabel>;
  /** Parameterised paths (`/posts/$postId`), matched segment by segment. */
  dynamic: RouteLabel[];
};

/**
 * Indexes every route that can name itself.
 *
 * A route with `staticData.nav` is indexed as well, so the sidebar and the
 * breadcrumb read the same label and cannot drift apart.
 */
export function createRouteLabelIndex(router: AnyRouter): RouteLabelIndex {
  const byPath = new Map<string, RouteLabel>();
  const dynamic: RouteLabel[] = [];

  for (const route of Object.values(router.routesById)) {
    const meta = route.options.staticData;
    const label = meta?.nav?.label ?? meta?.breadcrumb?.label;
    if (label === undefined) continue;

    const entry: RouteLabel = { pattern: route.to, label, icon: meta?.nav?.icon };

    if (route.to.includes("$")) dynamic.push(entry);
    else byPath.set(route.to, entry);
  }

  return { byPath, dynamic };
}

/** The label index for the current router. */
export function useRouteLabelIndex(): RouteLabelIndex {
  const router = useRouter();
  return useMemo(() => createRouteLabelIndex(router), [router]);
}

/**
 * Resolves one pathname prefix — `/posts/abc123` — to the route that owns it.
 *
 * Fixed paths are checked first, which is what keeps `/posts/new` labelled
 * 「新建」 instead of matching `/posts/$postId`. Parameterised patterns then
 * have to agree on every literal segment and on the segment count, so
 * `/posts/$postId` never swallows `/posts/$postId/edit`.
 */
export function matchRouteLabel(index: RouteLabelIndex, path: string): RouteLabel | undefined {
  const exact = index.byPath.get(path);
  if (exact) return exact;

  const segments = path.split("/").filter(Boolean);

  for (const candidate of index.dynamic) {
    const pattern = candidate.pattern.split("/").filter(Boolean);
    if (pattern.length !== segments.length) continue;

    const matches = pattern.every(
      (segment, position) => segment.startsWith("$") || segment === segments[position],
    );
    if (matches) return candidate;
  }

  return undefined;
}
