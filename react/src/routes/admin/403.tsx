import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { ForbiddenPage } from "@/pages/forbidden/ForbiddenPage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/403",
  component: ForbiddenPage,
});
