import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

import { NavMain } from "#components/nav-main";
import { NavUser, type NavUserAction, type NavUserProps } from "#components/nav-user";
import { TeamSwitcher, type TeamSwitcherProps } from "#components/team-switcher";
import type { LinkRenderer, NavGroup, ShellUser, Team } from "#lib/types";

export type AppSidebarProps = {
  nav: NavGroup[];
  user: ShellUser;
  teams: Team[];
  renderLink?: LinkRenderer;
  labels?: {
    teamSwitcher?: TeamSwitcherProps["labels"];
    navUser?: NavUserProps["labels"];
  };
  onSelectTeam?: (team: Team) => void;
  onAddTeam?: () => void;
  onUserAction?: (action: NavUserAction) => void;
};

/**
 * The sidebar itself: team switcher in the header, the nav in the middle, the
 * account in the footer, plus the collapse rail.
 */
export function AppSidebar({
  nav,
  user,
  teams,
  renderLink,
  labels,
  onSelectTeam,
  onAddTeam,
  onUserAction,
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher
          teams={teams}
          labels={labels?.teamSwitcher}
          onSelectTeam={onSelectTeam}
          onAddTeam={onAddTeam}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={nav} renderLink={renderLink} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} labels={labels?.navUser} onSelect={onUserAction} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
