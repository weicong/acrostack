import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { PagesPage } from "@/pages/cms/PagesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { DocumentHeader20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Cms.Pages",
  icon: DocumentHeader20Regular,
  order: 1,
  requiredPolicy: "AcroStack.Cms.Pages",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms/pages",
  component: PagesPage,
  beforeLoad: createPermissionGuard("AcroStack.Cms.Pages"),
});
