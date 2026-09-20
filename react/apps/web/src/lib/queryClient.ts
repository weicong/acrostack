/**
 * Global TanStack Query client instance.
 * Exported for use in guards and other non-React contexts.
 */
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute default
      retry: 1,
    },
  },
});
