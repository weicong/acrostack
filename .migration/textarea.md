# textarea

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; thin pass-through, no call sites to change.

## Changed

- `packages/ui/src/components/textarea.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/textarea.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper only.

## Left alone

- `apps/web/src/components/post-form.tsx` uses it; no prop changes needed.

## Behavior changes

None observed.

## Verify by hand

1. `/posts/new` → type a multi-line body; resize/auto-height behaviour looks right.
