/**
 * CMS module route-config.
 *
 * Owns the "CMS" menu group (Pages, Blogs, BlogPosts, Tags, Comments, Menus).
 * Aggregated by `lib/routing/route-config.ts`. Child metadata is imported from
 * each leaf route file's `menu` export.
 */
import { Apps20Regular } from "@fluentui/react-icons";
import { asChild, type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as pagesMenu } from "./pages";
import { menu as blogsMenu } from "./blogs";
import { menu as blogPostsMenu } from "./blog-posts";
import { menu as tagsMenu } from "./tags";
import { menu as commentsMenu } from "./comments";
import { menu as menusMenu } from "./menus";

export const routeConfig: MenuRoute[] = [
  {
    path: "/cms",
    menu: {
      nameKey: "Menu:Cms",
      icon: Apps20Regular,
      order: 40,
      children: [
        asChild("/pages", pagesMenu),
        asChild("/blogs", blogsMenu),
        asChild("/blog-posts", blogPostsMenu),
        asChild("/tags", tagsMenu),
        asChild("/comments", commentsMenu),
        asChild("/menus", menusMenu),
      ],
    },
  },
];
