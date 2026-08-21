import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { BackgroundJobsPage } from "@/pages/background-jobs/BackgroundJobsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Clock20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  name: "后台任务",
  icon: Clock20Regular,
  order: 150,
  requiredPolicy: "AcroStack.BackgroundJobs.ViewJobs",
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/background-jobs", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/background-jobs",
  component: BackgroundJobsPage,
  beforeLoad: createPermissionGuard("AcroStack.BackgroundJobs.ViewJobs"),
});
