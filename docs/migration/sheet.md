# sheet

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; used by the sidebar's mobile branch, no direct call sites.

## Changed

- `packages/ui/src/components/sheet.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/sheet.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper is now `@base-ui/react/dialog`; `SheetContent` gained `size` variants.

## Left alone

- No app file imports `sheet` directly; it is consumed by `sidebar.tsx`'s mobile branch.

## Behavior changes

None observed.

## Verify by hand

1. Narrow the viewport below 768px: the desktop sidebar disappears and `SidebarTrigger` opens a sheet.
2. The sheet contains the full sidebar; Esc / overlay click closes it.
