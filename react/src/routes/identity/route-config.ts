/**
 * Identity module route-config.
 *
 * Owns the "Identity Management" menu group (Users, Roles, Permissions).
 * Aggregated by `lib/routing/route-config.ts`. Child metadata is imported from
 * each leaf route file's `menu` export.
 */
import { PeopleTeam20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as usersMenu } from "./users";
import { menu as rolesMenu } from "./roles";
import { menu as permissionsMenu } from "./permissions";

export const routeConfig: MenuRoute[] = [
  {
    path: "/identity",
    menu: {
      nameKey: "AbpIdentity::Menu:IdentityManagement",
      icon: PeopleTeam20Regular,
      order: 100,
      children: [
        asChild("/users", usersMenu),
        asChild("/roles", rolesMenu),
        asChild("/permissions", permissionsMenu),
      ],
    },
  },
];
