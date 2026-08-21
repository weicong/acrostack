/**
 * ABP application configuration client.
 * Provides permissions, config fetching, localization, and reactive hooks.
 */
import { createAbpReactAppConfig } from "@volo/abp-react-app-config";
import type { QueryClient } from "@tanstack/react-query";
import { getApiUrl } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { userManager } from "@/lib/auth/userManager";

function evaluatePolicy(policies: Record<string, boolean>, policy: string): boolean {
  const hasPolicy = (p: string) => policies[p.trim()] === true;
  if (policy.includes("||")) {
    return policy.split("||").some((p) => hasPolicy(p));
  }
  if (policy.includes("&&")) {
    return policy.split("&&").every((p) => hasPolicy(p));
  }
  return hasPolicy(policy);
}

export const appConfig = createAbpReactAppConfig({
  baseUrl: () => getApiUrl(),
  includeLocalizationResources: false,
});

export async function fetchAppConfig(token: string | null): Promise<void> {
  const headers: Record<string, string> = {};
  const tenantId = getTenantId();
  if (tenantId) headers.__tenant = tenantId;
  await appConfig.fetchConfig(token, { headers });
}

/**
 * Query key for the ABP application configuration.
 * Includes the current tenant so switching tenants refetches permissions.
 */
export function appConfigQueryKey(): readonly unknown[] {
  return ["abp-app-config", getTenantId() ?? "host"];
}

/**
 * Single entry point for loading app config through TanStack Query.
 * Deduplicates concurrent calls and caches per tenant. Used by guards
 * (beforeLoad) and AuthContext (on user load) so there is one code path.
 */
export async function ensureAppConfig(queryClient: QueryClient): Promise<void> {
  await queryClient.ensureQueryData({
    queryKey: appConfigQueryKey(),
    queryFn: async () => {
      const user = await userManager.getUser();
      await fetchAppConfig(user?.access_token ?? null);
      return true;
    },
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Invalidates cached app config (e.g. after switching tenant or refreshing
 * dynamic claims) so the next guard/navigation refetches permissions.
 */
export function invalidateAppConfig(queryClient: QueryClient): void {
  void queryClient.invalidateQueries({ queryKey: ["abp-app-config"] });
}

/** For non-React guard usage. Supports compound policies (|| and &&). */
export function isPolicyGranted(policy: string): boolean {
  const sections = appConfig.getSections() as {
    auth?: {
      grantedPolicies?: Record<string, boolean>;
      policies?: Record<string, boolean>;
    };
  };
  const policies = sections.auth?.grantedPolicies ?? sections.auth?.policies ?? {};
  return evaluatePolicy(policies, policy);
}

export function usePermissions() {
  return appConfig.usePolicies();
}

interface CurrentUser {
  id?: string;
  userName?: string;
  name?: string;
  email?: string;
  tenantId?: string | null;
  impersonatorUserId?: string | null;
  impersonatorTenantId?: string | null;
  impersonatorUserName?: string | null;
  impersonatorTenantName?: string | null;
}

interface AppConfigSnapshot {
  sections?: {
    currentUser?: CurrentUser;
  };
}

export function useCurrentUser(): CurrentUser | null {
  const snapshot = appConfig.useSnapshot() as AppConfigSnapshot | null;
  return snapshot?.sections?.currentUser ?? null;
}
