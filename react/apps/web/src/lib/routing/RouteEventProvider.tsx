/**
 * Provider for route events.
 * Listens to events from httpClient and triggers router navigation.
 * 直接使用 router 实例而非 useNavigate()，避免必须在 <RouterProvider> 内部使用的限制。
 */
import { useEffect } from "react";
import { addRouteListener } from "./routeEvents";
import { router } from "./router";

export function RouteEventProvider() {
  useEffect(() => {
    return addRouteListener((event) => {
      if (event.type === "403") {
        void router.navigate({ to: event.to });
      }
    });
  }, []);

  return null;
}
