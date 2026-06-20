import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { IdentityLayout } from "@/components/identity/IdentityLayout";
import { authGuard } from "@/lib/routing/guards";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/identity",
  component: IdentityLayout,
  beforeLoad: authGuard,
});
