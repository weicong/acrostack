/**
 * SaaS module route-config.
 *
 * Owns the "SaaS" menu group (Tenants, Editions). Tenants and Editions are
 * the same SaaS domain, so they are grouped together in the sidebar.
 * Aggregated by `lib/routing/route-config.ts`.
 *
 * Note: tenant/edition route files live at /saas/tenants and /saas/editions
 * (flat top-level paths under the /saas namespace, parented to rootRoute).
 * They are exposed as children here only for sidebar grouping.
 */
import { Channel20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as tenantsMenu } from "../tenants";
import { menu as editionsMenu } from "./editions";

export const routeConfig: MenuRoute[] = [
  {
    path: "/saas",
    menu: {
      nameKey: "Menu:SaaS",
      icon: Channel20Regular,
      order: 120,
      children: [asChild("/tenants", tenantsMenu), asChild("/editions", editionsMenu)],
    },
  },
];
