import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";

import type { Team } from "#lib/types";

export type TeamSwitcherProps = {
  teams: Team[];
  /** Override the visible copy (i18n). Defaults are Simplified Chinese / English. */
  labels?: {
    heading?: string;
    addTeam?: string;
  };
  onSelectTeam?: (team: Team) => void;
  onAddTeam?: () => void;
};

export function TeamSwitcher({ teams, labels, onSelectTeam, onAddTeam }: TeamSwitcherProps) {
  const { isMobile } = useSidebar();
  const activeTeam = teams[0];

  if (!activeTeam) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
              />
            }
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <activeTeam.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--anchor-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            {/* Base UI's GroupLabel reads MenuGroupContext, so it must live
                inside a DropdownMenuGroup. */}
            <DropdownMenuGroup>
              <DropdownMenuLabel>{labels?.heading ?? "Teams"}</DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  className="gap-2 p-2"
                  onClick={onSelectTeam ? () => onSelectTeam(team) : undefined}
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={onAddTeam ? () => onAddTeam() : undefined}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                {labels?.addTeam ?? "添加团队"}
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
