import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { TenantsPage } from "@/pages/tenants/TenantsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Organization20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "AbpTenantManagement::Tenants",
  icon: Organization20Regular,
  order: 4,
  requiredPolicy: "AbpTenantManagement.Tenants",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tenants",
  component: TenantsPage,
  beforeLoad: createPermissionGuard("AbpTenantManagement.Tenants"),
});
