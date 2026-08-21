/**
 * Identity module route-config.
 *
 * Owns the "Identity Management" menu group (Users, Roles, Claim Types,
 * Permissions). Aggregated by `lib/routing/route-config.ts`. Child metadata is
 * imported from each leaf route file's `menu` export.
 */
import { PeopleTeam20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as usersMenu } from "./users";
import { menu as rolesMenu } from "./roles";
import { menu as claimTypesMenu } from "./claim-types";
import { menu as permissionsMenu } from "./permissions";

export const routeConfig: MenuRoute[] = [
  {
    path: "/admin/identity",
    menu: {
      name: "身份认证管理",
      icon: PeopleTeam20Regular,
      order: 100,
      children: [
        asChild("/users", usersMenu),
        asChild("/roles", rolesMenu),
        asChild("/claim-types", claimTypesMenu),
        asChild("/permissions", permissionsMenu),
      ],
    },
  },
];
