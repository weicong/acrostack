import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { TagsPage } from "@/pages/cms/tags/TagsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Tag20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "标签",
  icon: Tag20Regular,
  order: 4,
  requiredPolicy: "CmsKit.Tags",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/tags",
  component: TagsPage,
  beforeLoad: createPermissionGuard("CmsKit.Tags"),
});
