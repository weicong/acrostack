import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Route as rootRoute } from "./__root";
import { BooksPage } from "@/pages/books/BooksPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Book20Regular } from "@fluentui/react-icons";

const booksSearchSchema = z.object({
  q: z.string().catch(""),
  // URL search params are strings; coerce to number and fall back to undefined.
  type: z.coerce.number().optional().catch(undefined),
});

export type BooksSearch = z.infer<typeof booksSearchSchema>;

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Books",
  icon: Book20Regular,
  order: 3,
  requiredPolicy: "AcroStack.Books",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/books",
  validateSearch: booksSearchSchema,
  component: BooksPage,
  beforeLoad: createPermissionGuard("AcroStack.Books"),
});
