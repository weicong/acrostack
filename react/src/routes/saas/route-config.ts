/**
 * SaaS module route-config.
 *
 * Owns the "SaaS" menu group (Editions).
 * Aggregated by `lib/routing/route-config.ts`.
 */
import { Channel20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as editionsMenu } from "./editions";

export const routeConfig: MenuRoute[] = [
  {
    path: "/saas",
    menu: {
      nameKey: "Menu:SaaS",
      icon: Channel20Regular,
      order: 120,
      children: [asChild("/editions", editionsMenu)],
    },
  },
];
