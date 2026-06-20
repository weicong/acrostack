import { createRoute } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";
import { LoginPage } from "@/pages/account/LoginPage";

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/login",
  component: LoginPage,
});
