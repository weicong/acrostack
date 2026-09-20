import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as accountRoute } from "./route";

const ResetPasswordPage = lazyRouteComponent(
  () => import("@/pages/account/ResetPasswordPage"),
  "ResetPasswordPage",
);

export const Route = createRoute({
  getParentRoute: () => accountRoute,
  path: "/reset-password",
  component: ResetPasswordPage,
});
