import { GalleryVerticalEnd, AudioLines, Terminal } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher, type Team } from "@/components/team-switcher";
import { navGroups } from "@/data/nav";

const teams: Team[] = [
  { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
  { name: "Acme Corp.", logo: AudioLines, plan: "Startup" },
  { name: "Evil Corp.", logo: Terminal, plan: "Free" },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={navGroups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: "shadcn", email: "m@example.com", initials: "CN" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
