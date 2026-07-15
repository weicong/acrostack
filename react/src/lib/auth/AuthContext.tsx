import { useEffect, type ReactNode } from "react";
import { getAuthClient } from "./userManager";
import { fetchAppConfig, appConfig } from "./permissions";

export function AuthProvider({ children }: { children: ReactNode }) {
  const authClient = getAuthClient();

  // Handle OIDC redirect callback (?code=&state= in URL)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("code") || !params.has("state")) return;
    void authClient
      .handleSigninCallback()
      .then(() => window.history.replaceState({}, document.title, window.location.pathname))
      .catch((err: unknown) => {
        console.error("[auth] handleSigninCallback failed:", err);
        window.history.replaceState({}, document.title, window.location.pathname);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch app config on user load (initial session or new login)
  // TanStack Query's ensureQueryData (used in guards) will deduplicate requests.
  useEffect(() => {
    return authClient.subscribe(async (event) => {
      if (event.eventName === "userLoaded" && event.isAuthenticated) {
        await fetchAppConfig(event.user?.access_token ?? null);
      }
      if (event.eventName === "userUnloaded") appConfig.clear();
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <authClient.AuthProvider>{children}</authClient.AuthProvider>;
}

export function useAuth() {
  const ctx = getAuthClient().useAuth();
  return { ...ctx, navigateToLogin: () => void ctx.login() };
}
