import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { BlogsPage } from "@/pages/cms/blogs/BlogsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { News20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "博客",
  icon: News20Regular,
  order: 2,
  requiredPolicy: "CmsKit.Blogs",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/blogs",
  component: BlogsPage,
  beforeLoad: createPermissionGuard("CmsKit.Blogs"),
});
