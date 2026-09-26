# alert-dialog

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated cleanly; `AlertDialogAction` keeps `variant`/`size`, so no call-site prop changes were needed.

## Changed

- `packages/ui/src/components/alert-dialog.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/alert-dialog.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- `AlertDialogAction` is now `React.ComponentProps<typeof Button>` (base-nova) and forwards
  `variant`/`size` to `Button`, so `variant="destructive"` at call sites still works.
- `AlertDialogCancel` renders `render={<Button variant="outline" />}` internally.

## Left alone

- `packages/ui/src/components/dropdown-menu.tsx` — separate wrapper, reported there.

## Behavior changes

None observed.

## Verify by hand

1. `/posts` → click 删除 on any row: dialog opens with the right title.
2. Esc closes it and focus returns to the trigger button.
3. 取消 closes; 确认删除 removes the row and closes.
