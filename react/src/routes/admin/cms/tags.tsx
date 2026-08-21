import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { TagsPage } from "@/pages/cms/TagsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Tag20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Cms.Tags",
  icon: Tag20Regular,
  order: 4,
  requiredPolicy: "CmsKit.Tags",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms/tags",
  component: TagsPage,
  beforeLoad: createPermissionGuard("CmsKit.Tags"),
});
