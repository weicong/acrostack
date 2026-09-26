# collapsible

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated; the base-nova Panel needs the globals.css height patch, which was re-added.

## Changed

- `packages/ui/src/components/collapsible.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/collapsible.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- `CollapsibleContent` is now `@base-ui/react/collapsible`'s `Panel`; `Collapsible` and
  `CollapsibleTrigger` take `render` (no `asChild`).
- `packages/ui/src/styles/globals.css` — re-added the Base UI panel height rules
  (`[data-slot="collapsible-content"][data-open|data-closed]`), which the radix era had removed.
  Base UI's Panel exposes `--collapsible-panel-height` but defines no open-state height, so an open
  panel collapses to 0px without them. Confirmed present in the built CSS.
- `apps/web/src/components/nav-main.tsx` — `render={<SidebarMenuItem />}` on `Collapsible`,
  `render={<SidebarMenuButton … />}` on `CollapsibleTrigger`, and the chevron class rewritten
  `group-data-[state=open]/collapsible:` → `group-data-open/collapsible:`.

## Left alone

- `nav-main.tsx`'s leaf branch (items without children) is unaffected.

## Behavior changes

None observed.

## Verify by hand

⚠️ **Not exercised in this app**: the sidebar menu is flat (no route declares child `nav` items),
so no Collapsible renders. To verify the patch:
1. Temporarily give a route's `staticData.nav` a child (or render a `<Collapsible>` by hand).
2. Confirm the open panel has non-zero height (`getBoundingClientRect().height > 0`) and the chevron
   rotates 90°.
