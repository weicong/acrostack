# skeleton

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; trivial pass-through, no call sites.

## Changed

- `packages/ui/src/components/skeleton.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/skeleton.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper only (`animate-pulse rounded-md bg-accent`).

## Left alone

- Not imported by app code; only `SidebarMenuSkeleton` (inside `sidebar.tsx`) uses it.

## Behavior changes

None observed.

## Verify by hand

1. Not reachable in this app; if a loading state is added, confirm the pulse animation runs.
