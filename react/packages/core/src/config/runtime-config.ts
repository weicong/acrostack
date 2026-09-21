/**
 * 运行时环境配置（对标 ABP Angular 模板的 `getEnvConfig`）。
 *
 * 启动时优先拉取部署注入的 `dynamic-env.json`（nginx/Helm 按环境注入），
 * 全部候选地址失败时回退到宿主 `env`（本地开发）。解析优先级：
 * `dynamic-env.json → 宿主 env`。
 * 宿主差异（env 值、开发标记、文件名）来自 {@link getCoreOptions}。
 */
import { getCoreOptions, type CoreEnv } from "../options";

/** `dynamic-env.json` 的结构（ABP 部署约定）。 */
export interface DynamicEnv {
  production?: string;
  application?: {
    baseUrl?: string;
    /** 部署级应用名 = 界面品牌名的最终来源（见 getApplicationName） */
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

export interface OAuthConfig {
  issuer: string;
  clientId: string;
  redirectUri: string;
  scope: string;
  responseType: "code";
}

const DEFAULT_DYNAMIC_ENV_URLS = ["/dynamic-env.json", "/getEnvConfig"];

/** Admin Console 在后端 origin 上的固定挂载路径（ABP 约定）。 */
const ADMIN_CONSOLE_PATH = "/admin-console";

let loadedConfig: DynamicEnv | null = null;

function hostEnv(): CoreEnv {
  return getCoreOptions().env;
}

/**
 * 拉取并缓存运行时配置；所有候选地址都失败时缓存空对象（随后全部回退到宿主 env）。
 */
export async function loadRuntimeConfig(): Promise<DynamicEnv> {
  if (loadedConfig) return loadedConfig;

  const { dynamicEnvUrls = DEFAULT_DYNAMIC_ENV_URLS } = getCoreOptions();
  for (const url of dynamicEnvUrls) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        loadedConfig = (await res.json()) as DynamicEnv;
        return loadedConfig;
      }
    } catch {
      continue;
    }
  }

  loadedConfig = {};
  return loadedConfig;
}

/** 后端 API 根地址（application-configuration 等非 axios 调用也用它）。 */
export function getApiUrl(): string {
  return loadedConfig?.apis?.default?.url ?? hostEnv().apiUrl;
}

function stripTrailingSlash(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function isAbsoluteHttpUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * axios 的 baseURL（路径或完整 URL）：
 * - 拿到完整后端地址时直接使用（绕过 dev server 代理，后端需允许 CORS）；
 * - 否则开发环境用相对 `/api` 走 Vite 代理，生产环境用同源路径。
 */
export function getApiBaseUrl(): string {
  const apiUrl = getApiUrl();
  const openBrace = "\u007b";
  const isFullUrl = isAbsoluteHttpUrl(apiUrl) && !apiUrl.includes(openBrace + openBrace);
  if (isFullUrl) {
    return stripTrailingSlash(apiUrl);
  }
  if (getCoreOptions().development) {
    return "/api";
  }
  if (apiUrl.startsWith("/")) {
    return apiUrl;
  }
  return stripTrailingSlash(apiUrl) + "/api";
}

/** 后端 origin（用于直连后端而非经 API 前缀的场景）。 */
export function getBackendOrigin(): string {
  const apiUrl = getApiUrl();
  const openBrace = "\u007b";
  const hasTemplatePlaceholder = apiUrl.includes(openBrace + openBrace);

  if (isAbsoluteHttpUrl(apiUrl) && !hasTemplatePlaceholder) {
    try {
      return new URL(apiUrl).origin;
    } catch {
      // 落回同源兜底
    }
  }

  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "";
}

/** Admin Console 的页面地址（例如 `/admin-console/identity/users`）。 */
export function getBackendAccountUrl(subPath: string): string {
  return stripTrailingSlash(getBackendOrigin()) + ADMIN_CONSOLE_PATH + subPath;
}

/** 应用名（同步）。品牌名取部署配置的 `application.name`，缺失时用宿主兜底值。 */
export function getApplicationName(): string {
  return loadedConfig?.application?.name?.trim() || getCoreOptions().appNameFallback || "App";
}

/** OIDC 配置：`dynamic-env.json` 优先，其次宿主 env（issuer 统一补尾斜杠）。 */
export function getOAuthConfig(): OAuthConfig {
  const env = hostEnv();
  const issuer = loadedConfig?.oAuthConfig?.issuer ?? env.oauth.issuer;

  return {
    issuer: issuer.endsWith("/") ? issuer : issuer + "/",
    redirectUri:
      loadedConfig?.oAuthConfig?.redirectUri ??
      loadedConfig?.application?.baseUrl ??
      env.oauth.redirectUri,
    clientId: loadedConfig?.oAuthConfig?.clientId ?? env.oauth.clientId,
    scope: loadedConfig?.oAuthConfig?.scope ?? env.oauth.scope,
    responseType: "code",
  };
}
