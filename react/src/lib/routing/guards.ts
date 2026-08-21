/**
 * Route guards for auth and permission checks.
 * Use in TanStack Router beforeLoad.
 */
import { redirect } from "@tanstack/react-router";
import { queryClient } from "@/lib/queryClient";
import { userManager } from "@/lib/auth/userManager";
import { ensureAppConfig, isPolicyGranted } from "@/lib/auth/permissions";

export interface GuardContext {
  location: { href: string };
}

/**
 * Redirects unauthenticated users to OAuth login.
 * Call from protected route's beforeLoad.
 */
export async function authGuard({ location }: GuardContext) {
  const user = await userManager.getUser();
  if (!user || user.expired) {
    await userManager.signinRedirect({
      state: { returnUrl: location.href },
    });
    throw new Error("Redirecting to login");
  }
}

/**
 * Factory for permission guard. Use for routes with requiredPolicy.
 * Runs authGuard first, then checks policy.
 */
export function createPermissionGuard(requiredPolicy: string) {
  return async (context: GuardContext) => {
    await authGuard(context);

    // Load app config once per tenant via TanStack Query (deduplicated + cached).
    await ensureAppConfig(queryClient);

    if (!isPolicyGranted(requiredPolicy)) throw redirect({ to: "/admin/403" });
  };
}
