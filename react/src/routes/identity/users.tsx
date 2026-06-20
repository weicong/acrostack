import { createRoute } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { UsersPage } from "@/pages/identity/UsersPage";
import { createPermissionGuard } from "@/lib/routing/guards";

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/users",
  component: UsersPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Users"),
});
