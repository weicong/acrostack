/**
 * Axios instance with ABP auth interceptors.
 * - Request: Bearer token, __tenant (multi-tenancy), Accept-Language
 * - Response: 401 → redirect to login (with returnUrl), 403 → router.navigate via event bus
 * - baseURL: Resolved from runtimeConfig (dynamic-env.json) at request time
 */
import type { InternalAxiosRequestConfig } from "axios";
import { client } from "@/api/.kubb/client";
import { userManager } from "@/lib/auth/userManager";
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { emitRouteEvent } from "@/lib/routing/routeEvents";
import { DEFAULT_CULTURE } from "@/env";

// Re-export setTenantId for backward compatibility
export { setTenantId } from "@/lib/tenant";

/**
 * Applies ABP auth/tenant/locale headers and resolves the base URL at request
 * time. Exported for unit testing; also used as the request interceptor.
 */
export async function applyRequestConfig(
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> {
  config.baseURL = getApiBaseUrl();

  const user = await userManager.getUser();
  if (user?.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }

  const tenantId = getTenantId();
  if (tenantId && !config.headers.__tenant) {
    config.headers.__tenant = tenantId;
  }

  // 默认文化从 VITE_DEFAULT_CULTURE 注入（默认 zh-Hans），服务端据此返回本地化消息
  config.headers["Accept-Language"] = config.headers["Accept-Language"] ?? DEFAULT_CULTURE;

  return config;
}

interface HttpErrorLike {
  response?: { status?: number };
  config?: { url?: string };
}

/**
 * Handles auth-related response errors:
 * - 401 (non-token requests): redirect to OIDC login, preserving returnUrl.
 * - 403: emit a route event so the router navigates to /403 (SPA nav).
 * Always returns a rejected promise. Exported for unit testing.
 */
export async function handleResponseError(error: HttpErrorLike): Promise<never> {
  const status = error.response?.status;

  if (status === 401) {
    const isTokenRequest = error.config?.url?.includes("/connect/token");
    if (!isTokenRequest) {
      // Preserve where the user was so they return there after login.
      await userManager.signinRedirect({
        state: { returnUrl: window.location.href },
      });
    }
    return Promise.reject(new Error("Unauthorized - redirecting to login"));
  }

  if (status === 403) {
    emitRouteEvent({ type: "403", to: "/admin/403" });
    return Promise.reject(new Error("Forbidden"));
  }

  return Promise.reject(error as unknown as Error);
}

export function setupHttpClientInterceptors() {
  // Kubb v5 的共享客户端实例：请求拦截器补充 ABP 头；
  // 错误通道处理 401/403（通道本身总是以原错误拒绝）。
  client.interceptors.request.use(applyRequestConfig);
  client.interceptors.error.use(handleResponseError);
}
