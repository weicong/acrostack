/**
 * User & tenant impersonation utilities.
 *
 * The open-source ABP Account OpenIddict module does NOT ship the
 * /connect/impersonateuser or /connect/impersonatetenant endpoints (those
 * are commercial Pro features). Instead, the backend exposes custom API
 * endpoints at <c>POST /api/impersonation/user</c> and
 * <c>POST /api/impersonation/tenant</c> (see
 * <c>AcroStack.Controllers.ImpersonationController</c>) which issue a new
 * access token for the target user/tenant via OpenIddict's SignIn result.
 *
 * The impersonated JWT embeds <c>impersonator_token</c> /
 * <c>impersonator_userid</c> claims so the original admin session can be
 * restored via {@link backToMyAccount}.
 *
 * Flow:
 * 1. Admin clicks "Impersonate" → {@link impersonateUser} POSTs to the API.
 * 2. The backend issues a new access token and returns it as a standard
 *    OAuth2 token response JSON.
 * 3. The new token is stored via <c>userManager.storeUser</c> and the page
 *    reloads so the SPA re-initialises with the impersonated session.
 * 4. While impersonating, the JWT contains <c>impersonator_token</c> /
 *    <c>impersonator_userid</c> claims; {@link useImpersonationState}
 *    exposes them so the layout can show a "Back to my account" banner.
 * 5. {@link backToMyAccount} reads the <c>impersonator_token</c> claim and
 *    restores it as the active session.
 */
import { User } from "oidc-client-ts";
import { getApiBaseUrl } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { userManager } from "@/lib/auth/userManager";
import { useCurrentUser } from "@/lib/auth/permissions";

export interface ImpersonationState {
  isImpersonating: boolean;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  impersonatorUserName?: string;
}

/** Claim key used to embed the original admin's token in an impersonated JWT. */
const CLAIM_IMPERSONATOR_TOKEN = "impersonator_token";

interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
}

/**
 * Decodes the payload of a JWT without verifying its signature.
 * The token is trusted because it was issued by our own AuthServer.
 */
export function decodeJwtPayload(token: string): Record<string, unknown> {
  const parts = token.split(".");
  if (parts.length !== 3) return {};
  try {
    const base64Url = parts[1]!;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const json = atob(padded);
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return {};
  }
}

/**
 * React hook that derives the current impersonation state from the ABP
 * application-configuration <c>currentUser</c> section, which ABP populates
 * from the JWT's impersonator claims on the server side.
 */
export function useImpersonationState(): ImpersonationState {
  const currentUser = useCurrentUser();
  if (!currentUser) return { isImpersonating: false };

  const impersonatorUserId = currentUser.impersonatorUserId ?? undefined;
  const impersonatorTenantId = currentUser.impersonatorTenantId ?? undefined;
  if (!impersonatorUserId && !impersonatorTenantId) {
    return { isImpersonating: false };
  }
  return {
    isImpersonating: true,
    impersonatorUserId,
    impersonatorTenantId,
    impersonatorUserName: currentUser.impersonatorUserName ?? undefined,
  };
}

/**
 * Calls the backend impersonation API and stores the resulting token as the
 * active OIDC user session, then reloads the page.
 */
async function callImpersonationEndpoint(
  path: string,
  body: Record<string, unknown>,
): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user.access_token}`,
  };
  const tenantId = getTenantId();
  if (tenantId) headers.__tenant = tenantId;

  const baseUrl = getApiBaseUrl().replace(/\/$/, "");
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let detail = response.statusText;
    try {
      const errorBody = await response.text();
      if (errorBody) detail = errorBody;
    } catch {
      // ignore
    }
    throw new Error(`Impersonation failed (${response.status}): ${detail}`);
  }

  const token = (await response.json()) as TokenResponse;
  const payload = decodeJwtPayload(token.access_token);
  const expiresAt =
    typeof payload.exp === "number"
      ? payload.exp * 1000
      : token.expires_in
        ? Date.now() + token.expires_in * 1000
        : undefined;

  const impersonatedUser = new User({
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    token_type: token.token_type ?? "Bearer",
    scope: token.scope ?? user.scope,
    profile: payload as User["profile"],
    expires_at: expiresAt,
  });

  await userManager.storeUser(impersonatedUser);
  // Full reload so OIDC state, app config and tenant context are reinitialized.
  window.location.replace("/");
}

/**
 * Impersonates the specified user by calling the backend API endpoint.
 * The caller must hold the <c>AbpIdentity.Users.Impersonation</c> permission.
 */
export async function impersonateUser(userId: string): Promise<void> {
  await callImpersonationEndpoint("/api/impersonation/user", { userId });
}

/**
 * Impersonates the admin user of the specified tenant.
 * Host admins only — the backend rejects tenant impersonation for tenant users.
 */
export async function impersonateTenant(tenantId: string): Promise<void> {
  await callImpersonationEndpoint("/api/impersonation/tenant", { tenantId });
}

/**
 * Reads <c>impersonator_token</c> from the current session's JWT and restores
 * it as the active user, effectively exiting impersonation. Throws if not
 * currently impersonating or the impersonator token is missing.
 */
export async function backToMyAccount(): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  const payload = decodeJwtPayload(user.access_token);
  const impersonatorToken = payload[CLAIM_IMPERSONATOR_TOKEN] as string | undefined;
  if (!impersonatorToken) {
    throw new Error("Not currently impersonating");
  }

  const restoredPayload = decodeJwtPayload(impersonatorToken);
  const expiresAt =
    typeof restoredPayload.exp === "number" ? restoredPayload.exp * 1000 : undefined;

  const restoredUser = new User({
    access_token: impersonatorToken,
    token_type: "Bearer",
    profile: restoredPayload as User["profile"],
    expires_at: expiresAt,
    scope: user.scope,
  });

  await userManager.storeUser(restoredUser);
  // Full reload so OIDC state, app config and tenant context are reinitialized.
  window.location.replace("/");
}
