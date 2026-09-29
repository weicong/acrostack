# button

2026-09-26 — strategy: golden pair, fetched by URL (base-nova registry variant); whole-project mode. Verdict: migrated to the real `@base-ui/react/button` primitive; 7 call sites gained `nativeButton={false}`.

## Changed

- `packages/ui/src/components/button.tsx` — replaced with the **base-nova** registry variant
  (`https://ui.shadcn.com/r/styles/base-nova/button.json`), golden-pair strategy, whole-project mode
  (`components.json` was flipped `radix-nova` → `base-nova` first). Imports normalised to this
  package's aliases: `cn` → `#lib/utils`, `@/registry/base-nova/ui/X` → `#components/X`,
  `@/registry/base-nova/hooks/X` → `#hooks/X`; the docs-site `IconPlaceholder` was replaced by the
  lucide icon it resolves to (`iconLibrary: lucide`).
- Leftover scan on this component's files
  (`grep -n "radix-ui\|@radix-ui\|IconPlaceholder\|registry/"`): **clean**.
- The wrapper is a thin pass-through to `@base-ui/react/button` (the skill's hard rule: the real
  primitive, never a hand-rolled `useRender` wrapper). `variant`/`size` are unchanged, including
  `size="icon-sm"` used by the theme toggle.
- **`nativeButton={false}` added at 7 call sites** whose `render` target is an `<a>`:
  `apps/web/src/routes/posts/index.tsx` (3), `posts/$postId/index.tsx` (3), `posts/$postId/edit.tsx` (1).

## Left alone

- `packages/ui/src/components/sidebar.tsx` — `SidebarMenuButton` is a `useRender` wrapper (not the
  Button primitive), so it does **not** emit the nativeButton warning even when rendering a `<Link>`.
  Verified in `@base-ui/react`: only `Button` reads `nativeButton` (`Button.mjs:18`), `useRender`
  does not mention it at all. Left as is.

## Behavior changes

- Without `nativeButton={false}`, Base UI logs a console error when the render target is not a
  `<button>` (it did: 2 occurrences before the fix). Behaviour is unchanged; the prop only silences
  the warning and keeps native-button semantics honest.
- ⚠️ **Gap in the skill:** `consumer-props.md` does not list `nativeButton`; the rule lives in the
  `shadcn` skill's `rules/base-vs-radix.md` ("Button / trigger as non-button element (base only)").

## Verify by hand

1. `/posts` → click 新建文章: navigates to `/posts/new`.
2. Click 编辑 on a row: navigates to the edit route; 返回列表 goes back.
3. DevTools console has **no** `Base UI: A component that acts as a button expected a native <button>`.
4. Focus ring visible on Tab; ghost/outline variants unchanged.
