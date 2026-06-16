import { Outlet } from "@tanstack/react-router";

/**
 * Shared layout wrapper for module sections.
 * Sub-page navigation is handled by sidebar menu items.
 */
export function ModuleLayout() {
  return <Outlet />;
}
