# breadcrumb

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; `BreadcrumbLink` uses `useRender`, so `asChild` became `render` at the one call site.

## Changed

- `packages/ui/src/components/breadcrumb.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/breadcrumb.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- `BreadcrumbLink` is a `useRender` wrapper (`render` prop, `defaultTagName: "a"`) — there is no
  `asChild`. `apps/web/src/lib/breadcrumb.tsx` was rewritten from
  `asChild` + child `<Link>` to `render={<Link … />}` with the label left as children.
- Chevron/ellipsis icons come from `lucide-react`; `cn-rtl-flip` is kept on the chevron.

## Left alone

- The breadcrumb derivation logic in `apps/web/src/lib/breadcrumb.tsx` is app code and was not touched beyond that call site.

## Behavior changes

None observed.

## Verify by hand

1. `/posts/new` → breadcrumb reads 首页 > 文章 > 新建.
2. Middle crumbs are real `<a href>` elements and navigate.
3. The last crumb is plain text, not a link.
