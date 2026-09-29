import type { ComponentType } from "react";
import { useMemo } from "react";
import { useRouter, type AnyRoute, type AnyRouter } from "@tanstack/react-router";

/**
 * 路由元数据挂在 TanStack Router 的 `staticData` 上，因此每个路由文件在声明
 * 组件的同时声明自己在侧栏里的位置与面包屑里的名字——**没有第二份清单要同步**。
 *
 * https://tanstack.com/router/latest/docs/framework/react/guide/static-route-data
 *
 * 本模块是唯一读回这些元数据的地方：把路由树变成侧栏的分组，以及面包屑用到的
 * 标签索引。菜单可见性（ABP 权限）由宿主注入的谓词决定，本模块不认识权限系统。
 */

/** Props shared by the lucide icons used in the sidebar. */
export type RouteIcon = ComponentType<{ className?: string }>;

/** 声明一个路由是侧栏菜单项。 */
export type RouteNavMeta = {
  /** 侧栏文案；未单独给 `breadcrumb` 时也用作面包屑标签。 */
  label: string;
  icon?: RouteIcon;
  /**
   * 所属侧栏分组。分组按其中第一个条目出现的顺序渲染，因此不需要单独的分组清单。
   */
  group: string;
  /** 分组内排序键——小的在前。 */
  order: number;
  /** 查看此项所需的 ABP 权限（由宿主的可见性谓词判定）。 */
  requiredPolicy?: string;
  /** 是否需要已登录会话。 */
  requiresAuth?: boolean;
};

/**
 * 给**不进侧栏**的路由起面包屑名字。
 *
 * `/admin/profile` 从用户菜单进入而不是侧栏，但面包屑仍要给它一个名字。
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
  /** Route path, e.g. `/admin/identity`. */
  to: string;
  label: string;
  icon?: RouteIcon;
  active?: boolean;
  children?: NavNode[];
};

export type NavGroup = {
  label: string;
  items: NavNode[];
};

/** A node while the tree is still being assembled — it still carries its sort keys. */
type PendingNode = Omit<NavNode, "children"> & {
  group: string;
  order: number;
  children: PendingNode[];
};

/** 判断某个菜单项对当前用户是否可见（由宿主注入，通常是 ABP 权限判定）。 */
export type NavVisibility = (meta: RouteNavMeta) => boolean;

/**
 * 把每个声明了 `staticData.nav` 的路由变成侧栏分组。
 *
 * 层级跟随路由树而非手写清单：某个菜单项的最近一个「也声明了 nav 的祖先」就是它的
 * 父项——也就是侧栏渲染成的可折叠子菜单。因此**把路由文件嵌套起来就等于把菜单嵌套起来**。
 */
export function collectNavGroups(
  router: AnyRouter,
  isVisible: NavVisibility,
  pathname: string,
): NavGroup[] {
  const allRoutes = Object.values(router.routesById).filter(
    (route) => route.options.staticData?.nav !== undefined,
  );

  // 先**不过滤**地还原父子结构：否则一个父项的子项全被权限挡掉时，我们会把它
  // 误判成叶子项，留下一个「点了就 403」的空菜单。
  const navIds = new Set(allRoutes.map((route) => route.id));
  const parentIdOf = new Map<string, string>();
  for (const route of allRoutes) {
    const parent = findNavAncestor(route, navIds);
    if (parent) parentIdOf.set(route.id, parent.id);
  }

  const visibleIds = new Set(
    allRoutes.filter((route) => isVisible(route.options.staticData!.nav!)).map((route) => route.id),
  );

  // 有 nav 子项、但一个都不可见的父项整体消失（子项可见性已经递归过了：
  // 子项若也只剩空壳，它自己会在这一轮被删掉，父项随之失去可见子项）。
  const parentIds = new Set(parentIdOf.values());
  for (const parentId of parentIds) {
    const hasVisibleChild = [...parentIdOf].some(
      ([childId, p]) => p === parentId && visibleIds.has(childId),
    );
    if (!hasVisibleChild) visibleIds.delete(parentId);
  }

  const pending = new Map<string, PendingNode>();
  const navRoutes: AnyRoute[] = [];

  for (const route of allRoutes) {
    if (!visibleIds.has(route.id)) continue;

    const meta = route.options.staticData!.nav!;
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
    const item = toNavNode(node, pathname);
    const bucket = groups.get(node.group);
    if (bucket) bucket.push(item);
    else groups.set(node.group, [item]);
  }

  return [...groups].map(([label, items]) => ({ label, items }));
}

/** The sidebar's groups, derived from the route tree. */
export function useNavGroups(isVisible: NavVisibility, pathname: string): NavGroup[] {
  const router = useRouter();
  return useMemo(
    () => collectNavGroups(router, isVisible, pathname),
    [router, isVisible, pathname],
  );
}

/** 最近的一个「也声明了 nav」的祖先路由。 */
function findNavAncestor(route: AnyRoute, navIds: Set<string>): AnyRoute | undefined {
  let parent = route.parentRoute as AnyRoute | undefined;

  while (parent) {
    if (navIds.has(parent.id)) return parent;
    parent = parent.parentRoute as AnyRoute | undefined;
  }

  return undefined;
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

/**
 * 判断某个菜单项是否处于选中态。
 *
 * 最长路径匹配优先：`/admin` 是 `/admin/identity/users` 的前缀，必须选中更深的那一项。
 * 但「索引项」只允许精确匹配：`/admin`（首页）是所有后台路由的前缀，若按前缀命中，
 * 访问 `/admin/profile` 这类非菜单页会错误地显示为「首页」。
 */
function isActive(pathname: string, path: string, isIndex: boolean): boolean {
  if (isIndex) return pathname === path;
  return pathname === path || pathname.startsWith(path + "/");
}

function toNavNode(node: PendingNode, pathname: string): NavNode {
  const isIndex = node.children.length > 0 || node.to === "/admin" || node.to === "/";
  const active = isActive(pathname, node.to, isIndex);
  const children = node.children.map((child) => toNavNode(child, pathname));

  return {
    to: node.to,
    label: node.label,
    icon: node.icon,
    active: active || children.some((child) => child.active),
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
  /** Fixed paths (`/admin/features`), matched exactly. */
  byPath: Map<string, RouteLabel>;
  /** Parameterised paths (`/admin/identity/$id`), matched segment by segment. */
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
 * Resolves one pathname prefix — `/admin/identity/abc123` — to the route that owns it.
 *
 * Fixed paths are checked first, which is what keeps `/admin/features` labelled
 * 「功能」 instead of matching a parameterised sibling.
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
