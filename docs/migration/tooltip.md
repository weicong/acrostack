# tooltip

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; the delay prop is renamed (`delayDuration` → `delay`) but this app passes neither.

## Changed

- `packages/ui/src/components/tooltip.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/tooltip.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper is now `@base-ui/react/tooltip`. Per `consumer-props.md`: `delayDuration` → `delay`,
  `skipDelayDuration` dropped, `disableHoverableContent` has no equivalent.
- This app never passes those props; tooltips come from `SidebarMenuButton tooltip={…}`.

## Left alone

- `packages/ui/src/components/sidebar.tsx` owns the tooltip wiring for menu items.

## Behavior changes

- **Flagged, not patched:** the base registry dropped `TooltipProvider delayDuration={0}`, so
  icon-mode tooltips now use Base UI's default open delay instead of opening instantly.

## Verify by hand

1. Collapse the sidebar to icon mode and hover an item: the tooltip appears after the default delay.
2. The tooltip hides on blur/Esc.
