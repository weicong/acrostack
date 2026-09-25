import * as React from "react";

/**
 * Lets a page replace a breadcrumb segment's label with runtime data.
 *
 * The breadcrumb is derived purely from the URL, but a dynamic segment like
 * `/posts/$postId` has no human-readable name in the URL itself. A detail page
 * registers its own title here so the trail reads 「首页 › 文章 › 用 Vite+…」
 * instead of a raw id, without the layout having to know about posts.
 *
 * Keyed by route path so nested routes can override independently — the key
 * must be the same string the router reports as `Route.to` (trailing slash
 * trimmed, e.g. `/posts/$postId`), because that is what the trail is resolved
 * against.
 */
type Overrides = Record<string, string>;

const OverridesContext = React.createContext<{
  overrides: Overrides;
  setOverride: (pattern: string, label: string | undefined) => void;
} | null>(null);

export function BreadcrumbLabelProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = React.useState<Overrides>({});

  const setOverride = React.useCallback((pattern: string, label: string | undefined) => {
    setOverrides((prev) => {
      if (label === undefined) {
        if (!(pattern in prev)) return prev;
        const next = { ...prev };
        delete next[pattern];
        return next;
      }
      if (prev[pattern] === label) return prev;
      return { ...prev, [pattern]: label };
    });
  }, []);

  const value = React.useMemo(() => ({ overrides, setOverride }), [overrides, setOverride]);

  return <OverridesContext.Provider value={value}>{children}</OverridesContext.Provider>;
}

export function useBreadcrumbOverrides(): Overrides {
  return React.useContext(OverridesContext)?.overrides ?? {};
}

/**
 * Register a label for a dynamic breadcrumb segment for as long as the calling
 * component is mounted.
 *
 * Pass `undefined` while the data is still loading and the generic label from
 * the route's `staticData.breadcrumb` stays in place.
 */
export function useBreadcrumbLabel(pattern: string, label: string | undefined) {
  const context = React.useContext(OverridesContext);

  React.useEffect(() => {
    if (!context) return;
    context.setOverride(pattern, label);
    return () => context.setOverride(pattern, undefined);
  }, [context, pattern, label]);
}
