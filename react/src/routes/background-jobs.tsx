import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BackgroundJobsPage } from "@/pages/background-jobs/BackgroundJobsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Clock20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  nameKey: "AbpBackgroundJobs::BackgroundJobs",
  icon: Clock20Regular,
  order: 11,
  requiredPolicy: "AcroStack.BackgroundJobs",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/background-jobs",
  component: BackgroundJobsPage,
  beforeLoad: createPermissionGuard("AcroStack.BackgroundJobs"),
});
