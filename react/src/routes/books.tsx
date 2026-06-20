import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BooksPage } from "@/pages/books/BooksPage";
import { createPermissionGuard } from "@/lib/routing/guards";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/books",
  component: BooksPage,
  beforeLoad: createPermissionGuard("AcroStack.Books"),
});
