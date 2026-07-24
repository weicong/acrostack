import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { FileManagementPage } from "@/pages/file-management/FileManagementPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Folder20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:FileManagement",
  icon: Folder20Regular,
  order: 15,
  requiredPolicy: "AcroStack.FileManagement",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/file-management",
  component: FileManagementPage,
  beforeLoad: createPermissionGuard("AcroStack.FileManagement"),
});
