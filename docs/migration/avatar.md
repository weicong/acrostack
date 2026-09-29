# avatar

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; base-nova's Avatar is circular by default, which changed two call sites (flagged below).

## Changed

- `packages/ui/src/components/avatar.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/avatar.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- base-nova's `Avatar` renders `size-8 rounded-full` plus an `after:` ring (`after:rounded-full`),
  i.e. a **circle**, and exposes `size?: "default"|"sm"|"lg"`.

## Left alone

- `apps/web/src/components/nav-user.tsx` Avatar call sites: the `className="h-8 w-8 rounded-lg"` /
  `"rounded-lg"` overrides (copied from the new-york-v4 registry) were **dropped**, not ported.
  Keeping only the root override would have left a circular `after:` ring around a rounded square.

## Behavior changes

- **Visual delta (flagged, not patched):** the sidebar user avatar is now a circle (32px,
  `rounded-full`) instead of the new-york-v4 rounded square — this is the base-nova registry's own
  default. If the square look is wanted, override both root and ring
  (`className="rounded-lg after:rounded-lg"`) rather than porting the root class alone.

## Verify by hand

1. Sidebar footer: avatar is 32px and circular, initials legible.
2. Open the user menu: the popup avatar matches.
3. Ring colour tracks `--border` in both light and dark themes.
