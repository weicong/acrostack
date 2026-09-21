/**
 * ABP 多租户上下文。
 *
 * 约定（见 ABP React 权限管理文档的 Multi-Tenancy 一节）：当前租户 ID 存
 * `sessionStorage["abp_tenant_id"]`，所有请求与 application-configuration 拉取
 * 都通过 `__tenant` 请求头带给后端；租户变化后当前用户与 grantedPolicies 随之变化，
 * 必须让缓存的 application configuration 失效并重新拉取。
 */
import { APP_CONFIG_QUERY_KEY } from "../query/query-keys";
import { queryClient } from "../query/query-client";

/** 当前租户 ID 在 sessionStorage 中的键（ABP 约定）。 */
export const TENANT_STORAGE_KEY = "abp_tenant_id";

const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

/** 供 React 侧订阅租户变化（`useSyncExternalStore`）。 */
export function subscribeTenant(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function read(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(TENANT_STORAGE_KEY);
  } catch {
    // 隐私模式等 sessionStorage 不可用的场景：视为无租户
    return null;
  }
}

/** 当前租户 ID（无租户/不可用时为 null）。 */
export function getTenantId(): string | null {
  return read();
}

/**
 * 切换当前租户（宿主租户切换器调用）。传 null 表示回到宿主（无租户）。
 * 切换后立即失效 application configuration 缓存，使权限与当前用户重新拉取。
 */
export function setTenantId(tenantId: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (tenantId) window.sessionStorage.setItem(TENANT_STORAGE_KEY, tenantId);
    else window.sessionStorage.removeItem(TENANT_STORAGE_KEY);
  } catch {
    // 忽略存储不可用
  }

  emit();
  void queryClient.invalidateQueries({ queryKey: APP_CONFIG_QUERY_KEY });
}

/**
 * 当前租户对应的请求头（无租户时为空对象）。
 * 供请求拦截器与 application-configuration 拉取使用。
 */
export function tenantHeaders(): Record<string, string> {
  const tenantId = getTenantId();
  return tenantId ? { __tenant: tenantId } : {};
}
