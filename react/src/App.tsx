import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { AuthProvider } from "@/lib/auth/AuthContext";
import { Toaster } from "@fluentui/react-components";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { queryClient } from "@/lib/queryClient";
import { RouteEventProvider } from "@/lib/routing/RouteEventProvider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouteEventProvider />
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
