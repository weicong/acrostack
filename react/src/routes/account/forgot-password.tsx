import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";

const ForgotPasswordPage = lazyRouteComponent(
  () => import("@/pages/account/ForgotPasswordPage"),
  "ForgotPasswordPage",
);

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/forgot-password",
  component: ForgotPasswordPage,
});
