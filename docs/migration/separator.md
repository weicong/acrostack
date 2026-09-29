# separator

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; base-nova uses flat `data-vertical:`/`data-horizontal:` selectors.

## Changed

- `packages/ui/src/components/separator.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/separator.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper classes are `data-horizontal:h-px data-horizontal:w-full data-vertical:w-px
  data-vertical:self-stretch`; the `decorative` prop is gone.
- `apps/web/src/routes/__root.tsx` — the header override changed from
  `data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-auto` to
  `data-vertical:h-4 data-vertical:self-auto`.

## Left alone

- `apps/web/src/routes/posts/$postId/index.tsx` uses plain `<Separator />` (horizontal) — unchanged.

## Behavior changes

None observed.

## Verify by hand

1. Header: the separator next to the theme toggle is a 4px vertical line.
2. Post detail: horizontal separators span full width and are 1px.
