import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { FileManagementPage } from "@/pages/file-management/FileManagementPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Folder20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "文件管理",
  icon: Folder20Regular,
  order: 30,
  requiredPolicy: "AcroStack.FileManagement",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/file-management",
  component: FileManagementPage,
  beforeLoad: createPermissionGuard("AcroStack.FileManagement"),
});
