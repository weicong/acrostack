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

import { findNavItem } from "@/data/nav";

export type Crumb = {
  path: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
};

/**
 * Derives a breadcrumb trail from a pathname.
 *
 * Every path prefix is a candidate crumb, so `/posts/new` becomes
 * 首页 / 文章 / 新建 — no per-route hardcoding. Labels come from the shared
 * nav map, so the sidebar and the breadcrumb can never drift apart.
 */
export function buildCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  const paths = segments.map((_, index) => `/${segments.slice(0, index + 1).join("/")}`);
  // Always anchor the trail at the root route.
  paths.unshift("/");

  const crumbs: Crumb[] = [];

  for (const path of paths) {
    const node = findNavItem(path);
    if (!node) continue;
    crumbs.push({ path, label: node.label, icon: node.icon });
  }

  return crumbs;
}

export function RouteBreadcrumb({ pathname }: { pathname: string }) {
  const crumbs = buildCrumbs(pathname);
  const current = crumbs.at(-1);
  const parents = crumbs.slice(0, -1);

  if (!current) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parents.map((crumb) => (
          <Fragment key={crumb.path}>
            <BreadcrumbItem className="hidden md:inline-flex">
              <BreadcrumbLink
                render={
                  <Link to={crumb.path} className="transition-colors hover:text-foreground" />
                }
              >
                {crumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{current.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
