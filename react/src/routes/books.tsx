import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Route as rootRoute } from "./__root";
import { BooksPage } from "@/pages/books/BooksPage";
import { createPermissionGuard } from "@/lib/routing/guards";

const booksSearchSchema = z.object({
  q: z.string().catch(""),
  // URL search params are strings; coerce to number and fall back to undefined.
  type: z.coerce.number().optional().catch(undefined),
});

export type BooksSearch = z.infer<typeof booksSearchSchema>;

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/books",
  validateSearch: booksSearchSchema,
  component: BooksPage,
  beforeLoad: createPermissionGuard("AcroStack.Books"),
});
