import { Link, useMatchRoute } from "@tanstack/react-router";
import { AudioLines, GalleryVerticalEnd, Terminal } from "lucide-react";
import { useMemo } from "react";
import type { LinkRenderer, NavGroup, ShellUser, Team } from "@workspace/layout";

import { useNavGroups } from "./route-meta";

/**
 * The app's side of the layout contract.
 *
 * `@workspace/layout` deliberately knows nothing about TanStack Router: this
 * module supplies the two things it needs — link rendering and route-derived
 * `active` flags — plus the app's own layout data.
 */

/** Renders links with TanStack Router. Stable identity, so the sidebar does not re-render. */
export const renderLink: LinkRenderer = ({ to }) => <Link to={to} />;

/**
 * Sidebar groups derived from the route tree, with `active` resolved here
 * because only the app knows the router.
 */
export function useShellNav(): NavGroup[] {
  const groups = useNavGroups();
  const matchRoute = useMatchRoute();

  return useMemo(
    () =>
      groups.map((group) => ({
        label: group.label,
        items: group.items.map((item) => ({
          to: item.to,
          label: item.label,
          icon: item.icon,
          // Fuzzy: `/posts/new` also lights up `/posts`.
          active: Boolean(matchRoute({ to: item.to, fuzzy: true })),
          ...(item.children
            ? {
                children: item.children.map((child) => ({
                  to: child.to,
                  label: child.label,
                  active: Boolean(matchRoute({ to: child.to, fuzzy: false })),
                })),
              }
            : {}),
        })),
      })),
    [groups, matchRoute],
  );
}

/**
 * shadcn's `SidebarProvider` persists its state to a `sidebar_state` cookie but
 * never reads it back — in Next.js the server does that. A pure SPA has no
 * server, so the app restores it here and hands it to the shell.
 */
export function readSidebarOpen(): boolean {
  const match = document.cookie.match(/(?:^|;\s*)sidebar_state=(true|false)/);
  return match ? match[1] === "true" : true;
}

/** Demo data — swap for real teams from your API. */
export const teams: Team[] = [
  { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
  { name: "Acme Corp.", logo: AudioLines, plan: "Startup" },
  { name: "Evil Corp.", logo: Terminal, plan: "Free" },
];

/** Demo account — swap for the signed-in user. */
export const user: ShellUser = {
  name: "shadcn",
  email: "m@example.com",
  initials: "CN",
};
