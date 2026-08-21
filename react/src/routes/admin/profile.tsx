import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { ProfilePage } from "@/pages/account/ProfilePage";
import { authGuard } from "@/lib/routing/guards";

/**
 * Profile route. Not shown in the main sidebar — accessed via the user menu
 * in the Header (see components/layout/UserMenu.tsx), mirroring ABP's
 * convention where "Personal info" lives under the user dropdown, not the
 * navigation menu.
 */
export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/profile",
  component: ProfilePage,
  beforeLoad: authGuard,
});
