import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Key20Regular } from "@fluentui/react-icons";

const OpenIddictApplicationsPage = lazyRouteComponent(
  () => import("@/pages/openiddict/OpenIddictApplicationsPage"),
  "OpenIddictApplicationsPage",
);

export const menu: RouteMenuConfig = {
  name: "应用",
  icon: Key20Regular,
  requiredPolicy: "AcroStack.OpenIddictManagement.Applications",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/openiddict/applications",
  component: OpenIddictApplicationsPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Applications"),
});
