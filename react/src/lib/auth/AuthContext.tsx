import { useEffect, useRef, type ReactNode } from "react";
import { getAuthClient } from "./userManager";
import { appConfig, fetchAppConfig } from "./permissions";

export function AuthProvider({ children }: { children: ReactNode }) {
  const authClient = getAuthClient();
  const callbackProcessedRef = useRef(false);

  // Handle OIDC redirect callback (?code=&state= in URL)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("code") || !params.has("state")) return;
    if (callbackProcessedRef.current) return;
    callbackProcessedRef.current = true;
    void authClient
      .handleSigninCallback()
      .then(() => window.history.replaceState({}, document.title, window.location.pathname))
      .catch((err: unknown) => {
        // OIDC callback failure (state mismatch, network error, etc.).
        // Strip the OAuth params from the URL so the user can retry login, and log the error.
        console.error("[auth] handleSigninCallback failed:", err);
        window.history.replaceState({}, document.title, window.location.pathname);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Restore app config from an already-authenticated OIDC session on page refresh.
  // The subscribe callback below can miss the initial userLoaded event if the OIDC
  // library emits it before the listener is attached, leaving menus/username empty.
  useEffect(() => {
    void (async () => {
      const user = await authClient.getUserManager().getUser();
      if (!user || user.expired) return;
      // Skip if the subscribe effect already fetched the config (avoid duplicate calls
      // when both effects race on a page refresh with an existing OIDC session).
      const snap = appConfig.getSnapshot() as { initialized?: boolean; loading?: boolean } | null;
      if (snap?.initialized || snap?.loading) return;
      await fetchAppConfig(user.access_token ?? null);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch app config on every user load (initial session or new login)
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
