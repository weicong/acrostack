import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Comment20Regular } from "@fluentui/react-icons";

const CommentsPage = lazyRouteComponent(
  () => import("@/pages/cms/comments/CommentsPage"),
  "CommentsPage",
);

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "评论",
  icon: Comment20Regular,
  order: 5,
  requiredPolicy: "CmsKit.Comments",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/comments",
  component: CommentsPage,
  beforeLoad: createPermissionGuard("CmsKit.Comments"),
});
