/**
 * SaaS module route-config.
 *
 * Owns the "SaaS" menu group (Tenants). Aggregated by
 * `lib/routing/route-config.ts`.
 *
 * Routes live in this folder (`route.tsx` parent + `tenants.tsx` leaf),
 * mirroring the identity/openiddict folder-module convention.
 */
import { Channel20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as tenantsMenu } from "./tenants";

export const routeConfig: MenuRoute[] = [
  {
    path: "/admin/saas",
    menu: {
      name: "SaaS",
      icon: Channel20Regular,
      order: 120,
      children: [asChild("/tenants", tenantsMenu)],
    },
  },
];
