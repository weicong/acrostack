import type { ComponentProps, ReactNode } from "react";

import { cn } from "@workspace/ui/lib/utils";

export type PageHeaderProps = Omit<ComponentProps<"header">, "title" | "children"> & {
  /** The page's `h1`. */
  title: ReactNode;
  /** One line of supporting text, rendered under the title. */
  description?: ReactNode;
  /**
   * Extra content under the description — badges, counts, timestamps. Lives in
   * the title column, so it wraps with the title rather than with `actions`.
   */
  children?: ReactNode;
  /**
   * Right-aligned controls (buttons, dialogs). Wraps onto its own line below the
   * title when there is not enough room, instead of squeezing the title.
   */
  actions?: ReactNode;
};

/**
 * The standard page header: title, optional description, right-aligned actions.
 *
 * Every route opens with one, which is what keeps the `h1` size, the muted
 * description colour and the title/actions breakpoint the same on every page.
 * The shell already spaces it from the content below, so it adds no margin of
 * its own — drop it in as the first child of a route's fragment.
 */
export function PageHeader({
  title,
  description,
  children,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header
      data-slot="page-header"
      className={cn("flex flex-wrap items-start justify-between gap-4", className)}
      {...props}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight break-words">{title}</h1>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        {children}
      </div>

      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}
