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
import { useNavGroups } from "@/lib/route-meta";

const teams: Team[] = [
  { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
  { name: "Acme Corp.", logo: AudioLines, plan: "Startup" },
  { name: "Evil Corp.", logo: Terminal, plan: "Free" },
];

export function AppSidebar() {
  // The menu is the route tree: each route declares its own `staticData.nav`.
  const groups = useNavGroups();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={groups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: "shadcn", email: "m@example.com", initials: "CN" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
