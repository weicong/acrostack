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

import type { LinkRenderer, NavGroup } from "#lib/types";

export type NavMainProps = {
  groups: NavGroup[];
  /**
   * Renders a link element for a given `to`. Omit to render a plain `<a href>`,
   * which keeps the package usable without a router.
   *
   * The returned element receives the button's own `className` and the item's
   * children through Base UI's `render` merge, so it should be a *bare* element
   * (`<Link to={to} />`), not one with its own children.
   */
  renderLink?: LinkRenderer;
};

/**
 * The primary sidebar group.
 *
 * Items with `children` become collapsible parents that auto-open when active.
 * `active` is supplied by the host app, which is what keeps this component free
 * of any routing dependency.
 */
export function NavMain({ groups, renderLink }: NavMainProps) {
  const link = (to: string) => (renderLink ? renderLink({ to }) : <a href={to} />);

  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const key = `${group.label}:${item.to}`;

              if (!hasChildren) {
                return (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      isActive={item.active}
                      render={link(item.to)}
                    >
                      {item.icon ? <item.icon /> : null}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              return (
                <Collapsible
                  key={key}
                  defaultOpen={item.active}
                  className="group/collapsible"
                  render={<SidebarMenuItem />}
                >
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        tooltip={item.label}
                        isActive={item.active}
                        className="cursor-pointer"
                      />
                    }
                  >
                    {item.icon ? <item.icon /> : null}
                    <span>{item.label}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children?.map((child) => (
                        <SidebarMenuSubItem key={child.to}>
                          <SidebarMenuSubButton isActive={child.active} render={link(child.to)}>
                            <span>{child.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
