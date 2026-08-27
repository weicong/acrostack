import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { TagMultiple20Regular } from "@fluentui/react-icons";

const ClaimTypesPage = lazyRouteComponent(
  () => import("@/pages/identity/claim-types/ClaimTypesPage"),
  "ClaimTypesPage",
);

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "声明类型",
  icon: TagMultiple20Regular,
  requiredPolicy: "AcroStack.IdentityClaims.ClaimTypes",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/claim-types",
  component: ClaimTypesPage,
  beforeLoad: createPermissionGuard("AcroStack.IdentityClaims.ClaimTypes"),
});
