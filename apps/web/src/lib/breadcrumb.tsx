import { Fragment, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";

import { matchRouteLabel, useRouteLabelIndex, type RouteLabelIndex } from "./route-meta";
import { useBreadcrumbOverrides } from "./breadcrumb-label";

export type Crumb = {
  path: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
  /** False when no route is attached (e.g. a dynamic segment mid-load). */
  linkable: boolean;
};

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
      path,
      label: overrides[label.pattern] ?? label.label,
      icon: label.icon,
      linkable: true,
    });
  }

  return crumbs;
}

export function RouteBreadcrumb({ pathname }: { pathname: string }) {
  const index = useRouteLabelIndex();
  const overrides = useBreadcrumbOverrides();
  const crumbs = buildCrumbs(pathname, index, overrides);
  const current = crumbs.at(-1);
  const parents = crumbs.slice(0, -1);

  if (!current) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parents.map((crumb) => (
          <Fragment key={crumb.path}>
            <BreadcrumbItem className="hidden md:inline-flex">
              {crumb.linkable ? (
                <BreadcrumbLink asChild>
                  <Link
                    to={crumb.path}
                    // Lengthy post titles would otherwise stretch the header.
                    className="max-w-[16rem] truncate transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <span className="max-w-[16rem] truncate text-muted-foreground">{crumb.label}</span>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="max-w-[16rem] truncate">{current.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
