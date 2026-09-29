import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@acrostack/ui/components/sidebar";

import { NavMain } from "#components/nav-main";
import { NavUser, type NavUserAction, type NavUserProps } from "#components/nav-user";
import { TeamSwitcher, type TeamSwitcherProps } from "#components/team-switcher";
import type { LinkRenderer, NavGroup, ShellUser, Team } from "#lib/types";

export type AppSidebarProps = {
  nav: NavGroup[];
  user: ShellUser;
  /**
   * 侧栏头部的团队切换器数据。空数组时改用 `brand`（没有多团队概念的应用
   * 只展示品牌标识）。
   */
  teams?: Team[];
  /**
   * 没有团队时的侧栏头部：品牌标识。`mark` 是方块里的短标识（通常是首字母），
   * `name` 是产品名。
   */
  brand?: { mark: string; name: string };
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
 * The sidebar itself: team switcher (or brand) in the header, the nav in the
 * middle, the account in the footer, plus the collapse rail.
 */
export function AppSidebar({
  nav,
  user,
  teams = [],
  brand,
  renderLink,
  labels,
  onSelectTeam,
  onAddTeam,
  onUserAction,
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        {teams.length > 0 ? (
          <TeamSwitcher
            teams={teams}
            labels={labels?.teamSwitcher}
            onSelectTeam={onSelectTeam}
            onAddTeam={onAddTeam}
          />
        ) : brand ? (
          <SidebarBrand brand={brand} />
        ) : null}
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

function SidebarBrand({ brand }: { brand: NonNullable<AppSidebarProps["brand"]> }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="cursor-default">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <span className="text-sm font-semibold">{brand.mark}</span>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{brand.name}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
