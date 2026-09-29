import { ChevronsUpDown, LogOut, MonitorSmartphone, Settings, UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@acrostack/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@acrostack/ui/components/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@acrostack/ui/components/sidebar";

import type { ShellUser } from "#lib/types";

/** Actions the built-in user menu can emit. */
export type NavUserAction = "profile" | "account" | "sessions" | "logout";

export type NavUserProps = {
  user: ShellUser;
  /** Override the visible copy (i18n). Defaults are Simplified Chinese. */
  labels?: {
    profile?: string;
    account?: string;
    sessions?: string;
    logout?: string;
  };
  onSelect?: (action: NavUserAction) => void;
};

export function NavUser({ user, labels, onSelect }: NavUserProps) {
  const { isMobile } = useSidebar();

  const pick = (action: NavUserAction) => (onSelect ? () => onSelect(action) : undefined);

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
            <Avatar>
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--anchor-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {/* Base UI's GroupLabel reads MenuGroupContext, so it must live
                inside a DropdownMenuGroup. */}
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar>
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={pick("profile")}>
                <UserRound />
                {labels?.profile ?? "个人信息"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={pick("account")}>
                <Settings />
                {labels?.account ?? "账户安全"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={pick("sessions")}>
                <MonitorSmartphone />
                {labels?.sessions ?? "登录会话"}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={pick("logout")}>
              <LogOut />
              {labels?.logout ?? "退出登录"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
