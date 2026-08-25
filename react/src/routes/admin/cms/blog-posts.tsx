import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { BlogPostsPage } from "@/pages/cms/blog-posts/BlogPostsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { DocumentText20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "博客文章",
  icon: DocumentText20Regular,
  order: 3,
  requiredPolicy: "CmsKit.BlogPosts",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/blog-posts",
  component: BlogPostsPage,
  beforeLoad: createPermissionGuard("CmsKit.BlogPosts"),
});
