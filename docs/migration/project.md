# project

2026-09-26 — whole-project mode, golden-pair strategy (base-nova variants fetched by URL).
Verdict: **migrated**; `tsc --noEmit` clean in both workspaces, full `vp build` green, browser
smoke-tested. **0 wrappers remain on Radix.**

## Changed

### Dependency swap

| | before | after |
| --- | --- | --- |
| `packages/ui/package.json` | `radix-ui@1.6.7` | `@base-ui/react@1.8.0` |
| `components.json` (`apps/web` + `packages/ui`) | `"style": "radix-nova"` | `"style": "base-nova"` |

`radix-ui` was installed alongside `@base-ui/react` for the whole migration and removed only after
the last wrapper was migrated (skill rule). After `vp install`: `pnpm-lock.yaml` contains **0**
occurrences of `radix`, and `radix-ui` is gone from `packages/ui/node_modules`.

`shadcn info` now reports `style: base-nova` / `base: base` — the declared style and the on-disk
components finally agree (the radix-nova ↔ new-york-v4 mismatch recorded in the previous session is
resolved).

### Wrappers (14) + hook

All of `packages/ui/src/components/*.tsx` were replaced with their base-nova registry variants and
`hooks/use-mobile.ts` re-synced. Per-component detail lives in the sibling files.

**Classification before touching anything** (skill step 1): every wrapper was diffed against both
its declared style (`radix-nova`) and its actual origin (`new-york-v4`). Against `new-york-v4` the
only differences were oxfmt artifacts (trailing commas, arrow-parens) — i.e. **all 14 wrappers were
pristine**, zero user customisations, so wholesale replacement was safe and no three-way merge was
needed. Against `radix-nova` they differed substantially, because the two registry generations are
not the same code (flat `data-*` selectors, `gap-0`, `IconPlaceholder`).

### App-code sweep (consumers)

`asChild` → `render` at **17** call sites:

- `src/components/nav-main.tsx` — `SidebarMenuButton`, `Collapsible` (now `render={<SidebarMenuItem />}`),
  `CollapsibleTrigger`, `SidebarMenuSubButton`
- `src/components/nav-user.tsx`, `src/components/team-switcher.tsx`, `src/components/theme-toggle.tsx`
  — `DropdownMenuTrigger`
- `src/lib/breadcrumb.tsx` — `BreadcrumbLink`
- `src/routes/posts/index.tsx`, `posts/$postId/index.tsx`, `posts/$postId/edit.tsx` — `Button`, `AlertDialogTrigger`

Other call-site changes:

- `nativeButton={false}` added at **7** `Button` sites whose `render` target is an `<a>`
  (Base UI logs a console error otherwise). **Gap:** `consumer-props.md` does not mention
  `nativeButton`; the rule is in the `shadcn` skill's `rules/base-vs-radix.md`.
- `DropdownMenuLabel` moved back **inside** `DropdownMenuGroup` in `team-switcher.tsx` and
  `nav-user.tsx` — `Menu.GroupLabel` reads `MenuGroupContext` and throws otherwise.
- Class rewrites (`class-mapping.md`): `data-[state=open]:` → `data-popup-open:` (menu triggers only
  — verified in `MenuTriggerDataAttributes`; `data-open:` would never match a menu trigger),
  `group-data-[state=open]/collapsible:` → `group-data-open/collapsible:`,
  `data-[orientation=vertical]:` → `data-vertical:`,
  `w-(--radix-dropdown-menu-trigger-width)` → `w-(--anchor-width)`.
- `nav-user.tsx` Avatar: dropped the `h-8 w-8 rounded-lg` overrides (base-nova's Avatar is circular
  with a circular `after:` ring) — flagged in `avatar.md`.

### CSS and copy

- `packages/ui/src/styles/globals.css`: re-added `.cn-rtl-flip` (used by base-nova icons) and the
  Base UI Collapsible panel height patch; tokens comment back to `base-nova`. Both utilities are
  present in the built CSS.
- Copy switched back to base-nova / Base UI in `README.md`, `docs/requirements.md`,
  `apps/web/src/routes/index.tsx`, `routes/about.tsx`, `data/posts/types.ts`.

## Left alone

- No cmdk / vaul / sonner / input-otp / react-day-picker / recharts wrappers exist in this project —
  nothing in the skill's "never touch" list was present.
- `apps/web/src/lib/route-meta.ts` (staticData → nav/breadcrumb derivation) is untouched: it is
  router metadata, not a UI primitive.
- `packages/ui/src/lib/utils.ts` (`cn`) untouched.

## Behavior changes

Flagged, not patched:

1. **Sidebar rhythm reverted to base-nova stock:** `SidebarMenu` `gap-1` → `gap-0` and
   `SidebarContent` `gap-2` → `gap-0`. This undoes the new-york-v4 demo alignment done earlier;
   it follows from adopting the declared style's own variant.
2. **Avatars are circles** (`rounded-full` + circular `after:` ring) instead of rounded squares.
3. **Tooltip delay:** the base registry dropped `TooltipProvider delayDuration={0}`, so icon-mode
   tooltips now use Base UI's default open delay.
4. **Base UI menu semantics** (not exercised here): `CheckboxItem`/`RadioItem` default to
   `closeOnClick: false`.
5. **Collapsible is not exercised** by this app (flat menu — no item has children). The height patch
   is in place and present in the built CSS, but no runtime proof exists; see `collapsible.md`.

## Verify by hand

Browser smoke test already performed (dev server, Edge via bsk): sidebar renders and expands to
256px; team-switcher menu opens with 4 items and no `MenuGroupContext` error; nav-user menu opens
with its label inside a group; theme menu opens; delete AlertDialog opens with the right copy;
`render`-based links navigate (`/posts` → `/posts/new`); breadcrumb reads 首页 > 文章 > 新建;
`data-popup-open` and the accent background are present while a menu is open; console free of
application errors (only the extension's own `chrome-extension://invalid/` noise and a favicon 404).

Still worth a human pass: keyboard nav + typeahead in both menus, focus return after dialogs,
icon-mode tooltips, and the sub-768px sheet.

## Notes for the next run

- The shadcn CLI could not be used from this sandbox: `pnpm dlx shadcn@latest …` fails with
  `EPERM` reading the pnpm dlx cache, so the golden-pair variants were fetched by URL (a form the
  skill documents for progressive mode) and written with the same import normalisation used
  previously. If the CLI-native route is wanted, run
  `pnpm dlx shadcn@latest add <component> --overwrite` from `packages/ui` in a normal terminal —
  now that `components.json` says `base-nova`, that delivers exactly the variants committed here.
- `vp dev` will hit `[safe-delete][SAFE_DELETE_BULK_CONFIRM_REQUIRED]` whenever the lockfile
  changes; workaround: rename `apps/web/node_modules/.vite/deps` aside and restart.
- Baseline before the migration: both workspaces `tsc` clean, `vp build` ✓ 19.52s.
  After: both `tsc` clean, `vp build` ✓ 2.55s (warm cache), `vp fmt` clean.
