import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { GdprPage } from "@/pages/gdpr/GdprPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { ShieldKeyhole20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Gdpr",
  icon: ShieldKeyhole20Regular,
  order: 16,
  requiredPolicy: "AcroStack.Gdpr",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gdpr",
  component: GdprPage,
  beforeLoad: createPermissionGuard("AcroStack.Gdpr"),
});
