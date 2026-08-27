import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";

const ForbiddenPage = lazyRouteComponent(
  () => import("@/pages/forbidden/ForbiddenPage"),
  "ForbiddenPage",
);

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/403",
  component: ForbiddenPage,
});
