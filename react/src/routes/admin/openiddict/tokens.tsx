import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Key20Regular } from "@fluentui/react-icons";

const OpenIddictTokensPage = lazyRouteComponent(
  () => import("@/pages/openiddict/OpenIddictTokensPage"),
  "OpenIddictTokensPage",
);

export const menu: RouteMenuConfig = {
  name: "Token",
  icon: Key20Regular,
  requiredPolicy: "AcroStack.OpenIddictManagement.Tokens",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/openiddict/tokens",
  component: OpenIddictTokensPage,
  beforeLoad: createPermissionGuard("AcroStack.OpenIddictManagement.Tokens"),
});
