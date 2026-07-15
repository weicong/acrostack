/**
 * Event bus for routing actions (401, 403, etc.).
 * Used in interceptors (non-React context) to trigger router navigation.
 */
type RouteEvent = {
  type: "403" | "401";
  to: string;
};

type Listener = (event: RouteEvent) => void;

const listeners = new Set<Listener>();

export function addRouteListener(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function emitRouteEvent(event: RouteEvent) {
  listeners.forEach((listener) => listener(event));
}
