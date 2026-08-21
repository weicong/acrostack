import { createRoute, redirect } from "@tanstack/react-router";
import { Route as classroomRoute } from "./route";

export const Route = createRoute({
  getParentRoute: () => classroomRoute,
  path: "/",
  beforeLoad: () => redirect({ to: "/classroom/sessions" }),
  component: () => null,
});
