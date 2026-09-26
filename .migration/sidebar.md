# sidebar

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; full base-nova variant (24 exports) — the largest surface, and the one with flagged visual deltas.

## Changed

- `packages/ui/src/components/sidebar.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/sidebar.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Full replacement with base-nova's `sidebar.tsx`. It now also ships `SidebarInput`,
  `SidebarMenuSkeleton`, `SidebarGroupContent` and `SidebarSeparator`, which were not vendored before
  (unused, but part of the registry variant, which keeps the file diffable against upstream).
- `TooltipProvider` is **not** part of this wrapper in base-nova (Base UI's Tooltip self-provides);
  the radix variant wrapped everything in `<TooltipProvider delayDuration={0}>`.
- `SidebarMenuButton` / `SidebarMenuSubButton` / `SidebarMenuAction` take `render`, not `asChild`
  → `apps/web/src/components/nav-main.tsx` updated accordingly.
- Active state is a **presence attribute**: Base UI renders `data-active=""` (plus
  `data-status="active"` and `aria-current="page"`), not `data-active="true"`. The wrapper's
  `data-active:` classes match either way; external assertions must test for *presence*.
- `packages/ui/src/styles/globals.css` — `.cn-rtl-flip` re-added (used by base-nova's breadcrumb /
  dropdown-menu / sidebar icons) and the tokens comment switched back to base-nova.

## Left alone

- `apps/web/src/components/app-sidebar.tsx` (unchanged: it only composes header/content/footer/rail).
- `team-switcher.tsx` / `nav-user.tsx` are consumers of `dropdown-menu` + `sidebar`; their changes are
  recorded in `dropdown-menu.md`.

## Behavior changes

- **Visual delta (flagged, not patched):** base-nova's rhythm is tighter than the new-york-v4 demo
  this project had been aligned to — `SidebarMenu` is `gap-0` (was `gap-1` = 4px) and
  `SidebarContent` is `gap-0` (was `gap-2` = 8px). Adopting the declared style's own variant
  deliberately reverted that alignment. Re-apply at the call site (`<SidebarMenu className="gap-1">`)
  if the airier demo spacing is wanted.
- `--sidebar-*` tokens are unchanged, so colours and hover/active states are the same.

## Verify by hand

1. Collapse via the rail: container 48px, buttons 32×32, group label fades (`-mt-8 opacity-0`).
2. In icon mode, hovering an item shows a tooltip (the `tooltip` prop path).
3. `/posts/new`: 文章 is highlighted (`data-active` present, `aria-current="page"`).
4. Header/footer triggers show the accent background while their menu is open.
5. Below 768px: sheet behaviour (see `sheet.md`).
