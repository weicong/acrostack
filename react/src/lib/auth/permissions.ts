/**
 * ABP application configuration client.
 * Provides permissions, config fetching, localization, and reactive hooks.
 */
import { createAbpReactAppConfig } from "@volo/abp-react-app-config";
import { getApiUrl } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";

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

export async function fetchAppLocalization(culture: string, token: string | null) {
  const headers: Record<string, string> = {};
  const tenantId = getTenantId();
  if (tenantId) headers.__tenant = tenantId;
  return appConfig.fetchLocalization(culture, token, { headers });
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
