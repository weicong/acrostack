import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { AuditLogsPage } from "@/pages/audit-logs/AuditLogsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { History20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  nameKey: "AbpAuditLogging::AuditLogs",
  icon: History20Regular,
  order: 10,
  requiredPolicy: "AcroStack.AuditLogging",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/audit-logs",
  component: AuditLogsPage,
  beforeLoad: createPermissionGuard("AcroStack.AuditLogging"),
});
