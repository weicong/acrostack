import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { TaskListLtr20Regular } from "@fluentui/react-icons";

const OpenIddictAuthorizationsPage = lazyRouteComponent(
  () => import("@/pages/openiddict/OpenIddictAuthorizationsPage"),
  "OpenIddictAuthorizationsPage",
);

export const menu: RouteMenuConfig = {
  name: "Authorization",
  icon: TaskListLtr20Regular,
  requiredPolicy: "AcroStack.OpenIddictManagement.Authorizations",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/openiddict/authorizations",
  component: OpenIddictAuthorizationsPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Authorizations"),
});
