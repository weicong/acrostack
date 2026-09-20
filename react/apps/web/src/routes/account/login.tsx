import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";

const LoginPage = lazyRouteComponent(() => import("@/pages/account/LoginPage"), "LoginPage");

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/login",
  component: LoginPage,
});
