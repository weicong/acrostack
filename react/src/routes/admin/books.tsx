import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
import { Route as adminRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Book20Regular } from "@fluentui/react-icons";

const BooksPage = lazyRouteComponent(() => import("@/pages/books/BooksPage"), "BooksPage");

const booksSearchSchema = z.object({
  q: z.string().catch(""),
  // URL search params are strings; coerce to number and fall back to undefined.
  type: z.coerce.number().optional().catch(undefined),
});

export type BooksSearch = z.infer<typeof booksSearchSchema>;

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "图书",
  icon: Book20Regular,
  order: 10,
  requiredPolicy: "AcroStack.Books",
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/books", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/books",
  validateSearch: booksSearchSchema,
  component: BooksPage,
  beforeLoad: createPermissionGuard("AcroStack.Books"),
});
