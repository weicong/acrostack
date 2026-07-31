import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { TenantsPage } from "@/pages/tenants/TenantsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Organization20Regular } from "@fluentui/react-icons";

/**
 * Tenants route. Lives under /saas/tenants to share the SaaS namespace with
 * Editions (/saas/editions). Both are the same SaaS domain and are grouped
 * together in the sidebar (see routes/saas/route-config.ts).
 */
export const menu: RouteMenuConfig = {
  nameKey: "AbpTenantManagement::Tenants",
  icon: Organization20Regular,
  requiredPolicy: "AbpTenantManagement.Tenants",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/saas/tenants",
  component: TenantsPage,
  beforeLoad: createPermissionGuard("AbpTenantManagement.Tenants"),
});
