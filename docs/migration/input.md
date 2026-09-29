# input

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; thin pass-through to `@base-ui/react/input`.

## Changed

- `packages/ui/src/components/input.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/input.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper only; no call-site changes.

## Left alone

- `packages/ui/src/components/sidebar.tsx` also imports `Input` (for `SidebarInput`).

## Behavior changes

None observed.

## Verify by hand

1. `/posts/new` → type in 标题; the value persists across re-renders.
2. Focus ring and `aria-invalid` styling look right.
