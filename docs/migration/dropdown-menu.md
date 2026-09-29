# dropdown-menu

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; Base UI's `Menu.GroupLabel` requires a `Menu.Group` parent — both call sites were fixed, otherwise the menu throws on open.

## Changed

- `packages/ui/src/components/dropdown-menu.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/dropdown-menu.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- Wrapper is now `@base-ui/react/menu`.
- **`DropdownMenuLabel` = `Menu.GroupLabel`, which reads `MenuGroupContext` and throws
  `Base UI: MenuGroupContext is missing.` outside `<Menu.Group>`/`<Menu.RadioGroup>`.** The two call
  sites that had the label as a direct child of the content (new-york-v4 layout) were moved back
  inside a `DropdownMenuGroup`: `apps/web/src/components/team-switcher.tsx` and `nav-user.tsx`.
- Trigger open state is **`data-popup-open`**, not `data-open`
  (`@base-ui/react/menu/trigger/MenuTriggerDataAttributes` — verified in the installed package), so
  the class rewrite at call sites is `data-[state=open]:bg-sidebar-accent` →
  `data-popup-open:bg-sidebar-accent`.
- CSS var rename at call sites: `w-(--radix-dropdown-menu-trigger-width)` → `w-(--anchor-width)`.

## Left alone

- No per-item action menus (`SidebarMenuAction` + `DropdownMenu`) exist in this app.

## Behavior changes

- **Flagged, not applicable here:** Base UI's `CheckboxItem`/`RadioItem` default to
  `closeOnClick: false` (Radix closed the menu on select). This app uses neither.
- The open-trigger highlight keeps the project's own colours via `data-popup-open:bg-sidebar-accent`
  (class-mapping of existing classes) instead of the base registry's `aria-expanded:bg-muted`.
  Verified working: trigger background = `--sidebar-accent` while open.

## Verify by hand

1. Click the team switcher: menu opens, no `MenuGroupContext` error, 4 items, "Teams" label present.
2. Click the user block: menu opens, label + both groups render.
3. Keyboard: ArrowUp/Down move, typeahead jumps, Esc closes and focus returns.
4. While open, the trigger shows the accent background (`data-popup-open` present).
