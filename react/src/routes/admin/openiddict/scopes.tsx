import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Shield20Regular } from "@fluentui/react-icons";

const OpenIddictScopesPage = lazyRouteComponent(
  () => import("@/pages/openiddict/OpenIddictScopesPage"),
  "OpenIddictScopesPage",
);

export const menu: RouteMenuConfig = {
  name: "Scope",
  icon: Shield20Regular,
  requiredPolicy: "AcroStack.OpenIddictManagement.Scopes",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/openiddict/scopes",
  component: OpenIddictScopesPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Scopes"),
});
