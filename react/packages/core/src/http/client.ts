/**
 * ABP 语义的 HTTP 装配（对标 ABP React 官方 HTTP Requests 文档）。
 *
 * 拦截器全部注册在宿主注入的**原生 axios 实例**上（`@acrostack/api-client/client` 的 `transport`）：
 * - 请求：请求时解析 baseURL、注入 Bearer token（过期即静默续期）、`__tenant`、`Accept-Language`，
 *   并对 GET 显式禁用 HTTP 缓存；
 * - 响应：401 → 刷新 token 并**重放一次**；403 → 非变更请求跳 forbiddenPath，变更请求原样拒绝，
 *   交由 TanStack Query / 调用方处理。
 *
 * 逃逸开关（请求级，见下方 axios 模块扩展）：`skipAuthRedirect`、`skip403Redirect`。
 * core 不 import `@acrostack/api-client`：共享实例由宿主注入（依赖倒置，便于单测与替换）。
 */
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ensureAccessToken, userManager } from "../auth/user-manager";
import { getApiBaseUrl } from "../config/runtime-config";
import { getCoreOptions } from "../options";
import { tenantHeaders } from "../tenant/tenant";

declare module "axios" {
  export interface AxiosRequestConfig {
    /** 401 时不刷新 token、不跳登录，原错误直接交给调用方。 */
    skipAuthRedirect?: boolean;
    /** 403 时不跳转 forbiddenPath，原错误直接交给调用方（变更请求默认如此）。 */
    skip403Redirect?: boolean;
    /** 内部标记：已因 401 重放过一次，避免无限重试。 */
    __abpRetried?: boolean;
  }
}

/**
 * 请求拦截器：补齐 ABP 需要的 baseURL 与请求头。
 * 每次请求都重新解析 baseURL 与 token，因此配置热更新、续期后的新 token 立即生效。
 */
export async function applyAbpRequestConfig(
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> {
  config.baseURL = getApiBaseUrl();

  const accessToken = await ensureAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  // 多租户：已选租户必须以 __tenant 下发（调用方显式设置的优先）
  for (const [name, value] of Object.entries(tenantHeaders())) {
    if (!config.headers.has(name)) {
      config.headers.set(name, value);
    }
  }

  const { defaultCulture } = getCoreOptions();
  if (defaultCulture) {
    config.headers["Accept-Language"] = config.headers["Accept-Language"] ?? defaultCulture;
  }

  // GET 显式禁用 HTTP 缓存：浏览器启发式缓存会返回过期响应，
  // 使界面状态"卡"在上一刻；读取必须拿到最新数据。
  if ((config.method ?? "get").toLowerCase() === "get") {
    config.headers["Cache-Control"] = "no-cache";
    config.headers.Pragma = "no-cache";
  }

  return config;
}

/**
 * 401 时静默续期并用新 token 重放一次。
 *
 * 必须注册在原生 axios 响应链上：Kubb 的 error 通道调用完处理器后总是以原错误拒绝，
 * 无法把重放成功的响应交回调用方。
 */
async function retryAfterRefresh(transport: AxiosInstance, error: unknown): Promise<AxiosResponse> {
  const axiosError = error as AxiosError;
  const config = axiosError.config;

  if (!config || config.__abpRetried || axiosError.response?.status !== 401) throw error;
  if (config.skipAuthRedirect || isTokenRequest(config)) throw error;

  const previousAuthorization = config.headers?.Authorization;
  const accessToken = await ensureAccessToken({ force: true });
  // 无法续期，或续期后 token 未变（refresh token 已失效）→ 交给错误处理：跳登录
  if (!accessToken || String(previousAuthorization) === `Bearer ${accessToken}`) throw error;

  config.__abpRetried = true;
  return transport.request(config);
}

/**
 * 响应错误拦截器：实现 ABP 的 401/403 语义，始终以错误拒绝。
 */
export async function handleAbpResponseError(error: unknown): Promise<never> {
  const axiosError = error as AxiosError;
  const status = axiosError.response?.status;
  const config = axiosError.config;

  if (status === 401 && !config?.skipAuthRedirect) {
    if (!isTokenRequest(config)) {
      // 保留当前位置，登录后回到原页面
      await userManager.signinRedirect({ state: { returnUrl: window.location.href } });
    }
    return Promise.reject(new Error("Unauthorized - redirecting to login"));
  }

  if (status === 403 && !config?.skip403Redirect && !isMutatingRequest(config?.method)) {
    redirectToForbidden();
    return Promise.reject(new Error("Forbidden"));
  }

  return Promise.reject(error);
}

/** 变更类请求（非 GET/HEAD/OPTIONS）：403 时不跳转，交给调用方处理。 */
export function isMutatingRequest(method?: string): boolean {
  const normalized = (method ?? "get").toLowerCase();
  return normalized !== "get" && normalized !== "head" && normalized !== "options";
}

function isTokenRequest(config?: { url?: string }): boolean {
  return config?.url?.includes("/connect/token") ?? false;
}

function redirectToForbidden(): void {
  const { forbiddenPath = "/403", onForbidden } = getCoreOptions();
  if (onForbidden) {
    onForbidden(forbiddenPath);
    return;
  }
  if (typeof window !== "undefined") {
    window.location.assign(forbiddenPath);
  }
}

/**
 * 装配 ABP 所需的全部 HTTP 行为；在应用 bootstrap 中调用一次（首次请求之前）。
 *
 * @param transport 全应用共享的底层 axios 实例（`@acrostack/api-client/client` 的 `transport`）。
 */
export function setupHttpClient(transport: AxiosInstance): void {
  transport.interceptors.request.use(applyAbpRequestConfig);

  // 响应链按注册顺序执行：先"刷新 + 重放"（成功即恢复，错误通道看不到这次 401），
  // 再由错误处理决定跳登录 / 跳 403 / 原样拒绝。
  transport.interceptors.response.use(undefined, (error: unknown) =>
    retryAfterRefresh(transport, error),
  );
  transport.interceptors.response.use(undefined, handleAbpResponseError);
}
