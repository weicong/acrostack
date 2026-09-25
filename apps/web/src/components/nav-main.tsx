import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@workspace/ui/components/sidebar";

import type { NavGroup } from "@/lib/route-meta";

/**
 * The primary sidebar group.
 *
 * Groups that contain the active route auto-expand, and the matching leaf gets
 * the active highlight — both driven by the router rather than by hand-set
 * `isActive` flags. `fuzzy` matching means `/posts/new` also lights up `/posts`.
 */
export function NavMain({ groups }: { groups: NavGroup[] }) {
  const matchRoute = useMatchRoute();

  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isActive = Boolean(matchRoute({ to: item.to, fuzzy: true }));
              const key = `${group.label}:${item.to}`;

              if (!hasChildren) {
                return (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton tooltip={item.label} isActive={isActive} asChild>
                      <Link to={item.to}>
                        {item.icon ? <item.icon /> : null}
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              return (
                <Collapsible key={key} asChild defaultOpen={isActive} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.label}
                        isActive={isActive}
                        className="cursor-pointer"
                      >
                        {item.icon ? <item.icon /> : null}
                        <span>{item.label}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children?.map((child) => (
                          <SidebarMenuSubItem key={child.to}>
                            <SidebarMenuSubButton
                              isActive={Boolean(matchRoute({ to: child.to, fuzzy: false }))}
                              asChild
                            >
                              <Link to={child.to}>
                                <span>{child.label}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
