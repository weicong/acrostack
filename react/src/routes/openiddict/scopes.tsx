import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { OpenIddictScopesPage } from "@/pages/openiddict/OpenIddictScopesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { Shield20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  nameKey: "AbpOpenIddict::Scopes",
  icon: Shield20Regular,
  order: 13,
  requiredPolicy: "AcroStack.OpenIddictManagement.Scopes",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/openiddict/scopes",
  component: OpenIddictScopesPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Scopes"),
});
