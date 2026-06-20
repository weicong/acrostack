import { createRoute, redirect } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/",
  beforeLoad: () => redirect({ to: "/account/login" }),
  component: () => null,
});
