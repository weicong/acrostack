import * as React from "react";

/**
 * Lets a page replace a breadcrumb segment's label with runtime data.
 *
 * The breadcrumb is derived from the URL by the host app, but a dynamic segment
 * like `/posts/$postId` has no human-readable name in the URL itself. A detail
 * page registers its own title here so the trail reads 「首页 › 文章 › 用 Vite+…」
 * instead of a raw id, without the layout having to know about the page.
 *
 * Keyed by route pattern so nested routes can override independently — the key
 * must be the same string the host derives crumbs from (e.g. a route pattern
 * with the trailing slash trimmed, such as `/posts/$postId`).
 */
export type BreadcrumbOverrides = Record<string, string>;

/**
 * Shared with `BreadcrumbLabelProvider` (which lives in
 * `components/breadcrumb-label-provider.tsx`).
 */
export const BreadcrumbLabelContext = React.createContext<{
  overrides: BreadcrumbOverrides;
  setOverride: (pattern: string, label: string | undefined) => void;
} | null>(null);

export function useBreadcrumbOverrides(): BreadcrumbOverrides {
  return React.useContext(BreadcrumbLabelContext)?.overrides ?? {};
}

/**
 * Register a label for a dynamic breadcrumb segment for as long as the calling
 * component is mounted.
 *
 * Pass `undefined` while the data is still loading and the generic label stays
 * in place.
 *
 * ⚠️ Depend on the **stable setter**, never on the whole context value: the
 * context identity changes whenever `overrides` changes, and since this effect
 * writes to `overrides`, depending on the context makes it re-run on every
 * write — cleanup deletes the entry, the effect re-adds it, the object identity
 * changes again, and React spins until it hits "Maximum update depth exceeded".
 */
export function useBreadcrumbLabel(pattern: string, label: string | undefined) {
  const setOverride = React.useContext(BreadcrumbLabelContext)?.setOverride;

  React.useEffect(() => {
    if (!setOverride) return;
    setOverride(pattern, label);
    return () => setOverride(pattern, undefined);
  }, [setOverride, pattern, label]);
}
