import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as saasRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Organization20Regular } from "@fluentui/react-icons";

const TenantsPage = lazyRouteComponent(() => import("@/pages/tenants/TenantsPage"), "TenantsPage");

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "租户",
  icon: Organization20Regular,
  requiredPolicy: "AbpTenantManagement.Tenants",
};

export const Route = createRoute({
  getParentRoute: () => saasRoute,
  path: "/tenants",
  component: TenantsPage,
  beforeLoad: createPermissionGuard("AbpTenantManagement.Tenants"),
});
