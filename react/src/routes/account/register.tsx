import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";

const RegisterPage = lazyRouteComponent(
  () => import("@/pages/account/RegisterPage"),
  "RegisterPage",
);

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/register",
  component: RegisterPage,
});
