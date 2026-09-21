/**
 * 认证 Provider 与 hook。
 *
 * - 处理 OIDC 回调（URL 上的 `?code=&state=`）；
 * - 用户加载后拉取 application configuration（当前用户 + 权限），
 *   登出时清空并失效缓存；
 * - 其余认证能力（isAuthenticated / login / logout / user）来自 OIDC 适配器。
 */
import { useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";
import { appConfig, ensureAppConfig, invalidateAppConfig } from "../permissions/permissions";
import { getAuthClient } from "./user-manager";

export function AuthProvider({ children }: { children: ReactNode }) {
  const authClient = getAuthClient();

  // Handle OIDC redirect callback (?code=&state= in URL)
  // useRef 防止 React StrictMode 双重渲染导致一次性授权码被重复兑换
  const signinCallbackHandledRef = useRef(false);
  useEffect(() => {
    if (signinCallbackHandledRef.current) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("code") || !params.has("state")) return;
    signinCallbackHandledRef.current = true;
    void authClient
      .handleSigninCallback()
      .then(() => window.history.replaceState({}, document.title, window.location.pathname))
      .catch((err: unknown) => {
        console.error("[auth] handleSigninCallback failed:", err);
        window.history.replaceState({}, document.title, window.location.pathname);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch app config on user load (initial session or new login).
  // Goes through the same ensureAppConfig path as guards, so both share the
  // TanStack Query cache and requests are deduplicated.
  // Subscribe once on mount. authClient is a stable singleton from
  // getAuthClient(), so it is intentionally excluded from the dep array.
  useEffect(() => {
    return authClient.subscribe(async (event) => {
      if (event.eventName === "userLoaded" && event.isAuthenticated) {
        await ensureAppConfig();
      }
      if (event.eventName === "userUnloaded") {
        appConfig.clear();
        invalidateAppConfig();
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <authClient.AuthProvider>{children}</authClient.AuthProvider>;
}

export function useAuth() {
  const ctx = getAuthClient().useAuth();
  // navigateToLogin 引用稳定；返回对象经 useMemo 缓存，
  // 避免下游把 useAuth() 的返回值放进依赖数组时每次渲染都是新对象导致无限重渲染
  const navigateToLogin = useCallback(() => void ctx.login(), [ctx.login]);
  return useMemo(() => ({ ...ctx, navigateToLogin }), [ctx, navigateToLogin]);
}
