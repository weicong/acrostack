/**
 * Provider for route events.
 * Listens to events from httpClient and triggers router navigation.
 */
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { addRouteListener } from "./routeEvents";

export function RouteEventProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    return addRouteListener((event) => {
      if (event.type === "403") {
        void navigate({ to: event.to });
      }
    });
  }, [navigate]);

  return null;
}
