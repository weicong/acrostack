/**
 * Route guards for auth and permission checks.
 * Use in TanStack Router beforeLoad.
 */
import { redirect } from "@tanstack/react-router";
import { queryClient } from "@/lib/queryClient";
import { userManager } from "@/lib/auth/userManager";
import { fetchAppConfig, isPolicyGranted } from "@/lib/auth/permissions";

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

    // Use ensureQueryData to avoid duplicate fetch requests.
    // Query deduplication is handled by TanStack Query.
    await queryClient.ensureQueryData({
      queryKey: ["abp-app-config"],
      queryFn: async () => {
        const user = await userManager.getUser();
        await fetchAppConfig(user?.access_token ?? null);
        return true;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
    });

    if (!isPolicyGranted(requiredPolicy)) throw redirect({ to: "/403" });
  };
}
