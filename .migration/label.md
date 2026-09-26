# label

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; base-nova has **no primitive** here — it renders a native `<label>`.

## Changed

- `packages/ui/src/components/label.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/label.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- `packages/ui/src/components/label.tsx` has no `@base-ui/react` import at all: base-nova's Label is
  a native `<label>` (the skill lists this as an intended no-counterpart case: *Label → native
  `<label>`*).

## Left alone

- Nothing else references the Radix Label wrapper.

## Behavior changes

None observed.

## Verify by hand

1. `/posts/new` → clicking the 标题 label focuses the title input.
2. The element is a real `<label>`, not a `<div>`/`<span>`.
