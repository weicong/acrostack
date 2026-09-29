import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";

import type { Crumb, LinkRenderer } from "#lib/types";

export type RouteBreadcrumbProps = {
  /**
   * The trail, root first. The last entry is rendered as the current page;
   * an entry without `to` renders as plain text (e.g. a segment mid-load).
   */
  items: Crumb[];
  /** Same contract as {@link NavMainProps.renderLink}. */
  renderLink?: LinkRenderer;
};

/**
 * Renders a breadcrumb trail from pre-derived items.
 *
 * Deriving the trail from a pathname is app-specific (it depends on the route
 * tree), so it stays in the host app — this component only renders.
 */
export function RouteBreadcrumb({ items, renderLink }: RouteBreadcrumbProps) {
  const current = items.at(-1);
  const parents = items.slice(0, -1);

  if (!current) return null;

  const link = (to: string) => (renderLink ? renderLink({ to }) : <a href={to} />);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parents.map((crumb) => (
          <Fragment key={crumb.to ?? crumb.label}>
            <BreadcrumbItem className="hidden md:inline-flex">
              {crumb.to ? (
                // Lengthy titles would otherwise stretch the header.
                <BreadcrumbLink
                  render={link(crumb.to)}
                  className="max-w-[16rem] truncate transition-colors hover:text-foreground"
                >
                  {crumb.label}
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
