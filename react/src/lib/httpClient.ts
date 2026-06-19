import { axiosInstance } from "@kubb/plugin-client/clients/axios";
import { userManager } from "@/lib/auth/userManager";
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import i18n from "@/lib/i18n/i18n";

const ABP_TENANT_KEY = "abp_tenant_id";

export function setupHttpClientInterceptors() {
  axiosInstance.interceptors.request.use(async (config) => {
    config.baseURL = getApiBaseUrl();
    const user = await userManager.getUser();
    if (user?.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    const tenantId = typeof window !== "undefined" ? sessionStorage.getItem(ABP_TENANT_KEY) : null;
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
        if (!error.config?.url?.includes("/connect/token")) {
          await userManager.signinRedirect();
        }
        return Promise.reject(new Error("Unauthorized - redirecting to login"));
      }
      if (status === 403) {
        window.location.href = "/403";
        return Promise.reject(new Error("Forbidden"));
      }
      return Promise.reject(error);
    },
  );
}
