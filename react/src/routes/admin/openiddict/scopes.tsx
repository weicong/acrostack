import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { OpenIddictScopesPage } from "@/pages/openiddict/OpenIddictScopesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Shield20Regular } from "@fluentui/react-icons";

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
