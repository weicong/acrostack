import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { CommentsPage } from "@/pages/cms/CommentsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Comment20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Cms.Comments",
  icon: Comment20Regular,
  order: 5,
  requiredPolicy: "CmsKit.Comments",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms/comments",
  component: CommentsPage,
  beforeLoad: createPermissionGuard("CmsKit.Comments"),
});
