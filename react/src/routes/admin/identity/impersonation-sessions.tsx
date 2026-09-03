import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { PersonProhibited20Regular } from "@fluentui/react-icons";

const ImpersonationSessionsPage = lazyRouteComponent(
  () => import("@/pages/identity/impersonation-sessions/ImpersonationSessionsPage"),
  "ImpersonationSessionsPage",
);

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "模拟登录记录",
  icon: PersonProhibited20Regular,
  requiredPolicy: "AbpIdentity.Users.ManageImpersonationSessions",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/impersonation-sessions",
  component: ImpersonationSessionsPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Users.ManageImpersonationSessions"),
});
