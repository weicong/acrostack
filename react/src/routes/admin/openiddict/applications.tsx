import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { OpenIddictApplicationsPage } from "@/pages/openiddict/OpenIddictApplicationsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Key20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  nameKey: "AbpOpenIddict::Applications",
  icon: Key20Regular,
  requiredPolicy: "AcroStack.OpenIddictManagement.Applications",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/openiddict/applications",
  component: OpenIddictApplicationsPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Applications"),
});
