/**
 * SaaS module route-config.
 *
 * Owns the "SaaS" menu group (Tenants). Aggregated by
 * `lib/routing/route-config.ts`.
 *
 * Note: the tenant route file lives at /saas/tenants (flat top-level path
 * under the /saas namespace, parented to rootRoute). It is exposed as a
 * child here only for sidebar grouping.
 */
import { Channel20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as tenantsMenu } from "../tenants";

export const routeConfig: MenuRoute[] = [
  {
    path: "/saas",
    menu: {
      nameKey: "Menu:SaaS",
      icon: Channel20Regular,
      order: 120,
      children: [asChild("/tenants", tenantsMenu)],
    },
  },
];
