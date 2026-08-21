import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { ForbiddenPage } from "@/pages/forbidden/ForbiddenPage";

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/403",
  component: ForbiddenPage,
});
