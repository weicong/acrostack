/**
 * Tenant management utilities.
 * ABP stores tenant ID in localStorage with key "abp_tenant_id".
 * 使用 localStorage 而非 sessionStorage，使新标签页保留所选租户，
 * 与 OIDC token / 主题 / 侧栏折叠等持久化状态保持一致。
 */

export const ABP_TENANT_KEY = "abp_tenant_id";

/**
 * Gets the current tenant ID for multi-tenancy.
 * Used when user has switched tenant; otherwise backend resolves from token.
 */
export function getTenantId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ABP_TENANT_KEY);
}

/**
 * Sets the current tenant ID (call from tenant switch component).
 */
export function setTenantId(tenantId: string | null): void {
  if (typeof window === "undefined") return;
  if (tenantId) {
    localStorage.setItem(ABP_TENANT_KEY, tenantId);
  } else {
    localStorage.removeItem(ABP_TENANT_KEY);
  }
}
