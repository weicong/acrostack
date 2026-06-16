/**
 * Axios instance with ABP auth interceptors.
 * - Request: Bearer token, __tenant (multi-tenancy), X-Requested-With, Accept-Language, Content-Type
 * - Response: 401 → redirect to login, 403 → redirect to forbidden (unless skip403Redirect is set)
 * - baseURL: Resolved from runtimeConfig (dynamic-env.json) at request time
 */
import type { InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { userManager } from "@/lib/auth/userManager";
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import i18n from "@/lib/i18n/i18n";

declare module "axios" {
  interface AxiosRequestConfig {
    skipAuthRedirect?: boolean;
    skip403Redirect?: boolean;
  }
}

/** ABP sessionStorage key for current tenant (set by tenant switch). */
const ABP_TENANT_KEY = "abp_tenant_id";

/**
 * Gets the current tenant ID for multi-tenancy.
 * Used when user has switched tenant; otherwise backend resolves from token.
 */
function getTenantId(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ABP_TENANT_KEY);
}

/**
 * Sets the current tenant ID (call from tenant switch component).
 */
export function setTenantId(tenantId: string | null): void {
  if (typeof window === "undefined") return;
  if (tenantId) {
    sessionStorage.setItem(ABP_TENANT_KEY, tenantId);
  } else {
    sessionStorage.removeItem(ABP_TENANT_KEY);
  }
}

export const api = axios.create({
  baseURL: "",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

/** Extended request config for opt-out of auth/forbidden redirects. */
export interface AbpApiRequestConfig {
  /** When true, 401 will NOT trigger redirect to login. */
  skipAuthRedirect?: boolean;
  /** When true, 403 will NOT trigger redirect to /403. */
  skip403Redirect?: boolean;
}

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig & AbpApiRequestConfig) => {
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
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const config = error.config as AbpApiRequestConfig | undefined;
    const skipAuthRedirect = config?.skipAuthRedirect === true;

    if (status === 401 && !skipAuthRedirect) {
      const isTokenRequest = error.config?.url?.includes("/connect/token");
      if (!isTokenRequest) {
        await userManager.signinRedirect();
      }
      return Promise.reject(new Error("Unauthorized - redirecting to login"));
    }

    const skip403Redirect = config?.skip403Redirect === true;
    if (status === 403 && !skip403Redirect) {
      window.location.href = "/403";
      return Promise.reject(new Error("Forbidden"));
    }

    return Promise.reject(error);
  },
);
