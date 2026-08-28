/**
 * Runtime environment configuration.
 * Fetches dynamic-env.json at startup (used in production/Helm) and falls back
 * to env.ts when fetch fails (e.g. local dev). Matches Angular's getEnvConfig pattern.
 */
import { env, DEFAULT_APP_BASE_URL } from "@/env";

export interface DynamicEnv {
  production?: string;
  application?: {
    baseUrl?: string;
    /** 部署级应用名 = 品牌 UI 名的最终来源（见 getApplicationName），部署时按环境注入 */
    name?: string;
    logoUrl?: string;
  };
  oAuthConfig?: {
    issuer?: string;
    redirectUri?: string;
    requireHttps?: string;
    clientId?: string;
    responseType?: string;
    scope?: string;
    strictDiscoveryDocumentValidation?: boolean;
    skipIssuerCheck?: boolean;
  };
  apis?: {
    default?: {
      url?: string;
      rootNamespace?: string;
    };
  };
}

let loadedConfig: DynamicEnv | null = null;

/**
 * Fetches /dynamic-env.json (or /getEnvConfig) and caches the result.
 * Tries dynamic-env.json first (served from public/) since HttpApi.Host has no getEnvConfig.
 * Falls back to env.ts values when fetch fails (local dev).
 */
export async function loadRuntimeConfig(): Promise<DynamicEnv> {
  if (loadedConfig) return loadedConfig;

  const urlsToTry = ["/dynamic-env.json", "/getEnvConfig"];
  for (const url of urlsToTry) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as DynamicEnv;
        loadedConfig = data;
        return data;
      }
    } catch {
      continue;
    }
  }

  loadedConfig = {};
  return loadedConfig;
}

/**
 * Gets the API base URL for HTTP requests.
 * Uses apis.default.url from dynamic-env when loaded; otherwise env.apiUrl.
 */
export function getApiUrl(): string {
  // env.apiUrl 内部已处理 VITE_API_URL 与默认值（DEFAULT_API_BASE_URL），此处直接复用
  return loadedConfig?.apis?.default?.url ?? env.apiUrl;
}

/**
 * Gets the axios baseURL (path or full URL + /api).
 * - When we have a full backend URL (from env or dynamic-env), use it directly.
 *   This bypasses the Vite proxy and sends requests straight to the backend (CORS permitted).
 * - Otherwise use relative '/api' for Vite proxy (dev) or same-origin production.
 */
function stripTrailingSlash(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function isAbsoluteHttpUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function getApiBaseUrl(): string {
  const apiUrl = getApiUrl();
  const openBrace = "\u007b";
  const isFullUrl = isAbsoluteHttpUrl(apiUrl) && !apiUrl.includes(openBrace + openBrace);
  if (isFullUrl) {
    return stripTrailingSlash(apiUrl);
  }
  if (import.meta.env.DEV) {
    return "/api";
  }
  if (apiUrl.startsWith("/")) {
    return apiUrl;
  }
  return stripTrailingSlash(apiUrl) + "/api";
}

export function getBackendOrigin(): string {
  const apiUrl = getApiUrl();
  const openBrace = "\u007b";
  const hasTemplatePlaceholder = apiUrl.includes(openBrace + openBrace);

  if (isAbsoluteHttpUrl(apiUrl) && !hasTemplatePlaceholder) {
    try {
      return new URL(apiUrl).origin;
    } catch {
      // Fall through to same-origin fallback.
    }
  }

  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "";
}

export function getBackendAccountUrl(subPath: string): string {
  const origin = getBackendOrigin();
  return stripTrailingSlash(origin) + "/admin-console" + subPath;
}

/** 与 index.html <title> 保持一致的兜底应用名 */
const FALLBACK_APP_NAME = "AcroStack";

/**
 * 应用名称（同步）。品牌 UI 名直接取 dynamic-env.json 的 application.name
 * （nginx 部署时按环境注入），缺失时回退 FALLBACK_APP_NAME。
 * bootstrap 在首次渲染前已 await loadRuntimeConfig()，组件内可安全同步调用。
 */
export function getApplicationName(): string {
  return loadedConfig?.application?.name?.trim() || FALLBACK_APP_NAME;
}

/**
 * OAuth config for UserManager. Uses dynamic-env when loaded; otherwise env.ts.
 */
export function getOAuthConfig(): {
  issuer: string;
  redirectUri: string;
  clientId: string;
  scope: string;
  responseType: "code";
} {
  const baseUrl =
    loadedConfig?.application?.baseUrl ??
    (typeof window !== "undefined" ? window.location.origin : DEFAULT_APP_BASE_URL);

  const issuer = loadedConfig?.oAuthConfig?.issuer ?? env.oauth.issuer;

  return {
    issuer: issuer.endsWith("/") ? issuer : issuer + "/",
    redirectUri:
      loadedConfig?.oAuthConfig?.redirectUri ??
      ((import.meta.env.VITE_APP_URL as string | undefined) || baseUrl),
    clientId: loadedConfig?.oAuthConfig?.clientId ?? env.oauth.clientId,
    scope: loadedConfig?.oAuthConfig?.scope ?? env.oauth.scope,
    responseType: "code",
  };
}

export function isConfigLoaded(): boolean {
  return loadedConfig !== null;
}
