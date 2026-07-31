import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { BlogPostsPage } from "@/pages/cms/BlogPostsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { DocumentText20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Cms.BlogPosts",
  icon: DocumentText20Regular,
  order: 3,
  requiredPolicy: "AcroStack.Cms.BlogPosts",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms/blog-posts",
  component: BlogPostsPage,
  beforeLoad: createPermissionGuard("AcroStack.Cms.BlogPosts"),
});
