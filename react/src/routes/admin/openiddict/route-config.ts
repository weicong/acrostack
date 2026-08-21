/**
 * OpenIddict module route-config.
 *
 * Owns the "OpenIddict" menu group (Applications, Scopes).
 * Aggregated by `lib/routing/route-config.ts`.
 */
import { ShieldKeyhole20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as applicationsMenu } from "./applications";
import { menu as scopesMenu } from "./scopes";

export const routeConfig: MenuRoute[] = [
  {
    path: "/openiddict",
    menu: {
      nameKey: "Menu:OpenIddict",
      icon: ShieldKeyhole20Regular,
      order: 110,
      children: [asChild("/applications", applicationsMenu), asChild("/scopes", scopesMenu)],
    },
  },
];
