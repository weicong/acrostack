import { createRoute, redirect } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/",
  beforeLoad: () => redirect({ to: "/admin/identity/users" }),
  component: () => null,
});
