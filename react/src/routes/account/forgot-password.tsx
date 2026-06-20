import { createRoute } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";
import { ForgotPasswordPage } from "@/pages/account/ForgotPasswordPage";

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/forgot-password",
  component: ForgotPasswordPage,
});
