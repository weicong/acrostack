/**
 * Axios instance with ABP auth interceptors.
 * - Request: Bearer token, __tenant (multi-tenancy), X-Requested-With, Accept-Language, Content-Type
 * - Response: 401 → redirect to login, 403 → router.navigate to forbidden (via event bus)
 * - baseURL: Resolved from runtimeConfig (dynamic-env.json) at request time
 */
import { axiosInstance } from "@kubb/plugin-client/clients/axios";
import { userManager } from "@/lib/auth/userManager";
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { emitRouteEvent } from "@/lib/routing/routeEvents";
import i18n from "@/lib/i18n/i18n";

// Re-export setTenantId for backward compatibility
export { setTenantId } from "@/lib/tenant";

export function setupHttpClientInterceptors() {
  axiosInstance.interceptors.request.use(async (config) => {
    config.baseURL = getApiBaseUrl();
    const user = await userManager.getUser();
    if (user?.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }

    const tenantId = getTenantId();
    if (tenantId && !config.headers.__tenant) {
      config.headers.__tenant = tenantId;
    }

    if (i18n?.language) {
      config.headers["Accept-Language"] = config.headers["Accept-Language"] ?? i18n.language;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response?.status;

      if (status === 401) {
        const isTokenRequest = error.config?.url?.includes("/connect/token");
        if (!isTokenRequest) {
          await userManager.signinRedirect();
        }
        return Promise.reject(new Error("Unauthorized - redirecting to login"));
      }

      if (status === 403) {
        emitRouteEvent({ type: "403", to: "/403" });
        return Promise.reject(new Error("Forbidden"));
      }

      return Promise.reject(error);
    },
  );
}
