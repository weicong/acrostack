/**
 * Tenant management utilities.
 * ABP stores tenant ID in sessionStorage with key "abp_tenant_id".
 */

export const ABP_TENANT_KEY = "abp_tenant_id";

/**
 * Gets the current tenant ID for multi-tenancy.
 * Used when user has switched tenant; otherwise backend resolves from token.
 */
export function getTenantId(): string | null {
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
