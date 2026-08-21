import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { AuditLogsPage } from "@/pages/audit-logs/AuditLogsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { History20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  name: "审计日志",
  icon: History20Regular,
  order: 140,
  requiredPolicy: "AcroStack.AuditLogging",
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/audit-logs", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/audit-logs",
  component: AuditLogsPage,
  beforeLoad: createPermissionGuard("AcroStack.AuditLogging"),
});
