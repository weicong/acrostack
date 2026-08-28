import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/lib/routing/router";
import { AuthProvider } from "@/lib/auth/AuthContext";
import { Toaster } from "@fluentui/react-components";
import { ThemeProvider } from "@/lib/theme";
import { queryClient } from "@/lib/queryClient";
import { RouteEventProvider } from "@/lib/routing/RouteEventProvider";

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
