import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { EditionsPage } from "@/pages/saas/EditionsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Channel20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:SaaS.Editions",
  icon: Channel20Regular,
  requiredPolicy: "AcroStack.SaaS.Editions",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/saas/editions",
  component: EditionsPage,
  beforeLoad: createPermissionGuard("AcroStack.SaaS.Editions"),
});
