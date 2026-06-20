import { createRoute } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";
import { RegisterPage } from "@/pages/account/RegisterPage";

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/register",
  component: RegisterPage,
});
